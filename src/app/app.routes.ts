import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MinionsComponent } from './minions/minions.component';
import { ErrorsComponent } from './errors/errors.component';
import { MinionInfoComponent } from './minion-info/minion-info.component';
import { InfoMinionIdComponent } from './info-minion-id/info-minion-id.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"home", component:HomeComponent},
    {path:"minions",component:MinionsComponent,
    children:[
        {path:"infoMinionId/:id",component:InfoMinionIdComponent}
    ]},
    {path:"infoMinion/:name",component:MinionInfoComponent},
    {path:"**",component:ErrorsComponent}
];
