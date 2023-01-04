const coffeeimage = document.querySelector(".business");
const btn = document.querySelector("button");
function getdata() {
  fetch("https://redash.io/help/user-guide/integrations-and-api/api")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      business.innerHTML = `<img class="img-fluid image" src="${data.image}" alt="Placeholder image">`;
    })
    .catch((error) => {
      console.log(error);
    });
}
btn.addEventListener("click", getdata);