import { supabase } from "../script.js";

export const fetchSongs = async (searchInput) => {

        const { data, error } = await supabase
            .from('songs')                      // Tabelnavn
            .select('*, artists(name)')  // Vælg kolonner og relationer
        if (error) {
            throw error;
        }
        return data
    
}






export async function fetchArtists() {
    const { data, error } = await supabase
    .from('artists')               
    .select('*')  
if (error) {
    throw error;
}
return data
}

export async function fetchAlbums() {
    const { data, error } = await supabase
    .from('albums')               
    .select('*, artists(name)')  
if (error) {
    throw error;
}
return data
}

export async function fetchAlbumRel() {
    const { data, error } = await supabase
    .from('album_song_rel')               
    .select('*, songs(title)')  
if (error) {
    throw error;
}
return data
}

export const getRandomItems = (arr, size) => {
    if (arr.length <= size) return arr;

    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
};

export const fetchImg = async (type,link) => {
    const { data, error } = await supabase.storage.from('letsG00').getPublicUrl(`${type}/${link}`); 
    
    if (error) {
        console.error('Error fetching public URL:', error);
    } else {
       return data.publicUrl;
    }
}



