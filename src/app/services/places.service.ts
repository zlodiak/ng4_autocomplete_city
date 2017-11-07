import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class PlacesService {
	private headers = new Headers({
	    'Access-Control-Allow-Origin': '*',
	    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
	    'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
	    'Access-Control-Allow-Credentials': true 
	});

  constructor(private http: Http) { };

  getCities(query): Observable<any> {
  	let result = this.http.get('http://kladr-api.ru/api.php?query=' + query + '&contentType=city', {headers: this.headers});
  	return result;
  };   



}
