import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-condiciones-grls-page',
  templateUrl: './condiciones-grls-page.component.html',
  styleUrls: ['./condiciones-grls-page.component.css']
})
export class CondicionesGrlsPageComponent implements OnInit{

  domesticoSlctd!: boolean;
  categoria!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.domesticoSlctd = true;
  }

  OnChangeCategory(categoria: string) {
    if(categoria === 'domestico') {
      this.domesticoSlctd = true;
    }
    else if(categoria === 'industrial') {
      this.domesticoSlctd = false;
    }
  }



}
