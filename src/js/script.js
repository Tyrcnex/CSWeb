let navBar = document.getElementById('navBar');
let navButtons = document.getElementsByClassName('item');
let cancelButton = document.getElementById('cancel');
let popUpSection = document.getElementById('popups');

setTimeout(() => {
    document.getElementById('load').classList.add('hide');
    setTimeout(() => {
        document.getElementById('load').style.display = 'none'
    }, 1000)
}, 2000);


for (var i = 0; i < navButtons.length; i++) {
    navButtons[i].onclick = function() {
        let previews = [...document.getElementsByClassName('popUpShow')];
        let thisPreviewID = `preview-${this.getElementsByTagName('p')[0].innerHTML.toLowerCase()}`;
        previews.filter(e => e.id !== thisPreviewID).forEach(e => e.classList.remove('popUpShow'));
        document.getElementById(thisPreviewID).classList.add('popUpShow');

        cancelButton.style.display = 'block';
        document.documentElement.style.overflowY = 'hidden';
        popUpSection.style.zIndex = '100';
    }
}


cancelButton.onclick = function() {
    cancelButton.style.display = 'none';
    let previews = Array.from(document.getElementsByClassName('popup'));
    previews.forEach(e => {
        if (e.classList.contains('popUpShow')) e.classList.remove('popUpShow');
    });
    document.documentElement.style.overflowY = 'scroll';
    popUpSection.style.zIndex = '-5';
}