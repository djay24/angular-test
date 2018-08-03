import { Component, OnInit } from '@angular/core';
import { AmiiboService } from '../services/amiibo.service'
import { Amiibo } from '../interfaces/amiibo'
import { ActivatedRoute } from '../../../node_modules/@angular/router';
@Component({
  selector: 'app-amiibo',
  templateUrl: './amiibo.component.html',
  styleUrls: ['./amiibo.component.css']
})
export class AmiiboComponent implements OnInit {
  amiibo: Amiibo;

  constructor(private amiiboService: AmiiboService, private route: ActivatedRoute) { }

  getAmiibo(tail: string) {
    this.amiiboService.getAmiibo(tail).subscribe((amiibo: any) => this.amiibo = amiibo.amiibo[0]);
  }

  getTail() {
    this.route.params.subscribe(params => {
      this.getAmiibo(params.id);
    });
  }

  ngOnInit() {
    this.getTail();
  }

}
