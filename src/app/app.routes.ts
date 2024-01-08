import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MinionsComponent } from './minions/minions.component';
import { ErrorsComponent } from './errors/errors.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"home", component:HomeComponent},
    {path:"minions",component:MinionsComponent},
    {path:"**",component:ErrorsComponent}
];
