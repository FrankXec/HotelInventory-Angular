import { ChangeDetectionStrategy, Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit{

  nameofHotel = 'Frank Hotel';
  numberOfRooms = 10;
  hiddenRooms = false;
  title :string = 'Room List';

  selectedRoom! : RoomList;

  rooms: Room = {
    totalRooms: 20,
    avaibleRooms: 10,
    bookedRooms: 5
  }
  
  roomsList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor(private roomService: RoomsService){ }

  ngOnInit(): void {
    this.roomsList = this.roomService.getRooms();
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = "Frank's Holtel";
  }


  taggle() {
    this.hiddenRooms = this.hiddenRooms === false ? true : false;
    this.title = 'Rooms List';
  }

  selectRoom(room: RoomList){
    this.selectedRoom = room;
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 5,
      roomType: 'Deluxe Room',
      amenities: 'Air Conteiner, Free Wifi, TV, Bathroom, Kitchen',
      price: 2000,
      photos: 'fsdfesdf',
      checkinTime: new Date('10-Nov-2021'),
      checkoutTime: new Date('20-Nov-2021')
    }

    //this.roomsList.push(room); //default detection
    this.roomsList = [...this.roomsList,room] //onPush detection
  }
}
