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

// ingrear a la pagina de inicio 

function login () {
    var user = document.getElementById('usuario').value;
    var pass = document.getElementById('contrasena').value;
        if(user== "cnoc" && pass == "cnoc") {
            //alert('datos correctos');
           window.location.href = "calculadora.html";

        }else{ alert('ingrese los datos correctos');}

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

      // fin de obtener hora actual

      //incio hora de inicio de falla 
        var horatotal = hour-sumahora;

        if(horatotal <=0 )
        { horatotal = horatotal *(-1);
            horatotal = 24-(horatotal);
        }
       
      if (minute => sumaminuto ){
        if(horatotal == 24){horatotal = 0;}
        
      
        var minutototal  = minute - sumaminuto;
        document.getElementById('horaestada').value = " " + horatotal +" : " + minutototal +" : "+ "00";
        //alert(horatotal);
      }
      if (minute < sumaminuto  ){
        horatotal = horatotal - 1;
        if (horatotal < 0){horatotal = 24-(-horatotal);}
        minutototal = minute-sumaminuto+60;
        document.getElementById('horaestada').value = " " + horatotal +" : " + minutototal +" : "+ "00";
      }
      
       console.log(horatotal,minutototal);
       document.getElementById('mostraracumulada').value= " " + sumahora +" : " + sumaminuto + " : "+"00";

       //fin de hora incio falla 




      // empezar mostrar las horas 

      var gt = [];
      var boiphor = horatotal;
     var horhonduras = horatotal;
     var minuhonduras = minutototal;
     
     var boipmin = minutototal;
     var bo = [];
     var bo1 = [];
      var ho=1;
      for (var h=0; h<20; ){
        horatotal = horatotal+ho;
        if(horatotal >= 24){
            horatotal = 0;
         }
         gt[h]= horatotal;
         
         h++;
        }

        
        // para honduras 
    
        if((minuhonduras+30) >= 60){
            horhonduras = horhonduras+3;
            minuhonduras = (minuhonduras+30)-60; 
        } else{
            minuhonduras = minuhonduras+30;
            horhonduras = horhonduras+2;
        }
    
        ho =15;
          
      // fin de las horas mostradas
        
        //hora por 15 minutos 
            for( var k = 0; k<10;){
                boipmin = boipmin+ho;
                if(boipmin>= 60){
                    boiphor= boiphor+1;
                    boipmin = boipmin-60;
                    bo1[k]= boipmin;
                }
                else{
                
                    bo1[k]= boipmin;
                boiphor = horhonduras-2;
                }
                k++;
            }
       


    //alert(codigo);

    //operacion de tablas 

    let codigo = document.getElementById('formularios').value;

    if (codigo == "BOIP"){
        //alert('hola soy de metro norte');
      
        
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento BOIP";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/5</td><td>Ingeniero BOIP</td><td>58261602</td><td>2 horas </td><td>${boiphor} : ${bo1[0]} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/5</td><td>Manuel Ramirez</td><td>58261205</td><td>3 horas </td><td>${boiphor} : ${bo1[1]} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/3</td><td>Rene Agustin</td><td>58261183</td><td>5 horas </td><td>${boiphor} : ${bo1[4]} : 00</td></tr>`;
        
        
        

    }

    if (codigo == "G1"){
        //alert('hola soy de metro norte');
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento Planta Externa METRO SUR";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Julio Navarijo</td><td>58261602</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/4</td><td>Manuel Ramirez</td><td>58261205</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/4</td><td>Rene Agustin</td><td>58261183</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>7 horas </td><td>${gt[6]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>9 horas </td><td>${gt[8]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>11 horas </td><td>${gt[10]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>13 horas </td><td>${gt[12]} : ${minutototal} : 00</td></tr>`;
        

    }
     if (codigo == "G2"){
       
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento Planta Externa METRO SUR";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Elmer Flores</td><td>58260888</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/4</td><td>Aldo Diaz</td><td>58261057</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/4</td><td>Rene Agustin</td><td>58261183</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>7 horas </td><td>${gt[6]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>9 horas </td><td>${gt[8]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>11 horas </td><td>${gt[10]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>13 horas </td><td>${gt[12]} : ${minutototal} : 00</td></tr>`;
     } 
    
    
    if (codigo == "G3"){
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento Planta Externa REGION CENTRAL";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Miguel Angel Calderon</td><td>58261558</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/4</td><td>Miguel Angel Calderon</td><td>58261558</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/4</td><td>Rene Agustin</td><td>58261183</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>7 horas </td><td>${gt[6]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>9 horas </td><td>${gt[8]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>11 horas </td><td>${gt[10]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>13 horas </td><td>${gt[12]} : ${minutototal} : 00</td></tr>`;

  
    }
    if (codigo == "G4"){
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento Planta Externa REGION OCCIDENTE";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Jorge Fingado</td><td>58261199</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/4</td><td>Jorge Fingado</td><td>58261199</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/4</td><td>Rene Agustin</td><td>58261183</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>7 horas </td><td>${gt[6]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>9 horas </td><td>${gt[8]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>11 horas </td><td>${gt[10]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>13 horas </td><td>${gt[12]} : ${minutototal} : 00</td></tr>`;

  
    }
    if (codigo == "G5"){

        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento Planta Externa REGION ORIENTE";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Francisco Mendez</td><td>58264555</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/4</td><td>Leonel Chamo</td><td>58261129</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/4</td><td>Rene Agustin</td><td>58261183</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>7 horas </td><td>${gt[6]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>9 horas </td><td>${gt[8]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>11 horas </td><td>${gt[10]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>13 horas </td><td>${gt[12]} : ${minutototal} : 00</td></tr>`;

  
    }
    if (codigo == "G6"){

        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento Planta Interna REGION METRO";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Oscar Castillo</td><td>58261583</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/4</td><td>Edgar Wirtz</td><td>55511962</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/4</td><td>Fabricio Ramirez</td><td>58261213</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>6 horas </td><td>${gt[5]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>8 horas </td><td>${gt[7]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>10 horas </td><td>${gt[9]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>12 horas </td><td>${gt[11]} : ${minutototal} : 00</td></tr>`;

  
    }
    if (codigo == "G7"){

        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento Planta Interna REGION CENTRAL";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Juan Pablo Gonzalez</td><td>58262336</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Rafael Molina</td><td>58261870</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Estuardo López</td><td>58261191</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Oscar Gallardo</td><td>58261734</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/4</td><td>Nestor Cano</td><td>58261494</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/4</td><td>Fabricio Ramirez</td><td>58261213</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>6 horas </td><td>${gt[5]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>8 horas </td><td>${gt[7]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>10 horas </td><td>${gt[9]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>12 horas </td><td>${gt[11]} : ${minutototal} : 00</td></tr>`;

  
    }
    if (codigo == "G8"){

        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento Planta Interna REGION ORIENTE";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Marco Pacay</td><td>58269356</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Gabriel Morales</td><td>58261195</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Jorge Romero</td><td>58260702</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Emerson Tortola</td><td>58261481</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Mauricio Gomez</td><td>58261560</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/4</td><td>Carlos Sagastume</td><td>58269736</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/4</td><td>Fabricio Ramirez</td><td>58261213</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>6 horas </td><td>${gt[5]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>8 horas </td><td>${gt[7]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>10 horas </td><td>${gt[9]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>12 horas </td><td>${gt[11]} : ${minutototal} : 00</td></tr>`;

        
    }
    if (codigo == "G9"){

        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento Planta Interna REGION OCCIDENTE";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Luis Recinos</td><td>58261474</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Adolfo Cruz</td><td>58261547</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Edgar Matul</td><td>58261564</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Erick Trujillo</td><td>58261561</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Manuel Mazariegos</td><td>58261521</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Erick Morales</td><td>58261630</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/4</td><td>Sergio Nimatuj</td><td>58261574</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/4</td><td>Fabricio Ramirez</td><td>58261213</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>6 horas </td><td>${gt[5]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>8 horas </td><td>${gt[7]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>10 horas </td><td>${gt[9]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Rodolfo Morales</td><td>58261609</td><td>12 horas </td><td>${gt[11]} : ${minutototal} : 00</td></tr>`;

       
    }
    if (codigo == "S1"){
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento DESPACHO SV";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/5</td><td>Ricardo de Paz</td><td>503-78432633</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/5</td><td>Raul Pérez</td><td>503-79515695</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/5</td><td>Raul Pérez</td><td>503-79515695</td><td>4 horas </td><td>${gt[3]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/5</td><td>Oscar Hernandez</td><td>503-78550164</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon</td><td>503 7760 0008</td><td>7 horas </td><td>${gt[6]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon</td><td>503 7760 0008</td><td>9 horas </td><td>${gt[8]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon</td><td>503 7760 0008</td><td>11 horas </td><td>${gt[10]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon </td><td>503 7760 0008</td><td>13 horas </td><td>${gt[12]} : ${minutototal} : 00</td></tr>`;
        
  
    }
    if (codigo == "S2"){
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento  PLANTA EXTERNA REGION CENTRAL SV";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/5</td><td>Kelvin Rivera</td><td>503-77470507</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/5</td><td>Wilmar Escobar</td></td><td>503-79544238</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/5</td><td>Raul Pérez</td><td>503-79515695</td><td>4 horas </td><td>${gt[3]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/5</td><td>Oscar Hernandez</td><td>503-78550164</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon</td><td>503 7760 0008</td><td>7 horas </td><td>${gt[6]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon</td><td>503 7760 0008</td><td>9 horas </td><td>${gt[8]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon</td><td>503 7760 0008</td><td>11 horas </td><td>${gt[10]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon </td><td>503 7760 0008</td><td>13 horas </td><td>${gt[12]} : ${minutototal} : 00</td></tr>`;
        
    }
    if (codigo == "S3 "){
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento  PLANTA EXTERNA REGION  OCCIDENTAL SV";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/5</td><td>Inmer Coreas</td><td>503-78664767</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/5</td><td>Jairo Ortiz</td><td>503-78680314</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/5</td><td>Raul Pérez</td><td>503-79515695</td><td>4 horas </td><td>${gt[3]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/5</td><td>Oscar Hernandez</td><td>503-78550164</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon</td><td>503 7760 0008</td><td>7 horas </td><td>${gt[6]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon</td><td>503 7760 0008</td><td>9 horas </td><td>${gt[8]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon</td><td>503 7760 0008</td><td>11 horas </td><td>${gt[10]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon </td><td>503 7760 0008</td><td>13 horas </td><td>${gt[12]} : ${minutototal} : 00</td></tr>`;
        
    }
    if (codigo == "S4"){
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento  PLANTA EXTERNA REGION  ORIENTAL SV";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/5</td><td>Jimmy Zelaya</td><td>503-79869465</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/5</td><td>Eduardo Gonzalez</td><td>503-78554483</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/5</td><td>Raul Pérez</td><td>503-79515695</td><td>4 horas </td><td>${gt[3]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/5</td><td>Oscar Hernandez</td><td>503-78550164</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon</td><td>503 7760 0008</td><td>7 horas </td><td>${gt[6]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon</td><td>503 7760 0008</td><td>9 horas </td><td>${gt[8]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon</td><td>503 7760 0008</td><td>11 horas </td><td>${gt[10]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>5/5</td><td>Saul de Leon </td><td>503 7760 0008</td><td>13 horas </td><td>${gt[12]} : ${minutototal} : 00</td></tr>`;
        
    }
    if (codigo == "HN1"){
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento  PLANTA INTERNA CCR HN";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Luis Sandres</td><td>504-89904245</td><td>2.5 horas </td><td>${horhonduras} : ${minuhonduras} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/4</td><td>Franklin Bueso</td><td>504-89904208</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/4</td><td>Manuel Larios</td><td>504-31921638</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Pastor Ramirez</td><td>504-33910016</td><td>6 horas </td><td>${gt[6]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Pastor Ramirez</td><td>504-33910016</td><td>8 horas </td><td>${gt[7]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Pastor Ramirez</td><td>504-33910016</td><td>10 horas </td><td>${gt[9]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Pastor Ramirez</td><td>504-33910016</td><td>12 horas </td><td>${gt[11]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Pastor Ramirez</td><td>504-33910016</td><td>14 horas </td><td>${gt[13]} : ${minutototal} : 00</td></tr>`;
    }
    if (codigo == "HN2"){
         
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento  PLANTA EXTERNA HN";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Juan Carlos Ramirez (Sur zona norte, litoral, occidente) </td><td>504-31703162</td><td>2 horas </td><td>${gt[1]} : ${minuhonduras} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Wilson Aldana (Sup zona centro, sur y occidente)</td><td>504-31703678</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/4</td><td>Marvel Aldana (Jefe planta externa)</td><td>504-33907944</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/4</td><td>Saul Pastor (Gerente planta externa)</td><td>504-33915357</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Pastor Ramirez</td><td>504-33910016</td><td>6 horas </td><td>${gt[6]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Pastor Ramirez</td><td>504-33910016</td><td>8 horas </td><td>${gt[7]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Pastor Ramirez</td><td>504-33910016</td><td>10 horas </td><td>${gt[9]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Pastor Ramirez</td><td>504-33910016</td><td>12 horas </td><td>${gt[11]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Pastor Ramirez</td><td>504-33910016</td><td>14 horas </td><td>${gt[13]} : ${minutototal} : 00</td></tr>`;
        
    }
    if (codigo == "NI1"){
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento  PLANTA INTERNA NICARAGUA";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Nacxhitl Bernardnio</td><td>505-87134513</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/4</td><td>Marlon Jaime</td><td>505-88500414</td><td>4 horas </td><td>${gt[3]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/4</td><td>Norman Selva</td><td>505-88561050</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Mario Hurtado</td><td>505-88538938</td><td>6 horas </td><td>${gt[5]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Mario Hurtado</td><td>505-88538938</td><td>8 horas </td><td>${gt[7]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Mario Hurtado</td><td>505-88538938</td><td>10 horas </td><td>${gt[9]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Mario Hurtado</td><td>505-88538938</td><td>12 horas </td><td>${gt[11]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Mario Hurtado</td><td>505-88538938</td><td>14 horas </td><td>${gt[13]} : ${minutototal} : 00</td></tr>`;
        
    }
    if (codigo == "NI2"){

        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento  PLANTA EXTERNA NICARAGUA";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/4</td><td>Diester Lira</td><td>505-88524472</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/4</td><td>Wilfredo Arauz</td><td>505-89304959</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/4</td><td>Gaddy Zepeda</td><td>505-88501214</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Mario Hurtado</td><td>505-88538938</td><td>6 horas </td><td>${gt[5]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Mario Hurtado</td><td>505-88538938</td><td>8 horas </td><td>${gt[7]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Mario Hurtado</td><td>505-88538938</td><td>10 horas </td><td>${gt[9]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Mario Hurtado</td><td>505-88538938</td><td>12 horas </td><td>${gt[11]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/4</td><td>Mario Hurtado</td><td>505-88538938</td><td>14 horas </td><td>${gt[13]} : ${minutototal} : 00</td></tr>`;
    }
    if (codigo == "CR1"){

        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento  CCR COSTA RICA";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>0/5</td><td>CCR CR</td></td><td>506-44007878</td><td>Inmediato </td><td></td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/5</td><td>Luis Diego Bolaños</td><td>506-70028570</td><td>2 horas </td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/5</td><td>Ingeniero IM</td><td>506-70028958</td><td>3 horas </td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>3/5</td><td>Marcos Salazar</td><td>506-70020778</td><td>5 horas </td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/5</td><td>Gilberto Fernandez</td><td>506-70029441</td><td>6 horas </td><td>${gt[5]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/5</td><td>Luis Ivan Ortiz</td><td>506-70025268</td><td>8 horas </td><td>${gt[7]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/5</td><td>Luis Ivan Ortiz</td><td>506-70025268</td><td>10 horas </td><td>${gt[9]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>4/5</td><td>Luis Ivan Ortiz</td><td>506-70025268</td><td>12 horas </td><td>${gt[11]} : ${minutototal} : 00</td></tr>`;
    }

    if (codigo == "CRP1"){
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento  CCR CLARO PANAMA";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th><th></th><th></th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/3</td><td>CCR PANAMA</td><td>NOC CLARO</td><td>nocpanama@claro.com.pa</td><td>Movil:507-62284503 <br> Fijo: 507-2941891</td><td>Inmediata</td><td>${horatotal} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/3</td><td>CCR PANAMA</td><td>NOC CLARO</td><td>nocpanama@claro.com.pa</td><td>Movil:507-62284503 <br> Fijo: 507-2941891</td><td>1 hora</td><td>${gt[0]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/3</td><td>Demetrio Ortega</td><td>Gerente NOC</td><td>demetrio.ortega@cwpanama.com</td><td>Movil:507-66703927</td><td>2 horas</td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
    }
    
        
    if (codigo == "CRP2"){
        document.getElementById('nombreregion').innerHTML = "Tabla de Escalamiento  PLANTA EXTERNA PANAMA";
        document.getElementById('dass').innerHTML += `<tr><th>No.Escalacion</th><th>Nombre de Supervisor</th><th>Numero</th><th>Tiempo</th><th>Proxima escalacion</th><th></th><th></th></tr>`
        document.getElementById('dass').innerHTML += `<tr><td>1/3</td><td>Joaquin Carrasco</td><td>Supervisor Planta externa</td><td>joaquin.carrasco@claro.com.pa</td><td>507-62053224</td><td>1 hora</td><td>${gt[0]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>2/3</td><td>Luneil Castillo</td><td>Mantenimiento Planta Externa</td><td>luneil.castillo@claro.com.pa</td><td>507-62045572</td><td>2 hora</td><td>${gt[1]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/3</td><td>Pendiente</td><td>Gerente Técnico</td><td></td><td></td><td>3 horas</td><td>${gt[2]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/3</td><td>Pendiente</td><td>Gerente Técnico</td><td></td><td></td><td>5 horas</td><td>${gt[4]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/3</td><td>Pendiente</td><td>Gerente Técnico</td><td></td><td></td><td>7 horas</td><td>${gt[6]} : ${minutototal} : 00</td></tr>`;
        document.getElementById('dass').innerHTML += `<tr><td>1/3</td><td>Pendiente</td><td>Gerente Técnico</td><td></td><td></td><td>9 horas</td><td>${gt[8]} : ${minutototal} : 00</td></tr>`;
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
    document.getElementById('dass').innerHTML = " ";
    document.getElementById('nombreregion').innerHTML = " ";
    
    
    
   
}



// ver datos de horas 
//function reloj (){
   
   

//}


