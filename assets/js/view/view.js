import { getSongs } from "../model/model.js";
import { getArtists } from "../model/model.js";
import { getAlbums } from "../model/model.js";
import { app } from "../script.js";
import { songs } from "../script.js";
import { getRandomItems } from "../model/model.js";



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







