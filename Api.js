const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '92b7670a43mshd81f13f9ca76ee3p1c9fa9jsn4e09fa2d29ef',
		'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
	}
};

fetch('https://youtube-music1.p.rapidapi.com/v2/search?query=bryan%20adams', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    console.log("Aqui estamos")