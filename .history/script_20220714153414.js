const btn = document.querySelector('socialMedia');
const popup = document.querySelector('popup');

const showPopup = () => {
    popup.classList.toggle(hide);
}

btn.addEventListener('click', showPopup);