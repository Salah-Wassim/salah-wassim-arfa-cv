let worksData = [
    {
        scr: "article.PNG",
        alt:"Projet Create Your Team",
        title: "Create Your Team",
        href:"",
        tagYear: "2024",
        tagTechnos:["HTML", "CSS", "JS"],
        description:"Create Your Team permet de créer des équipes. Projet qui explore le concept de drag and drop"
    },
    {
        scr: "article.PNG",
        alt:"Projet PGCD",
        title: "PGCD (Plus Grand Commun Diviseur)",
        href:"",
        tagYear: "2023",
        tagTechnos:["HTML", "CSS", "JS", "Jenkins", "SEO", "Vercel"],
        description:"PGCD est une application web qui permet de calculer rapidement et gratuitement le PGCD et le PPCM de deux ou trois entiers"
    },
    {
        scr: "article.PNG",
        alt:"Projet SalahBook",
        title: "SalahBook - Blog",
        href:"",
        tagYear: "2021",
        tagTechnos:["PHP", "Composer", "HTML5", "CSS3", "Javascript", "MySQL"],
        description:"Blog en cours de création. Projet réalisé sans framework afin d’intégrer manuellement des mécanismes fonctionnels et de sécurité, tout en approfondissant la compréhension des concepts fondamentaux."
    },
    {
        scr: "article.PNG",
        alt:"Projet ParkLib",
        title: "Park'Lib",
        href:"",
        tagYear: "2021",
        tagTechnos:["React Native", "Node.js", "Angular", "Redis", "Docker", "MySQL"],
        description:"Park'Lib est une application qui permet de s'informer sur les parkings public d'une ville et de faire de la location de places de parkings entre particulier"
    },
    {
        scr: "article.PNG",
        alt:"Projet Bot Discord",
        title: "Bot Discord",
        href:"",
        tagYear: "2022",
        tagTechnos:["Javascript"],
        description:"Description à venir"
    },
];

const currentPage = window.location.pathname;

const baseUrlSrc = currentPage.includes("projets.html") ? "../" : "";
const urlSrc = "assets/";

let recentWorksData = worksData.slice(0, 3);

function generateWorks(idElement, array) {
    const container = document.getElementById(idElement);
    container.innerHTML = "";

    array.forEach(work => {
        const workCard = document.createElement("div");
        workCard.classList.add("work-card");

        workCard.innerHTML = `
            <div class="work-card-image">
                <img src="${baseUrlSrc + urlSrc + work.scr}" alt="${work.alt}">
            </div>
            <div class="work-card-text">
                <div class="work-space work-card-header">
                    <a href="${work.href}"><p>${work.title}</p></a>
                </div>
                <div class="work-space work-card-tag">
                    <span class="tag-year">${work.tagYear}</span>
                    <div class="tag-techno">
                        ${work.tagTechnos.map(techno => `<span class="tag-techno-content">${techno}</span>`).join(', ')}
                    </div>
                </div>
                <div class="work-card-description">
                    <p>${work.description}</p>
                </div>
            </div>
        `;

        container.appendChild(workCard);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("worksContainer")) {
        generateWorks("worksContainer", recentWorksData);
    }

    if (document.getElementById("worksContainer2")) {
        worksData = worksData.sort((a, b) => b.tagYear - a.tagYear)
        generateWorks("worksContainer2", worksData);
    }
});