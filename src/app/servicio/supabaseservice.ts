import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { supabaseKey } from './supabase.constants';


@Injectable({
    providedIn: 'root',
})
export class SupabaseService {

    const supabaseUrl = 'https://mioynnzefjjpspojuedl.susupapabase.co';
    const supabaseKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    constructor(
        private readonly httpClient: HttpClient
    ) { }

    getAll() {
        this.httpClient.get('https://mioynnzefjjpspojuedl.supabase.co', {
            headers: new HttpHeaders(
                { apikey: supabaseKey }
            )
        })
    }
    post() {
        this.httpClient.post('https://mioynnzefjjpspojuedl.supabase.co', {
            Headers: new HttpHeaders(
                { apikey: supabaseKey })
        })
    }
    put() {
        this.httpClient.put('https://mioynnzefjjpspojuedl.supabase.co', {
            Headers: new HttpHeaders(
                { apikey: supabaseKey })
        })
    }


}