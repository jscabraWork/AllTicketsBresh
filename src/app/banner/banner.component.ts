import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'
import *as THREEx from '../../../node_modules/threex.domevents'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() {
    var scene = new THREE.Scene();
    
    var camera = new THREE.PerspectiveCamera( 80, window.innerWidth/window.innerHeight, 0.1, 1000 );
    
    var renderer = new THREE.WebGLRenderer();
    //scene.background = new THREE.Color( 0xffffff  );
    
    
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    var geometry = new THREE.SphereBufferGeometry(10,10,10);
    var material = new THREE.MeshNormalMaterial( { wireframe:true } );


    var geometry2 = new THREE.SphereBufferGeometry( 15, 15, 15 );
    var material2 = new THREE.MeshNormalMaterial( { wireframe:true } );

    var cubePrincipal = new THREE.Mesh(geometry2, material2)
    cubePrincipal.position.y=-10;
    
    var cube = new THREE.Mesh( geometry, material );
    cube.position.x =40;
    cube.position.y=10;
    
    


    var cube2 = new THREE.Mesh( geometry, material );
    cube2.position.x= 80;
    cube2.position.y=20;

    var cube3 = new THREE.Mesh( geometry, material );
    cube3.position.x= -40;
    cube3.position.y=10;
   
    var cube4 = new THREE.Mesh( geometry, material );
    cube4.position.x= -80;
    cube4.position.y=20;

    scene.add(cubePrincipal);
    scene.add( cube );
    scene.add( cube3 );
    scene.add( cube2 );
    scene.add( cube4 );
    
    camera.position.z = 70;

    const domEvents = THREEx.DomEvents();
    
    



    var animate = function () {
      requestAnimationFrame( animate );
    
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      
      cube2.rotation.x += 0.01;
      cube2.rotation.y += 0.01;
    
      cube3.rotation.x += 0.01;
      cube3.rotation.y += 0.01;
      
      cube4.rotation.y += 0.01;
      cube4.rotation.x += 0.01;

      cubePrincipal.rotation.x += 0.01;
      cubePrincipal.rotation.y += 0.01;
      
      renderer.render( scene, camera );

      
   
    };
    
    animate();
      }

  ngOnInit(): void {
  }

}
