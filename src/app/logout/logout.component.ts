import { HardcodedAutheticationService } from './../service/hardcoded-authetication.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/seguridad/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private autenticacion: HardcodedAutheticationService, public auth:AuthService) { }

  ngOnInit(): void {
    this.autenticacion.logout();
    this.auth.logout();
  }

}
