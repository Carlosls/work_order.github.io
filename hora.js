/*let nombre = 'hola todos';
const h = document.querySelector ('h1');
h.textContent = nombre;
*/


// funsioens 

//console.log(multiplicar(2,4));
//console.log(multiplicar(5,6)); 
////multiplicar(5,7);


// hacer click sobre algo 


/*function alertar (){

    alert('hiciste click');
}
document.querySelector('html').onclick = alertar;
//onclick sirve para mostar  */

let miimagen = document.querySelector('img');
miimagen.onclick = function() {
    let src = miimagen.getAttribute('src');
    if (src === 'imagenes/logo1.png'){
        miimagen.setAttribute ('src',"imagenes/logo2.png" );
    } else{
        miimagen.setAttribute ('src',"imagenes/logo1.png" );
    }
}


console.log('tiempo');

    var datos = new Date();
   var nuevo = datos.toLocaleTimeString();

   //document.getElementById('mostrar-acumulada').value= nuevo;

console.log(nuevo);



/*function operar (){
    var hora1 = parseInt(document.getElementById('hora1').value);
    var hora2 = parseInt(document.getElementById('hora2').value);
    var hora3 = parseInt(document.getElementById('hora3').value);
    var hora4 = parseInt(document.getElementById('hora4').value);
    var hora5 = parseInt(document.getElementById('hora5').value);
    var minuto1 = parseInt(document.getElementById('minuto1').value);
    var minuto2 = parseInt(document.getElementById('minuto2').value);
    var minuto3 = parseInt(document.getElementById('minuto3').value);
    var minuto4 = parseInt(document.getElementById('minuto4').value);
    var minuto5 = parseInt(document.getElementById('minuto5').value);
    let cons = parseInt()

    console.log(hora4); console.log(hora1);
  var resul = hora1+minuto1;
  alert(resul);
  document.getElementById('mostrar-acumulada').value =resul;

}*/

function operar (){




    
    let h1 = parseInt(document.getElementById('hora1').value);
    let h2 = parseInt(document.getElementById('hora2').value);
    let h3 = parseInt(document.getElementById('hora3').value);
    let h4 = parseInt(document.getElementById('hora4').value);
    let h5 = parseInt(document.getElementById('hora5').value);

    let m1 = parseInt(document.getElementById('minuto1').value);
    let m2 = parseInt(document.getElementById('minuto2').value);
    let m3 = parseInt(document.getElementById('minuto3').value);
    let m4 = parseInt(document.getElementById('minuto4').value);
    let m5 = parseInt(document.getElementById('minuto5').value);
    

    var horasllenas = [h1,h2,h3,h4,h5];
    var minutosllenar = [m1,m2,m3,m4,m5];
    var sumahora =0;
    var sumaminuto = 0;
    

    //horas 
    for (var i=0; i<5; ){
        if(horasllenas[i] > 0 ){
            sumahora = sumahora +horasllenas[i];
            i++; //document.getElementById('mostrar-acumulado').value=sumahora;
        }else {
            i++;
        }
        console.log(sumahora);

        }
        // minutos
        for (var n=0; n<5;){
            if(minutosllenar[n]>0){
                sumaminuto = sumaminuto+minutosllenar[n];
                if(sumaminuto >= 60)
                {
                    sumahora =sumahora+1;
                    sumaminuto = sumaminuto-60;
                }
                n++;
            }else{
                n++;
            }

       }
        // obtener la hora actual

        clock = new Date();
        hour = clock.getHours();
        minute = clock.getMinutes();

      
        var horatotal = hour-sumahora;

        if(horatotal < 0 )
        { horatotal = horatotal *-1;
            horatotal = 24-horatotal;
        }

       
      if (minute > sumaminuto ){

    
        var minutototal  = minute - sumaminuto;
        document.getElementById('horaestada').value = " " + horatotal +" : " + minutototal +" : "+ "00";
      }else{
            var horatotal = hour - sumahora-1;
            var minutototal  =  60-( sumaminuto  - minute);
       
        document.getElementById('horaestada').value= " " + horatotal +" : " + minutototal+" : "+ "00";
      }


      
       console.log(horatotal,minutototal);
       document.getElementById('mostraracumulada').value= " " + sumahora +" : " + sumaminuto + " : "+"00";
       
        
        
    
    
   // console.log(horasllenas[2]);
    
    
  /* console.log(h1);
   console.log(h2);
   console.log(h3);
   console.log(h4);
   console.log(h5);
   console.log(m1);*/

  // document.getElementById('mostrar-acumulada').value= horasllenas;

}




// funsion de boton de limpiar 
function limpiar (){
    limpiarr.reset(); 
    limpiarr1.reset(); 
    limpiartod.reset();

}

// ver datos de horas 
//function reloj (){
   
   

//}