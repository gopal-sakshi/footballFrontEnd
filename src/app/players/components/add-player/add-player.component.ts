import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  playerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private playerService: PlayerService) { }

  ngOnInit(): void {

    this.playerForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      nationality: ['', Validators.required],
      presentClub: ['', Validators.required],
      position: ['', Validators.required]

    })
  }

  playerFormSubmitted() {
    if(this.playerForm.valid) {
      console.log("adding player");
      let payload = {
        name: this.playerForm.get('name')!.value,
        age: this.playerForm.get('age')!.value,
        nationality: this.playerForm.get('nationality')!.value,
        presentClub: this.playerForm.get('presentClub')!.value,
        position: this.playerForm.get('position')!.value
    }; 
    console.log(payload);
      this.playerService.addPlayer(payload).subscribe(res => {
        console.log(res);
      });
    } else {
      console.log("please fill all the fields")
    }
    
  }
}
