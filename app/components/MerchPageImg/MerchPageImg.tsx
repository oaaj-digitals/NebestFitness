'use client';

import { Merch } from "@/app/utilis/merch";
import styles from "./MerchPageImg.module.css";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props extends Merch { }

const handlePreviewOpen = (state: boolean) => {

};

const MerchPageImg = ({ displayimg, imgs, title }: Props) => {

  const [showcaseImgs, setShowcaseImg] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  const imgsArray = [displayimg, ...imgs!];

  return (
    <>
      <div className={styles.showcaseImgDiv} onClick={() => setPreviewOpen(true)}>
        <Image src={imgsArray[showcaseImgs]} alt={`NebestFitness ${title}`} className={styles.showcaseImg} />
      </div>

      <div className={styles.imgIcons}>
        {
          imgs &&
          imgsArray.map(
            (img, index) => (
              <div
                key={index}
                className={`${styles.ImgIconDiv} ${showcaseImgs === index ? styles.active : null}`}
                onClick={() => setShowcaseImg(index)}
              >
                <Image src={img} alt={'0'} className={styles.imgIcon} />
              </div>
            )
          )
        }

      </div>

      {
        previewOpen &&
        <div className={styles.preview} >
          <div className={styles.previewBg} onClick={() => setPreviewOpen(false)}></div>

          <div className={styles.imgContainer} onClick={() => setPreviewOpen(false)}>
            <FontAwesomeIcon
              icon={faXmark}
              size="xl"
              className={styles.closeBtn}
            />
            <Image className={styles.previewImg} src={imgsArray[showcaseImgs]} alt={`NebestFitness ${title}`} />
          </div>
        </div>
      }
    </>
  );
};

export default MerchPageImg;