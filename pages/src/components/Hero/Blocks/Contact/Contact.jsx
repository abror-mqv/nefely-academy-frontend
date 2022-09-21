import React, { useState } from "react";
import styled from "styled-components";

import Head from "next/head";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";

import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const StyledContact = styled.div`
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
  return (
    <StyledContact>
      <Head></Head>
      <div className="Main">
        <div className="Container">
          <div className="Write">
            <h5>Мы позвоним</h5>
            <Box sx={{ display: "flex", alignItems: "flex-end", gap: "1vw" }}>
              <AccountCircle sx={{ color: "#d3fc00" }} />
              <TextField
                id="standard-textarea"
                label="Ваше имя"
                placeholder="Введите имя"
                type="tel"
                variant="standard"
                multiline
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end", gap: "1vw" }}>
              <WhatsAppIcon sx={{ color: "#d3fc00" }} />
              <TextField
                id="standard-textarea"
                label="Ваш номер"
                placeholder="Введите номер"
                variant="standard"
                type="tel"
                multiline
              />
            </Box>

            <Formik
              initialValues={{ firstName: "" }}
              onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().max(30).required("Required"),
              })}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  dirty,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  handleReset,
                } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName" style={{ display: "block" }}>
                      Имя
                    </label>
                    <input
                      id="firstName"
                      placeholder="Ваше имя"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.email && touched.email
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                    {errors.firstName && touched.firstName && (
                      <div className="input-feedback">{errors.firstName}</div>
                    )}

                    <button
                      type="button"
                      className="outline"
                      onClick={handleReset}
                      disabled={!dirty || isSubmitting}
                    >
                      Reset
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                      Submit
                    </button>
                  </form>
                );
              }}
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
              <a href="#" className="MicroButton">
                <WhatsAppIcon
                  sx={{ color: "#000000", height: "4.2vh", width: "4.2vh" }}
                />
              </a>
              <a href="#" className="MicroButton">
                <WhatsAppIcon
                  sx={{ color: "#000000", height: "4.2vh", width: "4.2vh" }}
                />
              </a>
              <a href="#" className="MicroButton">
                <WhatsAppIcon
                  sx={{ color: "#000000", height: "4.2vh", width: "4.2vh" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img src="/media/phone1.png" className="PhoneImg" alt="" />
    </StyledContact>
  );
}

export default Contact;
