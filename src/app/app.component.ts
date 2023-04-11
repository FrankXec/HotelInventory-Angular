import { Component, AfterViewInit,ViewChild,ViewContainerRef, ElementRef, OnInit } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotelinventory';
  role = 'Admin';

  //@ViewChild('user', {read:ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('name', {static: true}) name! : ElementRef;

  ngOnInit(){
    this.name.nativeElement.innerText = "Frankland";
  }

  // ngAfterViewInit(): void {
  //   const contentRef = this.vcr.createComponent(RoomsComponent);
  //   contentRef.instance.numberOfRooms = 50;
  // }
}
