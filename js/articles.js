let articlesData = [
    {
        title: "Test de charge avec Artillery",
        href:"https://www.linkedin.com/pulse/test-de-charge-avec-artillery-salah-wassim-arfa-4oywe/?trackingId=DZzqCVqMQMKXx4B5xNPpag%3D%3D",
        author: "Salah-Wassim ARFA",
        description: "Les tests de charge évaluent la performance des applications en simulant de nombreux utilisateurs simultanés. Je présente l'outil Artillery, son installation, son utilisation et l'analyse des résultats pour optimiser la fiabilité et la scalabilité des systèmes.",
        publishedDate: "15 Avril, 2024",
        readingTime: "5 minutes",
        imageUrl: "tests-de-charge.PNG"
    },
    {
        title: "Comment générer un QR code avec PHP ?",
        href:"https://www.linkedin.com/pulse/comment-g%25C3%25A9n%25C3%25A9rer-un-qr-code-avec-php-salah-wassim-arfa-oqwqe?trackingId=kYaQ93hBQ0StRjdcceEhXw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BoHpO9uQfR0O%2FFqJnV0SNHg%3D%3D",
        author: "Salah-Wassim ARFA",
        description: "Cet article explique comment intégrer un QR code dans un projet PHP en utilisant la bibliothèque Endroid QrCode, en détaillant l’installation des prérequis, l’écriture du code nécessaire et l’affichage du QR code sur une page web.",
        publishedDate: "5 Décembre, 2023",
        readingTime: "5 minutes",
        imageUrl: "php.png"
    },
    {
        title: "Développement mobile avec Javascript",
        href:"https://www.linkedin.com/pulse/d%25C3%25A9veloppement-mobile-avec-javascript-une-vue-sur-de-frameworks-arfa?trackingId=cBf90K%2BhSt25%2B%2B82zVl%2BPA%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BL%2FsnkGXGQZyS2HQ4xIg5Bg%3D%3D",
        author: "Salah-Wassim ARFA",
        description: "J'explore le développement mobile cross-plateforme avec JavaScript, en comparant React Native et Ionic. Il met en avant leurs avantages, leurs limites et les bonnes pratiques pour optimiser les performances et l’expérience utilisateur.",
        publishedDate: "30 Août, 2023",
        readingTime: "8 minutes",
        imageUrl: "Javascript.PNG"
    },
    {
        title: 'Opérateur de coalescence nul "​??"​',
        href:"https://www.linkedin.com/pulse/op%25C3%25A9rateur-de-coalescence-nul-salah-wassim-arfa?trackingId=cBf90K%2BhSt25%2B%2B82zVl%2BPA%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BL%2FsnkGXGQZyS2HQ4xIg5Bg%3D%3D",
        author: "Salah-Wassim ARFA",
        description: "Pour tous ceux qui ne connaissent pas, l'opérateur de coalescence nul, pourrait vous simplifier la tâche ! Il a un nom barbare, je vous l'accorde, mais je vous assure il respire la simplicité !",
        publishedDate: "7 Juin, 2021",
        readingTime: "2 minutes",
        imageUrl: "article.PNG"
    },
];

const currentPageBlog = window.location.pathname;

const baseUrlSrcBlog = currentPageBlog.includes("blog.html") ? "../" : "";
const urlSrcBlog = "assets/articles/";

let recentArticlesData = articlesData.slice(0, 3);

function generateArticles(idElement, array) {
    const container = document.getElementById(idElement);
    container.innerHTML = "";

    array.forEach(article => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("article-card");

        articleCard.innerHTML = `
            <div class="article-header">
                <div>
                    <a class="article-title" target="_blank" href="${article.href}">${article.title}</a>
                    <p class="article-name">Par ${article.author}</p>
                </div>
                <img class="article-image" loading="lazy" src="${baseUrlSrcBlog + urlSrcBlog + article.imageUrl}" alt="Miniature article"/>
            </div>
            <p class="article-description">${article.description}</p>
            <dl class="article-post-info">
                <div class="article-cr">
                    <dt class="article-dt">Publié</dt>
                    <dd class="article-dd">${article.publishedDate}</dd>
                </div>
                <div class="article-cr">
                    <dt class="article-dt">Temps de lecture</dt>
                    <dd class="article-dd">${article.readingTime}</dd>
                </div>
            </dl>
        `;

        container.appendChild(articleCard);
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
    if(document.getElementById("articlesContainer")){
        recentArticlesData = recentArticlesData.sort((a, b) => b.publishedDate - a.publishedDate)
        generateArticles("articlesContainer", recentArticlesData)
    }
    if(document.getElementById("articlesContainer2")){
        articlesData = articlesData.sort((a, b) => b.publishedDate - a.publishedDate)
        generateArticles("articlesContainer2", articlesData)
    }
})