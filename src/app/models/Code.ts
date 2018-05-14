export class Code {
    constructor(
        public title: string,
        public notes: Array<string>,
        public body: string,
        public upload_user_id: number,
        public code_id: number
    ) {}
}