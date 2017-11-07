import { Component, OnInit } from '@angular/core';

import { PlacesService } from '../services/places.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  private city: string = '';
  private cities: any[] = [];
  private citiesRaw: any[] = [];
  private options: any[] = [];

  constructor(private placesService: PlacesService) { }

  /*private options = [
    {name: 'qwerty'},
    {name: 'qwerty2'},
    {name: 'qwerty3'},
    {name: 'qwerty4'}
  ];*/

  ngOnInit() {
  } 

  onSelectCity(option) {
    console.log(option);
    this.city = option;
  };

  submitForm(city) {
    console.log('submit', city);
  };

  private getCities(query): void {
    console.log('query', query);  
    if(query.trim().length < 3 || !query.trim()) { return; }

    this.placesService.getCities(query).subscribe(
      data => {   
        console.log(data);  
        let citiesRaw = JSON.parse(data._body);
        let cities: any[] = [];

        for(var prop in citiesRaw) {
          if (!citiesRaw.hasOwnProperty(prop)) continue;
          cities.push(citiesRaw[prop]);       
        }
        
        let options = cities[1];  
        this.options = options.filter(obj => obj.type == 'Город');                                                                                                                         
        console.log(this.options); 
      }, 
      err => {
        console.log('err')         
      });    
  };   

}
