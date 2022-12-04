(function(){
    var convertType =  "miles";
		var heading = document.querySelector("h1");
		var intro  = document.querySelector("p");
		var answerDiv = document.getElementById("answer");
		var form = document.getElementById("convert");

		document.addEventListener("keydown", function(event){

			var key = event.code;
			
			if(key == 'keyk'){
				convertType = "Kilometers";
				heading.innerHTML = "Kilometers to Miles Converter";
				intro.innerHTML = "Type in the number of Kilometers and click the button to convert the distance to miles";
				//Change the header
				//change the intro paragraph
				//change the value of convert 
			}
			else if(key == "keyM"){
				convertType = "Miles";
				heading.innerHTML = "Miles to Kilometer Converter";
				intro.innerHTML = "Type in the number of Miles and click the button to convert the distance to kilometers";
				//Change the header
				//change the intro paragraph
				//change the value of convert
			}
		});

		form.addEventListener("submit",function(event){
			event.preventDefault();

			var distance = parseFloat(document.getElementById("distance").value);
			if (distance){
				//Convert M to K 1.689344
				//Convert K to M 0.621371192
				if(convertType == "Miles"){
					var converted = (distance * 1.689344).toFixed(3);
					answer.innerHTML = `${distance} Miles converts to ${converted} Kilometer`;
				}
				else{
					var converted = (distance * 0.621371192 ).toFixed(3);
					answer.innerHTML = `${distance} Kilometers converts to ${converted} Miles`;
				}
			}
			else{
				anser.innerHTML = "<h2>Please provide a number</h2>";
			}


		});
})();