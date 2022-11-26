var link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';

// These ICONS Are Coming From Fontawesome Official CDN.
// All Thanks To Fontawesome.com For These Icons.

document.getElementsByTagName('HEAD')[0].appendChild(link);

document.head.insertAdjacentHTML("beforeend", `<style>.icon{color: #fff; font-size: 1.15rem;}.hidden{opacity:0%;z-index:999999999999999;}</style>`)

const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");
const icon_arc = document.getElementById('top_btn_arc');
const icon_arrow = document.getElementById('top_btn_arrow');

icon_arc.innerHTML += "<i class='fa-solid fa-chevron-up icon'></i>";
icon_arrow.innerHTML += "<i class='fa-solid fa-arrow-up icon'></i>";

const scrollContainer = () => {
    return document.documentElement || document.body;
};

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0 });
});

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden")
    } else {
        backToTopButton.classList.add("hidden")
    }
});

// (c) Coding Vlogs For Dev ‧ All rights reserved.
