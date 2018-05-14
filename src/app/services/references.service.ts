import { Injectable } from '@angular/core';
import { Reference } from '../models/Reference';

@Injectable()
export class ReferencesService {
  references: Array<Reference> = new Array()
  constructor() { }

  public insertReference(ref: Reference): void {
    this.references.unshift(ref)
  }

  public getRefs(): Array<Reference> {
    return this.references
  }
  
  public getOneRef(ref_id: number): Reference {
    let reference: Reference
    this.references.forEach(ref => {
      if(ref.ref_id === ref_id)
        reference = ref
    })
    return reference
  }
}
