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
		case "limited":
			result = "eingeschränkt";
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
		if (parseFloat(value)>0)
			result = value + ". Obergeschoss";
		if (parseFloat(value)<0)
			result = parseFloat(value)*-1 + ". Untergeschoss";
		}
	else {
		result = value;
	}
	return result;
}

function preparseOperatorName(operator){
	var result = operator;
	var operator=operator.toLowerCase();

	//Operators lowercase
	var DeutscheBahn = ['deutsche bahn', 'deutsche bahn ag', 'db', 'db ag', 'db bahn', 'dbag', 'db regio ag', 'db regio', 'db station&service', 'db station & service', 'db station&service ag', 'deutsche bahn (db)', 'db vertrieb', 'db vertrieb gmbh'];
	var DVB_to_fix = ['dvb ag', 'dvb', 'dresdner verkehrsbetriebe ag'];
	var DVB_right = ['dresdner verkehrsbetriebe'];
	var RNV = ['rnv', 'rhein-neckar-verkehr gmbh', 'rhein-neckar-verkehr'];
	var RSAG = ['rsag', 'rostocker straßenbahn ag', 'rostocker straßenbahn'];
	var magdeburg = ['magdeburger verkehrsbetriebe gmbh & co. kg', 'magdeburger verkehrsbetriebe gmbh', 'magdeburger verkehrsbetriebe'];
	var CVAG = ['cvag', 'chemnitzer verkehrs-ag'];
	var KVV = ['kvv', 'karlsruher verkehrsverbund'];
	var SSB = ['ssb', 'ssb ag', 'stuttgarter straßenbahnen', 'stuttgarter straßenbahnen ag', 'stuttgarter straßenbahnen (ssb)'];
	var EVAG = ['evag', 'essener verkehrs-ag'];
	var BOGESTRA = ['bogestra', 'bochum-gelsenkirchener straßenbahnen ag'];
	var cottbusverkehr = ['cottbusverkehr gmbh'];
	var goerlitz = ['verkehrsgesellschaft görlitz', 'verkehrsgesellschaft görlitz gmbh'];
	var hamburghochbahn = ['hamburger hochbahn ag', 'hamburger hochbahn'];
	var metronom = ['metronom', 'metronom eisenbahngesellschaft', 'metronom eisenbahngesellschaft mbh'];
	var westfalenbahn = ['westfalenbahn', 'westfalenbahn gmbh'];
	var nordwestbahn = ['nordwestbahn', 'nordwestbahn gmbh'];

	if (DeutscheBahn.indexOf(operator)>-1) result = 'deutsche bahn';
	if (DVB_to_fix.indexOf(operator)>-1) result = 'DVB_to_fix';
	if (DVB_right.indexOf(operator)>-1) result = 'DVB_right';
	if (RNV.indexOf(operator)>-1) result = 'rnv';
	if (RSAG.indexOf(operator)>-1) result = 'rsag';
	if (magdeburg.indexOf(operator)>-1) result = 'magdeburg';
	if (CVAG.indexOf(operator)>-1) result = 'CVAG';
	if (KVV.indexOf(operator)>-1) result = 'KVV';
	if (SSB.indexOf(operator)>-1) result = 'SSB';
	if (EVAG.indexOf(operator)>-1) result = 'EVAG';
	if (BOGESTRA.indexOf(operator)>-1) result = 'BOGESTRA';
	if (cottbusverkehr.indexOf(operator)>-1) result = 'cottbusverkehr';
	if (goerlitz.indexOf(operator)>-1) result = 'goerlitz';
	if (hamburghochbahn.indexOf(operator)>-1) result = 'hamburghochbahn';
	if (metronom.indexOf(operator)>-1) result = 'metronom';
	if (westfalenbahn.indexOf(operator)>-1) result = 'westfalenbahn';
	if (nordwestbahn.indexOf(operator)>-1) result = 'nordwestbahn';

	return result;
}

function getMarkerIcon(parsedOperator){
	var result = StdUnknown;
	if (parsedOperator == "<i><b>unbekannt</i></b>") result = StdIcon;
	if (parsedOperator == "deutsche bahn") result = DBicon;
	if (parsedOperator == "DVB_to_fix") result = DVBfixicon;
	if (parsedOperator == "DVB_right") result = DVBicon;
	if (parsedOperator == "rnv") result = RNVicon;
	if (parsedOperator == "rsag") result = RSAGicon;
	if (parsedOperator == "magdeburg") result = magdeburgicon;
	if (parsedOperator == "CVAG") result = CVAGicon;
	if (parsedOperator == "KVV") result = KVVicon;
	if (parsedOperator == "SSB") result = SSBicon;
	if (parsedOperator == "EVAG") result = EVAGicon;
	if (parsedOperator == "BOGESTRA") result = BOGESTRAicon;
	if (parsedOperator == "cottbusverkehr") result = cottbusverkehricon;
	if (parsedOperator == "goerlitz") result = goerlitzicon;
	if (parsedOperator == "hamburghochbahn") result = hamburghochbahnicon;
	if (parsedOperator == "metronom") result = metronomicon;
	if (parsedOperator == "westfalenbahn") result = westfalenbahnicon;
	if (parsedOperator == "nordwestbahn") result = nordwestbahnicon;

	return result;
}








