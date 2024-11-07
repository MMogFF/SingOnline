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
    .from('artists')                      // Tabelnavn
    .select('*')  // Vælg kolonner og relationer
if (error) {
    throw error;
}
return data
}

export async function getAlbums() {
    try {
        let { data, error } = await supabase
            .from('albums')
            .select('*,artists(name)');
        if (error) throw error;
        console.log(data);

        return data;
    } catch (error) {
        console.error('Error fetching songs:', error);
        throw error;
    }
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



