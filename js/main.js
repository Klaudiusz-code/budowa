const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-hidden')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.header__menu__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-hidden');
}
navLink.forEach(n => n.addEventListener('click',linkAction))




window.addEventListener('scroll', ()=>{
    const header = document.querySelector('.header');
    header.classList.toggle('sticky-header', window.scrollY > 0);
});



//   TOLLTIP
tippy('.right__window', {
    content: 'Sprzedaż i montaż Okien',
    placement: 'top',
    arrow: true,
    arrowType: 'round',
    animation: 'perspective',
    theme: 'light',


  });
tippy('.right__door', {
    content: 'Sprzedaż i montaż drzwi',
    placement: 'top',
    arrow: true,
    arrowType: 'round',
    animation: 'perspective',
    theme: 'light',


  });
tippy('.right__solar', {
    content: 'Montaż baterii słonecznych',
    placement: 'top',
    arrow: true,
    arrowType: 'round',
    animation: 'perspective',
    theme: 'light',


  });

  tippy('.right__flooring', {
    content: 'Posadzki',
    placement: 'top',
    arrow: true,
    arrowType: 'round',
    animation: 'perspective',
    theme: 'light',


  });

tippy('.right__roof', {
    content: 'Pokrycia Dachowe',
    placement: 'top',
    arrow: true,
    arrowType: 'round',
    animation: 'perspective',
    theme: 'light',


  });



  //      MAP



  	const map = L.map('map').setView([51.505, -0.09], 13);

			L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFlZGhlbGlsIiwiYSI6ImNsMnEyNTRqejFtaGYzaW11MGI1cnk1NzkifQ.AxrAeoug_z3UjYaUqJUhJg', {
				maxZoom: 18,
				id: 'mapbox/streets-v11',
				tileSize: 512,
				zoomOffset: -1,
        zoomControl: false,
			}).addTo(map);

      // Zoom to 9 when clicking on marker
map.event.addListener(marker,'click',function() {
  map.setZoom(9);
  map.setCenter(marker.getPosition());
});