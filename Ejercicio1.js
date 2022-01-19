//Part 1
var names = ["Maria", "Antony", "Joy", "Juan"]

function nwnames(nuevonombre)
{
      names.push(nuevonombre);
      console.log(names);
}

nwnames("Kenny"); 

//Part 2

function search(busca)
{
   return names.includes(busca);

}
    console.log("Existe Maria" + search ("Maria"));

    //https://github.com/generation-org/JS/tree/master/JS-05%20-%20Operators%20and%20Expressions

