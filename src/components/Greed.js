import React, {useState, useEffect} from "react";
import "./Greed.css"

const Greed = () =>{

    const openingDialogue = ["Are you looking?",
    "I had a curious dream. I was walking through a golden temple.",
    " Beneath a dome of glass, and through chambers " + 
    "of splendor, filled with so many objects the heart desires. ", 
    "I saw miracles of human skill and artistry, and flawless beings which seemingly lacked nothing.",
    " But it appeared, they were all searching for something." ,
    " Such strange creatures...", 
    "We are all searching for something.",
    "You will be searching for Lora."
]

    const [text, setText] = useState(openingDialogue[0])
    const [counter, setCounter] = useState(0);

    const changeTextForward = () =>{
        if (counter < 7) {
        setText(openingDialogue[counter + 1])
        setCounter(counter + 1)
        }
    }
    const changeTextBack = () =>{
        if (counter >= 0) {
        setText(openingDialogue[counter - 1])
        setCounter(counter - 1)
        }
}

    return (
        <div>
        <div className="ui segment">
            <h1>
                {text}
            </h1>
        </div>
        <div className="ui segment buttons"> 
            <a onClick={changeTextBack} className="previous round">&#8249;</a>
            <a onClick={changeTextForward} className="next round">&#8250;</a>
        </div>

            <div>
            <h3>Third truth of suffering</h3>
            <h4>Free yourself from desire</h4>
            <h5>Free yourself from needless desire</h5>
            </div>
        </div>
    )
}

export  default Greed