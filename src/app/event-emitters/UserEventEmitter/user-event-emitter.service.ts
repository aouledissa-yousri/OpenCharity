import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserEventEmitterService {

  updateEvent = new EventEmitter<void>()

  constructor() { }


  public emitUpdateEvent() {
    this.updateEvent.emit()
  }
}
