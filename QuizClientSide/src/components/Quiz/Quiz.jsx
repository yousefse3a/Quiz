import style from "./Quiz.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Quiz({ setActiveComponent, setGScore }) {
  const [QuesIndex, setQuesIndex] = useState(0);
  const [questions, setquestions] = useState(null);

  let category = ["adverb", "verb", "noun", "adjective"];

  const head = useRef();
  const timer_sec = useRef();
  const time_line = useRef();
  const timer_box = useRef();
  const time_left_txt = useRef();
  const time_value = 30;

  const counterLine = useRef();
  const counter = useRef;

  const [Score, setScore] = useState(0);

  const option_list = useRef();
  let tickIcon =
    '<div className="icon tick"><i class="fas fa-check"></i></div>'; /* div for correct sign */
  let crossIcon =
    '<div className="icon cross"><i class="fas fa-times"></i></div>'; /* div for wrong sign */

  const [ShowNextBtn, setShowNextBtn] = useState(false);

  function startTimer(time) {
    // setcounter(setInterval(timer, 1000));
    counter.current = setInterval(timer, 1000);
    function timer() {
      timer_sec.current.textContent = time; //changing the value of timer_sec with time value
      time--; //decrement the time value
      if (time < 9) {
        //if timer is less than 9
        timer_sec.current.textContent = "0" + timer_sec.current.textContent; //add a 0 before time value
      }
      if (time < 0) {
        //if timer is less than 0
        clearInterval(counter.current); //clear counter
        timer_box.current.style.background = "#721c24";
        timer_box.current.style.color = "white";
        timer_box.current.children[0].textContent = "Time Off"; //change the time text to time off
        poinerEvent("none"); // prevent any other click on option after time end
        setShowNextBtn(true); //to show next btn
      }
    }
  }
  function startTimerLine(time) {
    // setcounterLine(setInterval(timer, 62.5));
    counterLine.current = setInterval(timer, 62.5);
    function timer() {
      time += 100 / ((time_value + 1) * 16); //upgrading time value with the bar must increase by 62.5 milisecond
      time_line.current.style.width = time + "%"; //increasing width of time_line with % by time value
      if (time > 100) {
        clearInterval(counterLine.current); //clear counterLine
      }
    }
  }
  function optionSelected(option) {
    clearInterval(counterLine.current);
    clearInterval(counter.current);
    setShowNextBtn(true); //to show next btn
    poinerEvent(
      "none"
    ); /*prevent any other click on option to ensure only choose one */
    if (option.innerText === questions[QuesIndex]?.pos) {
      setScore(Score + 1);
      option.classList.add("correct");
      option.insertAdjacentHTML(
        "beforeend",
        tickIcon
      ); /* add correct sign if option correct */
    } else {
      option.classList.add("incorrect");
      option.insertAdjacentHTML(
        "beforeend",
        crossIcon
      ); /* add wrong sign if op tion wrong */
    }
  }
  function nextQues() {
    if (QuesIndex < questions.length - 1) {
      setQuesIndex(QuesIndex + 1);
      time_left_txt.current.textContent = "Time Left"; //change the timeText to Time Left
    } else {
      setGScore((Score / questions.length) * 100);
      setActiveComponent("Result");
    }
  }
  function poinerEvent(state) {
    for (let i = 0; i < option_list.current.children["length"]; i++) {
      option_list.current.children[i].style.pointerEvents = state;
    }
  }
  function optionRestart() {
    for (let i = 0; i < option_list.current.children["length"]; i++) {
      option_list.current.children[i].classList.remove("correct"); //to remove correct style of option
      option_list.current.children[i].classList.remove("incorrect"); //to remove incorrect style of option
      if (option_list.current.children[i].children.length) {
        option_list.current.children[i].children[0].remove();
      }
    }
    timer_box.current.style.background = "#cce5ff";
    timer_box.current.style.color = "#004085";
  }

  useEffect(() => {
    startTimer(time_value);
    startTimerLine(0);
    poinerEvent(
      "auto"
    ); /* let uset to choose option for every question change */
    optionRestart();
    return () => {
      clearInterval(counterLine.current);
      clearInterval(counter.current);
      setShowNextBtn(false);
    };
  }, [QuesIndex]);

  async function getQuesions() {
    const { data } = await axios.get(`http://localhost:4000/Words`);
    setquestions(data);
  }
  useEffect(() => {
    getQuesions();
  }, []);

  return (
    <div className={style.quiz_box} >
      <div className={style.head} ref={head}>
        <div className={style.title}>Part of Speech </div>
        <div className={style.timer} ref={timer_box}>
          <div className={style.time_left_txt} ref={time_left_txt}>
            Time Left
          </div>
          <div className={style.timer_sec} ref={timer_sec}>
            {time_value}
          </div>
        </div>
        <div className={style.time_line} ref={time_line}></div>
      </div>
      <div className={style.question} >
        <div className={style.que_text}>
          <span>
            {QuesIndex + 1}.what is <span className={style.Word}>{questions && questions[QuesIndex].word}</span> ?
          </span>
        </div>

        <div className={`${style.option_list} option_list`} ref={option_list}>
          {category.map((option, index) => {
            return (
              <>
                <div
                  className="option"
                  key={index}
                  onClick={(e) => {
                    optionSelected(e.target);
                  }}
                >
                  {option}
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className={style.footer}>
        <div className={style.total_que}>
          <span>
            <p>{QuesIndex + 1}</p> / <p>{questions?.length}</p> Questions
          </span>
        </div>
        {ShowNextBtn && (
          <button className={`${style.next_btn}`} onClick={nextQues}>
            {QuesIndex < questions?.length - 1 ? " Next Que" : "Result"}
          </button>
        )}
      </div>
    </div>
  );
}
