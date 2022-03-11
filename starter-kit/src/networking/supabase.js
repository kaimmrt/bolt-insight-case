import { createClient } from "@supabase/supabase-js"

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1aGZxdnRhdHhvYmRqa3Jzb2x0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY1MTQ2NjUsImV4cCI6MTk2MjA5MDY2NX0.QaMlwLR3rmYw6zbI8U_35kjUieZ1NMERiDcCuN9T-ck'
const supabaseUrl = "https://quhfqvtatxobdjkrsolt.supabase.co"

export const supabase = createClient(supabaseUrl, supabaseKey)