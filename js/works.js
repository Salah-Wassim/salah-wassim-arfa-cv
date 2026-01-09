let worksData = [
    {
        scr: "work.png",
        alt:"Projet Strudel",
        title: "Strudel",
        href:"https://github.com/Salah-Wassim/strudel",
        tagYear: "2026",
        tagTechnos:["Strudel"],
        description:"Ce projet est une composition electro réalisée avec Strudel, un environnement de live coding musical inspiré de TidalCycles. La musique est générée en temps réel à partir de lignes de code, mêlant logique algorithmique et composition musicale."
    },
    {
        scr: "work.png",
        alt:"SWMATH",
        title: "SWMATH",
        href:"https://swmath.vercel.app",
        tagYear: "2023",
        tagTechnos:["HTML", "CSS", "JavaScript", "Jenkins", "SEO", "Vercel"],
        description:"SWMATH : La boîte à outils mathématiques en ligne. Calculs rapides, simples et efficaces."
    },
    {
        scr: "work.png",
        alt:"Projet Server Health",
        title: "Server Health",
        href:"https://github.com/Salah-Wassim/server-health",
        tagYear: "2025",
        tagTechnos:["Shell"],
        description:"Server Health est un script Shell permettant de surveiller l’espace disque utilisé, de définir une limite personnalisée et de consulter un processus spécifique. À la fin de l'exécution, un rapport de santé détaillé est automatiquement généré."
    },
    {
        scr: "work.png",
        alt:"Projet Create Your Team",
        title: "Create Your Team",
        href:"https://github.com/Salah-Wassim/create-your-team",
        tagYear: "2024",
        tagTechnos:["HTML", "CSS", "JavaScript"],
        description:"Create Your Team permet de créer des équipes. Projet qui explore le concept de drag and drop"
    },
    {
        scr: "work.png",
        alt:"Projet SalahBook",
        title: "SalahBook - Blog",
        href:"",
        tagYear: "2021",
        tagTechnos:["PHP", "Composer", "HTML", "CSS", "JavaScript", "MySQL"],
        description:"Blog en cours de création. Projet réalisé sans framework afin d’intégrer manuellement des mécanismes fonctionnels et de sécurité, tout en approfondissant la compréhension des concepts fondamentaux."
    },
    {
        scr: "work.png",
        alt:"Projet ParkLib",
        title: "Park'Lib",
        href:"https://github.com/Salah-Wassim/Parklib-Front",
        tagYear: "2021",
        tagTechnos:["React Native", "Node.js", "Angular", "Redis", "Docker", "MySQL"],
        description:"Park'Lib est une application qui permet de s'informer sur les parkings public d'une ville et de faire de la location de places de parkings entre particulier"
    },
    {
        scr: "work.png",
        alt:"Projet Bot Discord",
        title: "Bot Discord",
        href:"https://github.com/Salah-Wassim/bot-discord",
        tagYear: "2023",
        tagTechnos:["JavaScript"],
        description:"Bot interactif capable de répondre à trois commandes : PingMe : Vérifie la réactivité du bot. Blague : Génère une blague aléatoire. Gif : Recherche et affiche un GIF depuis la plateforme Giphy."
    },
    {
        scr: "work.png",
        alt:"Projet BookShop",
        title: "BookShop",
        href:"https://github.com/Salah-Wassim/BookShop",
        tagYear: "2023",
        tagTechnos:["Vue.js", "Vite"],
        description:"Bot interactif capable de répondre à trois commandes : PingMe : Vérifie la réactivité du bot. Blague : Génère une blague aléatoire. Gif : Recherche et affiche un GIF depuis la plateforme Giphy."
    },
    {
        scr: "work.png",
        alt:"Projet Immobilier",
        title: "Immobilier",
        href:"https://github.com/Salah-Wassim/immobilier-front/tree/master",
        tagYear: "2021",
        tagTechnos:["Angular", "Node.js", "MySQL"],
        description:"Projet visant à recréer une plateforme immobilière."
    },
    {
        scr: "work.png",
        alt:"Projet Amazon",
        title: "Amazon",
        href:"https://github.com/Salah-Wassim/Amazon",
        tagYear: "2021",
        tagTechnos:["Python", "Selenium", "ChromeDriver"],
        description:"Projet permettant d'effectuer du web scraping sur le site d'Amazon afin d'extraire automatiquement des données."
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
        const selectProjectSort = document.getElementById("select-project-sort");
        const selectProject = document.getElementById("select-project-by-year");
        const btnSelectWorksLang = document.getElementById("btn-filter-works-lang");
        const selectProjectLangContent = document.querySelector(".filter-works-lang-content");
        const selectProjectLangCheckbox = document.querySelectorAll('.filter-works-lang-content input[type="checkbox"]');
        const worksContainer = document.getElementById("worksContainer2");

        generateWorks("worksContainer2", worksData);

        function getSelectedLangs() {
          return Array.from(selectProjectLangCheckbox)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        }

        function filterWorks() {
            let filtered = [...worksData];
            
            // Langages
            const selectedLangs = getSelectedLangs();
            if (selectedLangs.length > 0) {
                filtered = filtered.filter(work =>
                    work.tagTechnos.some(tech => selectedLangs.includes(tech))
                );
            }
          
            // Années
            const selectedYear = selectProject.value;
            if (selectedYear !== "all") {
                filtered = filtered.filter(work => work.tagYear === selectedYear);
            }
          
            // Tri
            const sortOrder = selectProjectSort.value;
            if (sortOrder === "c") {
                filtered.sort((a, b) => a.tagYear - b.tagYear);
            } else if (sortOrder === "d") {
                filtered.sort((a, b) => b.tagYear - a.tagYear);
            }
          
            // Affichage
            worksContainer.innerHTML = "";
            if (filtered.length > 0) {
                generateWorks("worksContainer2", filtered);
            } else {
                const p = document.createElement("p");
                p.innerHTML = "Aucun projet trouvé";
                p.classList.add("work-content-message");
                worksContainer.appendChild(p);
            }
        }

        selectProject.addEventListener("change", filterWorks);
        selectProjectSort.addEventListener("change", filterWorks);
        selectProjectLangCheckbox.forEach(checkbox => {
            checkbox.addEventListener("change", filterWorks);
        });

        btnSelectWorksLang.addEventListener("click", function (event) {
            event.stopPropagation();
            selectProjectLangContent.classList.toggle("active");
        });

        document.addEventListener("click", function (event) {
            if (
                !btnSelectWorksLang.contains(event.target) &&
                !selectProjectLangContent.contains(event.target)
            ) {
                selectProjectLangContent.classList.remove("active");
            }
        });
    }
});