import Head from "next/head";

import styles from "../styles/Home.module.css";
import Index from "./src/index";
import styled from "styled-components";

export default function Home() {
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
        <meta
          name="keywords"
          content="курсы ремонта телефонов бишкек, курсы по ремонту телефонов бишкек, курсы ремонта телефонов в бишкеке, курсы ремонта телефоно, nefely, nefely-academy, нефели академия, academy nefely, курсы по ремонту ноутбуков бишкек, ремонт телефонов бишкек, курсы по ремонту смартфонов планшетов бишкек, курсы бишкек, курсы технаря бишкек, ремонт ноутбуков бишкек, батарея быстро садится бишкек, телефон сломался бишкек, курсы телефона бишкек, курсы по ремонту телеофнов. ремонт, ремонт техники бишкек, курсы по ремонту, бишкек ремонт курсы, бишкек, ремонт, курсы, смартфон, телеофн бишкек, курсы по ремонту смартфон"
        />
        <meta
          name="google-site-verification"
          content="toEKl8eevecUxpT6u2PV0jtQi9W8VS_Dd1f19bSMwaY"
        />
        <meta name="author" content="John Doe" />
      </Head>
      <Index />
    </div>
  );
}
