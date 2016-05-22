function calcNumbers() {
    //numerator
    var x = document.getElementById("numAtor").value;
	//validateNumber(x);
    //denominator and number of times each circle is splited
    var numArcs = document.getElementById("denAtor").value;
	//validateNumber(validateNumber);
	//defines the a variable radious
	//var radiousValue = document.getElementById("radious").value;
	
    //number of cicles to draw
    var NumCircles = Math.floor(x / numArcs);
    //last two arcs to draw
    var module = x - (NumCircles * numArcs);

    //calc mixed fraction
    var mixFra = document.getElementById("mixedFraction");
    mixFra.innerHTML = "Mixed Fraction = "
    mixFra.innerHTML += NumCircles + " " + module + "/" + numArcs;

    //calc decimal 
    var decNumber = document.getElementById("decNumber");
    decNumber.innerHTML = "Decimal = "
    decNumber.innerHTML += (x / numArcs).toFixed(4);

	//set canvas size
	setCanvasSize();
	
    //draws circle
    drawFractionAsCircles(x, numArcs)
}

//Validate is the value entered is a number
function validateNumber(number){
	if(isNaN(number)){
	alert(number + " is not a number");
	number=null;
 }
}

//Establish the size of canvas to draw circles.
function setCanvasSize(){
	var theCanvas = document.getElementById("myCircleCanvas");
	
	theCanvas.width = window.innerWidth;
	theCanvas.height= window.innerHeight;
		
}

//draw circles.
function drawFractionAsCircles(numerator, denominator) {

    //number of cicles to draw
    var NumCircles = Math.floor(numerator / denominator);
    //last two arcs to draw
    var module = numerator - (NumCircles * denominator);
	// angle of arcs.
	var phase = 2 * Math.PI / denominator
	// radious of circle.
    var radious = parseInt(document.getElementById("radious").value);
	//validateNumber(radious);
    var centerX = radious + 20;
    var centerY = radious + 20;
    var theCanvas = document.getElementById("myCircleCanvas");
    var canvasContext = theCanvas.getContext("2d");
	canvasContext.clearRect(0, 0, theCanvas.width, theCanvas.height);
    var arcColor = new Array("red", "black", "pink", "blue", "Brown", "CadetBlue", "Chocolate", "BlanchedAlmond", "DarkGray", "DarkMagenta", "blue");
    var errorMessage = document.getElementById("Error");

    for (nC = 0; nC < NumCircles; nC++) {
        
		//draw arcs per circle.
        for (i = 0; i < denominator; i++) {
            
            var startAngle = 0 + i * phase
            var endAngle = startAngle + phase

            canvasContext.beginPath();
            canvasContext.fillStyle = arcColor[Math.floor(Math.random()*10)];
            canvasContext.arc(centerX, centerY, radious, startAngle, endAngle);
			canvasContext.lineTo(centerX,centerY);
            canvasContext.stroke();
            canvasContext.closePath();
            canvasContext.fill();
            //errorMessage.innerHTML = i + " Arc";
        }

        centerX = centerX + 2 * radious + 20;
        if (centerX + radious > theCanvas.width) {
            centerX = radious + 20;
            centerY = centerY + 2 * radious + 20;
        }
    }
	
	//draws pending arcs out of complete circle.
	if (module>0){
	
		for (i = 0; i < module; i++) {
            
            var startAngle = 0 + i * phase
            var endAngle = startAngle + phase

            canvasContext.beginPath();
            canvasContext.fillStyle = arcColor[Math.floor(Math.random()*10)];
            canvasContext.arc(centerX, centerY, radious, startAngle, endAngle);
			canvasContext.lineTo(centerX,centerY);
            canvasContext.stroke();
            canvasContext.closePath();
            canvasContext.fill();
            //errorMessage.innerHTML = i + " Arc";
        }
	}
}

