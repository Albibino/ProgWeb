// Calculo de imc:

function calcimc() {
    var a,b,c,d,e
    a = parseFloat(InfoGeral.Gdata.PesoU.value);
    b = parseFloat(InfoGeral.Gdata.AlturaU.value);
    c = a / (b * b);
    alert (c)
}