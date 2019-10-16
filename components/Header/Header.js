import React from "react";
import "./Header.css";

const Header = props => (
    <nav>
        <ul>
            <li className="brand animated lightSpeedIn">
                <a href="/clicky-game/">{props.title}</a>
            </li>

            <li id="winOrLose">{props.winOrLose}</li>

            <li id="score">Score: {props.score}</li>

            <li id="highScore">High Score: {props.highScore}</li>
        </ul>
    </nav>
);