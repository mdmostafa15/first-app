import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredHousingLocationList: HousingLocation [] = [];

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocation();
    this.filteredHousingLocationList = this.housingLocationList;
  }

  filteredResults (text: string) {
    if (!text) {
      this.filteredHousingLocationList = this.housingLocationList;
      return;
    }

    this.filteredHousingLocationList = this.housingLocationList.filter((housingLocation)=>housingLocation?.city.toLocaleLowerCase()
    .includes(text.toLocaleLowerCase()));
  }

}
