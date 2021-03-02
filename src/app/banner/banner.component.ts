import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BannerService } from '../service/banner/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;
  
  constructor(private engServ: BannerService) {}
  ngOnInit(): void {
    this.engServ.createScene(this.rendererCanvas);
    this.engServ.animate();
   
  }
}
