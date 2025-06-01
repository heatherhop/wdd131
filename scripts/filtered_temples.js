const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `©<span>${today.getFullYear()}<span> | Heather Hopkins | Utah, USA`;


const lastModified = document.querySelector("#lastModified")
lastModified.innerHTML = `<span>Last Modification: ${(document.lastModified)}</span>`

const menuBtn = document.querySelector('#menu')
const nav = document.querySelector('.navigation')

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuBtn.textContent = nav.classList.contains('show') ? 'X' : '≡';
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Mount Timpanogos Utah",
        location: "American Fork, Utah",
        dedicated: "1996, October, 13",
        area: 107240,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mount-timpanogos-utah-temple/mount-timpanogos-utah-temple-36979.jpg"
    },
    {
        templeName: "Saratoga Springs Utah",
        location: "Saratoga Spring, Utah",
        dedicated: "2023, August, 13",
        area: 97836,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/saratoga-springs-utah-temple/saratoga-springs-utah-temple-32872.jpg"
    },
    {
        templeName: "Bogota Colombia",
        location: "Bogota, Colombia",
        dedicated: "1999, April, 24",
        area: 53500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bogota-colombia-temple/bogota-colombia-temple-7734.jpg"
    },
];

createTempleCard(temples);

function createTempleCard(temples) {
    document.querySelector(".temple-grid").innerHTML = ""
    temples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("card");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temple-grid").appendChild(card);
    });
}

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
    let home = temples
    createTempleCard(home)
})

oldLink.addEventListener("click", () => {
    let old = temples.filter(temple => temple.dedicated.charAt(1) === '8');
    createTempleCard(old);
});

newLink.addEventListener("click", () => {
    let newTemp = temples.filter(temple => temple.dedicated.charAt(0) === '2');
    createTempleCard(newTemp);
});

largeLink.addEventListener("click", () => {
    let large = temples.filter(temple => temple.area > 19000);
    createTempleCard(large);
});

smallLink.addEventListener("click", () => {
    let small = temples.filter(temple => temple.area < 10000);
    createTempleCard(small);
});