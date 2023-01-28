
let url = "https://youtube-music1.p.rapidapi.com/v2/search?query=";
datosArtista(url);
function datosArtista(url) {
  document
    .querySelector("input")
    .addEventListener("keypress", function () {
      let artista = document.querySelector("#etiqBus").value;

      let peticionAYoutube = (url + artista);
      
    });
  let options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "92b7670a43mshd81f13f9ca76ee3p1c9fa9jsn4e09fa2d29ef",
      "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
      
    },
  };

  fetch(peticionAYoutube, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  for (let i = 0; i < response.results.length; i++) {
    let videos = response.results[i].videos;

    document.querySelector("select").innerHTML += `
        <option>${response.results[i].videos}</option>
            `;
  }
  datosArtista(url);
}
