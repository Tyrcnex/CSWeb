function loadNavbar() {
    navBarGenerated = true;
    let navButtons = [...document.getElementsByClassName('item')];
    let cancelButton = document.getElementById('cancel');
    let popUpSection = document.getElementById('popups');

    document.getElementById('load').style.display = 'none';
    htmlElement.style.overflowY = 'scroll';

    //! DEBUG SETTINGS
    if (debug) {
        // Show popups on load
        let debugPopUp = 'explore'; // Empty for no popup, name of popup otherwise
        if (debugPopUp.length) showPopUp(debugPopUp);
    } else {

    }

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
    
    function showPopUp(id) {
        let previews = [...document.getElementsByClassName('popUpShow')];
        let thisPreviewID = `preview-${id}`;
        previews.filter(e => e.id !== thisPreviewID).forEach(e => e.classList.remove('popUpShow'));
        document.getElementById(thisPreviewID).classList.add('popUpShow');
    
        navButtons.forEach(e => e.classList.remove('buttonActivate'));
        navButtons.find(e => e.getElementsByTagName('p')[0].innerHTML.toLowerCase() === id).classList.add('buttonActivate');
    
        cancelButton.style.display = 'block';
        htmlElement.style.overflowY = 'hidden';
        popUpSection.style.zIndex = '100';
    }
    
    for (var i = 0; i < navButtons.length; i++) {
        navButtons[i].onclick = function() {
            if (this.classList.contains('buttonActivate')) {
                cancelFunc();
            } else {
                showPopUp(this.getElementsByTagName('p')[0].innerHTML.toLowerCase());
            }
        }
    }
    
    cancelButton.onclick = cancelFunc;
}