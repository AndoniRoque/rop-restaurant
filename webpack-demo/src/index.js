import _ from 'lodash';
import myName from './myName';
import {functionOne, functionTwo} from "./myModule";

function component() {
    const element = document.createElement('div');

    element.textContent = myName("Slim Shady");

    element.textContent += " " + functionOne();

    return element;
}

document.body.append(component());