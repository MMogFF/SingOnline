import { app } from "../script.js";
import { albums } from "../script.js";
import { songs } from "../script.js";
import { getRandomItems } from "../model/model.js";
import { searchSongs } from "../controller/controller.js";
import { fetchImg } from "../model/model.js";
import { albumRel } from "../script.js";



export const buildMainPage = (songs) => {
    app.innerHTML = "";

    const welcomeDiv = document.createElement("div");
    welcomeDiv.classList.add("welcomeDiv");
    app.appendChild(welcomeDiv);

    const h1 = document.createElement("h1");
    h1.textContent = "Velkommen til SingOnline";
    welcomeDiv.appendChild(h1);

    const p = document.createElement("p");
    p.textContent =
        "Søg i vores store bibliotek af sange og kunstnere, og find præcis det, du leder efter. Uanset om du er nybegynder på guitaren, erfaren musiker eller bare vil synge med på dine yndlingssange, har vi alt, hvad du behøver. Klar til at dykke ned i musikkens verden?";
    welcomeDiv.appendChild(p);

    const p2 = document.createElement("p");

    const span = document.createElement("span");
    span.textContent = "Start din musikalske rejse nu – ";
    p2.appendChild(span);

    p2.appendChild(
        document.createTextNode("søg efter din favoritkunstner eller sang!")
    );

    welcomeDiv.appendChild(p2);

    const randomSongsSectionDiv = document.createElement("div");
    randomSongsSectionDiv.classList.add("randomSongsSectionDiv");
    app.appendChild(randomSongsSectionDiv);

    const h2 = document.createElement("h2");
    h2.textContent = "10 tilfældige sange";
    randomSongsSectionDiv.appendChild(h2);

    const randomSongsDiv = document.createElement("div");
    randomSongsDiv.classList.add("randomSongsDiv");
    randomSongsSectionDiv.appendChild(randomSongsDiv);

    const randomSongs = getRandomItems(songs, 10);

    randomSongs.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('songDiv');
        songDiv.addEventListener('click', () => {
            buildLyricsPage(song.title, song.artists.name, song.lyrics);
        });
        randomSongsDiv.appendChild(songDiv);

        const songTitle = document.createElement("h3");
        songTitle.textContent = song.title;
        songDiv.appendChild(songTitle);

        const artistName = document.createElement('p');
        artistName.textContent = song.artists.name;
        songDiv.appendChild(artistName);

    });

}

export const buildSearchPage = (songs) => {
    app.innerHTML = '';

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
    app.innerHTML = '';

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
        artistImg.src = await fetchImg('artists', artist.image);
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
            buildArtistsSinglePage(artist);
        });
        artistCard.appendChild(artistButton);
    }
}

export const buildLoginPage = () => {
    app.innerHTML = '';

    const loginDiv = document.createElement('div');
    loginDiv.classList.add('loginDiv');
    app.appendChild(loginDiv);

    const h1 = document.createElement('h1');
    h1.textContent = 'Log ind';
    loginDiv.appendChild(h1);

    const p = document.createElement('p');
    p.textContent = 'Når du logger ind, kan du redigere eksisterende sange og oprette nye sange. Dette giver dig mulighed for at tilpasse indholdet og dele dine kreative værker med andre';
    loginDiv.appendChild(p);

    const form = document.createElement('form');
    loginDiv.appendChild(form);

    const usernameH2 = document.createElement('h2');
    usernameH2.textContent = 'Brugernavn:';
    form.appendChild(usernameH2);

    const usernameInput = document.createElement('input');
    usernameInput.setAttribute('type', 'text');
    usernameInput.setAttribute('placeholder', 'Brugernavn');
    form.appendChild(usernameInput);

    const passwordH2 = document.createElement('h2');
    passwordH2.textContent = 'Password:';
    form.appendChild(passwordH2);

    const passwordInput = document.createElement('input');
    passwordInput.setAttribute('type', 'password');
    passwordInput.setAttribute('placeholder', 'Password');
    form.appendChild(passwordInput);

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Log ind';
    form.appendChild(loginButton);

    const forgotPasswordLink = document.createElement('a');
    forgotPasswordLink.textContent = 'Glemt password?';
    form.appendChild(forgotPasswordLink);

    const signUpButton = document.createElement('a');
    signUpButton.textContent = 'Opret bruger';
    form.appendChild(signUpButton);
}

export const buildLyricsPage = (title, artist, lyrics) => {
    app.innerHTML = '';

    const lyricsDiv = document.createElement('div');
    lyricsDiv.classList.add('lyricsDiv');
    app.appendChild(lyricsDiv);

    const h1 = document.createElement('h1');
    h1.textContent = title;
    lyricsDiv.appendChild(h1);

    const artistName = document.createElement('h2');
    artistName.textContent = artist;
    lyricsDiv.appendChild(artistName);

    const lyricsText = document.createElement('pre');
    lyricsText.textContent = lyrics;
    lyricsDiv.appendChild(lyricsText);

    const printButton = document.createElement('button');
    printButton.textContent = 'Print';
    lyricsDiv.appendChild(printButton);
}

export const buildArtistsSinglePage = async (currentArtist) => {
    app.innerHTML = '';



    const artistDiv = document.createElement('div');
    artistDiv.classList.add('artistDiv');
    app.appendChild(artistDiv);

    const artistImg = document.createElement('img');
    artistImg.src = await fetchImg('artists', currentArtist.image);
    artistDiv.appendChild(artistImg);

    const artistName = document.createElement('h1');
    artistName.textContent = currentArtist.name;
    artistDiv.appendChild(artistName);

    const artistBio = document.createElement('p');
    artistBio.textContent = currentArtist.description;
    artistDiv.appendChild(artistBio);

    const artistAlbumsDiv = document.createElement('div');
    artistAlbumsDiv.classList.add('artistAlbumsDiv');
    artistDiv.appendChild(artistAlbumsDiv);


    const currentArtistAlbums = albums.filter(album => album.artist_id === currentArtist.id);

    const artistAlbumDiv = document.createElement('div');




    for (const album of currentArtistAlbums) {
        if (!album.songs) {
            album.songs = [];
        }
        albumRel.forEach(rel => {
            if (rel.album_id === album.id) {
                const song = songs.find(song => song.id === rel.song_id);
                album.songs.push(song);
            }
        });

        const artistAlbumDiv = document.createElement('div');
        artistAlbumDiv.classList.add('artistAlbumDiv');
        artistAlbumsDiv.appendChild(artistAlbumDiv);

        const albumImg = document.createElement('img');
        albumImg.src = await fetchImg('albums', album.image);
        artistAlbumDiv.appendChild(albumImg);

        const albumTitle = document.createElement('h2');
        albumTitle.textContent = album.title;
        artistAlbumDiv.appendChild(albumTitle);

        const albumBio = document.createElement('p');
        albumBio.textContent = album.description;
        artistAlbumDiv.appendChild(albumBio);

        const albumSongsDiv = document.createElement('div');
        albumSongsDiv.classList.add('albumSongsDiv');
        artistAlbumDiv.appendChild(albumSongsDiv);

        const albumTrackListTitle = document.createElement('h3');
        albumTrackListTitle.textContent = 'Tracks:';
        albumSongsDiv.appendChild(albumTrackListTitle);



        album.songs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.classList.add('songDiv');
            albumSongsDiv.appendChild(songDiv);
            const songTitle = document.createElement('h3');
            songTitle.textContent = song.title;
            songDiv.appendChild(songTitle);

        });
    }
}

















