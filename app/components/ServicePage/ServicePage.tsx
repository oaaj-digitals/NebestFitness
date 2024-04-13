import { Service } from "@/app/utilis/services";
import styles from "./ServicePage.module.css";
import Image from "next/image";
import PackagesCard from "../PackagesCard/PackagesCard";
import ServiceMedia from "../ServiceMedia/ServiceMedia";
import Btn from "../Btn/Btn";


interface Props {
  service: Service;
}

const ServicePageContent = ({
  service: { title, image, description, media, packages, iframe }
}: Props) => {
  return (
    <>
      <section className={styles.heroSection}>
        <Image src={image} alt={title} className={styles.heroSectionImg} />
        <h1 className={`${styles.heading} secondary-heading`}>{title}</h1>
      </section>

      <section className={styles.description}>
        {
          Array.isArray(description) ?
            (description.map(item => <p key={`${description.indexOf(item)}`} dangerouslySetInnerHTML={{ __html: item }}></p>)) :
            <p>{description}</p>
        }
      </section>

      <section className={styles.mediaBox}>
        {media && media.map(
          medium => (
            <ServiceMedia
              src={medium["src"]}
              type={medium["type"]}
              thumbnail={medium["thumbnail"]}
              id={media.indexOf(medium)}
              key={media.indexOf(medium)}
              title={title} />
          )
        )}
      </section>

      {
        packages &&
        <section className={styles.packages}>
          <div className='titleBox left'>
            <div>
              <h3 className='secondary-heading'>{title} Packages</h3>
              <div className="underline"></div>
            </div>
          </div>
          {
            packages &&
            packages.map(card =>
            (
              <PackagesCard
                key={`${packages.indexOf(card)}`}
                title={card["title"]}
                benefits={card["benefits"]}
                amount={card["amount"]} />
            )
            )
          }
        </section>
      }

      {
        packages &&
        <section className={styles.pmtBtn}>
          <Btn link="/payment" blank>Pay Now</Btn>
        </section>
      }

      {
        iframe &&
        <section className={styles.iframeBox}>
          <div className='titleBox left'>
            <div>
              <h3 className='secondary-heading'>Consultation Form</h3>
              <div className="underline"></div>
            </div>
          </div>
          <iframe
            src={iframe}
            className={styles.iframe}
            allowFullScreen />
        </section>
      }

    </>
  );
};

export default ServicePageContent; 