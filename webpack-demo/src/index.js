import _ from 'lodash';
import './style.css'; 
import Background from './background.jpg';

import myName from './myName';
import {functionOne, functionTwo} from "./myModule";

function component() {
    const element = document.createElement('div');

    element.textContent="Home";
    element.classList.add('hello');

    const background = new Image();
    background.src = Background;

    element.appendChild(background);

    return element;
}

document.body.append(component());