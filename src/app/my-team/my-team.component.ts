import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Player } from '../player-details/player.model';
import { PlayerDetailsComponent } from '../player-details/player-details.component';
import { PlayerService } from '../service/player-service.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {

  allPlayers: Player [] = [];

  constructor(private modalService: NgbModal, private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe((data) => {
      this.allPlayers = data;
      /*
      for (const player of data) {
        this.allPlayers.push(player);
      }
      */
    });
  }

  showPlayerDetails(player: Player) {
    const modalRef = this.modalService.open(PlayerDetailsComponent);
    modalRef.componentInstance.player = player;
  }

}
