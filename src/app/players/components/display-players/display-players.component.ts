import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-display-players',
  templateUrl: './display-players.component.html',
  styleUrls: ['./display-players.component.css']
})
export class DisplayPlayersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'age', 'nationality', 'presentClub'];
  dataSource:any;

  playersData:any;
  constructor(public playerService: PlayerService) { }

  ngOnInit(): void {
    
    
    this.playerService.getPlayers().subscribe(res => {
      this.playersData = res;
      console.log(this.playersData);
      this.dataSource = this.playersData.Items;
    });    
  }

}
