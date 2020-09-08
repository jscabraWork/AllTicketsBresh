import { HardcodedAutheticationService } from './../service/hardcoded-authetication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private autenticacion: HardcodedAutheticationService) { }

  ngOnInit(): void {
    this.autenticacion.logout();
  }

}
