const feedDisplay = document.querySelector("#feed");

fetch("https://green-gold-api-production.up.railway.app/news")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error fetching news articles");
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((article) => {
      const articleItem = `<div>
        <h3>${article.title}</h3>
        <p>Publication: ${article.source}</p>
        <a href="${article.url}">Website</a>
      </div>`;
      feedDisplay.insertAdjacentHTML("beforeend", articleItem);
    });
  })
  .catch((err) => {
    const errorMessage = `<p>Error: ${err.message}</p>`;
    feedDisplay.insertAdjacentHTML("beforeend", errorMessage);
  });
