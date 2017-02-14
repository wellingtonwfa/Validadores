function ApenasNumeros(e) {    //função para somente mostrar numeros nos campos de entrada
	if (!e) var e = window.event;
	if (e.keyCode) codigo = e.keyCode;
	else if (e.which) codigo = e.which;
	
	 // Se for número (48 a 57)
	 if ( (codigo >= 48 && codigo <= 57) || codigo == 13) {
		 return true;
	 } else {
		  return false;
	 }
}