
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class PlayerService {

    constructor(private http: HttpClient) { }

    getPlayers():Observable<any> {
        const baseUrl = `http://localhost:3000/players`;
        return this.http.get(baseUrl);
    }

    addPlayer(payload:any):Observable<any> {
        console.log("inside adding");
        const baseUrl = `http://localhost:3000/players`;
        return this.http.post(baseUrl, payload)
    }

}