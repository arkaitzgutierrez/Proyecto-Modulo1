let url = "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=";
let peticionAYoutube = "";
//if(document.querySelector("input")){}

document.querySelector("input").addEventListener("keyup", function (event) {
  if (event.key === `Enter`) {
    let artista = document.querySelector("#etiqBus").value;

    console.log(artista);
    peticionAYoutube = url + artista;
    console.log(peticionAYoutube);
    datosArtista(peticionAYoutube);
  }
});
function datosArtista(peticionAYoutube) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "88ac8554ebmsh9003f61b7b56fc1p144043jsn49c6153a4fdc",
      "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
    },
  };

  fetch(peticionAYoutube, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      for (let i = 0; i < response.items.length; i++) {
        if (response.items[i].type === "video") {
          document.querySelector("select").innerHTML += `
    <option value="${response.items[i].thumbnails[0].url} | ${response.items[i].title} | ${response.items[i].url}" name="${response.items[i].title}" >${response.items[i].title}</option>
    
    `;
        }
      }
    })

    .catch((err) => console.error(err));
  //   window.location.href = "./Api2.html";
}

document.querySelector("select").addEventListener("change", function () {
  let data = this.value.split(" | ");
  let direccion = data[0];
  let cancion = data[1];
  let link = data[2];

  document.querySelector("#Pepe").innerHTML = "";
  document.querySelector("#Pepe").innerHTML += `
  <h4>${cancion}</h4>

  <a href= ${link}><img src="${direccion}"</a>
  
  `;
});
window.onload = function () {
  change(1);
};
function change() {
  let pathname = window.location.pathname;
  let paginaImprimible = "";
  let pagina = pathname.substring(pathname.length - 6, pathname.length - 5);
  console.log(pagina);
  if (pagina === "1") {
    document.querySelector("#page").innerHTML = `
    <ul id="paginacion">
    <l1>1</li>
    <l1><a href="./Api2.html"><strong>2</stron></a></li>
    </ul>`;
  } else {
    document.querySelector("#page").innerHTML = `
    <ul id="paginacion">
    <l1><a href="./Api1.html"><strong>1</stron></a></li>
    <l1>2</li>
    </ul>`;
  }
}
