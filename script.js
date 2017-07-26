let btnHome = document.getElementById('btnHome');
let btnAbout = document.getElementById('btnAbout');
let btnProjects = document.getElementById('btnProjects');

let divHome = document.getElementById('home');
let divAbout = document.getElementById('about');
let divProjects = document.getElementById('projects');

btnHome.onclick = () => {
    hidePages();
    showPage(divHome);
}

btnAbout.onclick = () => {
    hidePages();
    showPage(divAbout);
}

btnProjects.onclick = () => {
    hidePages();
    showPage(divProjects);
}

function showPage(page){
    removeClass(page, 'hidden');
}

function hidePages(){
    addClass(divHome, 'hidden');
    addClass(divAbout, 'hidden');
    addClass(divProjects, 'hidden');
}

function removeClass(e, c){
    e.classList.remove(c);
}

function addClass(e, c){
    e.classList.add(c);
}

hidePages();
showPage(divHome);