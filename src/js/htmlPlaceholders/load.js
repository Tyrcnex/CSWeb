let loadFetched = false;
fetch('src/pages/reusables/load.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#loadPlaceholder");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
}).then(() => {
    loadFetched = true;
})

// Your CSS as text
let css = document.createElement("style");
css.innerHTML = `* { cursor: url('https://imgur.com/a/0E9Wh2C'),auto; }`;
document.head.appendChild(css);