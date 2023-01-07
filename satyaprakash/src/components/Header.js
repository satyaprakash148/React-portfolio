import React, { useState} from "react";
import Typewriter from "typewriter-effect";
const Header = () => {
  const [start, setstart] = useState(false);
  return (
    <div id="hero" className="hero route bg-image">
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">
              {start?<>I am Satya prakash</>: <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("I am Satya prakash").callFunction(() => {
                    setstart(true)
                  }).start();
                }}
              />}
            </h1>
            <div className="hero-subtitle">
              <span
                className="typed"
                data-typed-items="Front-End Developer,Back-End Developer"
              >
                {start? <Typewriter
                  options={{
                    strings: [
                      "Front-End",
                      "Blockchain-Developer",
                      "Back-End",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />:""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
