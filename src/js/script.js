let navBar = document.getElementById('navBar');
let navButtons = document.getElementsByClassName('item');
let cancelButton = document.getElementById('cancel');

setTimeout(() => {
    document.getElementById('load').classList.add('hide');
    setTimeout(() => {
        document.getElementById('load').style.display = 'none'
    }, 1000)
}, 2000);


for (var i = 0; i < navButtons.length; i++) {
    navButtons[i].onclick = function() {
        let preview = document.getElementById(`preview-${this.getElementsByTagName('*')[0].innerHTML.toLowerCase()}`)
        preview.classList.add('show');
        cancelButton.style.display = 'block';
        document.documentElement.style.overflowY = 'hidden';
        document.getElementById('popups').style.zIndex = '100';
    }
}


cancelButton.onclick = function() {
    cancelButton.style.display = 'none';
    let previews = Array.from(document.getElementsByClassName('preview'));
    previews.forEach(e => {
        if (e.classList.contains('show')) e.classList.remove('show');
    });
    document.documentElement.style.overflowY = 'scroll';
    document.getElementById('popups').style.zIndex = '-5';
}

