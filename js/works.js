let worksData = [
    {
        scr: "article.PNG",
        alt:"Projet Create Your Team",
        title: "Create Your Team",
        href:"https://github.com/Salah-Wassim/create-your-team",
        tagYear: "2024",
        tagTechnos:["HTML", "CSS", "JS"],
        description:"Create Your Team permet de créer des équipes. Projet qui explore le concept de drag and drop"
    },
    {
        scr: "article.PNG",
        alt:"Projet PGCD",
        title: "PGCD (Plus Grand Commun Diviseur)",
        href:"https://pgcd.vercel.app",
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
        href:"https://github.com/Salah-Wassim/Parklib-Front",
        tagYear: "2021",
        tagTechnos:["React Native", "Node.js", "Angular", "Redis", "Docker", "MySQL"],
        description:"Park'Lib est une application qui permet de s'informer sur les parkings public d'une ville et de faire de la location de places de parkings entre particulier"
    },
    {
        scr: "article.PNG",
        alt:"Projet Bot Discord",
        title: "Bot Discord",
        href:"https://github.com/Salah-Wassim/bot-discord",
        tagYear: "2023",
        tagTechnos:["Javascript"],
        description:"Bot interactif capable de répondre à trois commandes : PingMe : Vérifie la réactivité du bot. Blague : Génère une blague aléatoire. Gif : Recherche et affiche un GIF depuis la plateforme Giphy."
    },
    {
        scr: "article.PNG",
        alt:"Projet BookShop",
        title: "BookShop",
        href:"https://github.com/Salah-Wassim/BookShop",
        tagYear: "2023",
        tagTechnos:["Vue.js", "Vite"],
        description:"Bot interactif capable de répondre à trois commandes : PingMe : Vérifie la réactivité du bot. Blague : Génère une blague aléatoire. Gif : Recherche et affiche un GIF depuis la plateforme Giphy."
    },
    {
        scr: "article.PNG",
        alt:"Projet Immobilier",
        title: "Immobilier",
        href:"https://github.com/Salah-Wassim/immobilier-front/tree/master",
        tagYear: "2021",
        tagTechnos:["Angular", "Node.js", "MySQL"],
        description:"Projet visant à recréer une plateforme immobilière."
    },
    {
        scr: "article.PNG",
        alt:"Projet Amazon",
        title: "Amazon",
        href:"https://github.com/Salah-Wassim/Amazon",
        tagYear: "2021",
        tagTechnos:["Python", "Selenium", "ChromeDriver"],
        description:"Projet permettant d'effectuer du web scraping sur le site d'Amazon afin d'extraire automatiquement des données."
    },
];

const selectProject = document.getElementById("select-project-by-year");

selectProject.addEventListener('change', function filterProjectsByYear(event){
    if(event.target.value !== "all"){
       const worksDataFilter = worksData.filter(work => work.tagYear === event.target.value)
       return generateWorks("worksContainer2", worksDataFilter)
    }
    else{
        return generateWorks("worksContainer2", worksData)
    }
})

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
        workCard.setAttribute("tabindex", "0");
        workCard.onclick = function(){
            window.location.href = work.href
        }

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