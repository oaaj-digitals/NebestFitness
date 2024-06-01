import prisma from "@/prisma/client";

interface APIResponse {
  access_token:string,
  token_type:string,
  expires_in:number,
}

interface DbSchema extends APIResponse {
  modified_at?:number,
}

const renewable =(modified_at:any,expires_in:number) =>{
  console.log('Renew Triggered');
  const today = new Date()
  const todayInNum = today.getTime()
  let isValid = false; 

  const renew_time = expires_in + parseInt(modified_at) - 604800000
   
  if (renew_time <= todayInNum) isValid = true;
  
  return isValid;
}

const storeNewToken = async (data:APIResponse) => {
  console.log('Store Triggered');
  const today = new Date();
  const todayInNum = today.getTime()

  const updateToken = await prisma.accessToken.update({
    where:{ id : 1, },
    data:{
      accesstoken: data.access_token,
      expires_in: data.expires_in,
      token_type: data.token_type,
      modified_at: todayInNum,
    }
  })

  if (!updateToken) return false;

  return true;
}

const refreshToken = async ( access_token : string ) => {
  console.log('Refresh Triggered');
  const res = await fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&&access_token=${access_token}`)

  if(!res.ok) return null

  return await res.json()
}

const getAccessToken = async () => {
  console.log('GetToken Triggered');
  const db_data = await prisma.accessToken.findUnique({
    where:{ id:1 }
  })
  if (!db_data) return null;

  const isValid = renewable(db_data.modified_at, db_data.expires_in);

  if(!isValid) return db_data.accesstoken

  const new_data : APIResponse = await refreshToken(db_data.accesstoken);
  if (!new_data) return null;
    
  const stored = storeNewToken(new_data);
  if(!stored) return null;

  return new_data.access_token;
}

export default getAccessToken;