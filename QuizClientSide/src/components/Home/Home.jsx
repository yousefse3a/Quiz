import React, { useState } from "react";
import Quiz from "../Quiz/Quiz";
import Result from "../Result/Result";
import Start from "../Start/Start";
import Info from "../Info/Info";
import style from "./Home.module.css";
import SwitchComponents from "../SwitchComponents ";
export default function Home() {
  const [activeComponent, setActiveComponent] = useState("Start");
  const [GScore, setGScore] = useState(0);

  return (
    <div className={style.Home}>
      <SwitchComponents active={activeComponent}>
        <Start name="Start" setActiveComponent={setActiveComponent} />
        <Info name="Info" setActiveComponent={setActiveComponent} />
        <Quiz
          name="Quiz"
          setActiveComponent={setActiveComponent}
          setGScore={setGScore}
        />
        <Result
          name="Result"
          setActiveComponent={setActiveComponent}
          GScore={GScore}
        />
      </SwitchComponents>
    </div>
  );
}
