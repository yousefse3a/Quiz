import React from "react";
import style from './Info.module.css'
export default function Rules({setActiveComponent}) {
  return (
    <div className={style.info_box}>
      <div className={style.info_title}>
        <span>Some Rules of this Quiz</span>
      </div>
      <div className={style.info_list}>
        <div className="info">
          1. You will have only <span>15 seconds</span> per each question.
        </div>
        <div className="info">
          2. Once you select your answer, it can't be undone.
        </div>
        <div className="info">
          3. You can't select any option once time goes off.
        </div>
        <div className="info">
          4. You can't exit from the Quiz while you're playing.
        </div>
        <div className="info">
          5. You'll get Rank on the basis of your correct answers.
        </div>
      </div>
      <div className={style.Info_buttons}>
        <button className={style.exit} onClick={()=>{setActiveComponent('Start')}}>Exit Quiz</button>
        <button className={style.continue} onClick={()=>{setActiveComponent('Quiz')}}>Continue</button>
      </div>
    </div>
  );
}
