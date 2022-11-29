import React from "react";
import style from "./Navsidebar.module.scss";
import logo from "../../assets/logo.svg";
import myportfolio from "../../assets/myportfolio.svg";
import mygroup from "../../assets/mygroup.svg";
import pack from "../../assets/pack.svg";
import settings from "../../assets/settings.svg";
import analytics from "../../assets/analytics.svg";
import milly from "..//../assets/milly.svg";
import logout from "..//../assets/logout.svg";

const Index = () => {
  return (
    <div className={style.container}>
      <div className={style.topnav}>
        <div className={style.buddylogo}>
          <center>
            {" "}
            <img src={logo} alt="logo" />{" "}
          </center>
        </div>
        <div className={style.navlinks}>
          <br></br>
          <br></br>
          <nav className={style.nav1}>
            <ul className={style.nav}>
              <li>
                <img src={myportfolio} alt="my portfolio" />
                <a href=""> My Portfolio</a>
              </li>

              <li>
                <img src={mygroup} alt="my group" />
                <a href=""> My Group</a>
              </li>

              <li>
                <img src={analytics} alt="analytics" />
                <a href=""> My Analytics</a>
              </li>

              <li>
                <img src={pack} alt="pack" />
                <a href=""> Pack</a>
              </li>

              <li>
                <img src={settings} alt="settings" />
                <a href=""> Settings</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <footer>
        <div className={style.footer}>
          <div className={style.wrapper}>
            <center>
              {" "}
              <img src={milly} alt="logo" className={style.image} />{" "}
            </center>
            <h1>Theresa milly</h1>
            <p>Influencer</p>
            <center>
              <button className={style.btn}>
                {" "}
                <img src={logout} />
                Logout
              </button>{" "}
            </center>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
