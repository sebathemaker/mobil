"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SupabaseService = void 0;
var core_1 = require("@angular/core");
var supabase_js_1 = require("@supabase/supabase-js");
var http_1 = require("@angular/common/http");
var supabase_constants_1 = require("./supabase.constants");
var SupabaseService = /** @class */ (function () {
    function SupabaseService(httpClient) {
        this.httpClient = httpClient;
        this.supabaseUrl = 'https://mioynnzefjjpspojuedl.susupapabase.co';
        this.supabaseKey = process.env.SUPABASE_KEY;
        this.supabase = supabase_js_1.createClient(supabaseUrl, supabase_constants_1.supabaseKey);
    }
    SupabaseService.prototype.getAll = function () {
        this.httpClient.get('https://mioynnzefjjpspojuedl.supabase.co', {
            headers: new http_1.HttpHeaders({ apikey: supabase_constants_1.supabaseKey })
        });
    };
    SupabaseService.prototype.post = function () {
        this.httpClient.post('https://mioynnzefjjpspojuedl.supabase.co', {
            Headers: new http_1.HttpHeaders({ apikey: supabase_constants_1.supabaseKey })
        });
    };
    SupabaseService.prototype.put = function () {
        this.httpClient.put('https://mioynnzefjjpspojuedl.supabase.co', {
            Headers: new http_1.HttpHeaders({ apikey: supabase_constants_1.supabaseKey })
        });
    };
    SupabaseService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SupabaseService);
    return SupabaseService;
}());
exports.SupabaseService = SupabaseService;
