/* Declaración de variables */
var a = 5;

function varTest() {
    var x = 31;
    if (true) {
      var x = 71; // ¡misma variable!
      console.log(x); // 71
    }
    console.log(x); // 71
  }
  
  function letTest() {
    let x = 31;
    if (true) {
      let x = 71; // variable diferente
      console.log(x); // 71
    }
    console.log(x); // 31
  }

 
  // llamamos a las funciones
  varTest();
  letTest();