import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as THREE from 'three';


import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Router } from '@angular/router';
import { HardcodedAutheticationService } from '../service/hardcoded-authetication.service';

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
  raycaster
  intersects
clips = new Array()


  clock: THREE.Clock = new THREE.Clock()

  sceneMeshes = new Array()


  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private router: Router, private autenticador: HardcodedAutheticationService) {

  }

  ngOnInit(): void {
    this.createScene(this.rendererCanvas);
    this.animate();

  }



  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    var width = window.innerWidth;
    var height = window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(
      75, width / height, 0.1, 1000
    );

    this.canvas = canvas.nativeElement;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.scene = new THREE.Scene();




    this.camera.position.z = 9;
    this.scene.add(this.camera);

    this.renderer.setSize(window.innerWidth, window.innerHeight)

    const light = new THREE.HemisphereLightProbe(0xffffff, 0x000000, 2);







    light.position.z = 10
    light.scale.x = 1000
    light.scale.z = 1000
    light.scale.y = 1000
    this.scene.add(light);

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

        this.objetoEscenario = root;


        this.objetoEscenario.scene.position.y = -5

        this.mixer = new THREE.AnimationMixer(this.objetoEscenario.scene);

        // this.objetoEscenario.animations.forEach((clip) => {

        //   let action = this.mixer.clipAction(clip);
        //   this.clips.push(clip)
        
        //   action.play();

        // });

        this.objetoEscenario.scene.traverse((child) => {
         
          if ((<THREE.Mesh>child).isMesh) {
            let m = <THREE.Mesh>child
            
            this.sceneMeshes.push(m)

          }

          if ((<THREE.Light>child).isLight) {
            let l = <THREE.Light>child

          }
        })


        this.scene.add(this.objetoEscenario.scene);
        console.log(this.objetoEscenario.scene.children[3].position.y)
        createjs.Tween.get( this.objetoEscenario.scene.children[3].rotation, { loop: true }).wait(0).to({ z:2.6256529909958453 }, 2000, createjs.Ease.getPowInOut(1)).wait(0).to({ z:2.2256529909958453 }, 2000, createjs.Ease.getPowInOut(1)).wait(0).to({ z:2.6256529909958453 }, 2000, createjs.Ease.getPowInOut(1)).wait(0).to({ z:2.2256529909958453 }, 2000, createjs.Ease.getPowInOut(1)).wait(0).to({ z:2.4256529909958453 }, 2000, createjs.Ease.getPowInOut(1))
        createjs.Tween.get( this.objetoEscenario.scene.children[3].position, { loop: true }).wait(0).to({ y:4.871538925170898 }, 2000, createjs.Ease.getPowInOut(1)).wait(0).to({ y:5.271538925170898 }, 2000, createjs.Ease.getPowInOut(1)).wait(0).to({ y:4.871538925170898}, 2000, createjs.Ease.getPowInOut(1)).wait(0).to({ y:5.271538925170898 }, 2000, createjs.Ease.getPowInOut(1)).wait(0).to({ y:5.0715389251708984 }, 2000, createjs.Ease.getPowInOut(1))
        this.modelReady = true
        console.log(this.clips)

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

    this.renderer.domElement.addEventListener('mousemove', evento => {
      this.onMouseMove(evento)
    }, false);
    this.renderer.domElement.addEventListener('click', evento => {
      this.onClick(evento)
    }
      , false);
  }





  public render() {
    this.frameId = requestAnimationFrame(() => {
      
      this.render();
      if (this.modelReady) this.mixer.update(this.clock.getDelta());{
        this.animacion()
      this.renderer.render(this.scene, this.camera);
      
      }

    });

  }


  public resize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);


  }

  public onMouseMove(event) {
    if (this.modelReady) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mouse = {
        x: (event.offsetX / width) * 2 - 1,
        y: -(event.offsetY / height) * 2 + 1
      }

      this.raycaster = new THREE.Raycaster();
      this.raycaster.setFromCamera(mouse, this.camera);

      this.intersects = this.raycaster.intersectObjects(this.sceneMeshes, false);

      if (this.intersects.length > 0) {

        if (this.intersects[0] != undefined) {

          if (this.intersects[0]) {
            this.renderer.domElement.className = "cursor"
          }
          else {
            this.renderer.domElement.className = ""
          }



        }
        else {
          this.renderer.domElement.className = ""
        }
      }

      else {
        this.renderer.domElement.className = ""
      }

    }

  }

  onClick(event) {
    if (this.intersects.length > 0) {

      if (this.intersects[0] != undefined) {

        if (this.intersects[0].object.name == "logo" || this.intersects[0].object.name == "contorno_ticket001_1" || this.intersects[0].object.name == "contorno_ticket001_2" || this.intersects[0].object.name == "contorno_ticket001_3" || this.intersects[0].object.name == "Ticket") {
          this.router.navigate(['eventos'])

        }

        else if (this.intersects[0].object.name == "usuario" || this.intersects[0].object.name == "gafas003_1" || this.intersects[0].object.name == "gafas003_3" || this.intersects[0].object.name == "gafas003_2") {
          this.router.navigate(['/usuarios/usuario/' + this.autenticador.getUsuario()])
        }
        else if (this.intersects[0].object.name == "ciudades_1" || this.intersects[0].object.name == "ciudades_2" || this.intersects[0].object.name == "ciudades_3" || this.intersects[0].object.name == "localización003_1" || this.intersects[0].object.name == "localización003_2" || this.intersects[0].object.name == "localización003_3") {
          this.router.navigate(['/ciudades'])
        }


      }
    }

  }


  animacion() {
    if(this.intersects!=undefined)
    {
    if (this.intersects.length > 0) {
      if (this.intersects[0] != undefined) {
        if (this.intersects[0].object.name == "usuario") {
         
        }
      }
      
    }
  }




  }

}
