//Part 1
var names = ["Maria", "Antony", "Joy", "Juan"]
var names2 = ["Camila", "Simba", "Juan", "Maria"]


function nwnames(nuevonombre)
{
      names.push(nuevonombre);
      console.log(names);
}

nwnames("Kenny"); 
       
     var respuesta =  lista(names2);
            console.log(respuesta); 

var cantidadLetras = list(names2);
console.log(cantidadLetras);


//Part 2
/*
function search(busca)
{
   return names.includes(busca);

}
    console.log("Existe Maria " + search ("Maria"));

    */ 


//Part 3

      function lista(arreglo){

            var resultado = [];
            
            arreglo.forEach( nombre => {
                  if(names.includes(nombre)){
                        resultado.push(nombre);
                        
                  }
            });
                  return resultado;

}

//Part 4 

      function list(names2)
      {
            var cantidad = [];
            names2.forEach( nombre => 
                  {
                        cantidad.push(nombre.length);

                  })
                  return cantidad;
      }




