import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Btn from '../../Btn/Btn';
import styles from "./Feeds.module.css";
import FeedCard from '../../FeedCard/FeedCard';

export interface Feed {
  id: string;
  permalink: string;
  media_url: string;
  thumbnail_url: string;
  caption: string;
}

const Feeds = async () => {
  const accessToken = process.env.VITE_USER_ACCESS_TOKEN;
  const apiVersion = "v18.0";
  const baseUrl = `https://graph.instagram.com/${apiVersion}`;


  const res = await fetch(`${baseUrl}/me/media?fields=id,permalink,media_url,thumbnail_url,caption&access_token=${accessToken}`, { cache: 'no-store' });
  const fetchData = await res.json();

  const feeds: Feed[] = fetchData["data"];
  const latestMedia = [0, 1, 2, 3];


  return (
    <section id="feeds" className={styles.section}>

      <div className='titleBox left'>
        <div>
          <h3 className='secondary-heading'>Follow Our Story</h3>
          <div className="underline"></div>
        </div>
      </div>

      <div className={styles.introText}>
        Dive in with us for the latest fitness tips, nutrition
        advice, success stories, and exclusive behind-the scenes
        content. Stay connected with NebestFitness and be part of a
        thriving community committed to wellness.
      </div>

      <div className={styles.feedsContainer}>
        {latestMedia.map((media) =>
        (
          <FeedCard
            key={media}
            feed={feeds[media]}
          ></FeedCard>
        )
        )}
      </div>

      <Btn
        style={{ alignSelf: "flex-end" }}
        link="https://instagram.com/nebestfitness"
      >
        <p>Follow for more</p>
        <FontAwesomeIcon icon={faInstagram} size="xl" />
      </Btn>
    </section>
  );
};

export default Feeds;