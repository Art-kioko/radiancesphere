// Centralized Supabase client with safe fallbacks for preview environments
// Prefer environment variables, but fall back to known publishable values if missing
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

const envUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const envKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

// Fallbacks: Using publishable anon key & URL is safe on the client
// These are the same values configured for this project
const fallbackUrl = "https://pjmpaxiovuakzjhnqnez.supabase.co";
const fallbackKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqbXBheGlvdnVha3pqaG5xbmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzNTU3MTUsImV4cCI6MjA3NDkzMTcxNX0.8i3DSgPu6HgtbGYJWnMQ79hgkkJJvKKmtbAH_uE8nCI";

const SUPABASE_URL = envUrl ?? fallbackUrl;
const SUPABASE_PUBLISHABLE_KEY = envKey ?? fallbackKey;

if (!envUrl || !envKey) {
  // Helpful for debugging preview issues without breaking the app
  console.warn("Supabase env vars missing; using fallback publishable credentials.");
}

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});
