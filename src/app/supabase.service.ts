import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabaseUrl = 'https://kwzgijzfqzquymniutft.supabase.co';
  private supabaseKey = process.env.SUPABASE_KEY;
  public supabase = createClient(this.supabaseUrl, this.supabaseKey);

  constructor() {}
}