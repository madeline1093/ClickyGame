import React from "react";
import Score from "../Score";

const NavTabs = props => (
    <div>
        <nav className = 'navbar'>
            <ul>
                <li>
                     <a href='/'>CLICKY GAME</a>
                </li>
                <li>
                    <Score score={props.score} topScore = {props.highScore} />
                </li>
                <li>
                    Score: {props.score}|| High Score: {props.highScore}
                </li>
            </ul>
        </nav>
    </div>
);

export default NavTabs;