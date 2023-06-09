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

/*let miimagen = document.querySelector('img');
miimagen.onclick = function() {
    let src = miimagen.getAttribute('src');
    if (src === 'imagenes/logo1.png'){
        miimagen.setAttribute ('src',"imagenes/logo2.png" );
    } else{
        miimagen.setAttribute ('src',"imagenes/logo1.png" );
    }
}*/


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
    let h6 = parseInt(document.getElementById('hora6').value);
    let h7 = parseInt(document.getElementById('hora7').value);
    let h8 = parseInt(document.getElementById('hora8').value);
    let h9 = parseInt(document.getElementById('hora9').value);
    let h10 = parseInt(document.getElementById('hora10').value);

    let m1 = parseInt(document.getElementById('minuto1').value);
    let m2 = parseInt(document.getElementById('minuto2').value);
    let m3 = parseInt(document.getElementById('minuto3').value);
    let m4 = parseInt(document.getElementById('minuto4').value);
    let m5 = parseInt(document.getElementById('minuto5').value);
    let m6 = parseInt(document.getElementById('minuto6').value);
    let m7 = parseInt(document.getElementById('minuto7').value);
    let m8 = parseInt(document.getElementById('minuto8').value);
    let m9 = parseInt(document.getElementById('minuto9').value);
    let m10 = parseInt(document.getElementById('minuto10').value)
    


    var horasllenas = [h1,h2,h3,h4,h5,h6,h7,h8,h9,h10];
    var minutosllenar = [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10];
    var sumahora =0;
    var sumaminuto=0;
    

    //horas 
    for (var i=0; i<10; ){
        if(horasllenas[i] > 0 ){
            sumahora = sumahora +horasllenas[i];
            i++; //document.getElementById('mostrar-acumulado').value=sumahora;
        }else {
            i++;
        }
        console.log(sumahora);

        }
        // minutos
        for (var n=0; n<10;){
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
      
       //operar mis tablas de escalaciones
       


    let codigo = document.getElementById('formularios').value;
    //alert(codigo);

    if (codigo == "G1"){
        //alert('hola soy de metro norte');
        document.getElementById('res1').innerHTML = '1/4'+ " " + "Julio Navarijo" +"  " + "58261602" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res2').innerHTML = '2/4'+ " " + "Manuel Ramirez" +"  " + "58261205" + "  " +"3 horas" + " " +  (horatotal+3) + ":" +minutototal +":"+ "00";
        document.getElementById('res3').innerHTML = '3/4'+ " " + "Rene Agustin" +"  " + "58261183" + "  " +"5 horas" + " " +  (horatotal+5) + ":" +minutototal +":"+ "00";
        document.getElementById('res4').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"6 horas" + " " +  (horatotal+6) + ":" +minutototal +":"+ "00";
        document.getElementById('res5').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"8 horas" + " " +  (horatotal+8) + ":" +minutototal +":"+ "00";
        document.getElementById('res6').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"10 horas" + " " +  (horatotal+10) + ":" +minutototal +":"+ "00";

    } if (codigo == "G2"){
        document.getElementById('res1').innerHTML = '1/4'+ " " + "Elmer Torres" +"  " + "58260888" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res2').innerHTML = '2/4'+ " " + "Aldo Diaz" +"  " + "58261057" + "  " +"3 horas" + " " +  (horatotal+3) + ":" +minutototal +":"+ "00";
        document.getElementById('res3').innerHTML = '3/4'+ " " + "Rene Agustin" +"  " + "58261183" + "  " +"5 horas" + " " +  (horatotal+5) + ":" +minutototal +":"+ "00";
        document.getElementById('res4').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"6 horas" + " " +  (horatotal+6) + ":" +minutototal +":"+ "00";
        document.getElementById('res5').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"8 horas" + " " +  (horatotal+8) + ":" +minutototal +":"+ "00";
        document.getElementById('res6').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"10 horas" + " " +  (horatotal+10) + ":" +minutototal +":"+ "00";
  
    }
    
    if (codigo == "G3"){
        document.getElementById('res1').innerHTML = '1/4'+ " " + "Miguel Angel Calderon" +"  " + "58261558" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res2').innerHTML = '2/4'+ " " + "Miguel Angel Calderon" +"  " + "58261558" + "  " +"3 horas" + " " +  (horatotal+3) + ":" +minutototal +":"+ "00";
        document.getElementById('res3').innerHTML = '3/4'+ " " + "Rene Agustin" +"  " + "58261183" + "  " +"5 horas" + " " +  (horatotal+5) + ":" +minutototal +":"+ "00";
        document.getElementById('res4').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"6 horas" + " " +  (horatotal+6) + ":" +minutototal +":"+ "00";
        document.getElementById('res5').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"8 horas" + " " +  (horatotal+8) + ":" +minutototal +":"+ "00";
        document.getElementById('res6').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"10 horas" + " " +  (horatotal+10) + ":" +minutototal +":"+ "00";
  
    }
    if (codigo == "G4"){
        document.getElementById('res1').innerHTML = '1/4'+ " " + "Jorge Fingado" +"  " + "58261199" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res2').innerHTML = '2/4'+ " " + "Jorge Fingado" +"  " + "58261199" + "  " +"3 horas" + " " +  (horatotal+3) + ":" +minutototal +":"+ "00";
        document.getElementById('res3').innerHTML = '3/4'+ " " + "Rene Agustin" +"  " + "58261183" + "  " +"5 horas" + " " +  (horatotal+5) + ":" +minutototal +":"+ "00";
        document.getElementById('res4').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"6 horas" + " " +  (horatotal+6) + ":" +minutototal +":"+ "00";
        document.getElementById('res5').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"8 horas" + " " +  (horatotal+8) + ":" +minutototal +":"+ "00";
        document.getElementById('res6').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"10 horas" + " " +  (horatotal+10) + ":" +minutototal +":"+ "00";
  
    }
    if (codigo == "G5"){
        document.getElementById('res1').innerHTML = '1/4'+ " " + "Leonel Chamo" +"  " + "58261129" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res2').innerHTML = '2/4'+ " " + "Leonel Chamo" +"  " + "58261129" + "  " +"3 horas" + " " +  (horatotal+3) + ":" +minutototal +":"+ "00";
        document.getElementById('res3').innerHTML = '3/4'+ " " + "Rene Agustin" +"  " + "58261183" + "  " +"5 horas" + " " +  (horatotal+5) + ":" +minutototal +":"+ "00";
        document.getElementById('res4').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"6 horas" + " " +  (horatotal+6) + ":" +minutototal +":"+ "00";
        document.getElementById('res5').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"8 horas" + " " +  (horatotal+8) + ":" +minutototal +":"+ "00";
        document.getElementById('res6').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"10 horas" + " " +  (horatotal+10) + ":" +minutototal +":"+ "00";
  
    }
    if (codigo == "G6"){
        document.getElementById('res1').innerHTML = '1/4'+ " " + "Oscar Castillo" +"  " + "58261583" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res2').innerHTML = '2/4'+ " " + "Edgar Wirtz" +"  " + "55551962" + "  " +"3 horas" + " " +  (horatotal+3) + ":" +minutototal +":"+ "00";
        document.getElementById('res3').innerHTML = '3/4'+ " " + "Rabricio Ramirez" +"  " + "58261213" + "  " +"5 horas" + " " +  (horatotal+5) + ":" +minutototal +":"+ "00";
        document.getElementById('res4').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"6 horas" + " " +  (horatotal+6) + ":" +minutototal +":"+ "00";
        document.getElementById('res5').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"8 horas" + " " +  (horatotal+8) + ":" +minutototal +":"+ "00";
        document.getElementById('res6').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"10 horas" + " " +  (horatotal+10) + ":" +minutototal +":"+ "00";
  
    }
    if (codigo == "G7"){
        document.getElementById('res1').innerHTML = '1/4'+ " " + "Juan Pablo Gonzalez" +"  " + "58262336" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res2').innerHTML = '1/4'+ " " + "Rafael Molina" +"  " + "58261870" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res3').innerHTML = '1/4'+ " " + "Estuardo Lopez" +"  " + "58261191" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res4').innerHTML = '1/4'+ " " + "Oscar Castillo" +"  " + "58261870" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res5').innerHTML = '2/4'+ " " + "Nestor Cano" +"  " + "58261494" + "  " +"3 horas" + " " +  (horatotal+3) + ":" +minutototal +":"+ "00";
        document.getElementById('res6').innerHTML = '3/4'+ " " + "Fabricio Ramirez" +"  " + "58261213" + "  " +"5 horas" + " " +  (horatotal+5) + ":" +minutototal +":"+ "00";
        document.getElementById('res7').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"6 horas" + " " +  (horatotal+6) + ":" +minutototal +":"+ "00";
        document.getElementById('res8').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"8 horas" + " " +  (horatotal+8) + ":" +minutototal +":"+ "00";
  
    }
    if (codigo == "G8"){
        document.getElementById('res1').innerHTML = '1/4'+ " " + "Jorge Merlos" +"  " + "58261566" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res2').innerHTML = '1/4'+ " " + "Gabriel Moralez" +"  " + "58261195" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res3').innerHTML = '1/4'+ " " + "Jorge Romero" +"  " + "58260702" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res4').innerHTML = '1/4'+ " " + "Emerson Tortola" +"  " + "58261481" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res5').innerHTML = '1/4'+ " " + "Mauricio Gomez" +"  " + "58261560" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res6').innerHTML = '2/4'+ " " + "Carlos Sagastume" +"  " + "58269736" + "  " +"3 horas" + " " +  (horatotal+3) + ":" +minutototal +":"+ "00";
        document.getElementById('res7').innerHTML = '3/4'+ " " + "Fabricio Ramirez" +"  " + "58261213" + "  " +"5 horas" + " " +  (horatotal+5) + ":" +minutototal +":"+ "00";
        document.getElementById('res8').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"6 horas" + " " +  (horatotal+6) + ":" +minutototal +":"+ "00";
        document.getElementById('res9').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"8 horas" + " " +  (horatotal+8) + ":" +minutototal +":"+ "00";
  
    }
    if (codigo == "G9"){
        document.getElementById('res1').innerHTML = '1/4'+ " " + "Luis recinos" +"  " + "58261474" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res2').innerHTML = '1/4'+ " " + "Adolfo Cruz" +"  " + "58261547" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res3').innerHTML = '1/4'+ " " + "Edgar Matul" +"  " + "58261564" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res4').innerHTML = '1/4'+ " " + "Erick Trujillo" +"  " + "58261561" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res5').innerHTML = '1/4'+ " " + "Manuel Mazariegos" +"  " + "58261521" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res6').innerHTML = '1/4'+ " " + "Erick Moralez" +"  " + "58261630" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res7').innerHTML = '2/4'+ " " + "Sergio Mimatuj" +"  " + "58261574" + "  " +"3 horas" + " " +  (horatotal+3) + ":" +minutototal +":"+ "00";
        document.getElementById('res8').innerHTML = '3/4'+ " " + "Fabricio Ramirez" +"  " + "58261213" + "  " +"5 horas" + " " +  (horatotal+5) + ":" +minutototal +":"+ "00";
        document.getElementById('res9').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"6 horas" + " " +  (horatotal+6) + ":" +minutototal +":"+ "00";
        document.getElementById('res10').innerHTML = '4/4'+ " " + "Rodolfo Morales" +"  " + "58261609" + "  " +"8 horas" + " " +  (horatotal+8) + ":" +minutototal +":"+ "00";
  
    }
    if (codigo == "S1"){
        document.getElementById('res1').innerHTML = '1/4'+ " " + "Ricardo de Paz" +"  " + "50378432633" + "  " +"2 horas" + " " +  (horatotal+2) + ":" +minutototal +":"+ "00";
        document.getElementById('res2').innerHTML = '2/4'+ " " + "Humberto Chiquillo" +"  " + "50378523419" + "  " +"3 horas" + " " +  (horatotal+3) + ":" +minutototal +":"+ "00";
        document.getElementById('res3').innerHTML = '3/4'+ " " + "Humberto Chiquillo" +"  " + "50378523419" + "  " +"4 horas" + " " +  (horatotal+4) + ":" +minutototal +":"+ "00";
        document.getElementById('res4').innerHTML = '4/4'+ " " + "Oscar Hernandez" +"  " + "50378550164" + "  " +"5 horas" + " " +  (horatotal+5) + ":" +minutototal +":"+ "00";
        document.getElementById('res5').innerHTML = '5/5'+ " " + "Carlos Pasta" +"  " + "50378554474" + "  " +"7 horas" + " " +  (horatotal+7) + ":" +minutototal +":"+ "00";
        document.getElementById('res6').innerHTML = '5/5'+ " " + "Carlos Pasta" +"  " + "50378554474" + "  " +"9 horas" + " " +  (horatotal+9) + ":" +minutototal +":"+ "00";
        document.getElementById('res7').innerHTML = '5/5'+ " " + "Carlos Pasta" +"  " + "50378554474" + "  " +"11 horas" + " " +  (horatotal+11) + ":" +minutototal +":"+ "00";
        document.getElementById('res8').innerHTML = '5/5'+ " " + "Carlos Pasta" +"  " + "50378554474" + "  " +"13 horas" + " " +  (horatotal+13) + ":" +minutototal +":"+ "00";
        document.getElementById('res9').innerHTML = '5/5'+ " " + "Carlos Pasta" +"  " + "50378554474" + "  " +"15 horas" + " " +  (horatotal+15) + ":" +minutototal +":"+ "00";
  
    }
    /*let combo = document.getElementById('formularios');
    let selected = combo.options[combo.selecedIndex].text;
   alert(selected);*/

   


    

    
    
  /* console.log(h1);
   console.log(h2);
   console.log(h3);
   console.log(h4);
   console.log(h5);
   console.log(m1);*/

  // document.getElementById('mostrar-acumulada').value= horasllenas;

}



/*function selectorr(){

 let codigo = document.getElementById('formularios').value;
 alert(codigo);

 let combo = document.getElementById('formularios');
 let selected = combo.options[combo.selecedIndex].text;
alert(selected);

}*/


// funsion de boton de limpiar 
function limpiar (){
    limpiarr.reset(); 
    limpiarr1.reset(); 
    limpiartod.reset();

}

// ver datos de horas 
//function reloj (){
   
   

//}


