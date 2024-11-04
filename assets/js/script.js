import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'
import { supabaseUrl, supabaseKey } from './credentials.js'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log(await supabase.from('songs').select('*'));
