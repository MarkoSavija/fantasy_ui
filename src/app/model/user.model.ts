import { FantasyTeam } from './fantasy-team.model';

export class User {

    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public username: string,
        public email: string,
        public fantasyTeam: FantasyTeam) {

        }
}
