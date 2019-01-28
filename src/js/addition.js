function insertIntoTable (inputs, tableId) {
  resultData = "";
  inputs.forEach(elem => {
    resultData = resultData + "<tr><td>" + elem + "</tr></td>" 
   });
   document.getElementById("table1").innerHTML = resultData;
}

/* 
 function addition() { 
    var input1, input2; 
    input1 = parseFloat(document.getElementById("add1").value); 
    input2 = parseFloat(document.getElementById("add2").value); 
    if(isNaN(input1) || isNaN(input2)) {
      alert("Please enter both the numbers")
    } else{ 
      result =  (input1+input2); 
      document.getElementById("add3").innerHTML = result; 
    }
    
}
     */
