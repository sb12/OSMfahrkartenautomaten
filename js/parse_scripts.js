function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function yesno (value){
	var result;
	var lowerValue = value.toLowerCase();
	switch (lowerValue) {
		case "yes":
			result = "ja";
			break;
		case "no":
			result = "nein";
			break;
		default:
			result = value;
	}
	return result;
}

function stockwerk(value){
	var result;
	if (isNumeric(value)){
		if (value == "0")
			result = "Erdgeschoss";
		if (parseInt(value)>0)
			result = value + ". Obergeschoss";
		if (parseInt(value)<0)
			result = parseInt(value)*-1 + ". Untergeschoss";
		}
	else {
		result = value;
	}
	return result;
}