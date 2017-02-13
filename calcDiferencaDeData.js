//Função para calcular a diferença de datas em dias.
function calcDiferencaDeData(date1, date2) {
    //var date1 = document.getElementById('DATA_DataInicial').lastChild.data;
    //var date2 = document.getElementById('DATA_DataFim').lastChild.data;

    date1 = date1.split("/");
    date2 = date2.split("/");
    var sDate = new Date(date1[1] + "/" + date1[0] + "/" + date1[2]);
    var eDate = new Date(date2[1] + "/" + date2[0] + "/" + date2[2]);

    //var daysApart = Math.abs(Math.round((sDate-eDate)/86400000));
    var daysApart = Math.round((eDate - sDate) / 86400000);
    return (daysApart);
    //document.getElementById('diffDays').lastChild.data = daysApart;
}