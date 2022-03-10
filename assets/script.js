$(".loader").delay(1000).fadeOut("slow");
$("#overlayer").delay(1000).fadeOut("slow");

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

const titulo = document.querySelector('#hero-description');
typeWriter(titulo);
setTimeout(() => typeWriter(titulo), 10000);

const btnMobile = document.getElementById('btn-mobile');
btnMobile.addEventListener('click', toggleMenu);

function toggleMenu(event) {
  const btn = document.getElementById('btn-mobile');
  btn.classList.toggle('active');
  const active = btn.classList.contains('active');
}

/////////
const btnMobile2 = document.getElementById('btn-mobile');
btnMobile2.addEventListener('click', toggleMenu2);

function toggleMenu2(event) {
  const nav = document.getElementById('nav');
  nav.classList.toggle('nav-mobile');
  const active = nav.classList.contains('nav-mobile');
}

//////
/////////
const btnMobile3 = document.getElementById('btn-mobile');
btnMobile2.addEventListener('click', toggleMenu3);

function toggleMenu3(event) {
  const nav = document.getElementById('body');
  nav.classList.toggle('bg-overlay');
  const active = nav.classList.contains('bg-overlay');
}

var clearcolor = '#ffffff'
var darkcolor = '#141414'

if (localStorage.getItem('idmode') == null) {
  document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${clearcolor}">`
}

const nightMode = document.querySelector('#darkmod')
nightMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('darkmode')

  if (document.documentElement.classList.contains('darkmode')) {
    localStorage.setItem('idmode', true)
    document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${darkcolor}">`
    document.querySelector("[name='theme-color']").remove()
    return
  }

  localStorage.removeItem('idmode')
  document.querySelector("[name='theme-color']").remove()
  document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${clearcolor}">`
})

const nightModeStorage = localStorage.getItem('idmode')
if (nightModeStorage) {
  document.documentElement.classList.add('darkmode')
  document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${darkcolor}">`
  nightMode.checked = true
}

// Debounce do Lodash
debounce = function (func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

// Mudar para active o menu de acordo com a área
$('section').each(function () {
  var height = $(this).height(),
    offsetTop = $(this).offset().top,
    menuHeight = $('header').innerHeight(),
    id = $(this).attr('id'),
    $itemMenu = $('a[href="#' + id + '"]');

  $(window).scroll(debounce(function () {
    var scrollTop = $(window).scrollTop();
    if (offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
      $itemMenu.addClass('active');
    } else {
      $itemMenu.removeClass('active');
    }
  }, 0));
});