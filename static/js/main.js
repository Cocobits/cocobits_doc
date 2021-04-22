console.log("Built with Cocobits")
console.log("github.com/mileeme/cocobits | MIT License")


// Define min-height of site wrapper for sticky footer
const site = document.querySelector('main')
const footer = document.querySelector('footer')

if (footer) {
    let footerHeight = footer.clientHeight
    site.style.minHeight = "calc(100vh - " + footerHeight + "px)"
}

// Change main link color for selected page
const urlPath = window.location.pathname.split('/')[1]
const mainLinks = document.querySelectorAll('#sideNav a')

mainLinks.forEach(link => {
    const linkUrl = link.getAttribute('href').split('/')[1]
    if (urlPath == linkUrl) {
        link.classList.add('color-text-link')
    }
})

// Show and hide dropdown menu
const dropdownButton = document.querySelector('#dropdownButton')
dropdownButton.addEventListener('click', (e) => {
    const dropdownMenu = document.querySelector('#dropdownMenu')
    
    // Toggle show/hide by replacing css class
    if (dropdownMenu.classList.contains('is--visible')) {
        dropdownMenu.classList.replace('is--visible', 'is--hidden')
    } else {
        dropdownMenu.classList.replace('is--hidden', 'is--visible')
    }
})

/*! COCOBITS JS | https://cocobits.github.io */
function tab(){const e=document.querySelector(".tab-menu").children,t=document.querySelector(".tab-contents").children;e[0].classList.add("content--visible"),t[0].classList.add("d-block"),Array.from(t).forEach(e=>{e.classList.contains("d-block")||e.classList.add("d-none")}),Array.from(e).forEach(n=>{n.addEventListener("click",s=>{Array.from(e).forEach(e=>{e.classList.remove("content--visible")}),s.target===n&&n.classList.add("content--visible"),Array.from(t).forEach(e=>{n.dataset.tab===e.dataset.tab?e.classList.replace("d-none","d-block"):e.classList.replace("d-block","d-none")})})})}function accordion(){const e=document.querySelectorAll(".accordion");e.forEach(e=>{e.addEventListener("click",function(){e.classList.toggle("accordion-active"),e.classList.contains("accordion-active")?e.querySelector(".plus").style.setProperty("--plus-after","90deg"):e.querySelector(".plus").style.setProperty("--plus-after","0deg");let t=e.nextElementSibling;t.style.maxHeight?(t.style.maxHeight=null,t.style.padding="0px 16px"):(t.style.maxHeight=`${t.scrollHeight+48}px`,t.style.padding="24px 16px")})})}function carousel(){let e=document.querySelector(".carousel"),t=document.querySelector(".slide-container"),n=document.querySelectorAll(".slide"),s=n.length,l=e.offsetWidth,o=t.offsetHeight,a=s-1,[c,r]=[0,0],i=0,d=0,u=!1,y=document.querySelectorAll(".slide-nav"),m=document.querySelector(".slide-prev"),f=document.querySelector(".slide-next");function p(e){e.preventDefault(),"touchstart"==e.type?c=e.touches[0].clientX:"mousedown"==e.type&&(u=!0,c=e.clientX,t.onmousemove=v,t.onmouseup=L)}function v(e){e.preventDefault(),"touchmove"==e.type?(r=e.touches[0].clientX,i=d*l+(c-r),t.style.transform=`translateX(-${i}px)`):u&&(r=e.clientX,i=d*l+(c-r))}function L(e){e.preventDefault();let n=Math.abs(d*l-i);if("mouseup"!=e.type&&"touchend"!=e.type||n>50&&(c>r&&d<a?d++:c<r&&d>0&&d--),u=!1,t.classList.add("animate-transition"),t.style.transform=`translateX(-${d*l}px)`,y[0]){E(null,d)}}function h(e,n){if(e.preventDefault(),"click"==e.type&&("next"==n&&d<a?d++:"prev"==n&&d>0&&d--),t.classList.add("animate-transition"),t.style.transform=`translateX(-${d*l}px)`,y[0]){E(null,d)}}function E(e,n){null!=e&&(d=e,t.classList.add("animate-transition"),t.style.transform=`translateX(-${d*l}px)`,y.forEach(e=>{e.classList.remove("slide-nav--active")}),y[e].classList.add("slide-nav--active")),null!=n&&(y.forEach(e=>{e.classList.remove("slide-nav--active")}),y[n].classList.add("slide-nav--active"))}function b(e){e.preventDefault(),0==d?(m.style.display="none",f.style.display="block"):d==a?(m.style.display="block",f.style.display="none"):(m.style.display="block",f.style.display="block")}n[0]&&0===o&&requestAnimationFrame(carousel),n.forEach(e=>{e.style.width=`${l}px`}),t.style.width=`${s*l}px`,t.style.height=`${o}px`,t.classList.remove("animate-transition"),t.style.transform="translateX(0px)",y[0]&&y[0].classList.add("slide-nav--active"),m&&f&&(m.style.setProperty("--slide-controller-center",`${o/2}px`),f.style.setProperty("--slide-controller-center",`${o/2}px`),1==s?(m.style.display="none",f.style.display="none"):(m.style.display="none",f.style.display="block")),t.onmousedown=p,t.addEventListener("touchstart",p,!1),t.addEventListener("touchmove",v,!1),t.addEventListener("touchend",L,!1),t.addEventListener("transitionend",b,!1),(m&&f||y[0]&&m&&f)&&(m.addEventListener("click",e=>{h(e,"prev")},!1),f.addEventListener("click",e=>{h(e,"next")},!1)),y[0]&&y.forEach((e,t)=>{let n=t;e.addEventListener("click",e=>{E(n,null),m&&f&&b(e)},!1)})}function scrollX(){const e=document.querySelector(".scrollX"),t=e.offsetLeft;let n,s,l,o,a,c,r=!1;function i(){cancelAnimationFrame(c)}function d(){e.scrollLeft+=a,a*=.95,Math.abs(a)>.75&&(c=requestAnimationFrame(d))}e.addEventListener("mousedown",function(l){l.preventDefault(),r=!0,e.classList.add("scrollX--active"),n=l.clientX-t,s=e.scrollLeft,i()}),e.addEventListener("mousemove",function(c){if(!r)return;c.preventDefault(),l=c.clientX-t,o=l-n;let i=s;e.scrollLeft=s-o,a=e.scrollLeft-i}),e.addEventListener("mouseup",()=>{r=!1,e.classList.remove("scrollX--active"),i(),c=requestAnimationFrame(d)}),e.addEventListener("mouseleave",()=>{r=!1,e.classList.remove("scrollX--active"),e.querySelectorAll("a")&&e.querySelectorAll("a").forEach(e=>{e.classList.remove("disable-pointer")})}),e.addEventListener("wheel",e=>{i()})}document.addEventListener("DOMContentLoaded",function(){document.querySelector(".tab-menu")&&tab(),document.querySelector(".accordion")&&accordion(),document.querySelector(".slide-container")&&carousel(),document.querySelector(".scrollX")&&scrollX()}),window.addEventListener("resize",function(){carousel()});