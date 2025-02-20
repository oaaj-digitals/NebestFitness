import merchs, { Merch } from "@/app/utilis/merch";
import MerchPageContent, { Related } from "@/app/components/Merchpage/MerchPage";

interface Props {
  params: { title: string; };
}

export async function generateStaticParams() {

  const merchsTitle = merchs.map((merch) => merch["title"]!.toLowerCase().replace(/\s/g, "_"));

  return merchsTitle.map((title) => ({ title: title }));
}

const generateRelated = (currIndex: number, all: Merch[]) => {

  const merchs = all.filter(item => item.title !== all[currIndex].title);

  let related: Related[] = [];
  let randomNumber: number | undefined = undefined;


  if (merchs.length > 0) {
    for (let i = 1; i <= 2; i++) {
      const rand = Math.random();

      let newNumber = Math.floor(rand * merchs.length);


      while (randomNumber === newNumber) {
        newNumber = Math.floor(Math.random() * merchs.length);
      }

      const merchImg = merchs[newNumber].displayimg;
      const merchtitle = merchs[newNumber].title!;
      const merchLink = merchtitle.toLowerCase().replace(/\s/g, "_");

      related = [...related, { link: merchLink, img: merchImg }];

      randomNumber = newNumber;

    }

    return related;
  } else {
    return null;
  }

};

const MerchDetailPage = ({ params: { title } }: Props) => {
  const allMerchs: Merch[] = merchs;

  return (

    merchs.map(
      (merch, index) => (
        merch.title!.toLocaleLowerCase().replace(/\s/g, "_") ==
          title ?
          <MerchPageContent key={index} merch={merch} related={generateRelated((index), allMerchs)} /> : null
      )
    )
  );
};

export default MerchDetailPage;