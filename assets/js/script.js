const mode = document.querySelector('.icon');
const text = document.querySelector('.icon span');
const icon = document.querySelector('.icon div img');

const myBackgorundColor = document.querySelector('main');
const TextBody = document.querySelector('body');
const container = document.querySelector('main section');
const heartIcon = document.querySelector('.information div:nth-child(1) div:nth-child(1) img');

mode.addEventListener('click', function () {
  if (text.textContent == 'light mode') {
    text.textContent = 'dark mode';
    text.style.color = 'white';
    TextBody.style.color = 'white';
    icon.alt = 'Dark Mode';
    icon.src = 'assets/img/night-mode.png';
    myBackgorundColor.style.backgroundColor = '#141D26';
    container.style.backgroundColor = '#243447';
    container.style.boxShadow = 'none';
    container.style.border = 'none';
    heartIcon.src = 'assets/img/Vectorheart-dark-mode.svg';
  } else if (text.textContent == 'dark mode') {
    text.textContent = 'light mode';
    text.style.color = 'black';
    TextBody.style.color = 'black';
    icon.alt = 'Light Mode';
    icon.src = 'assets/img/brightness.png';
    myBackgorundColor.style.backgroundColor = '#ecf8ff';
    container.style.backgroundColor = '#fff';
    container.style.boxShadow = '0px 0px 48px 0px rgba(29, 161, 242, 0.2)';
    container.style.border = '1px solid rgba(29, 161, 242, 0.2)';
    heartIcon.src = 'assets/img/Vectorheart.svg';
  }
});
