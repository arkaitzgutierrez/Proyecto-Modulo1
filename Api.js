const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88ac8554ebmsh9003f61b7b56fc1p144043jsn49c6153a4fdc',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

fetch('https://imdb-top-100-movies.p.rapidapi.com/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
    