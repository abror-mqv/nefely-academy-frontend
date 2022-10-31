import Head from "next/head";

import styles from "../styles/Home.module.css";
import Index from "./src/index";
import styled from "styled-components";

export default function Home() {
  return (
    <html lang="ru">
      <div className={styles.container}>
        <Head>
          <title>Nefely Academy - курсы ремонта телефонов</title>
          <meta name="yandex-verification" content="3e6471ecb20fbdd6" />
          <meta
            name="description"
            content="
          КУРСЫ ПО РЕМОНТУ ТЕЛЕФОНОВ БИШКЕК 
          <br/>
            🥇 УЧЕБНЫЙ ЦЕНТР НОМЕР №1 🇰🇬
            <br/>
            👨🏻‍💻 БЕСПЛАТНЫЙ пробный урок
            <br/>
            💼 Сертификат+Трудоустройство
            <br/>
            👨🏻‍🎓Обучение с 0 до МАСТЕРА"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="keywords"
            content="nefely academy, курсы, ремонта, по ремонту, телефонов, смартфонов, ноутбуков, ремонта телефонов, обучение ремонта, курсы ремонта, j, обучение ремонта телефонов, курсы ремонта телефонов kg, по ремонту телефонов, бишкек, курсы бишкек, ремонт курсы, телефон ремонт, курсы, курсы ремонта бишкек, ондоо курстары, курсы ремонта телефонов бишкек, нефели, nefely"
          />
          <meta
            name="google-site-verification"
            content="toEKl8eevecUxpT6u2PV0jtQi9W8VS_Dd1f19bSMwaY"
          />
          <meta name="author" content="Mamatkulov Abror" />
        </Head>
        <Index />
      </div>
    </html>
  );
}
