import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string = "https://upload.wikimedia.org/wikipedia/commons/c/c2/Pantanal_Mato_Grosso_Brasil.jpg"

  @Input()
  contentTitle:string = "Floresta"

  @Input()
  contentDescription:string = " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure eius quas cupiditate, vel iusto incidunt facilis saepe magni ullam quia aliquam architecto laudantium, error esse officiis maxime perferendis cum consectetur."

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get("id"))

      )
  }

}
