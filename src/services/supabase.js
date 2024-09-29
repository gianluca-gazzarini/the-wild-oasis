import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ovjzvusznfbxzxzunuby.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92anp2dXN6bmZieHp4enVudWJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNDg0OTIsImV4cCI6MjA0MjcyNDQ5Mn0.0pQXWerZET7s4_404UwuO4TsshT6TUj1fEOT-Khu9EM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
