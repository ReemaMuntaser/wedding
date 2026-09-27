const envelope =
    document.getElementById("envelope");

const seal =
    document.getElementById("openInvitation");

const openText =
    document.querySelector(".open-text");

const invitationPage =
    document.getElementById("invitationPage");

const scrollHint =
    document.querySelector(".scroll-hint");

const loveSection =
    document.getElementById("loveSection");


/* =========================
   فتح الدعوة
   ========================= */

function openInvitation() {

    if (
        envelope.classList.contains("open")
    ) {
        return;
    }

    envelope.classList.add("open");

    setTimeout(() => {

        invitationPage.classList.add("show");

    }, 1500);
}


/* =========================
   الختم
   ========================= */

seal.addEventListener(
    "click",
    openInvitation
);


/* =========================
   نص فتح الدعوة
   ========================= */

openText.addEventListener(
    "click",
    openInvitation
);


/* =========================
   Hover
   ========================= */

seal.addEventListener(
    "mouseenter",
    openInvitation
);

openText.addEventListener(
    "mouseenter",
    openInvitation
);


/* =========================
   الانتقال لقسم العائلات
   ========================= */

scrollHint.addEventListener(
    "click",
    () => {

        invitationPage.scrollTo({

            top: loveSection.offsetTop,

            behavior: "smooth"

        });

    }
);


/* =========================
   ظهور القسم عند التمرير
   ========================= */

const revealSections =
    document.querySelectorAll(
        ".reveal-section"
    );


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.2
        }

    );


revealSections.forEach(
    (section) => {

        revealObserver.observe(
            section
        );

    }
);

/* =========================
   WEDDING COUNTDOWN
========================= */

const weddingDate = new Date("2026-10-18T18:00:00");

function updateCountdown() {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );
    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* =========================================
   FAQ ACCORDION
========================================= */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach((faq) => {
            faq.classList.remove("active");
        });

        if (!isActive) {
            item.classList.add("active");
        }

    });

});