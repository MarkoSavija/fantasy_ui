import { User } from './user.model';
import { Player } from '../player-details/player.model';

export class FantasyTeam {

    constructor(
        public id: number,
        public teamName: string,
        public user: User,
        public playersList: Player []) {
        }
}
