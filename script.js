// copy menu for mobile

function copyMenu() {
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;


    // copy inside nav to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    // copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;

};

copyMenu();

// show mobile menu
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site');

menuButton.addEventListener('click', function (e) {
    e.preventDefault();
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function () {
    addclass.classList.remove('showmenu')
})




// show sub menu on mobile 
const submenu = document.querySelectorAll('.has-child .icon-small');
// console.log(submenu)
submenu?.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand')
}

// slider
const swiper = new Swiper('.swiper', {
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});

// show search
const searchButton = document.querySelector('.t-search'),
    tClose = document.querySelector('.search-close'),
    showClass = document.querySelector('.site');
searchButton.addEventListener('click', function (e) {
    e.preventDefault();
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function (e) {
    e.preventDefault();
    showClass.classList.remove('showsearch');
});


// show dpt menu

const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
    dptClass = document.querySelector('.site');

dptButton.addEventListener('click', function (e) {
    e.preventDefault();
    dptClass.classList.toggle('showdpt')
});


// product image slider
var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidersProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});
var productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    thumbs: {
        swiper: productThumb,
    }
});


// stock products bar width percentage
var stocks = document.querySelectorAll('.products .stock');
// console.log(stocks[0].dataset.stock)

for (let x = 0; x < stocks.length; x++) {
    // console.log(x)
    let stock = stocks[x].dataset.stock,
        available = stocks[x].querySelector('.qty-available').innerHTML,
        sold = stocks[x].querySelector('.qty-sold').innerHTML;
    percent = sold * 100 / stock;
    // console.log(stock)

    stocks[x].querySelector('.available').style.width = percent + '%';
}


// show cart on click
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');
console.log(document)
divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if (!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
        }
    }, 250);
});


// close by click outside 
document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divtoShow);
    if (!isClosest && divPopup.classList.contains('show')) {
        divPopup.classList.remove('show');
    }
});


// Show modal on load

window.onload = function () {
    document.querySelector('.site').classList.toggle('showmodal')
}

document.querySelector('.modalclose').addEventListener('click', function () {
    document.querySelector('.site').classList.remove('showmodal')
})