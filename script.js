const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const urlApi = `http://localhost:3000/artists?name_like=${searchTerm}`; 
    
    fetch(urlApi)
    .then((response) => response.json())
    .then((result)=>displayResults(result))
}

function displayResults(result){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImg = document.getElementById('artist-img');
    
    result.forEach(element => {
        artistName.innerText = element.name;
        artistImg.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden')

}

document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === '' ){
        resultArtist.classList.add('hidden');
        resultPlaylist.classList.remove('hidden');
        return;
    }
    
    requestApi(searchTerm);
})

