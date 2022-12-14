let htmlElement = document.documentElement;

let navBar = document.getElementById('navBar');
let navButtons = [...document.getElementsByClassName('item')];
let cancelButton = document.getElementById('cancel');
let popUpSection = document.getElementById('popups');

htmlElement.style.overflowY = 'hidden';
popUpSection.style.zIndex = '100'; // ! REMOVE LATER

/*
setTimeout(() => {
    document.getElementById('load').classList.add('hide');
    setTimeout(() => {
        document.getElementById('load').style.display = 'none';
        htmlElement.style.overflowY = 'scroll';
    }, 1000)
}, 2000); */

function cancelFunc() {
    cancelButton.style.display = 'none';
    let previews = Array.from(document.getElementsByClassName('popup'));
    previews.forEach(e => {
        if (e.classList.contains('popUpShow')) e.classList.remove('popUpShow');
    });
    navButtons.forEach(e => {
        if (e.classList.contains('buttonActivate')) e.classList.remove('buttonActivate');
    })
    htmlElement.style.overflowY = 'scroll';
    popUpSection.style.zIndex = '-5';
}

for (var i = 0; i < navButtons.length; i++) {
    navButtons[i].onclick = function() {
        if (this.classList.contains('buttonActivate')) {
            cancelFunc();
        } else {
            let previews = [...document.getElementsByClassName('popUpShow')];
            let thisPreviewID = `preview-${this.getElementsByTagName('p')[0].innerHTML.toLowerCase()}`;
            previews.filter(e => e.id !== thisPreviewID).forEach(e => e.classList.remove('popUpShow'));
            document.getElementById(thisPreviewID).classList.add('popUpShow');

            navButtons.forEach(e => e.classList.remove('buttonActivate'));
            this.classList.add('buttonActivate');

            cancelButton.style.display = 'block';
            htmlElement.style.overflowY = 'hidden';
            popUpSection.style.zIndex = '100';
        }
    }
}

cancelButton.onclick = cancelFunc;