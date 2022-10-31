import React, { useState } from "react";
import styled from "styled-components";

import axios from "axios";
import Head from "next/head";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";

import { render } from "react-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import FieldName from "./Field/FieldName";
import FieldTel from "./Field/FieldTel";
import Bolts from "../Bolts/Bolts";

const StyledContact = styled.div`
  @media only screen and (max-width: 920px) {
    .PhoneImg {
      display: none !important;
    }
    .Container {
      flex-wrap: wrap;
    }
    .Main {
      width: 84% !important;
      height: 82% !important;
      margin-top: -14vh;
      padding-bottom: 4vh;
      background: rgb(200 200 200 / 36%) !important;
      box-shadow: -8px -8px 37px -15px #ffffff, 25px 25px 50px -9px #000000 !important;
      box-shadow: none !important;

      .Container {
        padding: 12vw;
        display: flex !important;
        /* justify-content: center !important;
        align-items: center !important; */
        .Write {
          display: flex;
          justify-content: center;
          align-items: center;
          form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
    button {
      width: 104% !important;
      margin-left: 0 !important;
      justify-content: center !important;
      gap: 8vw !important;
    }
    h5 {
      font-size: 6vw !important;
    }

    .Contacts {
      width: 100%;
      .Title {
        font-size: 5vw !important;
        text-align: center !important;
        width: 100%;
      }
    }
    button:hover {
      transform: scale(100%);
      padding-left: 0 !important;
      box-shadow: 6px 6px 12px #000000,
        -3px -3px 20px -3px rgba(255, 255, 255, 0.803);
    }
  }
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  .PhoneImg {
    width: 40vh;
  }
  .Main {
    background: rgba(116, 116, 116, 0.1);
    box-shadow: -6px -6px 33px -18px #ffffff, 25px 25px 50px -9px #000000;
    border-radius: 19px;
    width: 48%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    .Container {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 2.5vw;
    }
    .Write {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      h5 {
        font-family: "Days One";
        font-style: normal;
        font-weight: 400;
        font-size: 2.2vw;
        line-height: 51px;
        /* identical to box height */

        text-align: center;

        color: #d3fc00;
      }
      .TextFLD {
        margin-top: 1vw;
      }
      .WithIcon {
        display: flex;
      }
      button {
        width: 120%;
        margin-left: -20%;
        background: linear-gradient(273.14deg, #d3fc00 27.24%, #fcf200 103.71%);
        box-shadow: 6px 6px 12px #000000,
          -3px -3px 14px -3px rgba(255, 255, 255, 0.66);
        border-radius: 6px;
        font-family: "Days One";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 28px;
        text-align: start;
        display: flex;
        justify-content: start;
        align-items: center;
        color: #010101;
        margin-top: 4vh;
        padding: 1vh;
        transition: 0.3s;
        gap: 1.3vh;
        cursor: pointer;
        border: 0;
      }
      button:hover {
        transform: scale(100%);
        padding-left: 30%;
        box-shadow: 6px 6px 12px #000000,
          -3px -3px 20px -3px rgba(255, 255, 255, 0.803);
      }
    }
    .Contacts {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .Title {
        font-family: "Days One";
        font-style: normal;
        font-weight: 400;
        font-size: 2.2vw;
        line-height: 51px;
        text-align: center;
        color: #ffffff;
      }
      .SubTitle {
        font-family: "Jura";
        font-style: normal;
        font-weight: 700;
        font-size: 3.5vh;
        line-height: 30px;
        text-align: center;
        color: #aeaeae;

        margin-top: 1vw;
      }
      .Phone {
        font-family: "Jura";
        font-style: normal;
        font-weight: 500;
        font-size: 2vh;
        line-height: 24px;
        margin-top: 1vh;

        color: #aeaeae;
      }
      .Address {
        font-family: "Jura";
        font-style: normal;
        font-weight: 500;
        font-size: 2vh;
        line-height: 20px;
        margin-top: 1vh;

        color: #aeaeae;
      }
      .ContactButtons {
        width: 100%;
        display: flex;
        margin-top: 3.5vh;
        justify-content: space-between;
        .MicroButton {
          width: 5vh;
          height: 5vh;
          background: linear-gradient(
            273.14deg,
            #d3fc00 27.24%,
            #fcf200 103.71%
          );
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 6px 6px 12px #000000,
            inset 0px 0px 13px rgba(0, 0, 0, 0.66);
          border-radius: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`;
function Contact() {
  const SendLeed = (Lead) => {
    axios
      .post("http://176.126.166.222:1337/api/requests/", {
        data: {
          Name: Lead.name,
          Number: Lead.email,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <StyledContact>
      <Head></Head>
      <div className="Main">
        <div className="Container">
          <div className="Write">
            <h5>Мы позвоним</h5>
            <Formik
              initialValues={{ name: "", email: "" }}
              onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                SendLeed(values);
              }}
            >
              <Form>
                <Field as={FieldName} name="name" type="text" />
                <Field as={FieldTel} name="email" type="tel" />
                <button type="submit">
                  Отправить <SendIcon />
                </button>
              </Form>
            </Formik>
          </div>
          <div className="Contacts">
            <p className="Title">Контакты</p>
            <p className="SubTitle">Телефон:</p>
            <p className="Phone">
              +996 (999) 344-955 <br /> +996 (554) 220-812
            </p>
            <p className="SubTitle">Адрес:</p>
            <p className="Address">
              г.Бишкек, <br />
              ул.Киевская 39, <br />3 этаж
            </p>
            <div className="ContactButtons">
              <a
                href="https://wa.me/+996999344955?text=Здравстуйте,%27m%расскажите%20мне%20о%20ваших%20курсах"
                className="MicroButton"
              >
                <WhatsAppIcon
                  sx={{ color: "#000000", height: "4.2vh", width: "4.2vh" }}
                />
              </a>
              <a href="tel:+996999344955" className="MicroButton">
                <CallIcon
                  sx={{ color: "#000000", height: "4.2vh", width: "4.2vh" }}
                />
              </a>
              <a href="https://www.instagram.com/academy_nefely/" className="MicroButton">
                <InstagramIcon
                  sx={{ color: "#000000", height: "4.2vh", width: "4.2vh" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src="/media/phone1.webp" className="PhoneImg" alt="Средняя зарпалта мастера по ремонту телефонов" />
    </StyledContact>
  );
}

export default Contact;
