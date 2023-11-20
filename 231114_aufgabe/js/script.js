function changeColor() { 
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256); 
    let blue = Math.floor(Math.random() * 256); 
    let color = "hex(" + red + "," + green + "," + blue + ")"; 
    document.getElementById("colorFlipper").style.backgroundColor = color; 
    }

    function changeColor() {
        // Code zur zufälligen Farbe
        var color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'); 
        
        //Hintergrundfarbe des colorFlipper-Containers
        var colorFlipper = document.getElementById('colorFlipper');
        colorFlipper.style.backgroundColor = color;
    
        // Hex-Code über dem button
        var hexColor = document.getElementById('hexColor');
        hexColor.innerText = color.toUpperCase(); // grosbuchstaben 
    }
    