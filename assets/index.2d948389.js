import {
    o as l,
    c as r,
    a as v,
    b as _,
    d as a,
    F as h,
    r as g,
    t as f,
    e as u,
    f as d,
    g as b
} from "./vendor.13e397f4.js";
const k = function () {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) c(s);
    new MutationObserver(s => {
        for (const e of s)
            if (e.type === "childList")
                for (const t of e.addedNodes) t.tagName === "LINK" && t.rel === "modulepreload" && c(t)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(s) {
        const e = {};
        return s.integrity && (e.integrity = s.integrity), s.referrerpolicy && (e.referrerPolicy = s.referrerpolicy), s.crossorigin === "use-credentials" ? e.credentials = "include" : s.crossorigin === "anonymous" ? e.credentials = "omit" : e.credentials = "same-origin", e
    }

    function c(s) {
        if (s.ep) return;
        s.ep = !0;
        const e = n(s);
        fetch(s.href, e)
    }
};
k();
var y = "/adonay-douglas/assets/logo.06fa9d8d.png",
    m = "/adonay-douglas/assets/adonay-avatar.a684865b.jpg",
    w = "/adonay-douglas/assets/undraw_programming_re_kg9v.4c3dd25f.svg",
    p = (i, o) => {
        const n = i.__vccOpts || i;
        for (const [c, s] of o) n[c] = s;
        return n
    };
const $ = {},
    x = {
        class: "hero-top",
        id: "home"
    },
    A = v('<div class="dev-hero"><div class="hero-avatar-content"><div class="hero-avatar"><img src="' + m + '" alt=""></div></div><div class="hero-description"><h2 id="hero-description">Full Stack Web Developer</h2><p>Sou desenvolvedor front-end e beck-end em Andradas, MG. Tenho uma paix\xE3o s\xE9ria por efeitos de interface do usu\xE1rio, anima\xE7\xF5es e cria\xE7\xE3o de experi\xEAncias de usu\xE1rio intuitivas e din\xE2micas. Vamos fazer algo especial.</p><a href="#sobre">Me conhe\xE7a</a></div></div><div class="imgBx"><img src="' + w + '" alt=""></div>', 2),
    P = [A];

function D(i, o) {
    return l(), r("section", x, P)
}
var S = p($, [
        ["render", D]
    ]),
    C = "/adonay-douglas/assets/fast.187b86b8.png",
    L = "/adonay-douglas/assets/responsive.f74265ef.png",
    M = "/adonay-douglas/assets/intuitive.0a013cdb.png",
    V = "/adonay-douglas/assets/dynamic.2bf6afaf.png",
    F = "/adonay-douglas/assets/avatar-poligono.8781c57e.png",
    N = "/adonay-douglas/assets/undraw_static_assets_rpm6.80c613e3.svg";
const H = {},
    O = {
        class: "about container",
        id: "sobre"
    },
    T = v('<div class="about-header"><h2>Sobre</h2></div><div class="about-svg"></div><div class="about-content"><article><div class="about-img"><img src="' + C + '" alt=""></div><h2>R\xE1pido</h2><p>Tempos de carregamento r\xE1pidos e intera\xE7\xE3o sem atrasos.</p><div class="article-footer"></div></article><article><div class="about-img"><img src="' + L + '" alt=""></div><h2>Responsivo</h2><p>Meus layouts funcionar\xE3o em qualquer dispositivo, grande ou pequeno.</p><div class="article-footer"></div></article><article><div class="about-img"><img src="' + M + '" alt=""></div><h2>Intuitivo</h2><p>Forte prefer\xEAncia por UX/UI. Intuitivo, moderno e f\xE1cil de usar.</p><div class="article-footer"></div></article><article><div class="about-img"><img src="' + V + '" alt=""></div><h2>Din\xE2mico</h2><p>Os sites n\xE3o precisam ser est\xE1ticos, adoro dar vida \xE0s p\xE1ginas.</p><div class="article-footer"></div></article></div><div class="about-skills"><div class="about-skills-grid"><aside class="skills-left"><img src="' + F + '" alt=""><h2>Quem \xE9 Adonay Douglas?</h2><p>Sou desenvolvedor front-end e beck-end em Andradas, MG. Tenho uma paix\xE3o s\xE9ria por efeitos de interface do usu\xE1rio, anima\xE7\xF5es e cria\xE7\xE3o de experi\xEAncias de usu\xE1rio intuitivas e din\xE2micas. <br><span>Vamos fazer algo especial.</span></p></aside><aside class="skill-img"><img src="' + N + '" alt=""></aside></div><aside class="skills"><div class="dev-skill-content"><span class="linguage"> HTML </span><div class="dev-skill"></div><span class="skill"> 90% </span></div><div class="dev-skill-content"><span class="linguage"> CSS </span><div class="dev-skill"></div><span class="skill"> 90% </span></div><div class="dev-skill-content"><span class="linguage"> JS </span><div class="dev-skill"></div><span class="skill"> 60% </span></div><div class="dev-skill-content"><span class="linguage"> PHP </span><div class="dev-skill"></div><span class="skill"> 80% </span></div><div class="dev-skill-content"><span class="linguage"> MySQL </span><div class="dev-skill"></div><span class="skill"> 50% </span></div><div class="dev-skill-content"><span class="linguage"> Photoshop </span><div class="dev-skill"></div><span class="skill"> 30% </span></div></aside></div><div class="about-skills-footer"></div>', 5),
    q = [T];

function B(i, o) {
    return l(), r("section", O, q)
}
var I = p(H, [
    ["render", B]
]);
const G = _.create({
    baseURL: "https://depraved-alternatio.000webhostapp.com/"
});
var R = {
        getPosts: () => G.get("posts")
    },
    U = new Date;
const j = {
        data() {
            return {
                posts: [],
                year: U.getFullYear()
            }
        },
        mounted() {
            this.getPosts()
        },
        methods: {
            getPosts() {
                R.getPosts().then(i => {
                    this.posts = i.data
                })
            }
        }
    },
    z = {
        class: "portifolio",
        id: "portf\xF3lio"
    },
    E = a("div", {
        class: "about-header"
    }, [a("h2", null, "Portf\xF3lio")], -1),
    Q = {
        class: "portifolio-content container"
    },
    W = {
        class: "portifolio-image"
    },
    J = ["src", "alt"],
    K = {
        class: "portifolio-body"
    },
    X = ["href", "alt"],
    Y = a("i", {
        class: "fas fa-door-open"
    }, null, -1),
    Z = u(" Visitar Website "),
    ss = [Y, Z],
    as = a("div", {
        class: "article-footer"
    }, null, -1);

function es(i, o, n, c, s, e) {
    return l(), r("section", z, [E, a("div", Q, [(l(!0), r(h, null, g(s.posts, t => (l(), r("article", {
        key: t.id
    }, [a("div", W, [a("img", {
        src: t.cover,
        alt: t.title
    }, null, 8, J)]), a("div", K, [a("h2", null, f(t.title), 1), a("p", null, f(t.subtitle), 1), a("a", {
        href: t.uri,
        target: "_blank",
        alt: t.title
    }, ss, 8, X)]), as]))), 128))])])
}
var ts = p(j, [
    ["render", es]
]);
const is = {},
    os = {
        class: "contact",
        id: "contato"
    },
    ls = v('<div class="blur"><div class="container content"><div class="contact-content"><div class="contact-grid"><aside class="content-left"><div class="hero-avatar" id="contact-avatar"><img src="' + m + '" alt="Adonay Douglas Avatar" id="contact-photo"></div></aside><aside class="content-right"><div class="contact-header"><h2>Contato</h2><p>Veja como entrar em contato comigo:</p> <br></div><div class="contacts"><div class="contact-item"><i class="fab fa-facebook-f"></i><a href="https://www.facebook.com/adonay.douglas.7/" target="_blank">/adonay.douglas.7</a> <br><br></div><div class="contact-item"><i class="fab fa-instagram"></i><a href="https://www.instagram.com/donay_douglas/" target="_blank">/@donay_douglas/</a> <br><br></div><div class="contact-item"><i class="fab fa-google-plus-g"></i><a href="mailto:adonaypowermetal@gmail.com">adonaypowermetal@gmail.com</a> <br><br></div><div class="contact-item"><i class="fab fa-whatsapp"></i><a href="https://web.whatsapp.com/send?phone=5535991540754" target="_blank">(35) 99154-0754</a> <br><br></div></div></aside></div></div><div class="article-footer"></div></div></div>', 1),
    rs = [ls];

function ns(i, o) {
    return l(), r("section", os, rs)
}
var cs = p(is, [
    ["render", ns]
]);
const ds = v('<header class="header"><div class="logo"><a href="/" title="Adonay Douglas"><img src="' + y + '" alt="Adonay Douglas"><h1>Adonay Douglas</h1></a></div><div class="navbar" id="nav"><div class="header-links"><ul><li><a class="active" href="#home" title="Home">Home</a></li><li><a href="#sobre" title="Sobre">Sobre</a></li><li><a href="#portf\xF3lio" title="Portf\xF3lio">Portf\xF3lio</a></li><li><a href="#contato" id="Contato" title="Contato">Contato</a></li></ul></div><div class="social-medias"><div class="pretty p-switch p-fill"><input type="checkbox" id="darkmod"><div class="state"><label class="darkmode-btn">DarkMode</label></div></div><a href="https://www.facebook.com/adonay.douglas.7/" title="Facebook de Adonay Douglas"><i class="fab fa-facebook-f"></i></a><a href="https://www.instagram.com/donay_douglas/" title="instagram de Adonay Douglas"><i class="fab fa-instagram"></i></a><a href="https://github.com/Abominattion" title="GitHub de Adonay Douglas"><i class="fab fa-github"></i></a><a href="https://codepen.io/abominattion" title="CodePen de Adonay Douglas"><i class="fab fa-codepen"></i></a></div></div><button class="btn-header-mobile" id="btn-mobile"><span class="hamburger"></span></button></header>', 1),
    vs = a("footer", null, [a("div", {
        class: "copyright"
    }, [a("p", null, [a("small", null, [u(" Copyright \xA9 Todos os direitos reservados "), a("strong", null, [a("a", {
        href: "https://www.facebook.com/adonay.douglas.7/",
        target: "_blank"
    }, [a("strong", null, "Adonay Douglas")])]), u(), a("i", {
        class: "icon-heart text-danger",
        "aria-hidden": "true"
    })])])])], -1),
    ps = {
        setup(i) {
            return (o, n) => (l(), r(h, null, [ds, d(S), d(I), d(ts), d(cs), vs], 64))
        }
    };
b(ps).mount("#app");

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
