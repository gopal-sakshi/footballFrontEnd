import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersHomeComponent } from './components/players-home/players-home.component';
import { DisplayPlayersComponent } from './components/display-players/display-players.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayersRoutingModule } from './players-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlayerService } from './services/player.service';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { Messages12Module } from 'gopal612-testing-library';



@NgModule({
  declarations: [
    PlayersHomeComponent,
    DisplayPlayersComponent,
    AddPlayerComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    FlexLayoutModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,    
    MatNativeDateModule,    
    MatSelectModule,    
    MatButtonModule,
    Messages12Module
  ],
  providers: [
    PlayerService
  ]
})
export class PlayersModule { }
