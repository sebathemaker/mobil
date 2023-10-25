import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { supabaseKey } from './supabase.constants';


@Injectable({
    providedIn: 'root',
})
export class SupabaseService {

    const supabaseUrl = 'https://mioynnzefjjpspojuedl.susupapabase.co/rest/v1/';
    const supabaseKey = process.env.SUPABASE_KEY;


    constructor(
        private readonly httpClient: HttpClient
    ) { }

    getAll() {
        this.httpClient.get(this.supabaseUrl + 'alumno', {
            headers: new HttpHeaders(
                { apikey: supabaseKey }
            )
        })
    }
    post() {
        this.httpClient.post(this.supabaseUrl + 'alumno', {
            Headers: new HttpHeaders(
                { apikey: supabaseKey })
        })
    }
    put() {
        this.httpClient.put(this.supabaseUrl + 'alumno', {
            Headers: new HttpHeaders(
                { apikey: supabaseKey })
        })
    }


}
