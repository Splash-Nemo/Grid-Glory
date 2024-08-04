import React, { useState, useRef } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    let box0 = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);

    let boxes = [
        box0,
        box1,
        box2,
        box3,
        box4,
        box5,
        box6,
        box7,
        box8
    ]

    function toggle(e, num) {
        if (lock){
            checkWin();
            return 0;
        }

        if (count % 2 == 0) {
            e.target.innerHTML = `<img src = '${cross_icon}'>`;
            data[num] = "X";
            setCount(++count);
        } else {
            e.target.innerHTML = `<img src = '${circle_icon}'>`
            data[num] = "O";
            setCount(++count);
        }

        checkWin();
    }

    const checkWin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=""){
            setLock(true);
            win(data[2]);
        } else if(data[3]===data[4] && data[4]===data[5] && data[5]!=""){
            setLock(true);
            win(data[5]);
        } else if(data[6]===data[7] && data[7]===data[8] && data[8]!=""){
            setLock(true);
            win(data[8]);
        } else if(data[0]===data[4] && data[4]===data[8] && data[8]!=""){
            setLock(true);
            win(data[8]);
        } else if(data[6]===data[4] && data[4]===data[2] && data[2]!=""){
            setLock(true);
            win(data[2]);
        }  else if(data[0]===data[3] && data[3]===data[6] && data[6]!=""){
            setLock(true);
            win(data[6]);
        }  else if(data[1]===data[4] && data[4]===data[7] && data[7]!=""){
            setLock(true);
            win(data[7]);
        }  else if(data[2]===data[5] && data[5]===data[8] && data[8]!=""){
            setLock(true);
            win(data[8]);
        }
    }
    // 0 3 6
    // 1 4 7
    // 2 5 8

    const win = (winner) => {
        console.log(winner);
        alert("CONGRATULATIONS!\nWinner is: "+ winner + "\n\n\nPress RESET to Play Again");
    }

    function reset() {
        setCount(0);
        setLock(false);

        data.fill("");
        boxes.forEach ((e) => {
            e.current.innerHTML = "";
        })
    }

    return (
        <div>
            <div className="container">
                <h1 className="title"><span>T</span>ic<span>T</span>ac<span>T</span>oe</h1>
                <div className="board">
                    <div className="row1">
                        <div className="boxes" ref = {box0} onClick={(e) => { toggle(e, 0) }}></div>
                        <div className="boxes" ref = {box1} onClick={(e) => { toggle(e, 1) }}></div>
                        <div className="boxes" ref = {box2} onClick={(e) => { toggle(e, 2) }}></div>
                    </div>
                    <div className="row2">
                        <div className="boxes" ref = {box3} onClick={(e) => { toggle(e, 3) }}></div>
                        <div className="boxes" ref = {box4} onClick={(e) => { toggle(e, 4) }}></div>
                        <div className="boxes" ref = {box5} onClick={(e) => { toggle(e, 5) }}></div>
                    </div>
                    <div className="row3">
                        <div className="boxes" ref = {box6} onClick={(e) => { toggle(e, 6) }}></div>
                        <div className="boxes" ref = {box7} onClick={(e) => { toggle(e, 7) }}></div>
                        <div className="boxes" ref = {box8} onClick={(e) => { toggle(e, 8) }}></div>
                    </div>
                </div>
                <button className="reset" onClick={reset}>Reset</button>
            </div>

            <div className="guide">
                <h1>Guide</h1>
                <div><h1>Player 1: <span>X</span> </h1></div>
                <div><h1>Player 2: <span>O</span> </h1></div>
            </div>
        </div>
    )
}

export default TicTacToe