import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

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
];
