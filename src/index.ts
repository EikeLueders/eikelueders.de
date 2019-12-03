import * as Typed from 'typed.js';
import './style.scss';

const run = () => {
    // Set background
    const numOfImages = 8;
    const idx = Math.floor(Math.random() * numOfImages) + 1;
    const name = './bg' + idx + '-min.jpg';
    document.getElementsByTagName('body')[0].style.backgroundImage = 'url(assets/' + name + ')';

    // Init typed
    new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 40,
        backDelay: 1000,
        startDelay: 1500,
        loop: true,
        shuffle: true,
    });
};

window.onload = () => {
    run();
};
