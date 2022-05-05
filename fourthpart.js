function mybill() {
    debugger;
    let billvalue = prompt("Please enter your bill", "");
    let letterpattern = "[a-z]";

    for (let i=0; i<billvalue.length; i++)
    {
        if( billvalue[i].match(letterpattern) != null)
        {
            document.getElementById("billtopay").innerHTML =
            "Please enter a valid value";
            break; 
        }
    }

    if (billvalue < 0) {
        document.getElementById("billtopay").innerHTML =
            "Please enter a valid value";
    }
    if (billvalue >= 0 && billvalue < 100) {
        document.getElementById("billtopay").innerHTML =
            "Your tip is $0"  ;
    }
    if (billvalue >= 100 && billvalue < 300) {
        document.getElementById("billtopay").innerHTML =
            "Your tip is $" + (billvalue*0.1) ;
    }
    if (billvalue >= 300 && billvalue < 500) {
        document.getElementById("billtopay").innerHTML =
            "Your tip is $" + (billvalue*0.05) ;
    }
    if (billvalue >= 500) {
        document.getElementById("billtopay").innerHTML =
            "Your tip is $" + (billvalue*0.03) ;
    }
}