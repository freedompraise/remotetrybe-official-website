// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hnbzndbikbzwwekjzfiv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhuYnpuZGJpa2J6d3dla2p6Zml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5NTA3MjQsImV4cCI6MjAyOTUyNjcyNH0.RY_LXslkSESXJGTO-mUh1VTPKBdo_EhEuNcHhhJ1yJw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);