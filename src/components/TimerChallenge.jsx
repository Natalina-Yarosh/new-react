import { useRef, useState } from "react";

export default function TimerChallenge({title, targetTime}) {


  return (
    <section className="challenge">
      <h2>{title} </h2>
     <p className="challenge-time">
       {targetTime} second{targetTime > 1 ? 's' : ''} 
      </p>
      <button>
        Start challenge
      </button>
      <p className="active">
          Time is running ... / Timer inactive
      </p>
      
    </section>
  );
}
