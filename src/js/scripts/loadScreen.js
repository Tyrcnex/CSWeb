let navBarGenerated = false;
setTimeout(() => {
    document.getElementById('load').classList.add('hide');
    if (fetchedNavBar) loadNavbar();
    setTimeout(() => {
        document.getElementById('load').style.display = 'none';
        if (fetchedNavBar && !navBarGenerated) run();
        if (!fetchedNavBar) {
            const waitUntilRun = setInterval(() => {
                if (fetchedNavBar) {
                    loadNavbar();
                    clearInterval(waitUntilRun);
                }
            }, 3000);
        }
    }, 1000);
}, 2000);