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
                    I'm <span className="text-gradient">
                        a Full Stack Developer
                    </span>
                </div>
                <div className="des">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse dolorum vero a, quibusdam ipsa eius aliquid incidunt totam vel itaque exercitationem doloribus tenetur officia repellendus velit in distinctio optio quisquam.
                    <br/>
                </div>
                <div className="des">
                  Feel free to also check my old website(also my first one):         
  <a className="nav-link" href="/page.html" target="_blank" >
    here
  </a>
                </div>
                <i className="fa-solid fa-quote-right"></i>
            </div>
        </div>
    </div>
  );
};

export default Transition(Home);
