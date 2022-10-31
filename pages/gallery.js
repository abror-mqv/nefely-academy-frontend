import Head from "next/head";

import styles from "../styles/Home.module.css";
import Index from "./src/index";
import styled from "styled-components";
import GalleryPage from "./src/components/Gallery/GalleryPage";



export default function gallery() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nefely Academy - курсы ремонта телефонов</title>
        <meta name="yandex-verification" content="3e6471ecb20fbdd6" />
        <meta
          name="description"
          content="
          КУРСЫ ПО РЕМОНТУ ТЕЛ/ПК БИШКЕК 
            🥇 УЧЕБНЫЙ ЦЕНТР НОМЕР №1 🇰🇬
            👨🏻‍💻 БЕСПЛАТНЫЙ пробный урок
            💼 Сертификат+Трудоустройство
            👨🏻‍🎓Обучение с 0 до МАСТЕРА"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GalleryPage />
    </div>
  );
}
