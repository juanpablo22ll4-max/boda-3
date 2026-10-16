/* ==========================================
   FLORES ROJA DESIGN
   BOTANICAL LOVE
========================================== */


/* ==========================================
   CONFIGURACIÓN
========================================== */

const weddingConfig = {

    bride: "Bella",

    groom: "Lucas",

    weddingDate: "2027-08-14T16:00:00-05:00",

    whatsappNumber: "",

    ceremonyMap:
        "https://www.google.com/maps/search/?api=1&query=Chicago+Illinois",

    receptionMap:
        "https://www.google.com/maps/search/?api=1&query=Chicago+Illinois"

};


/* ==========================================
   MENÚ MÓVIL
========================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navigation =
    document.getElementById("navigation");

menuToggle.addEventListener("click", () => {

    const isOpen =
        navigation.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuToggle.textContent =
        isOpen ? "✕" : "☰";

});

navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.textContent = "☰";

    });

});


/* ==========================================
   CUENTA REGRESIVA
========================================== */

function updateCountdown() {

    const target =
        new Date(weddingConfig.weddingDate).getTime();

    const now =
        Date.now();

    const difference =
        target - now;

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");

    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        document.getElementById("countdownMessage")
            .textContent = "¡Hoy celebramos nuestro amor!";

        return;

    }

    const days =
        Math.floor(difference / 86400000);

    const hours =
        Math.floor((difference / 3600000) % 24);

    const minutes =
        Math.floor((difference / 60000) % 60);

    const seconds =
        Math.floor((difference / 1000) % 60);

    daysElement.textContent =
        String(days).padStart(2, "0");

    hoursElement.textContent =
        String(hours).padStart(2, "0");

    minutesElement.textContent =
        String(minutes).padStart(2, "0");

    secondsElement.textContent =
        String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);


/* ==========================================
   ANIMACIONES
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.1
        }
    );

    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    revealElements.forEach(element => {
        element.classList.add("active");
    });

}


/* ==========================================
   UBICACIONES
========================================== */

document.getElementById("ceremonyMap").href =
    weddingConfig.ceremonyMap;

document.getElementById("receptionMap").href =
    weddingConfig.receptionMap;


/* ==========================================
   CONFIRMACIÓN
========================================== */

const rsvpForm =
    document.getElementById("rsvpForm");

rsvpForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("guestName")
            .value.trim();

    const count =
        document.getElementById("guestCount")
            .value;

    const attendance =
        document.getElementById("attendance")
            .value;

    if (!name) {

        alert("Por favor, escribe tu nombre.");

        return;

    }

    if (!weddingConfig.whatsappNumber) {

        alert(
            "Esta es una plantilla de demostración. " +
            "Configura el número de WhatsApp para activar las confirmaciones."
        );

        return;

    }

    const message = `🌿 BOTANICAL LOVE

Boda de:
${weddingConfig.bride} & ${weddingConfig.groom}

Invitado:
${name}

Confirmación:
${attendance}

Personas:
${count}

¡Muchas gracias!`;

    const url =
        `https://wa.me/${weddingConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );

});


/* ==========================================
   FINAL
========================================== */

console.log(
    "Flores Roja Design | Botanical Love"
);