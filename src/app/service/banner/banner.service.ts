import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'


@Injectable({
  providedIn: 'root'
})
export class BannerService  implements OnDestroy{
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;


  private objeto: THREE.Object3D = new THREE.Object3D();
  private objeto2: THREE.Object3D = new THREE.Object3D();;
  private objeto3: THREE.Object3D = new THREE.Object3D();;
  private objeto4: THREE.Object3D = new THREE.Object3D();;
  private objeto5: THREE.Object3D = new THREE.Object3D();;

  private frameId: number = null;

  public constructor(private ngZone: NgZone) {
  }
  public ngOnDestroy(): void {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }
  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {

    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    var width = window.innerWidth -17;
    var height = window.innerHeight-118;
    this.renderer.setSize(width, height);

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, width / height, 0.1, 1000
    );
    this.camera.position.z = 10;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight(0xed701c);
    this.light.position.z = 10;
    this.scene.add(this.light);
      
  

    const objLoader = new OBJLoader();
    objLoader.setPath('../../../assets/images/models/')
    objLoader.load('usuario.obj', (root) => {
      this.objeto =root;
      
      this.objeto.scale.x =0.014
      this.objeto.scale.y =0.014
      this.objeto.scale.z =0.014
      this.objeto.position.y =3
      this.objeto.position.x=12
      this.objeto.rotation.x =0.4
      this.scene.add(this.objeto);
      
    });

    objLoader.load('ticket.obj', (root) => {
      this.objeto2 =root;
      
      this.objeto2.scale.x =0.035
      this.objeto2.scale.y =0.035
      this.objeto2.scale.z =0.035

      this.objeto2.position.y =-0.5
      this.objeto2.position.x=6
      this.scene.add(this.objeto2);
      
    });
    

    objLoader.load('logo.obj', (root) => {
      this.objeto3 =root;
      
      this.objeto3.scale.x =0.035
      this.objeto3.scale.y =0.035
      this.objeto3.scale.z =0.035
      this.objeto3.position.y =-6

      this.objeto3.rotation.z =-0.09
      this.scene.add(this.objeto3);
      
    });

    objLoader.load('ciudades.obj', (root) => {
      this.objeto4 =root;
      
      this.objeto4.scale.x =0.018
      this.objeto4.scale.y =0.018
      this.objeto4.scale.z =0.018
      this.objeto4.position.y =-0.5
      this.objeto4.position.x=-6

      this.scene.add(this.objeto4);
      
    });

    objLoader.load('botella.obj', (root) => {
      this.objeto5 =root;
      
      this.objeto5.scale.x =0.025
      this.objeto5.scale.y =0.02
      this.objeto5.scale.z =0.025
      this.objeto5.position.y =3
      this.objeto5.position.x=-12
      this.scene.add(this.objeto5);
      
    });
  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });


    this.objeto.rotation.y +=0.02;
    this.objeto2.rotation.y +=0.01;
    this.objeto4.rotation.y +=0.02;
    this.objeto5.rotation.y +=0.05;
    this.renderer.render(this.scene, this.camera);
  }

  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
  }
}
