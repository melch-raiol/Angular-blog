import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataBase} from '../../data/dataBase'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  smallCardCover1:string = ""
  @Input()
  smallCardTitle1:string = ""
  @Input()
  smallCardDescription1:string = ""

  @Input()
  smallCardCover2:string = ""
  @Input()
  smallCardTitle2:string = ""
  @Input()
  smallCardDescription2:string = ""

  @Input()
  smallCardCover3:string = ""
  @Input()
  smallCardTitle3:string = ""
  @Input()
  smallCardDescription3:string = ""

  private Id:string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.Id = value.get("id")
      )
      this.setValuesToComponent(this.Id)
  }

  setValuesToComponent(id:string | null){

    this.smallCardTitle1 = dataBase[1].title
    this.smallCardDescription1 = dataBase[1].description
    this.smallCardCover1 = dataBase[1].photoCover

    this.smallCardTitle2 = dataBase[2].title
    this.smallCardDescription2 = dataBase[2].description
    this.smallCardCover2 = dataBase[2].photoCover

    this.smallCardTitle3 = dataBase[3].title
    this.smallCardDescription3 = dataBase[3].description
    this.smallCardCover3 = dataBase[3].photoCover
  }

}
