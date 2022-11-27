const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const icon_arc = document.querySelector('.back-to-top');
var link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';

// These ICONS Are Coming From Fontawesome Official CDN.
// All Thanks To Fontawesome.com For These Icons.

document.getElementsByTagName('HEAD')[0].appendChild(link);

// Some CSS Form Our Side.
document.head.insertAdjacentHTML("beforeend", `<style>.icon{color: #fff; font-size: 1.15rem;}.hidden{cursor:context-menu;opacity:0%;z-index:999999999999999;}</style>`)

// Icon List.
icon_arc.innerHTML += "<i class='fa-solid fa-arrow-up icon'></i>";

const scrollContainer = () => {
    return document.documentElement || document.body;
};

// Page Back To Top.
backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0 });
    console.log('Scroll To Top CDN Comes From codingvlogs.com');
});

// Hide Button On Top.
document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden")
    } else {
        backToTopButton.classList.add("hidden")
    }
});

// (c) Coding Vlogs For Dev ‧ All rights reserved.
