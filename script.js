console.log('Welcome to my h̶o̶m̶e̶p̶a̶g̶e console!');

let home = {
    btn: document.getElementById('btnHome'),
    div: document.getElementById('home')
}
let about = {
    btn: document.getElementById('btnAbout'),
    div: document.getElementById('about')
}
let projects = {
    btn: document.getElementById('btnProjects'),
    div: document.getElementById('projects')
}
let pages = [home, about, projects]

let utils = new Utils();

pages.forEach(utils.setOnClickNavBtns);

utils.hidePages();
utils.showPage(home);



function Utils() {
    function removeClass (elem, c){
        elem.classList.remove(c);
    }
    function addClass (elem, c){
        elem.classList.add(c);
    }

    return {
        showPage: function(page){
            removeClass(page.div, 'hidden');
            addClass(page.btn, 'selected');
        },
        hidePages: function(){
            pages.forEach(page => {
                addClass(page.div, 'hidden');
                removeClass(page.btn, 'selected');
            });
        },
        setOnClickNavBtns: function(page){
            page.btn.onclick = () => {
                utils.hidePages();
                utils.showPage(page);
            }
        },
    }
}