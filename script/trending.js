const url =
  "https://api.themoviedb.org/3/trending/all/day?api_key=0f57cc4bf45cc6267efebe788f62186c";

const imgpath = "https://image.tmdb.org/t/p/w500";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    console.log(res);
    append(res.results);
  })
  .catch(function (err) {
    console.log(err);
  });

const append = (data) => {
  var popular = document.querySelector("#main");

  data.forEach(({ poster_path }) => {
    var cell = document.createElement("div");

    let image = document.createElement("img");
    image.src = `${imgpath + poster_path}`;

    cell.append(image);

    popular.append(cell);
  });
};
