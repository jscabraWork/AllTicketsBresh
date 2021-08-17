import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PalcosDataService } from 'src/app/service/data/palcos-data.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  link
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private palcoServicio: PalcosDataService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.link = this.data.link
  }

}
