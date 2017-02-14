function validaCNPJ(source, arguments){
	var checkstr = "0123456789";
	var cnpjvalue = "";
	var cnpjTemp = "";

	cnpjValue = arguments.Value;
	/* Delete all chars except 0..9 */
	for (i = 0; i < cnpjValue.length; i++) {
		if (checkstr.indexOf(cnpjValue.substr(i,1)) >= 0) {
			cnpjTemp = cnpjTemp + cnpjValue.substr(i,1);
		}
	}

   if( cnpjTemp.length == 14) {
		var a = [];
        var b = new Number;
        var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];
        for (i=0; i<12; i++){
        	a[i] = cnpjTemp.charAt(i);
            b += a[i] * c[i+1];
 		}
        if ((x = b % 11) < 2) { a[12] = 0 } else { a[12] = 11-x }
        b = 0;
        for (y=0; y<13; y++) {
	        b += (a[y] * c[y]); 
        }
        if ((x = b % 11) < 2) { a[13] = 0; } else { a[13] = 11-x; }
        if ((cnpjTemp.charAt(12) != a[12]) || (cnpjTemp.charAt(13) != a[13])){
            arguments.IsValid = false;
            return;
        } else {
            arguments.IsValid = true;
            return;
        }
    } else if (cnpjTemp.length >= 1){
        arguments.IsValid = false;
        return;      
    }
}