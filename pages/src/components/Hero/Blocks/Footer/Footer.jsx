import React from "react";
import styled from "styled-components";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

const StyledFooter = styled.footer`
  height: 100%;

  .mapouter {
    position: relative;
    text-align: right;
    width: 100%;
    height: 70%;
    overflow: hidden;
    .gmap_canvas {
      overflow: hidden;
      background: none !important;
      width: 100%;
      height: 100%;
      .gmap_iframe {
        height: 100% !important;
      }
    }
  }
  .sub-footer {
    display: flex;
    height: 30%;
    width: 100%;

    .left-panel {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 8%;
      .footer__addres {
        font-size: 0.9vw;
        color: rgb(255, 255, 255, 0.8);
      }
      .footer__doublegis {
        font-size: 1.6vw;
        color: rgb(255, 255, 255, 1);
        text-decoration: underline;
      }
      .footer__link {
        font-size: 0.9vw;
        color: rgb(255, 255, 255, 0.8);
        text-decoration: underline;
      }
    }
    .right-panel {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 8%;
      .footer__contacts {
        display: flex;
        justify-content: flex-start;
        gap: 1vw;
        .footer__numbers {
        }
      }
      .footer__media {
        display: flex;
        gap: 1vw;
      }
    }
  }
  @media screen and (max-width: 920px){
      .mapouter{
        height: 40vh;
      }
      .sub-footer{
        display: flex;
        flex-direction: column;
        
        .left-panel{
          width: 100%;
          display: flex;
          align-items: center;
          text-align: center;
          margin-top: 2vh;
          gap: 2vh;
          .footer__doublegis{
            font-size: 9vw;
          }
          .footer__addres{
            font-size: 4vw;
          }
          .footer__link{
            font-size: 3vw;
          }
        }
        .right-panel{
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-top: 7vh;
          align-items: center;
          gap: 3vh;
          .footer__media{
            width: 60%;
            display: flex;
            justify-content: space-between;
          }
        }
      }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            width="100%"
            frameborder="0"
            scrolling="yes"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Киевская 39 academy_smart&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      <div className="sub-footer">
        <div className="left-panel">
          <p className="footer__doublegis">
            <Link href="https://go.2gis.com/42803">2Gis</Link>
          </p>
          <p className="footer__addres">
            Ул. Киевская 39, Бишкек
            <br />
            На пересечении улиц Киевская/Советская
          </p>

          <p className="footer__link">
            <Link href="/privacy">Условия пользования</Link>
          </p>
          <p className="footer__years">© ООО "СМАРТ АКАДЕМИЯ", 2022</p>
        </div>
        <div className="right-panel">
          <p className="footer__contacts">
            Контактные лица:
            <p className="footer__number">
              +996 (999) 344 955
              <br />
              +996 (508) 123 000
            </p>
          </p>
          <p className="footer__media">
            <Link href="https://www.instagram.com/academy_nefely/">
              <InstagramIcon
                sx={{ color: "#ffffff", height: "4.2vh", width: "4.2vh" }}
              />
            </Link>
            <Link href="https://wa.me/+996999344955?text=Здравстуйте,%27m%расскажите%20мне%20о%20ваших%20курсах">
              <WhatsAppIcon
                sx={{ color: "#ffffff", height: "4.2vh", width: "4.2vh" }}
              />
            </Link>
            <Link href="tel:+996999344955">
              <CallIcon
                sx={{ color: "#ffffff", height: "4.2vh", width: "4.2vh" }}
              />
            </Link>
          </p>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
