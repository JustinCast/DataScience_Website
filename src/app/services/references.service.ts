import { Injectable } from '@angular/core';
import { Reference } from '../models/Reference';
import { Page } from '../models/Page';
import { Code } from '../models/Code';

@Injectable()
export class ReferencesService {
  private pages: Array<Page> = new Array()
  private codes: Array<Code> = new Array()
  private references: Array<Reference> = new Array()
  constructor() { }

  public insertPage(page: Page): void {
    this.pages.unshift(page)
  }

  public insertCode(code: Code): void {
    this.codes.unshift(code)
  }

  public getPages(): Array<Page> {
    return this.pages
  }

  public getCodes(): Array<Code> {
    return this.codes
  }

  public getPage(page_id: number): Page {
    let page: Page
    this.pages.forEach(p => {
      if(p.page_id === page_id)
        page = p
    })
    return page
  }

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
