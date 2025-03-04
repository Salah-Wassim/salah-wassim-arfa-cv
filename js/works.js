const worksData = [
    {
        scr: "assets/article.PNG",
        alt:"Projet Create Your Team",
        title: "Create Your Team",
        tagYear: "2024",
        tagTechnos:["HTML", "CSS", "JS"],
        description:"Create Your Team permet de créer des équipes. Projet qui explore le concept de drag and drop"
    },
    {
        scr: "assets/article.PNG",
        alt:"Projet PGCD",
        title: "PGCD (Plus Grand Commun Diviseur)",
        tagYear: "2023",
        tagTechnos:["HTML", "CSS", "JS", "Jenkins", "SEO", "Vercel"],
        description:"PGCD est une application web qui permet de calculer rapidement et gratuitement le PGCD et le PPCM de deux ou trois entiers"
    },
    {
        scr: "assets/article.PNG",
        alt:"Projet SalahBook",
        title: "SalahBook - Blog",
        tagYear: "2021",
        tagTechnos:["PHP", "Composer", "HTML5", "CSS3", "Javascript", "MySQL"],
        description:"Blog en cours de création. Projet réalisé sans framework afin d’intégrer manuellement des mécanismes fonctionnels et de sécurité, tout en approfondissant la compréhension des concepts fondamentaux."
    },
];

function generateWorks() {
    const container = document.getElementById("worksContainer");
    container.innerHTML = "";

    worksData.forEach(work => {
        const workCard = document.createElement("div");
        workCard.classList.add("work-card");

        workCard.innerHTML = `
            <div class="work-card-image">
                <img src="${work.scr}" alt="${work.alt}">
            </div>
            <div class="work-card-text">
                <div class="work-space work-card-header">
                    <p>${work.title}</p>
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

document.addEventListener("DOMContentLoaded", generateWorks);
