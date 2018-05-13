import { MemberToDisplay } from "./MemberToDisplay.interface";

export interface Investigation {
    inv_name: string,
    inv_description: string,
    inv_members: Array<MemberToDisplay>,
    inv_start_date: Date,
    inv_finish_date: Date
}