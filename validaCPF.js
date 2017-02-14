function validaCPF(source, arguments){
    var checkstr = "0123456789";
    var cpfvalue = "";
    var cpfTemp = "";

    cpfValue = arguments.Value;
    /* Delete all chars except 0..9 */
    for (i = 0; i < cpfValue.length; i++) {
        if (checkstr.indexOf(cpfValue.substr(i,1)) >= 0) {
	        cpfTemp = cpfTemp + cpfValue.substr(i,1);
        }
    }

    if (cpfTemp.length == 11){
        if (cpfTemp == "00000000000" || cpfTemp == "11111111111" || cpfTemp == "22222222222" 
	        || cpfTemp == "33333333333" || cpfTemp == "44444444444" || cpfTemp == "55555555555" 
		        || cpfTemp == "66666666666" || cpfTemp == "77777777777" || cpfTemp == "88888888888" || 
			        cpfTemp == "99999999999"){
	        arguments.IsValid = false;
	        return;
        }else{
            var a = [];
            var b = new Number;
            var c = 11;
            for (i=0; i<11; i++){
               a[i] = cpfTemp.charAt(i);
               if (i < 9) b += (a[i] * --c);
            }
            if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11-x }
            b = 0;
            c = 11;
            for (y=0; y<10; y++) b += (a[y] * c--); 
            if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11-x; }
            if ((cpfTemp.charAt(9) != a[9]) || (cpfTemp.charAt(10) != a[10])){
                arguments.IsValid = false;
                return;
            }else{
                arguments.IsValid = true;
                return;
            }
        }
    } else if (cpfTemp.length >= 1){
        arguments.IsValid = false;
        return;     
    }
}