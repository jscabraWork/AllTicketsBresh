import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as THREE from 'three';


import {GLTF, GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
 
import { OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

declare var createjs: any;
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  canvas: HTMLCanvasElement;
  renderer: THREE.WebGLRenderer;
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  mixer: THREE.AnimationMixer
  objetoEscenario: GLTF;
  frameId: number = null;
  modelReady = false;
  

  clock: THREE.Clock = new THREE.Clock()

  sceneMeshes = new Array()


  @ViewChild('rendererCanvas', {static: true})
  public rendererCanvas: ElementRef<HTMLCanvasElement>;
  
  constructor() {
    var width = window.innerWidth ;
    var height = window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(
      75, width / height, 0.1, 1000
    );
  }

  ngOnInit(): void {
    this.createScene(this.rendererCanvas);
    this.animate();
    
  }

  

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    

    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,   
      antialias: true 
    });
    this.scene = new THREE.Scene();




  this.camera.position.z=9;
  this.scene.add(this.camera);

  this.renderer.setSize(window.innerWidth, window.innerHeight)

  const light = new THREE.HemisphereLightProbe( 0xffffff, 0x000000, 2 );


  
    

  

  light.position.z=10
  light.scale.x=1000
  light.scale.z=1000
  light.scale.y=1000
  this.scene.add( light );

   // const controls = new OrbitControls(this.camera, this.renderer.domElement)

  // const planeGeometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(100, 20)
  // const plane: THREE.Mesh = new THREE.Mesh(planeGeometry, new THREE.MeshPhongMaterial())
  // plane.rotateX(-Math.PI / 2)
  // plane.position.y = -6.5
  // plane.receiveShadow = true;
  // this.scene.add(plane)
   
  const gltLoader = new GLTFLoader();
  gltLoader.setPath('../../../assets/modelados/')  

  gltLoader.load(
      'escenario.gltf', (root) => {
        
        this.objetoEscenario =root;
        
     
        this.objetoEscenario.scene.position.y=-5
        
        this.mixer = new THREE.AnimationMixer( this.objetoEscenario.scene );
        
        this.objetoEscenario.animations.forEach( ( clip ) => {
            
            let action = this.mixer.clipAction( clip );
            action.play();

        } );
        
        this.objetoEscenario.scene.traverse( (child) =>{
          //console.log(this.sceneMeshes)
            if ((<THREE.Mesh>child).isMesh) {
              let m = <THREE.Mesh>child

              this.sceneMeshes.push(m)
                
            }

            if ((<THREE.Light>child).isLight) {
                let l = <THREE.Light>child
          
            }
        })

       
        this.scene.add(this.objetoEscenario.scene);
        
        //createjs.Tween.get( this.objetoEscenario.scene.rotation, { loop: true }).wait(0).to({ y:0.2, x:0.1 }, 1000, createjs.Ease.getPowInOut(1)).wait(0).to({ y:1.2, x:1.1 }, 2000, createjs.Ease.getPowInOut(1)).wait(0).to({ y:0.2, x:1.1 }, 1000, createjs.Ease.getPowInOut(1)).wait(0).to({ y:1.2, x:0.1 }, 2000, createjs.Ease.getPowInOut(1)).wait(0).to({ y:0, x:0 }, 1000, createjs.Ease.getPowInOut(1))
        this.modelReady = true
        
      }
 
    )
     
    this.renderer.physicallyCorrectLights = true
    this.renderer.shadowMap.enabled = true
     
    
  }


  

  public animate(): void {


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

      this.renderer.domElement.addEventListener('mousemove',evento=>{
        this.onMouseMove(evento)
      }, false);
      this.renderer.domElement.addEventListener('click',evento=>{
        this.onClick(evento)
      }
      
      , false);
  }





  public render() {
    this.frameId = requestAnimationFrame(() => {
      this.render();
      if (this.modelReady) this.mixer.update(this.clock.getDelta());
      this.renderer.render(this.scene, this.camera);
      
    });
    
  }


  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);

    
  }

  public onMouseMove( event ) {
    if(this.modelReady)
    {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mouse = {
        x: (event.clientX / width) * 2 - 1,
        y: -(event.clientY / height) * 2 + 1
    }

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, this.camera);

    const intersects = raycaster.intersectObjects(this.sceneMeshes, false);
    
   if (intersects.length > 0) {
      // console.log(sceneMeshes.length + " " + intersects.length)
       //console.log(intersects[0])
       //console.log(intersects[0].object.userData.name + " " + intersects[0].distance + " ") //ESTO PUEDE SER UTIL
      // console.log(intersects[0].face.normal)
       // line.position.set(0, 0, 0);
       // line.lookAt(intersects[0].face.normal);
       // line.position.copy(intersects[0].point);

       
     console.log(intersects[0])
  if(intersects[0]!=undefined){
   
      // if(intersects[0].object.name === "usuario"){
      //   intersects[0].object.rotation.y +=1
      // }
    }
   }

    }
  
  }

  onClick( event ) {
      console.log("A")

    }


  hoverPiece(){


 
  }
 

}
