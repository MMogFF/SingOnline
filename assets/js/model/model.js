import { supabase } from "../script.js";

export const fetchSongs = async () => {
    const { data, error } = await supabase
    .from('songs')                      // Tabelnavn
    .select('*, artists(name)')  // Vælg kolonner og relationer
    if (error) {
      throw error;
    }
    return data
}




export async function getSongs() {
    try {
        let { data, error } = await supabase
            .from('songs')
            .select('*, artists(name)');
            console.log(data);
            
        if (error) throw error;
        
        return data;
    } catch (error) {
        console.error('Error fetching songs:', error);
        throw error;
    }
}

// console.log(await getSongs());


export async function getArtists() {
    try {
        let { data, error } = await supabase
            .from('artists')
            .select('*');
        if (error) throw error;
        console.log(data);
        
        return data;
    } catch (error) {
        console.error('Error fetching songs:', error);
        throw error;
    }
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

export const getRandomItems = (arr) => {
    if (arr.length <= 10) return arr;
  
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };



