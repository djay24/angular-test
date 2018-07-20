import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  private temp: any;
  newPower: string;
  
  constructor(private route: ActivatedRoute) { }
  
  addPower() {
    this.hero.powers.push(this.newPower);
    this.newPower = '';
  }

  ngOnInit() {
    this.temp = this.route.params.subscribe(params => {
      HEROES.forEach((el) => {
        if (el.id === +params['id']) {
          console.log(el);
          this.hero = el;
        }
      });
    });
  }

}
