import prisma from "@/prisma/client";

interface APIResponse {
  access_token:string,
  token_type:string,
  expires_in:number,
}

interface DbSchema extends APIResponse {
  modified_at?:number,
}

const checkValidity =(expires_in:number) =>{
  
  const today = new Date()
  const todayInNum = today.getTime()
  let isValid = false; 

  const renew_time = expires_in - 604800000
  

  if (renew_time > todayInNum ) isValid = true;
  return isValid;
}

const storeNewToken = async (data:APIResponse) => {

  const expire_date = ((data.expires_in * 1000) + Date.now());

  const updateToken = await prisma.accessToken.update({
    where:{ id : 1, },
    data:{
      accesstoken: data.access_token,
      expires_in: new Date(expire_date),
      token_type: data.token_type,
      modified_at: new Date(Date.now()),
    }
  })

  if (!updateToken) return false;

  return true;
}

const refreshToken = async ( access_token : string ) => {
  
  const res = await fetch(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&&access_token=${access_token}`)

  if(!res.ok) return null;

  return await res.json();
}

const getAccessToken = async () => {
  
  const db_data = await prisma.accessToken.findUnique({
    where:{ id:1 }
  })
  if (!db_data) return null;

  const isValid = checkValidity(db_data.expires_in.getTime());
  if(isValid) return db_data.accesstoken

  const new_data : APIResponse = await refreshToken(db_data.accesstoken);
  if (!new_data) return null;
    
  const stored = await storeNewToken(new_data);
  if(!stored) return null;

  return new_data.access_token;
}

export default getAccessToken;
