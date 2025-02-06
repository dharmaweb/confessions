import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/+esm'

const supabaseUrl = 'https://wwmnlnqzpxzzllsfkiby.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3bW5sbnF6cHh6emxsc2ZraWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4MTQ0ODEsImV4cCI6MjA1NDM5MDQ4MX0.5JYiA_TL8U7--7ASKPVAJQbeMHOCxXhvoX_Nw26pty4'
const supabase = createClient(supabaseUrl, supabaseKey)

// Authentication functions
export async function signUp(email, password) {
    try {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })
        if (error) throw error
        return { data, error: null }
    } catch (error) {
        console.error('Error signing up:', error.message)
        return { data: null, error }
    }
}

export async function signIn(email, password) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        if (error) throw error
        return { data, error: null }
    } catch (error) {
        console.error('Error signing in:', error.message)
        return { data: null, error }
    }
}

export async function signOut() {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        return { error: null }
    } catch (error) {
        console.error('Error signing out:', error.message)
        return { error }
    }
}

export default supabase;
