var T = (a, e) => () => (e || a((e = { exports: {} }).exports, e), e.exports); import { o as l, c as r, a as v, b as S, d as s, F as h, r as x, t as p, e as m, f as d, g as H } from "./vendor.13e397f4.js"; var xe = T((Ee, L) => { const A = function () { const e = document.createElement("link").relList; if (e && e.supports && e.supports("modulepreload")) return; for (const t of document.querySelectorAll('link[rel="modulepreload"]')) n(t); new MutationObserver(t => { for (const o of t) if (o.type === "childList") for (const c of o.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && n(c) }).observe(document, { childList: !0, subtree: !0 }); function i(t) { const o = {}; return t.integrity && (o.integrity = t.integrity), t.referrerpolicy && (o.referrerPolicy = t.referrerpolicy), t.crossorigin === "use-credentials" ? o.credentials = "include" : t.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o } function n(t) { if (t.ep) return; t.ep = !0; const o = i(t); fetch(t.href, o) } }; A(); var E = "/adonay-douglas/assets/logo.06fa9d8d.png", f = "/adonay-douglas/assets/adonay-avatar.a684865b.jpg", P = "/adonay-douglas/assets/undraw_programming_re_kg9v.4c3dd25f.svg", u = (a, e) => { const i = a.__vccOpts || a; for (const [n, t] of e) i[n] = t; return i }; const D = {}, C = { class: "hero-top", id: "home" }, I = v('<div class="dev-hero"><div class="hero-avatar-content"><div class="hero-avatar"><img src="' + f + '" alt=""></div></div><div class="hero-description"><h2 id="hero-description">Full Stack Web Developer</h2><p>Sou desenvolvedor front-end e beck-end em Andradas, MG. Tenho uma paix\xE3o s\xE9ria por efeitos de interface do usu\xE1rio, anima\xE7\xF5es e cria\xE7\xE3o de experi\xEAncias de usu\xE1rio intuitivas e din\xE2micas. Vamos fazer algo especial.</p><a href="#sobre">Me conhe\xE7a</a></div></div><div class="imgBx"><img src="' + P + '" alt=""></div>', 2), B = [I]; function q(a, e) { return l(), r("section", C, B) } var N = u(D, [ ["render", q] ]), O = "/adonay-douglas/assets/fast.187b86b8.png", V = "/adonay-douglas/assets/responsive.f74265ef.png", F = "/adonay-douglas/assets/intuitive.0a013cdb.png", U = "/adonay-douglas/assets/dynamic.2bf6afaf.png", G = "/adonay-douglas/assets/avatar-poligono.8781c57e.png", R = "/adonay-douglas/assets/undraw_static_assets_rpm6.80c613e3.svg"; const W = {}, j = { class: "about container", id: "sobre" }, z = v('<div class="about-header"><h2>Sobre</h2></div><div class="about-svg"></div><div class="about-content"><article><div class="about-img"><img src="' + O + '" alt=""></div><h2>R\xE1pido</h2><p>Tempos de carregamento r\xE1pidos e intera\xE7\xE3o sem atrasos.</p><div class="article-footer"></div></article><article><div class="about-img"><img src="' + V + '" alt=""></div><h2>Responsivo</h2><p>Meus layouts funcionar\xE3o em qualquer dispositivo, grande ou pequeno.</p><div class="article-footer"></div></article><article><div class="about-img"><img src="' + F + '" alt=""></div><h2>Intuitivo</h2><p>Forte prefer\xEAncia por UX/UI. Intuitivo, moderno e f\xE1cil de usar.</p><div class="article-footer"></div></article><article><div class="about-img"><img src="' + U + '" alt=""></div><h2>Din\xE2mico</h2><p>Os sites n\xE3o precisam ser est\xE1ticos, adoro dar vida \xE0s p\xE1ginas.</p><div class="article-footer"></div></article></div><div class="about-skills"><div class="about-skills-grid"><aside class="skills-left"><img src="' + G + '" alt=""><h2>Quem \xE9 Adonay Douglas?</h2><p>Sou desenvolvedor front-end e beck-end em Andradas, MG. Tenho uma paix\xE3o s\xE9ria por efeitos de interface do usu\xE1rio, anima\xE7\xF5es e cria\xE7\xE3o de experi\xEAncias de usu\xE1rio intuitivas e din\xE2micas. <br><span>Vamos fazer algo especial.</span></p></aside><aside class="skill-img"><img src="' + R + '" alt=""></aside></div><aside class="skills"><div class="dev-skill-content"><span class="linguage"> HTML </span><div class="dev-skill"></div><span class="skill"> 90% </span></div><div class="dev-skill-content"><span class="linguage"> CSS </span><div class="dev-skill"></div><span class="skill"> 90% </span></div><div class="dev-skill-content"><span class="linguage"> JS </span><div class="dev-skill"></div><span class="skill"> 60% </span></div><div class="dev-skill-content"><span class="linguage"> PHP </span><div class="dev-skill"></div><span class="skill"> 80% </span></div><div class="dev-skill-content"><span class="linguage"> MySQL </span><div class="dev-skill"></div><span class="skill"> 50% </span></div><div class="dev-skill-content"><span class="linguage"> Photoshop </span><div class="dev-skill"></div><span class="skill"> 30% </span></div></aside></div><div class="about-skills-footer"></div>', 5), Q = [z]; function J(a, e) { return l(), r("section", j, Q) } var K = u(W, [ ["render", J] ]); const X = S.create({ baseURL: "https://depraved-alternatio.000webhostapp.com/" }); var Y = { getPosts: () => X.get("posts") }, Z = new Date; const ee = { data() { return { posts: [], year: Z.getFullYear() } }, mounted() { this.getPosts() }, methods: { getPosts() { Y.getPosts().then(a => { this.posts = a.data }) } } }, te = { class: "portifolio", id: "portf\xF3lio" }, ae = s("div", { class: "about-header" }, [s("h2", null, "Portf\xF3lio")], -1), se = { class: "portifolio-content container" }, oe = { class: "portifolio-image" }, ie = ["src", "alt"], ne = { class: "portifolio-body" }, ce = ["href", "alt"], le = s("i", { class: "fas fa-door-open" }, null, -1), re = m(" Visitar Website "), de = [le, re], ve = s("div", { class: "article-footer" }, null, -1); function ue(a, e, i, n, t, o) { return l(), r("section", te, [ae, s("div", se, [(l(!0), r(h, null, x(t.posts, c => (l(), r("article", { key: c.id }, [s("div", oe, [s("img", { src: c.cover, alt: c.title }, null, 8, ie)]), s("div", ne, [s("h2", null, p(c.title), 1), s("p", null, p(c.subtitle), 1), s("a", { href: c.uri, target: "_blank", alt: c.title }, de, 8, ce)]), ve]))), 128))])]) } var me = u(ee, [ ["render", ue] ]); const pe = {}, he = { class: "contact", id: "contato" }, fe = v('<div class="blur"><div class="container content"><div class="contact-content"><div class="contact-grid"><aside class="content-left"><div class="hero-avatar" id="contact-avatar"><img src="' + f + '" alt="Adonay Douglas Avatar" id="contact-photo"></div></aside><aside class="content-right"><div class="contact-header"><h2>Contato</h2><p>Veja como entrar em contato comigo:</p> <br></div><div class="contacts"><div class="contact-item"><i class="fab fa-facebook-f"></i><a href="https://www.facebook.com/adonay.douglas.7/" target="_blank">/adonay.douglas.7</a> <br><br></div><div class="contact-item"><i class="fab fa-instagram"></i><a href="https://www.instagram.com/donay_douglas/" target="_blank">/@donay_douglas/</a> <br><br></div><div class="contact-item"><i class="fab fa-google-plus-g"></i><a href="mailto:adonaypowermetal@gmail.com">adonaypowermetal@gmail.com</a> <br><br></div><div class="contact-item"><i class="fab fa-whatsapp"></i><a href="https://web.whatsapp.com/send?phone=5535991540754" target="_blank">(35) 99154-0754</a> <br><br></div></div></aside></div></div><div class="article-footer"></div></div></div>', 1), ge = [fe]; function _e(a, e) { return l(), r("section", he, ge) } var be = u(pe, [ ["render", _e] ]); const ye = v('<header class="header"><div class="logo"><a href="/" title="Adonay Douglas"><img src="' + E + '" alt="Adonay Douglas"><h1>Adonay Douglas</h1></a></div><div class="navbar" id="nav"><div class="header-links"><ul><li><a class="active" href="#home" title="Home">Home</a></li><li><a href="#sobre" title="Sobre">Sobre</a></li><li><a href="#portf\xF3lio" title="Portf\xF3lio">Portf\xF3lio</a></li><li><a href="#contato" id="Contato" title="Contato">Contato</a></li></ul></div><div class="social-medias"><div class="pretty p-switch p-fill"><input type="checkbox" id="darkmod"><div class="state"><label class="darkmode-btn">DarkMode</label></div></div><a href="https://www.facebook.com/adonay.douglas.7/" title="Facebook de Adonay Douglas"><i class="fab fa-facebook-f"></i></a><a href="https://www.instagram.com/donay_douglas/" title="instagram de Adonay Douglas"><i class="fab fa-instagram"></i></a><a href="https://github.com/Abominattion" title="GitHub de Adonay Douglas"><i class="fab fa-github"></i></a><a href="https://codepen.io/abominattion" title="CodePen de Adonay Douglas"><i class="fab fa-codepen"></i></a></div></div><button class="btn-header-mobile" id="btn-mobile"><span class="hamburger"></span></button></header>', 1), ke = s("footer", null, [s("div", { class: "copyright" }, [s("p", null, [s("small", null, [m(" Copyright \xA9 Todos os direitos reservados "), s("strong", null, [s("a", { href: "https://www.facebook.com/adonay.douglas.7/", target: "_blank" }, [s("strong", null, "Adonay Douglas")])]), m(), s("i", { class: "icon-heart text-danger", "aria-hidden": "true" })])])])], -1), $e = { setup(a) { return (e, i) => (l(), r(h, null, [ye, d(N), d(K), d(me), d(be), ke], 64)) } }; L.exports = { baseUrl: "/adonay-douglas" }; H($e).mount("#app"); $(".loader").delay(1e3).fadeOut("slow"); $("#overlayer").delay(1e3).fadeOut("slow"); function g(a) { const e = a.innerHTML.split(""); a.innerHTML = "", e.forEach((i, n) => { setTimeout(() => a.innerHTML += i, 75 * n) }) } const _ = document.querySelector("#hero-description"); g(_); setTimeout(() => g(_), 1e4); const we = document.getElementById("btn-mobile"); we.addEventListener("click", Le); function Le(a) { const e = document.getElementById("btn-mobile"); e.classList.toggle("active"), e.classList.contains("active") } const b = document.getElementById("btn-mobile"); b.addEventListener("click", Me); function Me(a) { const e = document.getElementById("nav"); e.classList.toggle("nav-mobile"), e.classList.contains("nav-mobile") } document.getElementById("btn-mobile"); b.addEventListener("click", Te); function Te(a) { const e = document.getElementById("body"); e.classList.toggle("bg-overlay"), e.classList.contains("bg-overlay") } var y = "#ffffff", k = "#141414"; localStorage.getItem("idmode") == null && (document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${y}">`); const w = document.querySelector("#darkmod"); w.addEventListener("click", () => { if (document.documentElement.classList.toggle("darkmode"), document.documentElement.classList.contains("darkmode")) { localStorage.setItem("idmode", !0), document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${k}">`, document.querySelector("[name='theme-color']").remove(); return } localStorage.removeItem("idmode"), document.querySelector("[name='theme-color']").remove(), document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${y}">` }); const Se = localStorage.getItem("idmode"); Se && (document.documentElement.classList.add("darkmode"), document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${k}">`, w.checked = !0); debounce = function (a, e, i) { var n; return function () { var t = this, o = arguments, c = function () { n = null, i || a.apply(t, o) }, M = i && !n; clearTimeout(n), n = setTimeout(c, e), M && a.apply(t, o) } }; $("section").each(function () { var a = $(this).height(), e = $(this).offset().top, i = $("header").innerHeight(), n = $(this).attr("id"), t = $('a[href="#' + n + '"]'); $(window).scroll(debounce(function () { var o = $(window).scrollTop(); e - i < o && e + a - i > o ? t.addClass("active") : t.removeClass("active") }, 0)) }) }); export default xe();
