import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  endpoint = "http://localhost:8080/DemoAPI"

  roomsList: RoomList[] = []

  constructor() { }

  getRooms(): RoomList[]{
    return this.roomsList ;
  }
}
