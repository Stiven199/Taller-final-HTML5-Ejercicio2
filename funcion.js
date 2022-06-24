
  
  const cambiarColorPares = () => {
    for (let i = 2; i < 11;) {
        
        element = document.querySelector("#num"+i);
        element.classList.add("letra2");
        element.classList.remove("letra");
        i=i+2;
    }
      
    
  
      
  }
  const cambiarColorImpares = () => {
    for (let i = 1; i < 11;) {
        
        element = document.querySelector("#num"+i);
        element.classList.add("letra2");
        element.classList.remove("letra");
        i=i+2;
    }
      
    
      
  }
  const resetEstilo = () => {
    for (let i = 1; i < 11; i++) {
        element = document.querySelector("#num"+i);
        element.classList.add("letra");
      element.classList.remove("letra2");
    }
    
      
  }
      
  
  