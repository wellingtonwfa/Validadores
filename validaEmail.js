function validaEmail(source, arguments){
	var email = /^[a-z]+([0-9]|[a-z]+|\.|\_)\@([a-z]|[0-9])+(\.([a-z]|[0-9])+)+$/;
  	
  	// Verifica se o email digitado é válido
	if (!email.test(arguments.Value)) {
	    arguments.IsValid = false;
	} else {
        arguments.IsValid = true;
	}
}