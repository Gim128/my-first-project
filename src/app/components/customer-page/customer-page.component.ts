import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.scss']
})
export class CustomerPageComponent implements OnInit {

  selectedId='';

  constructor() { }

  ngOnInit(): void {
  }

  LoadPage(link: string) {

    if (link==='delete-customer'){
      // this._router.navigate(['/customer/' + link, 'c001']);
      this._router.navigate(['/customer/' + link, this.selectedId]);
      return;
    }


    this._router.navigate(['/customer/' + link]);
  }
}
