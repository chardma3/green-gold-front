/* require("dotenv").config(); */

const feedDisplay = document.querySelector("#feed");

/* green-gold-api-production.up.railway.app/news */
/* fetch(process.env.API_URL) */
/* http://localhost:8000/news */

fetch("http://green-gold-api-production.up.railway.app/news")
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

/* var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var loadingText = document.getElementById("loadingText");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        loadingText.textContent = "Loading complete";
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

setTimeout(move, 100); */

/* setTimeout(() => {
  loadingText.textContent = "";
}, 2250);

setTimeout(() => {
  loadingText.textContent = "";
}, 2250); */

const loadingText = document.getElementById("loadingText");

loadingText.textContent = "One second... just loading";

setTimeout(() => {
  loadingText.textContent = "Almost there!";
}, 2250);

setTimeout(() => {
  loadingText.textContent = "And nooow!";
}, 4500);

setTimeout(() => {
  loadingText.textContent = "";
}, 7000);
