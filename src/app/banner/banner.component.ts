import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as THREE from 'three';


import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
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
  clips: THREE.AnimationAction[] = new Array()
 activeAction: THREE.AnimationAction
 lastAction: THREE.AnimationAction

 activeAction2: THREE.AnimationAction
 lastAction2: THREE.AnimationAction


 sobreObjeto:boolean = false
  clock: THREE.Clock = new THREE.Clock()

  sceneMeshes = new Array()


  @ViewChild('rendererCanvas', { static: true })
  public rendererCanvas: ElementRef<HTMLCanvasElement>;

  constructor(private router: Router, private autenticador: HardcodedAutheticationService) {

  }

  ngOnInit(): void {
    
    this.activeAction = null;
    this.lastAction = null;

    this.activeAction2 = null;
    this.lastAction2 = null;

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

    const planeGeometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(100, 20)
    const plane: THREE.Mesh = new THREE.Mesh(planeGeometry, new THREE.MeshPhongMaterial())
    plane.rotateX(-Math.PI / 2)
    plane.position.y = -6.5
    plane.receiveShadow = true;
    this.scene.add(plane)

    const gltLoader = new GLTFLoader();
    gltLoader.setPath('../../../assets/modelados/')

    gltLoader.load(
      'escenario.gltf', (root) => {

        this.objetoEscenario = root;


        this.objetoEscenario.scene.position.y = -5

        this.mixer = new THREE.AnimationMixer(this.objetoEscenario.scene);

        this.objetoEscenario.animations.forEach((clip) => {

          let action = this.mixer.clipAction(clip);

          this.clips.push(action)
        if(clip.name!='usuario-mouse' && clip.name!='gafas-mouse'  && clip.name!='ciudades-mouse' && clip.name!='loca-mouse' && clip.name!='ticket-mouse'  && clip.name!='contorno-mouse'  && clip.name!='logo-mouse'){
          action.play();
        }

        });

        this.objetoEscenario.scene.traverse((child) => {
         
          if ((<THREE.Mesh>child).isMesh) {
            let m = <THREE.Mesh>child
            
            this.sceneMeshes.push(m)

          }

          if ((<THREE.Light>child).isLight) {
            let l = <THREE.Light>child

          }
        }
        
        )
        

        this.scene.add(this.objetoEscenario.scene);
        
        
        this.modelReady = true
        console.log(this.clips)
        console.log(this.sceneMeshes)
        
        
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
      this.animacion()
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

        if ( this.intersects[0].object.name == "contorno_ticket001_1" || this.intersects[0].object.name == "contorno_ticket001_2" || this.intersects[0].object.name == "contorno_ticket001_3" || this.intersects[0].object.name == "Ticket") {
          this.router.navigate(['eventos'])

        }
        else if(this.intersects[0].object.name == "logo" ){
          this.router.navigate(['nosotros'])
        }

        else if (this.intersects[0].object.name == "usuario001" || this.intersects[0].object.name == "gafas_1" || this.intersects[0].object.name == "gafas_2" || this.intersects[0].object.name == "gafas_3") {
          this.router.navigate(['/usuarios/usuario/' + this.autenticador.getUsuario()])
        }
        else if (this.intersects[0].object.name == "ciudades_1" || this.intersects[0].object.name == "ciudades_2" || this.intersects[0].object.name == "ciudades_3" || this.intersects[0].object.name == "localización003_1" || this.intersects[0].object.name == "localización003_2" || this.intersects[0].object.name == "localización003_3") {
          this.router.navigate(['/ciudades'])
        }

        else if (this.intersects[0].object.name == "Cap_Cylinder002" || this.intersects[0].object.name == "Cap_Subdivision_Surface_Sphere001" || this.intersects[0].object.name == "Cap_11001" || this.intersects[0].object.name == "papas001_1" || this.intersects[0].object.name == "papas001_2" || this.intersects[0].object.name == "botella001") {
          alert("AllProducts Pronto")
        }

      }
    }

  }


  animacion() {
    
    if(this.intersects!=undefined)
    {
    if (this.intersects.length > 0) {
      if (this.intersects[0] != undefined) {
        if (!this.sobreObjeto&& (this.intersects[0].object.name == "usuario001" || this.intersects[0].object.name == "gafas_1" || this.intersects[0].object.name == "gafas_2" || this.intersects[0].object.name == "gafas_3")) {

          this.sobreObjeto =true
          this.lastAction = this.clips[18]
           this.activeAction = this.clips[17]
          this.lastAction.fadeOut(0.1)
          this.activeAction
					.reset()
					.fadeIn( 0.1 )
          .setLoop( THREE.LoopOnce ,1)
					.play();
          this.activeAction.clampWhenFinished = true


         
          this.lastAction2 = this.clips[20]
          this.activeAction2 = this.clips[19]
           this.lastAction2.fadeOut(0.1)
          
          this.activeAction2
					.reset()
					.fadeIn( 0.1 )
          .setLoop( THREE.LoopOnce ,1)
					.play();
          this.activeAction2.clampWhenFinished = true




          
        
        }


        else if (!this.sobreObjeto&& (this.intersects[0].object.name == "ciudades_1" || this.intersects[0].object.name == "ciudades_2" || this.intersects[0].object.name == "ciudades_3" || this.intersects[0].object.name == "localización003_1" || this.intersects[0].object.name == "localización003_2" || this.intersects[0].object.name == "localización003_3")) {


          this.sobreObjeto =true
          this.lastAction = this.clips[5]
           this.activeAction = this.clips[4]
          this.lastAction.fadeOut(0.1)
          this.activeAction
					.reset()
					.fadeIn( 0.1 )
          .setLoop( THREE.LoopOnce ,1)
					.play();
          this.activeAction.clampWhenFinished = true


         
          this.lastAction2 = this.clips[7]
          this.activeAction2 = this.clips[6]
           this.lastAction2.fadeOut(0.1)
          
          this.activeAction2
					.reset()
					.fadeIn( 0.1 )
          .setLoop( THREE.LoopOnce ,1)
					.play();
          this.activeAction2.clampWhenFinished = true




          

        }

        else if (!this.sobreObjeto&& (this.intersects[0].object.name == "contorno_ticket001_1" || this.intersects[0].object.name == "contorno_ticket001_2" || this.intersects[0].object.name == "contorno_ticket001_3" || this.intersects[0].object.name == "Ticket")) {
         
          this.sobreObjeto =true
          this.lastAction = this.clips[1]
          this.activeAction = this.clips[0]
         this.lastAction.fadeOut(0.1)
         this.activeAction
         .reset()
         .fadeIn( 0.1 )
         .setLoop( THREE.LoopOnce ,1)
         .play();
         this.activeAction.clampWhenFinished = true


        
         this.lastAction2 = this.clips[9]
         this.activeAction2 = this.clips[10]
          this.lastAction2.fadeOut(0.1)
         
         this.activeAction2
         .reset()
         .fadeIn( 0.1 )
         .setLoop( THREE.LoopOnce ,1)
         .play();
         this.activeAction2.clampWhenFinished = true




         
        }

        else if(!this.sobreObjeto&&(this.intersects[0].object.name == "logo") ){

          this.sobreObjeto =true
          this.lastAction = this.clips[2]
          this.activeAction = this.clips[3]
         this.lastAction.fadeOut(0.1)
         this.activeAction
         .reset()
         .fadeIn( 0.1 )
         .setLoop( THREE.LoopOnce ,1)
         .play();
         this.activeAction.clampWhenFinished = true
         

        }
      }
    
    }

    else if(this.activeAction!=null&&this.activeAction2!=null ){
   
       this.activeAction.fadeOut(0.3)
      this.lastAction.reset()
      this.lastAction.fadeIn(0.1)
      this.lastAction.play()
     
       this.activeAction2.fadeOut(0.1)
      this.lastAction2.reset()
      this.lastAction2.fadeIn(0.1)
      this.lastAction2.play()


      this.activeAction = null
      this.activeAction2 = null
      this.sobreObjeto =false
    } 
    else if(this.activeAction!=null ){

      this.activeAction.fadeOut(0.3)
      this.lastAction.reset()
      this.lastAction.fadeIn(0.1)
      this.lastAction.play()
     
  
      this.activeAction = null
  
      this.sobreObjeto =false

    }
  }




  }


}
