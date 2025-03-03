const articlesData = [
    {
        title: "Building a SaaS product as a software developer",
        author: "John Doe",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.",
        publishedDate: "31st June, 2021",
        readingTime: "3 minutes",
        imageUrl: "assets/article1.jpg"
    },
    {
        title: "The Future of Web Development",
        author: "Jane Smith",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.",
        publishedDate: "12th March, 2022",
        readingTime: "5 minutes",
        imageUrl: "assets/article2.jpg"
    },
    {
        title: "How to Improve Your Coding Skills",
        author: "Alice Brown",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.",
        publishedDate: "5th August, 2023",
        readingTime: "4 minutes",
        imageUrl: "assets/article3.jpg"
    },
    {
        title: "How to Improve Your Coding Skills",
        author: "Alice Brown",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque.",
        publishedDate: "5th August, 2023",
        readingTime: "4 minutes",
        imageUrl: "assets/article3.jpg"
    }
];

function generateArticles() {
    const container = document.getElementById("articlesContainer");
    container.innerHTML = "";

    articlesData.forEach(article => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("article-card");

        articleCard.innerHTML = `
            <div class="article-header">
                <div>
                    <a class="article-title" href="#">${article.title}</a>
                    <p class="article-name">By ${article.author}</p>
                </div>
                <span class="article-image" style="background-image: url('${article.imageUrl}');"></span>
            </div>
            <p class="article-description">${article.description}</p>
            <dl class="article-post-info">
                <div class="article-cr">
                    <dt class="article-dt">Published</dt>
                    <dd class="article-dd">${article.publishedDate}</dd>
                </div>
                <div class="article-cr">
                    <dt class="article-dt">Reading time</dt>
                    <dd class="article-dd">${article.readingTime}</dd>
                </div>
            </dl>
        `;

        container.appendChild(articleCard);
    });
}

document.addEventListener("DOMContentLoaded", generateArticles);
