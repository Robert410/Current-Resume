import React from "react";
import Transition from "./Transition";
import "./home.css";

const Home = () => {
  return (
         <div className="tab" id="intro">
        <div className="containerHome">
            <div className="avatar">
                <img src="/assets/me.png" alt="me"/>
            </div>
            <div className="content">
                <div className="name">Hostiuc Robert - Gabriel</div>
                <div className="job">
                    I'm a <span className="text-gradient">
                        Full Stack Developer
                    </span>
                </div>
                <div className="des">
                Passionate and communicative web developer eager to keep learning and passionate about computer science. I thrive on infusing creativity into everything I build.
                    <br/>
                </div>
                <div className="des">
                  <b>
                  Feel free to also check my old website(also my first one):           
  <a className="oldWebsite" href="/page.html" target="_blank" >
      here
  </a></b>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Transition(Home);
