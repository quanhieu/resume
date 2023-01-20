import React, { useState, useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { BsFillCloudSnowFill, BsSunFill, BsFillMoonStarsFill, BsFillCloudsFill } from "react-icons/bs";

import { ParticlesParams, ParticlesOptions } from "../Schemas/Particles";

export default function Options () {
  let { lsTheme, lsIcon, lsSnow } = "";
  try {
    lsTheme = localStorage.getItem("theme");
    lsIcon = localStorage.getItem("icon");
    lsSnow = JSON.parse(localStorage.getItem("snow"));
  } catch (e) {
    console.error(`All Cookies blocked - Error: ${e.message}`);
  }

  const [theme, setTheme] = useState(lsTheme || "dark");
  const [icon, setIcon] = useState(lsIcon || "bx-sun");
  const [snow, setSnow] = useState(lsSnow);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("icon", icon);
    localStorage.setItem("snow", snow);
    document.body.classList[theme === "dark" ? "add" : "remove"]("dark-theme");
  }, [theme, snow, icon]);


  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const SnowEffect = () =>
    snow && theme === "dark" && <Particles
      init={particlesInit}
      options={ParticlesOptions}
    />;

  const _enableSnow = () => setSnow(!snow);
  const _toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    icon === "bx-sun" ? setIcon("bx-moon") : setIcon("bx-sun");
  };

  return (
    <div className="home__options">
      {
        theme === "dark" && (
          snow 
          ? <BsFillCloudsFill
            className="bx bx-cloud-snow enable-snow"
            title="Activate Snow"
            id="snow-button"
            onClick={_enableSnow}
            style={{ fontSize: "1.2em" }} 
          />
          : <BsFillCloudSnowFill
            className="bx bx-cloud-snow enable-snow"
            title="Activate Snow"
            id="snow-button"
            onClick={_enableSnow}
            style={{ fontSize: "1.2em" }} 
          />
        )
      }
      <SnowEffect />

      <span
        className={`bx ${icon} change-theme`}
        title="Toggle Theme"
        id="theme-button"
        onClick={_toggleTheme}
      >
        {
          theme === "dark"
          ? <BsSunFill style={{ fontSize: "1.2em" }} />
          : <BsFillMoonStarsFill style={{ fontSize: "1.2em" }} />
        }
      </span>
    </div>
  );
};
