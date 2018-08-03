import { Component, OnInit } from '@angular/core';
import { AmiiboService } from '../services/amiibo.service';
import { Amiibo } from '../interfaces/amiibo';
import { PaginationService } from '../services/pagination.service'

@Component({
  selector: 'app-amiibos',
  templateUrl: './amiibos.component.html',
  styleUrls: ['./amiibos.component.css']
})
export class AmiibosComponent implements OnInit {
  public amiibos: Amiibo[];
  pager: any = {};
  pagedItems: any = [];

  constructor(private amiiboService: AmiiboService, private paginationService: PaginationService ) { }

  getAmiibos(){
    this.amiiboService.getAmiibos().subscribe((amiibos: any) => {
      this.amiibos = amiibos.amiibo;
      this.setPage(1);
    } );
  };
  setPage(page: number) {
    if (page < 1 || this.pager.totalPages) {
      return;
    }
    this.pager = this.paginationService.getPager(this.amiibos.length, page);
    this.pagedItems = this.amiibos.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }


  myFunction() {
    // this.amiiboService.myFunction();
  }

  ngOnInit() {
    // this.myFunction();
    this.getAmiibos();
  }

}
