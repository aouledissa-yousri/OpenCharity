import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchEventEmitterService {

  searchEvent = new EventEmitter<string>()

  constructor() { }

  public emitSearchEvent(keyword: string) {
    this.searchEvent.emit(keyword)
  }
}
