import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { TestHttpClientComponent } from './test-http-client/test-http-client.component';

export const routes: Routes = [
    {
        path: '',
        title: "App Home Page",
        component: HomeComponent,
    },
    {
        path: "details/:id",
        title: "App Details Page",
        component: DetailsComponent,
    },
    {
        path:"todos",
        title: "test api test",
        component: TestHttpClientComponent,
    },
];
