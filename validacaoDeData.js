//Valida se a data informada é valida e se o ano é maior que 1900
function validacaoDeData(source, arguments) {
    if (arguments.Value != "") {
    	//Chama função IsDate.
        if (IsDate(arguments.Value) == false) {
            arguments.IsValid = false;
        };
    };
};