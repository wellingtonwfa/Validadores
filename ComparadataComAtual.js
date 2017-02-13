//Verifica se a data informada é maior que a data atual.
function comparaDataComDataAtual(source, arguments) {
    var strData = arguments.Value;
    var partesData = strData.split("/");
    var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);

    if (data > new Date()) arguments.IsValid = false;
};