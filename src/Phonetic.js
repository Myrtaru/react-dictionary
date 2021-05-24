import React from "react";
import "./Phonetic.css";


export default function Phonetic (props) {
  function AudioPlay () {
    let audio = new Audio(props.phonetic.audio);
    audio.play();
  }
return (
  <div className="Phonetic">
    <img
      src="../img/speaker.svg"
      className="speaker"
      alt="speaker"
      onClick={AudioPlay}
    />
    <span className="text">{props.phonetic.text}</span>
  </div>
);
}