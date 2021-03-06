import React from "react";
import Image from "next/image";
import { Trans } from "@lingui/react";
import { motion } from "framer-motion";

import youtubeThumbnail from "../../../../public/assets/youtube-thumbnail.jpg";
import logoRenewal from "../../../../public/assets/logo-renewal.jpg";
import driveManager from "../../../../public/assets/drive-manager-thumbnail.jpg";

import styles from "./Announcements.module.scss";

const ANNOUNCEMENTS: any = [
  {
    id: 3,
    date: <Trans id="July 1, 2021" />,
    title: <Trans id="DEFI Project Development" />,
    subtitle: (
      <Trans id="Introducing Conun's DEFI project, stage one - UNISWAP" />
    ),
    image: youtubeThumbnail,
    link: "https://www.youtube.com/watch?v=bHdEj0bEyMo",
  },
  {
    id: 1,
    date: <Trans id="July 5, 2021" />,
    title: <Trans id="CONUN Branding Renewal" />,
    subtitle: <Trans id="CONUN changed the logo to announce its new start" />,
    image: logoRenewal,
    link: "https://xangle.io/project/CON/recent-disclosure/60ded621d9d39fef9a4d9b2c",
  },
  {
    id: 2,
    date: <Trans id="July 5, 2021" />,
    title: <Trans id="Conun Manager and Drive" />,
    subtitle: (
      <Trans id="Conun blockchain has beta launched two of its DApp services" />
    ),
    image: driveManager,
    link: "https://xangle.io/project/CON/recent-disclosure/6094d7b9e141e6daca481242",
  },
];

function Announcements() {
  return (
    <section id="announcements" className={styles.Announcements}>
      <p className={styles.PageTitle}>
        <Trans id="08 Announcements" />
      </p>
      <p className={styles.PageSubtitle}>
        <Trans id="Ongoing project and company updates related to CONUN." />
      </p>
      <div className={styles.AnnouncementsContainer}>
        {ANNOUNCEMENTS.map((a: any) => (
          <motion.a
            whileHover={{ y: -10 }}
            className={styles.Announcement}
            href={a.link}
            key={a.id}
            target="_blank"
            rel="noreferrer"
          >
            <p className={styles.Date}>{a.date}</p>

            <Image src={a.image} width={370} height={344} alt={a.title} />

            <p className={styles.Title}>{a.title}</p>
            <p className={styles.Subtitle}>{a.subtitle}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Announcements;
