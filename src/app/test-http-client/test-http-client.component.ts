import { Component, inject } from '@angular/core';
import { TestHttpClientService } from '../test-http-client.service';

@Component({
  selector: 'app-test-http-client',
  imports: [],
  templateUrl: './test-http-client.component.html',
  styleUrl: './test-http-client.component.css'
})
export class TestHttpClientComponent {
  testService = inject(TestHttpClientService);
  containData: any;

  constructor() {
    const res = this.testService.getDataFromApi().subscribe((dt)=>{
      this.containData = dt;
      console.log("called from component: ", dt);
    });
    console.log("From componet: ", res);
  }

}
