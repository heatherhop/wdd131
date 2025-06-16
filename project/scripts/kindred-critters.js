const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `©<span>${today.getFullYear()} | Heather Hopkins | Utah, USA</span>`

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `<span>Last Modification: ${document.lastModified}</span>`

const menuBtn = document.querySelector('#menu')
const nav = document.querySelector('.navigation')

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        if (nav) {
            nav.classList.toggle('show');
            menuBtn.textContent = nav.classList.contains('show') ? 'X' : '≡';
        }
    });
} else {
    console.warn("Menu button (#menu) not found on this page. Menu functionality will not be active.");
}

const newsletterSubmitted = document.querySelector(".submit")

if (newsletterSubmitted) {
    newsletterSubmitted.addEventListener("click", (event) => {
        event.preventDefault();

        if (validateForm()) {
            newsletterSubmit();
        }
    });
} else {
    console.warn("Newsletter submit button (.submit) not found on this page. Newsletter functionality will not be active.");
}


function validateForm() {
    const requiredInputs = document.querySelectorAll('input[required]');

    const allRequiredFilled = Array.from(requiredInputs).every(input => {
        return input.value.trim() !== '';
    });

    if (!allRequiredFilled) {
        alert('Please complete all required fields that are marked with an astrisk (*) before submitting.');
        return false;
    }
    return true;
}

function newsletterSubmit() {
    let isNewsletterSubmit = JSON.parse(window.localStorage.getItem("newsletterSubmit")) || '';
    isNewsletterSubmit = 'true';
    localStorage.setItem("newsletterSubmit", JSON.stringify(isNewsletterSubmit));
    const subscribeForm = document.getElementById("subscribe");
    if (subscribeForm) {
        subscribeForm.reset();
    } else {
        console.warn("Subscribe form (#subscribe) not found for reset.");
    }
    alert("Successfully subscribed!");
    console.log(`User successfully subscribed`);
}

document.addEventListener("DOMContentLoaded", function () {
    const adoptions = [
        {
            petName: "Joe",
            age: 2,
            imageSrc:
                "images/adoptdog1.webp"
        },
        {
            petName: "Woofie",
            age: 1.5,
            imageSrc:
                "images/adoptdog2.webp"
        },
        {
            petName: "Dixie",
            age: 3,
            imageSrc:
                "images/adoptdog3.webp"
        },
        {
            petName: "Scrappy",
            age: 1,
            imageSrc:
                "images/adoptdog4.webp"
        },
        {
            petName: "Uno",
            age: 1,
            imageSrc:
                "images/adoptdog5.webp"
        },
        {
            petName: "Peachy",
            age: 2.5,
            imageSrc:
                "images/adoptdog6.webp"
        },
        {
            petName: "Cuddles",
            age: 2,
            imageSrc:
                "images/adoptdog7.webp"
        },
    ];

    const adoptionContainer = document.querySelector(".adoption");

    if (adoptionContainer) {
        createAdoptionCard(adoptions, adoptionContainer);
    } else {
        console.warn("Element with class 'adoption' not found on this page. Adoption cards will not be rendered.");
    }

    function createAdoptionCard(adoptions, containerElement) {
        containerElement.innerHTML = "";
        adoptions.forEach(adopt => {
            let card = document.createElement("section");
            card.classList.add("card");
            let name = document.createElement("h3");
            let age = document.createElement("p");
            let img = document.createElement("img");

            name.textContent = adopt.petName;
            age.innerHTML = `<span class="label">Age:</span> ${adopt.age}`;
            img.setAttribute("src", adopt.imageSrc);
            img.setAttribute("alt", `${adopt.petName}`);
            img.setAttribute("loading", "lazy");
            img.setAttribute("width", "300");

            card.appendChild(name);
            card.appendChild(age);
            card.appendChild(img);

            containerElement.appendChild(card);
        });
    }
});
