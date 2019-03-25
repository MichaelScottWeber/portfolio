// Switch button will switch unit state and then convert
$("#switch").click(function() {
	switchTypes();
	convert();
})

// Convert button will convert
$("#convert").click(function() {
	convert();
})

// Converts user input depending on unit state (F-to-C or C-to-F)
function convert() {
	let input = $("input").val();
	if($("#convert").hasClass("f-to-c")) {
		convertFtoC(input);
	} else if($("#convert").hasClass("c-to-f")) {
		convertCtoF(input);
	}
}

// Switches unit state - changes h1 text and convert button function
function switchTypes() {
	$("#headText").toggleClass("f-to-c c-to-f");
	$("#convert").toggleClass("f-to-c c-to-f");
	if($("#headText").hasClass("f-to-c")) {
		$("#headText").text(" Fahrenheit to Celsius");
	} else if($("#headText").hasClass("c-to-f")) {
		$("#headText").text(" Celsius to Fahrenheit");
	}
}

// Converts degrees F to degrees C
function convertFtoC(num) {
	if($.isNumeric(num)) {
		let resultC = (num - 32) * (5 / 9);
		$("#result").text((resultC).toFixed(2));
	}
}

// Converts degrees C to degrees F
function convertCtoF(num) {
	if($.isNumeric(num)) {
		let resultF = (num * (9 / 5)) + 32;
		$("#result").text((resultF).toFixed(2));
	}
}
