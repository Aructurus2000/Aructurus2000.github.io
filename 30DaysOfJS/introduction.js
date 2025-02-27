// const boxElement = document.querySelector('.box');
// const buttonElement = document.querySelector('button');
//
// buttonElement.addEventListener('click', (e) => {
//     boxElement.scrollTop +=10
// }) //overflow: hidden;


const buttonElement = document.querySelector('.box4 button');
const counterElement = document.querySelector('.counter');

buttonElement.onclick = () => {
    const value = Number(counterElement.textContent);

    counterElement.textContent = value + 1;
}