console.log("Built with Cocobits")
console.log("github.com/mileeme/cocobits | MIT License | v 1.0.0")


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


