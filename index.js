const searchInput = document.getElementById("pesquisa");
const characterSection = document.getElementById("characterSection");
const articles = characterSection.querySelectorAll("article");

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    articles.forEach(article => {
        const characterName = article.querySelector("h3").textContent.toLowerCase();
        if (characterName.includes(searchTerm)) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
});