const music2 = document.querySelector('#player2')
const music = document.querySelector('#player');
const menuScreen = document.querySelector(".menuScreen");
window.onload = function() {
    const blueLogo = document.querySelector('.logo_blue');
    const gameLogos = document.querySelector('.gameLogos');
    const yellowLogo = document.querySelector('.logo_yellow');
    const textLogo = document.querySelector('.text_logo');

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
        menuScreen.classList.add('show');
        gameLogos.classList.add('remove');
    }, 13500);
};
// play music
function playMusic() {
    menuScreen.classList.remove('show');
    music2.play();
    music.play();
}
