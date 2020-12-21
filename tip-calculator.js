function startCalculator(){
    var bill = document.getElementById("bill");
    var percent = document.getElementById("percent");
    
    bill.addEventListener("input", calculateBill);
    percent.addEventListener("input", calculateBill);
}

function calculateBill(){
    document.getElementById("output").innerHTML = "$" + (bill.value * (percent.value/100)).toFixed(2);
}

