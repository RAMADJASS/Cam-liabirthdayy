
/* =========================================
   CAMELIA ADIKO - INTERACTIONS
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // 1. BOUTON D'ACCUEIL
    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", function () {
            document.getElementById("message").scrollIntoView({
                behavior: "smooth"
            });
        });
    }


    // 2. ANIMATIONS AU DEFILEMENT
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }


    // 3. OUVERTURE DU CADEAU
    const giftButton = document.getElementById("giftButton");
    const giftContainer = document.getElementById("giftContainer");
    const hiddenMessage = document.getElementById("hiddenMessage");

    if (giftButton) {

        giftButton.addEventListener("click", function () {

            giftContainer.style.display = "none";

            hiddenMessage.classList.add("show");

            createHeartExplosion();

            setTimeout(function () {
                hiddenMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 200);

        });

    }


    // 4. PETITS COEURS FLOTTANTS
    const floatingHearts = document.getElementById("floatingHearts");

    function createFloatingHeart() {

        if (!floatingHearts) return;

        const heart = document.createElement("span");

        heart.classList.add("floating-heart");

        heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.fontSize = (12 + Math.random() * 18) + "px";

        heart.style.animationDuration = (6 + Math.random() * 5) + "s";

        floatingHearts.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 11000);

    }

    // Un cœur toutes les 1,8 secondes
    setInterval(createFloatingHeart, 1800);


    // 5. EXPLOSION DE COEURS A L'OUVERTURE DU CADEAU
    function createHeartExplosion() {

        if (!floatingHearts) return;

        for (let i = 0; i < 25; i++) {

            setTimeout(function () {

                const heart = document.createElement("span");

                heart.classList.add("floating-heart");

                heart.textContent = ["♡", "♥", "💕", "✿"][Math.floor(Math.random() * 4)];

                heart.style.left = Math.random() * 100 + "%";

                heart.style.fontSize = (18 + Math.random() * 20) + "px";

                heart.style.animationDuration = (4 + Math.random() * 3) + "s";

                floatingHearts.appendChild(heart);

                setTimeout(function () {
                    heart.remove();
                }, 8000);

            }, i * 100);

        }

    }


    // 6. RETOUR EN HAUT
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});
