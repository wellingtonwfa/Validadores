function ProibirCaracteres(tipo, e) {
	
	var codigo;
	var tiposTestes = {	'apenas_numeros': '^[0-9 \r\t\n\f\b]+$',
						'apenas_letras': '^[a-zA-Z \r\t\n\f\b]+$',
						'letras_numeros': '^[a-zA-Z0-9 \r\t\n\f\b]+$',
						'letras_acentos_numeros': '^[a-zA-ZA-ÿ0-9 \r\t\n\f\b]+$',
						'letras_acentos_numeros_pontuacao': '^[a-zA-ZA-ÿ0-9\?!@\$\.\(\)\-: \r\t\n\f\b]+$',
						'letras_numeros_pontuacao': '^[a-zA-Z0-9\?!\.\(\)\-:, \r\t\n\f\b]+$'
					};
	
	if (!e) var e = window.event;
	if (e.keyCode) codigo = e.keyCode;	
	else if (e.which) codigo = e.which;
	
	var teste = (tiposTestes[tipo] ? tiposTestes[tipo] : null);	
	var expReg = new RegExp(teste, "g");
	
	if (teste != null && expReg.test(String.fromCharCode(codigo)) && codigo != 13) {
		return true;
	} else 	{
		if (e && e.preventDefault) e.preventDefault();
		return false;
	}	
	
}