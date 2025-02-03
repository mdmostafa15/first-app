import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route:ActivatedRoute = inject(ActivatedRoute);
  housingServie: HousingService = inject(HousingService);

  housingLocation: HousingLocation | undefined;
// accessing form element
  applyForm = new FormGroup ({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor () {
    const housingId: number = Number(this.route.snapshot.params['id']);
    this.housingServie.getHousingLocation(housingId).then((housingLocation)=>{
      this.housingLocation = housingLocation;
    });       
  }

  // submiting form 
  submitApplication () {
    this.housingServie.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    )
    
  }
}
