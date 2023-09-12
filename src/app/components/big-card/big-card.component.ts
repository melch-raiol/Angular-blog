import { Component, Input, OnInit } from '@angular/core';
import {dataBase} from '../../data/dataBase'

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  Id:string = "0"
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""

  constructor() { }

  ngOnInit(): void {
    this.photoCover = dataBase[0].photoCover
    this.cardTitle = dataBase[0].title
    this.cardDescription = dataBase[0].description
  }

}
