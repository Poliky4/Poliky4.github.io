console.log('Welcome to my h̶o̶m̶e̶p̶a̶g̶e console! ;)')

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

let utils = new Utils()

// set click events for buttons
pages.forEach(page => {
  page.btn.onclick = e => {
    e.preventDefault();
    utils.hidePages()
    utils.showPage(page)
  }
})

utils.hidePages()      // hide all pages
utils.showPage(home)   // and show home

function Utils () {
    // private
  function removeClass (elem, c) {
    elem.classList.remove(c)
  }
  function addClass (elem, c) {
    elem.classList.add(c)
  }

    // public
  return {
    showPage: function (page) {
      removeClass(page.div, 'hidden')
      addClass(page.btn, 'selected')
    },
    hidePages: function () {
      pages.forEach(page => {
        addClass(page.div, 'hidden')
        removeClass(page.btn, 'selected')
      })
    }
  }
}
