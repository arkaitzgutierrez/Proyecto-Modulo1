let url = "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=";
let peticionAYoutube = "";
if (document.querySelector("input")) {

    document.querySelector("input").addEventListener("keyup", function (event) {
        if (event.key === `Enter`) {
            let artista = document.querySelector("#etiqBus").value;



            console.log(artista);
            peticionAYoutube = url + artista;
            console.log(peticionAYoutube);
            datosArtista(peticionAYoutube);
        }
    })
};
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
                    document.querySelector("#Elige").innerHTML += `
                    <div id="seleccion">
                        <input 
                            id="checkbox${i}" 
                            class="checkbox" 
                            type="checkbox" 
                            value="${response.items[i].thumbnails[0].url} | ${response.items[i].title} | ${response.items[i].url}" 
                            name="${response.items[i].title}"/>
                        <p>${response.items[i].title}</p>
                    </div> 
                        `;
                }
            }

            let checks = document.querySelectorAll(".checkbox")

            checks.forEach(check => {

                let data = check.value.split(" | ")

                check.addEventListener("change", () => {
                    document.querySelector("#Pepe").innerHTML += `
                        <div class="selected-data">
                            <h4>${data[1]}</h4>
                            <a href="${data[2]}"><img class="todas"src="${data[0]}" /></a>
                            <button id="btn${check.id}" class="checkboxBtn">Añadir a favoritos</button>
                        </div>
                    `;

                    document.querySelector(`#btn${check.id}`).addEventListener("click", () => {
                        console.log('hola');
                        let localArray = []
                        if (localStorage.getItem("localArray")) {
                            localArray = localStorage.getItem("localArray")
                            localArray = JSON.parse(localArray)
                        }

                        localArray.push({ title: data[1], img: data[2], videoUrl: data[0] })

                        localArray = JSON.stringify(localArray)
                        localStorage.setItem("localArray", localArray)

                    })
                })
            })

            document.querySelector("#Limpiar").addEventListener("click", function () {
                localStorage.clear()
            })
            // let checkBtn = document.querySelectorAll(".checkboxBtn")
            // console.log(checkBtn);

            // checkBtn.forEach((div, index) => {
            //     div.addEventListener("click", () => {
            //         console.log('hola');
            //         let localArray = []
            //         if (localStorage.getItem("localArray")) {
            //             localArray = localStorage.getItem("localArray")
            //             localArray = JSON.parse(localArray)
            //         }

            //         localArray.push({ title: response.items[index].title, img: response.items[index].thumbnails[0].url, videoUrl: response.items[index].url })

            //         localArray = JSON.stringify(localArray)
            //         localStorage.setItem("localArray", localArray)

            //     })
            // })

        })
        .catch((err) => console.error(err));

}

// document.querySelector("select").addEventListener("change", function () {
//   let data = this.value.split(" | ");
//   let direccion = data[0];
//   let cancion = data[1];
//   let link = data[2];

//   document.querySelector("#Pepe").innerHTML = "";
//   document.querySelector("#Pepe").innerHTML += `
//   <h4>${cancion}</h4>

//   <a href= ${link}><img src="${direccion}"</a>

//   `;
// });

if (document.querySelector("#Trending")) {
    document.querySelector("button").addEventListener("click", function () {
        variasfotos()
    })
}
function variasfotos(nuestras) {
    let numero = Math.floor(Math.random() * 5);
    console.log(numero);
    let nuestraLista = [{
        TipoMusica: "rock",
        ImagenFoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ89u9YGPg7R8caV0gXDapI3Gk7d5IoOO--Vw&usqp=CAU",
        videobuscada: "https://www.youtube.com/watch?v=7m7njvwB-Ks"
    }, {
        TipoMusica: "pop",
        ImagenFoto: "http://c.files.bbci.co.uk/1219D/production/_103214147_gettyimages-88688373.jpg",
        videobuscada: "https://www.youtube.com/watch?v=UVAIb5V6wQk"
    }, {
        TipoMusica: "Heavy Metal",
        ImagenFoto: "https://elcomercio.pe/resizer/BcPUsBsDU8WKH9XPiJAUvQfNI7c=/980x528/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/Q5RGJMWXIBGZRIETW3N6NYKT6M.jpg",
        videobuscada: "https://www.youtube.com/watch?v=5t8inUluE64"
    }, {
        TipoMusica: "Reggae",
        ImagenFoto: "https://lh3.googleusercontent.com/-zBkbqtiCgVg/T95ZX56B94I/AAAAAAAAACA/bMKjxuCQIqI/s400/Rasta_Reggae_by_sblax45.jpg",
        videobuscada: "https://www.youtube.com/watch?v=p-muVwfq0m0"
    }, {
        TipoMusica: "Guitarra Española",
        ImagenFoto: "https://i.ytimg.com/vi/0RRmlfmQbTs/maxresdefault.jpg",
        videobuscada: "https://www.youtube.com/watch?v=kIVjysOGCQs"
    }]

    
        document.querySelector("#fotos").innerHTML += `
            <div>
            <h5>${nuestraLista[numero].TipoMusica}</h5>
            <a href="${nuestraLista[numero].videobuscada}"><img  class="todas" src="${nuestraLista[numero].ImagenFoto}"</a>
            </div>
            `

    }

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

    function showLocalStorage(){
        document.querySelector(".dos").innerHTML=`<h3> Tu historial</h3>`
        let localStg= localStorage.getItem("localArray");
        localStg=JSON.parse(localStg)
        if(localStg!==null && localStg!==undefined){
            for (let i = 0; i < localStg.length; i++) {
                document.querySelector(".dos").innerHTML+=`
                <div class="selected-data">
                <h4>${localStg[i].title}</h4>
                <a href="${localStg[i].img}"><img class="todas" src="${localStg[i].videoUrl}"/></a>
                </div>`

                
            }
        }
    }
    showLocalStorage()