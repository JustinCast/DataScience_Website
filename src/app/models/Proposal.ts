import { MemberToDisplay } from "./MemberToDisplay.interface";
import { ThematicToDisplay } from "./ThematicToDisplay.interface";

export class Proposal {
    constructor(
        public propName: string,
        public proponents: Array<MemberToDisplay>,
        public description: string,
        public propDate: Date,
        public propState: Date,
        public thematic: ThematicToDisplay,
        public prop_id?: number
    ) {}
}