const worksData = [
    {
        scr: "assets/article.PNG",
        alt:"article javascript",
        title: "Designing Dashboards",
        tagYear: "2020",
        tagTechnos:["HTML", "CSS", "JS"],
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque."
    },
    {
        scr: "assets/article.PNG",
        alt:"article javascript",
        title: "Designing Dashboards",
        tagYear: "2020",
        tagTechnos:["HTML", "CSS", "JS"],
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque."
    },
    {
        scr: "assets/article.PNG",
        alt:"article javascript",
        title: "Designing Dashboards",
        tagYear: "2020",
        tagTechnos:["HTML", "CSS", "JS"],
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque."
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
