function menubar(x) {
    x.classList.toggle("change");

    let myMenu = document.getElementById("myMenu");
    if (myMenu.className === 'menu') {
        myMenu.className += ' menu-active';
    } else {
        myMenu.className = 'menu';
    }
}

function closeMenu() {
    let myMenu = document.getElementById("myMenu");
    if (myMenu.className === 'menu-active') {
        myMenu.className = 'menu';
        let menuButton = document.querySelector(".menu-button");
        if (menuButton) {
            menuButton.classList.remove("change");
        }
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        closeMenu();

        const href = this.getAttribute('href');
        if (href && href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                smoothScrollTo(offsetPosition, 800);
            }
        }
    });
});

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
