import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { DisplayPlayersComponent } from './components/display-players/display-players.component';
import { PlayersHomeComponent } from './components/players-home/players-home.component';


const routes: Routes = [
    {
        path: '',
        component: PlayersHomeComponent
    },
    {
        path: 'display-players',
        component: DisplayPlayersComponent
    },
    {
        path: 'add-player',
        component: AddPlayerComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlayersRoutingModule { }
