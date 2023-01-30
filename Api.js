let url = "https://youtube-music1.p.rapidapi.com/v2/search?query=";
// datosArtista(url);
// function datosArtista(url) {
// }

document.querySelector("input").addEventListener("keyup", function () {
  let artista = document.querySelector("#etiqBus").value;
  let options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "92b7670a43mshd81f13f9ca76ee3p1c9fa9jsn4e09fa2d29ef",
      "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
    },
  };

  fetch(url + artista, options)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      for (let i = 0; i < res.results.length; i++) {
        let id = res.results[i].id;

        console.log(results);

        document.querySelector("#Resultados").innerHTML += `
      
      `;
      }
    })
    .catch((err) => console.error(err));
  // datosArtista(url);
});
