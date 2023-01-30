
let url = "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=";
let peticionAYoutube = ""


document.querySelector("input").addEventListener("keyup", function (event) {
    
    
        if (event.key === `Enter`) {
            let artista = document.querySelector("#etiqBus").value;
            console.log(artista)
            peticionAYoutube = (url + artista);
            console.log(peticionAYoutube)
            datosArtista(peticionAYoutube);
            
        }
    });
function datosArtista(peticionAYoutube) {
   
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '88ac8554ebmsh9003f61b7b56fc1p144043jsn49c6153a4fdc',
                'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
            }
        };
        
        fetch(peticionAYoutube, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                for (let i = 0; i < response.refinements.length; i++) {
                    let videos = response.refinements[i].q;
            
                    document.querySelector("select").innerHTML += `
                    <option>${response.refinements[i].q}</option>
                        `;
                }
                document.querySelector("select").innerHTML += `
                // <a href="./Api2.html" target="_blank">Opcion</a>`
            })
            
    
   
    .catch(err => console.error(err));
    // datosArtista(url);
    // window.location.href="./Api2.html";
    
}
window.onload=function(){
    change(1)
}
function change(){
let pathname=window.location.pathname;
let paginaImprimible=""
let pagina=pathname.substring(pathname.length-5,pathname.length-4);
if(pagina==="."){
    document.querySelector("#page").innerHTML=`
    <ul id="paginacion">
    <l1>1</li>
    <l1><a href="./Api2.html"><strong>2</stron></a></li>
    </ul>`
}else{
    document.querySelector("#page").innerHTML=`
    <ul id="paginacion">
    <l1><a href="./Api.html"><strong>2</stron></a></li>
    <l1>2</li>
    </ul>`
}}
