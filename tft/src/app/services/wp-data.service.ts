import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class WPDataService {

    url = 'http://localhost:8881/wp-json/wp/v2';

    constructor(
        private http: HttpClient,
    ) { }

    getUnits():Observable<any> {
        return this.http.get(`${this.url}/unit`);
    }
    
}