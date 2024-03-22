import _ from 'lodash';
import './style.css'; 
import Background from './background.jpg';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title);
console.log(toml.owner.name);

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);

import myName from './myName';
import {functionOne, functionTwo} from "./myModule";

function component() {
    const element = document.createElement('div');

    element.textContent="Home";
    element.classList.add('hello');

    const background = new Image();
    background.src = Background;

    element.appendChild(background);

    console.log(Data);
    console.log(Notes);

    return element;
}

document.body.append(component());