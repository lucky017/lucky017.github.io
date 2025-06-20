const Items = document.querySelectorAll("li");

function All(item) {
  if (!item.target.className) {
    item.target.className = "help";
  } else {
    item.target.className = "";
  }
}
Items.forEach((item) => {
  item.addEventListener("click", All);
});
const Head = document.querySelector("h2");
Head.textContent = "Check out theis blog!!";

const image = document.querySelector(".vader");
image.addEventListener("click", () => {
  const img_src = image.getAttribute("src");
  if (img_src) {
    image.setAttribute(
      "src",
      "https://static.wikia.nocookie.net/a5e62edc-8033-4eb7-9a90-7877ba2ad1a6",
    );
  }
});
