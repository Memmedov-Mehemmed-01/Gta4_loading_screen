window.onload = function() {
    const blueLogo = document.querySelector('.logo_blue');
    const yellowLogo = document.querySelector('.logo_yellow');
    const textLogo = document.querySelector('.text_logo');
    const music = document.querySelector('#player');

    // Ensure the audio plays correctly
    music.play()
    // Yellow logo fade in and fade out
    setTimeout(() => {
        yellowLogo.classList.add('show');
    }, 1300); // 

    setTimeout(() => {
        yellowLogo.classList.remove('show');
        yellowLogo.classList.add('fade-out');
    }, 4000); 

    // Blue logo fade in and fade out
    setTimeout(() => {
        blueLogo.classList.add('show');
    }, 4100); 

    setTimeout(() => {
        blueLogo.classList.remove('show');
        blueLogo.classList.add('fade-out');
    }, 7000); 

    setTimeout(() => {
        textLogo.classList.add('show');
    }, 7000); 

    setTimeout(() => {
        textLogo.classList.remove('show');
    }, 9800); 

    // Music stops 
    setTimeout(() => {
        music.pause();
    }, 13700);
};