import Image from "next/image";
import styles from "./MerchPage.module.css";
import Btn from '../Btn/Btn';
import { Merch } from "@/app/utilis/merch";
import Link from "next/link";



export interface Related {
  img: Merch['displayimg'];
  link: string;
}

interface Props {
  merch: Merch;
  related?: Related[] | null;
}

const MerchPageContent = ({ merch: {
  displayimg,
  imgs,
  price,
  title,
  description,
  availableSizes,
}, related }: Props) => {

  return (
    <main className={styles.main}>
      <section className={styles.imgSect}>
        <div className={styles.showcaseImgDiv}>
          <Image src={displayimg} alt={`NebestFitness ${title}`} className={styles.showcaseImg} />
        </div>

        <div className={styles.imgIcons}>

          {imgs &&
            <div className={`${styles.ImgIconDiv} ${styles.active}`}>
              <Image src={displayimg} alt={'0'} className={styles.imgIcon} />
            </div>
          }

          {
            imgs &&
            imgs.map(
              (img, index) => (
                <div key={index} className={styles.ImgIconDiv}>
                  <Image src={img} alt={'0'} className={styles.imgIcon} />
                </div>
              )
            )
          }

        </div>

      </section>

      <section className={styles.detailSect}>
        <div className={styles.titleDesc}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.desc}>{description}</p>
        </div>

        <div className={styles.priceBox}>
          <p className={styles.price}> £
            {price.toFixed(2)}
          </p>
          <p className={styles.caption}>without shipping</p>
        </div>

        {
          availableSizes &&
          <div className={styles.sizes}>
            {
              availableSizes.map(
                (size, index) =>
                  <p className={styles.size} key={index}>
                    {size}
                  </p>
              )
            }
          </div>
        }

        <Btn link="https://wa.me/447501080466">
          Place Your Order Here
        </Btn>
      </section>

      <section className={styles.others}>
        {
          related &&
          (
            <>
              <div className={styles.products}>
                <h2 className={styles.title}>Other Merchs</h2>

                <div className={styles.preview}>
                  {related.map((item, index) =>
                  (<Link key={index} className={styles.product} href={item.link}>
                    <Image src={item.img} className={styles.productImg} alt={""} />
                  </Link>)
                  )}
                </div>

              </div>
              <hr className={styles.ticketLine} />
            </>
          )
        }

        <div className={styles.howTo}>
          <h2 className={styles.title}>How to Place Your Orders</h2>

          <p className={styles.desc}>Browse our collection and take your time exploring our wide range of products.  Once you&apos;ve found something you love, simply click the &quot;Place Your Order&quot; button. This will open a chat with us on WhatsApp, or you can email us directly at <Link href={"mailto:NebestFitness@gmail.com"} >NebestFitness@gmail.com</Link>.  Let us know which items you&apos;d like to order, and we&apos;re happy to answer any questions you may have. We&apos;ll then confirm your order and provide you with payment details.  Finally, once payment is received, we&apos;ll arrange for delivery or pickup, whichever you prefer.</p>
        </div>
      </section>
    </main>
  );
};

export default MerchPageContent;