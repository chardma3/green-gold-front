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
      loadingText.textContent = "";
    });
  })
  .catch((err) => {
    const errorMessage = `<p class="err-msg">Oh no! There's been an error: ${err.message}</p>`;
    feedDisplay.insertAdjacentHTML("beforeend", errorMessage);
  });

const loadingText = document.getElementById("loadingText");

loadingText.textContent =
  "Finding articles on green technology, AI, stocks, start-ups, and trends!";

setTimeout(() => {
  loadingText.textContent = "Almost there!";
}, 3500);

setTimeout(() => {
  loadingText.textContent = "And here are some awesome articles for you!";
}, 5750);
