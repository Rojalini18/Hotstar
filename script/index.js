let movies = document.querySelector("#search");

let id;
async function searchMovies() {
  try {
    const query = document.querySelector("#query").value;

    let res = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=caa49a1c`
    );

    let data = await res.json();

    let movies = data.Search;

    return movies;
  } catch (err) {
    console.log(err);
  }
}

function appendMovies(data) {
  movies.innerHTML = null;

  data.forEach(function (el) {
    let img = document.createElement("img");
    img.src = el.Poster;

    let title = document.createElement("p");
    title.innerText = el.Title;

    let div1 = document.createElement("div");
    div1.setAttribute("id", "div1");
    div1.addEventListener("click", function () {
      showData(el);
    });
    div1.append(img, title);

    movies.append(div1);
    movies.style.backgroundColor = "black";
  });
}

function showData(el) {
  document.querySelector("#search").innerHTML = null;
  document.querySelector("#search").style.backgroundColor = "Transparent";

  let container = document.getElementById("slider");
  container.innerHTML = null;

  let div = document.createElement("div");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");

  let title = document.createElement("h3");
  title.innerText = el.Title;

  let price = document.createElement("p");
  price.innerText = el.Year;

  let image = document.createElement("img");
  image.src = el.Poster;

  div.append(image);
  div.style.width = "50%";

  div1.append(title, price);
  div1.style.width = "50%";
  div1.style.display = "flex";
  div1.style.flexDirection = "column";
  div1.style.justifyContent = "center";

  div2.append(div, div1);
  div2.style.width = "60%";
  div2.style.margin = "auto";
  div2.style.display = "flex";

  container.append(div2);
}

async function main() {
  let data = await searchMovies();
  // ---------optimization 1---------
  if (data === undefined) {
    return false;
  }
  console.log(data);
  appendMovies(data);
}

function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}
