console.log('Welcome to my h̶o̶m̶e̶p̶a̶g̶e console! ;)');

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

// set click events for buttons
pages.forEach(page => {
    page.btn.onclick = () => {
        utils.hidePages();
        utils.showPage(page);
    }
});

utils.hidePages();      // hide all pages
utils.showPage(home);   // and show home

let webstatsData = JSON.stringify({time: new Date(), browser: navigator.appName, platform: navigator.platform});
// one way http request to my Raspberry Pi to log visits
let webstatsRequest = new XMLHttpRequest();
webstatsRequest.open('POST', 'https://webstats.molin.ninja', true); // true for async
webstatsRequest.setRequestHeader("Content-Type", "text/plain");
webstatsRequest.send(webstatsData);
webstatsRequest.abort(); // this is what makes it one way

function Utils() {
    
    // private
    function removeClass (elem, c){
        elem.classList.remove(c);
    }
    function addClass (elem, c){
        elem.classList.add(c);
    }

    // public
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
    }
}