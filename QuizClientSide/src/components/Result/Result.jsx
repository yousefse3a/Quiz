import axios from "axios";
import { useEffect, useState } from "react";
import style from "./Result.module.css";
export default function Result({ setActiveComponent, GScore }) {
  const [Rank, setRank] = useState(null);
  async function getRank(GScore) {
    const { data } = await axios.post(`https://quizpos.herokuapp.com/Rank`, {
      score: GScore,
    });
    setRank(data.Rank);
  }
  useEffect(() => {
    getRank(GScore);
  }, [GScore]);
  return (
    <div className={style.result_box}>
      <div className={style.icon}>
        <i className="fa-solid fa-crown"></i>
      </div>
      <div className={style.complete_text}>You've completed the Quiz!</div>
      <div className={style.score_text}>
        {Rank === null ? (
          <span>
            <i class="fa-solid fa-spinner fa-2x fa-spin"></i>
          </span>
        ) : Rank >= 50 ? (
          <span>and nice 😎, Your Rank is {Rank}</span>
        ) : (
          <span>and sorry 😐, Your Rank is {Rank}</span>
        )}
      </div>
      <div className={style.buttons}>
        <button
          className={style.restart}
          onClick={() => {
            setActiveComponent("Quiz");
          }}
        >
          Replay Quiz
        </button>
        <button
          className={style.quit}
          onClick={() => {
            setActiveComponent("Start");
          }}
        >
          Quit Quiz
        </button>
      </div>
    </div>
  );
}
