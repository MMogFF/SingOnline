import { app } from "../script.js";
import { songs } from "../script.js";
import { getRandomItems } from "../model/model.js";
import { searchSongs } from "../controller/controller.js";
import { fetchImg } from "../model/model.js";



export const buildMainPage = (songs) => {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add('welcomeDiv');
    app.appendChild(welcomeDiv);

    const h1 = document.createElement('h1');
    h1.textContent = 'Velkommen til SingOnline';
    welcomeDiv.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'Søg i vores store bibliotek af sange og kunstnere, og find præcis det, du leder efter. Uanset om du er nybegynder på guitaren, erfaren musiker eller bare vil synge med på dine yndlingssange, har vi alt, hvad du behøver. Klar til at dykke ned i musikkens verden?'
    welcomeDiv.appendChild(p);

    const p2 = document.createElement('p');

    const span = document.createElement('span');
    span.textContent = 'Start din musikalske rejse nu – ';
    p2.appendChild(span);

    p2.appendChild(document.createTextNode('søg efter din favoritkunstner eller sang!'));

    welcomeDiv.appendChild(p2);

    const randomSongsSectionDiv = document.createElement('div');
    randomSongsSectionDiv.classList.add('randomSongsSectionDiv');
    app.appendChild(randomSongsSectionDiv);

    const h2 = document.createElement('h2');
    h2.textContent = '10 tilfældige sange';
    randomSongsSectionDiv.appendChild(h2);

    const randomSongsDiv = document.createElement('div');
    randomSongsDiv.classList.add('randomSongsDiv');
    randomSongsSectionDiv.appendChild(randomSongsDiv);

    const randomSongs = getRandomItems(songs, 10);

    randomSongs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('songDiv');
        randomSongsDiv.appendChild(songDiv);

        const songTitle = document.createElement('h3');
        songTitle.textContent = song.title;
        songDiv.appendChild(songTitle);

        const artistName = document.createElement('p');
        artistName.textContent = song.artists.name;
        songDiv.appendChild(artistName);

    });

}

export const buildSearchPage = (songs) => {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('headerDiv');
    app.appendChild(headerDiv);

    const h1 = document.createElement('h1');
    h1.textContent = 'Songs';
    headerDiv.appendChild(h1);

    const h1UnderText = document.createElement('p');
    h1UnderText.textContent = 'Her kan du søge blandt tusindvis af sange og kunstnere. Indtast titlen på en sang eller navnet på en kunstner, og få øjeblikkelig adgang til sangtekster og akkorder. Uanset om du vil lære en ny melodi på guitar, eller blot synge med, har vi det hele!';
    headerDiv.appendChild(h1UnderText);

    const h1Span = document.createElement('span');
    h1Span.textContent = 'Søg nu og kom i gang med at spille eller synge dine yndlingssange!';
    headerDiv.appendChild(h1Span);

    const searchDiv = document.createElement('div');
    searchDiv.classList.add('searchDiv');
    app.appendChild(searchDiv);

    const searchInput = document.createElement('input');
    searchInput.setAttribute('type', 'text');
    searchInput.setAttribute('placeholder', 'Søg efter sange eller kunstnere');
    searchInput.addEventListener('keyup', () => searchSongs(searchInput.value));
    searchDiv.appendChild(searchInput);

    const searchResultsDiv = document.createElement('div');
    searchResultsDiv.classList.add('searchResultsDiv');
    app.appendChild(searchResultsDiv);

}

export const buildSearchSongs = async (searchResults) => {
    await searchResults;
    const searchResultsDiv = document.querySelector('.searchResultsDiv');
    if (searchResultsDiv) {
        searchResultsDiv.innerHTML = '';
    }



    if (searchResults.length === 0) {
        const noResultsDiv = document.createElement('div');
        noResultsDiv.classList.add('noResultsDiv');
        searchResultsDiv.appendChild(noResultsDiv);

        const noResultsText = document.createElement('p');
        noResultsText.textContent = 'Ingen resultater fundet. Prøv at søge efter noget andet.';
        noResultsDiv.appendChild(noResultsText);

        return;
    } else {
        await searchResults.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.classList.add('songDiv');
            searchResultsDiv.appendChild(songDiv);

            const songTitle = document.createElement('h3');
            songTitle.textContent = song.title;
            songDiv.appendChild(songTitle);

            const artistName = document.createElement('p');
            artistName.textContent = song.artists.name;
            songDiv.appendChild(artistName);

        });
    }


}

export const buildArtistsHomePage = async (artists) => {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add('welcomeDiv');
    app.appendChild(welcomeDiv);

    const h1 = document.createElement('h1');
    h1.textContent = 'Artists';
    welcomeDiv.appendChild(h1);

    const h1UnderText = document.createElement('p');
    h1UnderText.textContent = 'Velkommen til vores side for kunstnere! Her kan du dykke ned i en verden af musik og finde information om dine yndlingskunstnere. Uanset om du leder efter den nyeste popstjerne, en legendarisk rockmusiker eller en upcoming indie-artist, har vi samlet et omfattende bibliotek til dig.';
    welcomeDiv.appendChild(h1UnderText);

    const h1Span = document.createElement('span');
    h1Span.textContent = 'Udforsk nu og opdag nye musikalske talenter!';
    welcomeDiv.appendChild(h1Span);

    const randomArtistsSectionDiv = document.createElement('div');
    randomArtistsSectionDiv.classList.add('randomArtistsSectionDiv');
    app.appendChild(randomArtistsSectionDiv);

    const artistsCardDiv = document.createElement('div');
    artistsCardDiv.classList.add('artistsCardDiv');
    randomArtistsSectionDiv.appendChild(artistsCardDiv);

    const randomArtists = getRandomItems(artists, 2);

    

    for (const artist of randomArtists) {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artistCard');
        artistsCardDiv.appendChild(artistCard);
    

        
        const artistImg = document.createElement('img');
        artistImg.src = await fetchImg('artists',artist.image);
        artistCard.appendChild(artistImg);
    
        const artistName = document.createElement('h3');
        artistName.textContent = artist.name;
        artistCard.appendChild(artistName);
    
        const artistBio = document.createElement('p');
        artistBio.textContent = artist.description;
        artistCard.appendChild(artistBio);

        const artistButton = document.createElement('button');
        artistButton.textContent = 'Gå til kunstner';
        artistButton.addEventListener('click', () => {
            console.log('Klik på artist');
        });
        artistCard.appendChild(artistButton);
    }
}














