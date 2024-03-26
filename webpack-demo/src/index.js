import _ from 'lodash';
<<<<<<< HEAD
=======
import printMe from './print.js';
>>>>>>> refs/remotes/origin/webpack

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

<<<<<<< HEAD
    element.textContent="Home";
=======
    btn.innerHTML = 'Click me and check the concosle';
    btn.onclick = printMe;

    element.appendChild(btn);
>>>>>>> refs/remotes/origin/webpack

    return element;
}

document.body.append(component());