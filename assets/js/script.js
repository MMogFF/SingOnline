import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
import { supabaseUrl, supabaseKey } from './credentials.js'
import { fetchSongs } from './model/model.js'
import { buildSearchPage } from './view/view.js'
export const supabase = createClient(supabaseUrl, supabaseKey)

export const app = document.getElementById('app')

export const songs = await fetchSongs();







import { buildMainPage } from './view/view.js'

// buildMainPage(songs);
buildSearchPage(songs);

