import { Component, OnInit, Input } from '@angular/core';
import * as p5 from 'p5';
import 'p5/lib/addons/p5.dom';
import { Clases } from '../clases';

@Component({
  selector: 'app-normas-transito',
  templateUrl: './normas-transito.component.html',
  styleUrls: ['./normas-transito.component.css']
})
export class NormasTransitoComponent implements OnInit {

  private p5;

  @Input() clase: Clases;

  constructor() { }

  ngOnInit() {

  }

  empezar(){

    this.createCanvas();

  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  sketch = (p:any) =>{

      //variables
    var canvasDiv = document.getElementById('canvasP5');
    var canvasW = canvasDiv.clientWidth;
    var canvasH = canvasDiv.clientHeight;
    var btnStart;

    var primerRetoVideo;
    var primerRetoControls;
    var primerRetoExplicacionVideo;

    var segundoRetoVideo;
    var segundoRetoControls;
    var segundoRetoExplicacionVideo;

    var tercerRetoVideo;
    var tercerRetoControls;
    var tercerRetoExplicacionVideo;
//feeds
    var retroalimenatacionBuena;
    var retroalimenatacionMala;

    var retroalimenatacionBuenaSegunda;
    var retroalimenatacionMalaSegunda;

    var retroalimenatacionBuenaTercera;
    var retroalimenatacionMalaTercera;

    var feedFinal;

    var wait;

    

    p.setup = () =>{

      btnStart = p.select('.btn-start');
      btnStart.hide();

      primerRetoControls = p.select('.primerRetoControlsContainer');
      primerRetoControls.hide();

      retroalimenatacionMala = p.select('.retroAlimentacionMalaContainer');
      retroalimenatacionMala.hide();
      retroalimenatacionBuena =p.select('.retroAlimentacionBuenaContainer');
      retroalimenatacionBuena.hide();
      retroalimenatacionMalaSegunda = p.select('.retroAlimentacionMalaContainerSegundo');
      retroalimenatacionMalaSegunda.hide();
      retroalimenatacionBuenaSegunda =p.select('.retroAlimentacionBuenaContainerSegundo');
      retroalimenatacionBuenaSegunda.hide();
      retroalimenatacionBuenaTercera =p.select('.retroAlimentacionBuenaContainerTercero');
      retroalimenatacionBuenaTercera.hide();
      retroalimenatacionMalaTercera =p.select('.retroAlimentacionMalaContainerTercero');
      retroalimenatacionMalaTercera.hide();
      feedFinal = p.select('.feed-final-normas');
      feedFinal.hide();

      segundoRetoControls =p.select('.segundoRetoControlsContainer');
      segundoRetoControls.hide();

      tercerRetoControls =p.select('.tercerRetoControlsContainer');
      tercerRetoControls.hide();
      wait =p.select('.text-wait');
      wait.show();
      
      primerReto();

    }

    p.draw = () =>{

    //  if( &&segundoRetoVideo.time()>2){
    //   wait.hide();
    //  }
    
    //  if(segundoRetoExplicacionVideo.time()>2){
    //   wait.hide();
    //  }

    //  if(tercerRetoVideo.time()>2){
    //   wait.hide();
    //  }
    
    //  if(tercerRetoExplicacionVideo.time()>2){
    //   wait.hide();
    //  }

    //  if(primerRetoExplicacionVideo.time()>2){
    //   wait.hide();

    //  }

      if(primerRetoVideo.time()>2){
        wait.hide();
     }

    }

    

    function primerReto(){

      primerRetoVideo = p.createVideo('/assets/actividadexplicativa/1.mov');
      
      primerRetoVideo.parent('canvasP5video');
      primerRetoVideo.size(canvasW, canvasH);
      
      // primerRetoVideo.speed(2);//comentar despues
      
      
      primerRetoVideo.play();

      primerRetoVideo.onended(primerRetoSelectores);

    }

    function primerRetoSelectores(){
      // console.log(primerRetoVideo.time());
      primerRetoControls.show();

      var izquierda = p.select('.izquierda');
      var derecha = p.select('.derecha');

      izquierda.mousePressed(respuestaCorrecta);
      derecha.mousePressed(respuestaIncorrecta);

      var btn_continuar_correct = p.select('.continuar_btn_correct');
      var btn_continuar_bad = p.select('.continuar_btn_bad');
    
      function respuestaCorrecta(){
        primerRetoControls.hide();
        primerRetoVideo.hide();

        retroalimenatacionBuena.show();
        btn_continuar_correct.mousePressed(primerRetoExplicacion);

      }

      function respuestaIncorrecta(){

        primerRetoControls.hide();
        primerRetoVideo.hide();
  
        retroalimenatacionMala.show();
        btn_continuar_bad.mousePressed(primerRetoExplicacion);
        
      }
    }

    function primerRetoExplicacion(){

      retroalimenatacionBuena.hide();
      retroalimenatacionMala.hide();
      
      primerRetoExplicacionVideo = p.createVideo('/assets/actividadexplicativa/2.mov');
      primerRetoExplicacionVideo.parent('canvasP5video');
      primerRetoExplicacionVideo.size(canvasW, canvasH);
      // primerRetoExplicacionVideo.speed(2);//comentar despues
      
      primerRetoExplicacionVideo.play();

      primerRetoExplicacionVideo.onended(segundoReto);

    }

    function segundoReto(){

      primerRetoExplicacionVideo.hide();
      
      segundoRetoVideo = p.createVideo('/assets/actividadexplicativa/3.mov');
      segundoRetoVideo.parent('canvasP5video');
      segundoRetoVideo.size(canvasW, canvasH);
      // segundoRetoVideo.speed(2);//comentar despues
      
      segundoRetoVideo.play();

      segundoRetoVideo.onended(segundoRetoSelectores);
      
    }

    function segundoRetoSelectores(){

      segundoRetoControls.show();
      var girar_izquierda = p.select('.girar_izquierda');
      var girar_derecha = p.select('.girar_derecha');
      var tomar_cicloruta = p.select('.tomar_cicloruta');

      girar_izquierda.mousePressed(respuestaIncorrecta);
      girar_derecha.mousePressed(respuestaCorrecta);
      tomar_cicloruta.mousePressed(respuestaIncorrecta);

      var btn_continuar_correct = p.select('.continuar_btn_correct_segundo');
      var btn_continuar_bad = p.select('.continuar_btn_bad_segundo');

      function respuestaCorrecta(){

        segundoRetoControls.hide();
        segundoRetoVideo.hide();

        retroalimenatacionBuenaSegunda.show();
        btn_continuar_correct.mousePressed(segundoRetoExplicacion);

      }
        
  
      function respuestaIncorrecta(){

        segundoRetoControls.hide();
        segundoRetoVideo.hide();
  
        retroalimenatacionMalaSegunda.show();
        btn_continuar_bad.mousePressed(segundoRetoExplicacion);
        
      }

    }

    function segundoRetoExplicacion(){

       retroalimenatacionBuenaSegunda.hide();
       retroalimenatacionMalaSegunda.hide();
       
       segundoRetoExplicacionVideo = p.createVideo('/assets/actividadexplicativa/4.mov');
       segundoRetoExplicacionVideo.parent('canvasP5video');
       segundoRetoExplicacionVideo.size(canvasW, canvasH);
      //  segundoRetoExplicacionVideo.speed(2);//comentar despues
       
       segundoRetoExplicacionVideo.play();
 
       segundoRetoExplicacionVideo.onended(tercerReto);

      }

      function tercerReto(){

        segundoRetoExplicacionVideo.hide();

        tercerRetoVideo = p.createVideo('/assets/actividadexplicativa/5.mov');
        tercerRetoVideo.parent('canvasP5video');
        tercerRetoVideo.size(canvasW, canvasH);
        // tercerRetoVideo.speed(2);//comentar despues
        
        tercerRetoVideo.play();
  
        tercerRetoVideo.onended(tercerRetoSelectroes);

      }

      function tercerRetoSelectroes(){

        tercerRetoControls.show();

        var avanzar = p.select('.avanzar');
        var noAvanzar = p.select('.noAvanzar');

        avanzar.mousePressed(respuestaIncorrecta);
        noAvanzar.mousePressed(respuestaCorrecta);

        var btn_continuar_correct = p.select('.continuar_btn_correct_tercero');
       var btn_continuar_bad = p.select('.continuar_btn_bad_tercero');

      function respuestaCorrecta(){

        tercerRetoControls.hide();
        tercerRetoVideo.hide();

        retroalimenatacionBuenaTercera.show();
        btn_continuar_correct.mousePressed(tercerRetoExplicacion);

      }
        
  
      function respuestaIncorrecta(){

        tercerRetoControls.hide();
        tercerRetoVideo.hide();
  
        retroalimenatacionMalaTercera.show();
        btn_continuar_bad.mousePressed(tercerRetoExplicacion);
        
      }


      }

      function tercerRetoExplicacion(){

        retroalimenatacionMalaTercera.hide();      
        retroalimenatacionBuenaTercera.hide();

        tercerRetoExplicacionVideo = p.createVideo('/assets/actividadexplicativa/6.mov');
        tercerRetoExplicacionVideo.parent('canvasP5video');
        tercerRetoExplicacionVideo.size(canvasW, canvasH);
        // tercerRetoExplicacionVideo.speed(2);//comentar despues
        tercerRetoExplicacionVideo.play();
        tercerRetoExplicacionVideo.onended(finalClase);

      }

      function finalClase(){
        tercerRetoExplicacionVideo.hide();
        feedFinal.show();

        var delayInMilliseconds = 3000; //1 second

        setTimeout(function() {
          
          feedFinal.hide();
          
  
        }, delayInMilliseconds);


      }

 

    

    

  } 

}
