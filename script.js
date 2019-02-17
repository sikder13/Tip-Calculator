
//**getting user input.
document.getElementById('container').onchange=function() {
    var bill=Number(document.getElementById('BillTotal').value);
    //document is the full web from html.
    //Bill contains the value of BillToatl.
    var tipPercent=document.getElementById('TipInput').value;
    //alert(tipPercent);
    //console.log(TipInput + "%");
    //document is the full web from html.
    //TipPercent contains the value of TipInput.
    var split=document.getElementById('SplitInput').value;
    //document is the full web from html.
    //Split contains the value of SplitInput.

    var tipValue = bill * (tipPercent/100);
    var newBillEach = (bill + tipValue)/split;
    var tipEach= tipValue / split;




    //Display capture value.
    document.getElementById("TipOutput").innerHTML= tipPercent + "%";
    document.getElementById("SplitOutput").innerHTML= split + "%";
    document.getElementById("NewBill").innerHTML= "$" + newBillEach.toFixed(2);
    document.getElementById("tipEach").innerHTML= "$" + tipEach.toFixed(2);



}