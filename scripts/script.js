document.addEventListener("DOMContentLoaded", function (event) {
  const twitter_link = document.querySelector(".twitter__link");
  function setTwiterLink() {
    const data = twitter_link.dataset.text.replaceAll(" ", "%20");
    twitter_link.href = "https://twitter.com/intent/tweet?text=".concat(data);
  }

  setTwiterLink();
});
