import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MinionsComponent } from './minions/minions.component';
import { ErrorsComponent } from './errors/errors.component';
import { MinionInfoComponent } from './minion-info/minion-info.component';
import { InfoMinionIdComponent } from './info-minion-id/info-minion-id.component';
import { AddMinionComponent } from './add-minion/add-minion.component';
import { EditMinionComponent } from './edit-minion/edit-minion.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"home", component:HomeComponent},
    {path:"minions",component:MinionsComponent,
    children:[
        {path:"infoMinionId/:id",component:InfoMinionIdComponent}
    ]},
    {path:"infoMinion/:name",component:MinionInfoComponent},
    {path:"infoMinion/:name",component:MinionInfoComponent},
    {path:"addMinion",component:AddMinionComponent},
    {path:"editMinion/:id",component:EditMinionComponent},
    {path:"deleteMinion/:id",component:MinionsComponent},
    {path:"**",component:ErrorsComponent}
];
