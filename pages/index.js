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
          content="КУРСЫ ПО РЕМОНТУ ТЕЛЕФОНОВ БИШКЕК С ТРУДОУСТРОЙСТВОМ + СЕРТИФИКАТ. Обучение с нуля до мастера за 2 месяца. На пересечении Киевская/Советская"
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
        <meta
          property="og:title"
          content="Nefely Academy - курсы ремонта телефонов"
        />
        <meta property="og:url" content="http://nefely-academy.kg/" />
        <meta
          property="og:image"
          content="http://176.126.166.222:1337/uploads/g4_3849f2c0fa.jpg"
        />
        <meta
          property="og:description"
          content="КУРСЫ ПО РЕМОНТУ ТЕЛЕФОНОВ БИШКЕК С ТРУДОУСТРОЙСТВОМ + СЕРТИФИКАТ. Обучение с нуля до мастера за 2 месяца. На пересечении Киевская/Советская"
        />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
      </Head>
      <Index />
    </div>
  );
}
