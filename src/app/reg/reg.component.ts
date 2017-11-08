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
    {name: 'qwerty', id: 34234234},
    {name: 'qwerty2', id: 121212},
    {name: 'qwerty3', id: 676767},
    {name: 'qwerty4', id: 453657}
  ];*/

  ngOnInit() {
  } 

  onSelectCity(option) {
    console.log(option);
    this.city = option;
  };

  submitForm(city) {
    let selectedCityObj = {};
    for(let prop in this.options) {
      console.log(this.options[prop]);
      if(this.options[prop].name === city) {
        selectedCityObj = this.options[prop];
        break;
      }
    }

    console.log('selectedCityObj', selectedCityObj);
  };

  private getCities(query): void {
    console.log('query', query);  
    if(query.trim().length < 3 || !query.trim()) { return; }

    this.placesService.getCities(query).subscribe(
      data => {   
        console.log(data);  
        let citiesRaw = JSON.parse(data._body);
        let cities: any[] = [];

        for(let prop in citiesRaw) {
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
