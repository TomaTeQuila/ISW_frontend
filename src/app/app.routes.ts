import { Routes } from '@angular/router';
import { CreateClassComponent } from './create-class/create-class.component';

export const routes: Routes = [
    { path: '', redirectTo: '/create-class', pathMatch: 'full' },
    { path: 'create-class', component: CreateClassComponent }
];

