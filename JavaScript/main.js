var videoStr = document.getElementById('overlay');
var iframeTag =  document.getElementById('ifr');
document.getElementById('open-video').onclick = () => {
     videoStr.style.display = 'block';  
}
videoStr.onclick = () => {
    videoStr.style.display = 'none';
    
}

document.getElementById('close-video').addEventListener('click', () => {
    videoStr.style.display = 'none';
    iframeTag.getAttribute('src') = ' ';
});

document.addEventListener("scroll", () => {
    if(window.scrollY >=50) {
        document.querySelector("#header").classList.add('header-sm');
        document.querySelector('.nav-logo').style.display ='none';
        document.querySelector('.nav-logo2').style.display ='block';
    }else {
        document.querySelector("#header").classList.remove('header-sm');
        document.querySelector('.nav-logo').style.display ='block';
        document.querySelector('.nav-logo2').style.display ='none';
    }
})
// open nav right
var overLay = document.getElementById('overlay-nav-right');
var navShow = document.querySelector('.navbar-show');
document.querySelector('.header-misc').addEventListener('click', () => {
    overLay.style.display ='block';
    navShow.style.right = '0';
})
const closeNavRight = function() {
    overLay.style.display ='none';
    navShow.style.right = '-310px';
}
overLay.addEventListener('click',closeNavRight);

document.querySelector('.close-btn').addEventListener('click',closeNavRight);
// const counters = document.querySelectorAll('.counter');
// const speed = 200; // The lower the slower

// counters.forEach(counter => {
// 	const updateCount = () => {
// 		const target = +counter.getAttribute('data-target');
// 		const count = +counter.innerText;

// 		// Lower inc to slow and higher to slow
// 		const inc = target / speed;

// 		// console.log(inc);
// 		// console.log(count);

// 		// Check if target is reached
// 		if (count < target) {
// 			// Add inc to count and output in counter
// 			counter.innerText = count + inc;
// 			// Call function every ms
// 			setTimeout(updateCount, 2);
// 		} else {
// 			counter.innerText = target;
// 		}
// 	};

// 	updateCount();
// });



// open menu mobile

var btnopenMenu = document.querySelector('.btn-open-mobile');
var btncloseMenu = document.querySelector('.btn-close-mobile');
var menuHeadMobile = document.querySelector('.menu-head-mobile');
btnopenMenu.addEventListener ('click', () => {
      menuHeadMobile.style.left = '0';
      btnopenMenu.style.display = 'none';
      btncloseMenu.style.display = 'block';
})
const closeMenu = () => {
    menuHeadMobile.style.left = '-80%';
    btnopenMenu.style.display = 'block';
    btncloseMenu.style.display = 'none';
};
btncloseMenu.addEventListener ('click', closeMenu);

var itemCloseMenus = document.querySelectorAll('.close-Menu');
for(var i=0 ; i<itemCloseMenus.length; i++) {
    var itemCloseMenu = itemCloseMenus[i];
    itemCloseMenu.onclick = closeMenu;    
}

var btnaddColors = document.querySelectorAll('.add-color');

btnaddColors.forEach((btnaddColor) => {
    btnaddColor.onclick = function() {
           document.querySelector('.add-color.color-nav-active').classList.remove('color-nav-active');
           this.classList.add('color-nav-active');
        }
})




// Initialize and add the map
function initMap() {
    // The location of Uluru
    const location = { lat: -25.363, lng: 131.044 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: location
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }