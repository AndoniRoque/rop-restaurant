import _ from 'lodash';

function component() {
    const element = document.createElement('div');

    element.textContent="Home";

    return element;
}

document.body.append(component());