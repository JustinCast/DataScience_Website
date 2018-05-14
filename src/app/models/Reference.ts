import { Page } from "./Page";
import { Code } from "./Code";

export class Reference {
    constructor(
        public description: string,
        public pages: Array<Page>,
        public does: Array<Code>,
        public document: string,
        public ref_id: number
    ) {}
}