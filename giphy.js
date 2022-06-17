const searchTerm = 'labrador';
const apiKey = config.GIPHY_API_KEY;

const loadGif = () => {
    fetch(`http://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=${apiKey}&limit=1`)
        .then(res => res.json())
        .then(json => json.data.images.original.url)
        .then(url => img.src = url)
    gifContainer.appendChild(img);
}

const gifContainer = document.querySelector('.gif-container');
const button = document.querySelector('.gif-button');

const img = document.createElement('img');
img.classList.add('gif');

loadGif();
button.addEventListener('click', loadGif);
