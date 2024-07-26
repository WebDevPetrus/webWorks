var par = document.getElementById("par");
par.innerHTML = "";
var regex = /[a-zA-Z]/;
document.getElementById("calculate").onclick = function(){
    var equation = document.getElementById("equation").value;
    var step = document.getElementById("step").value;
    if (step <= 0){
        alert("the step must be a positive number");
        location.reload();  // This code means reload the page
    }
    if (equation.includes("+")){
        var seperatedEquation = equation.split(/(\+)/).filter(Boolean);  // this code will seperate the equation as "num","+","num"
        // we should find the place of coefficient
        if (regex.test(seperatedEquation[0])){  // there have a coefficient, we should get the coefficient.
            var coefficient = parseInt(seperatedEquation[0].split(/\D+/).filter(Boolean));  // (/\D+/) means split the numbers
            var numLLAdd = parseInt(seperatedEquation[2]);
            for(var i = 0; i <= step; i++){  // i will steps
                var final = (i * coefficient) + numLLAdd;
               par.innerHTML += i + ".:" + "<span style='color: #D8BFD8;'>" + final + "</span>" + "<br>";  // we should print evey steps 
            }
        }
        else if (regex.test(seperatedEquation[2])){
            var coefficient = parseInt(seperatedEquation[2].split(/\D+/).filter(Boolean));
            var numLLAdd = parseInt(seperatedEquation[0]);
            for (var i = 0; i <= step; i++){
                var final = (i * coefficient) + numLLAdd;
               par.innerHTML += i + ".:" + "<span style='color: #D8BFD8;'>" + final + "</span>" + "<br>";
            }
        }
    }
    else if (equation.includes("-")){
        var seperatedEquation = equation.split(/(\-)/).filter(Boolean);  //same thing but -
        if (regex.test(seperatedEquation[0])){
            var coefficient = parseInt(seperatedEquation[0].split(/\D+/).filter(Boolean));
            var numLLSubtract = parseInt(seperatedEquation[2]);
            for (var i = 0; i <= step; i++){
                var final = (i * coefficient) - numLLSubtract;
               par.innerHTML += i + ".:" + "<span style='color: #D8BFD8;'>" + final + "</span>" + "<br>";
            }
        }
        else if (regex.test(seperatedEquation[2])){
            var coefficient = parseInt(seperatedEquation[2].split(/\D+/).filter(Boolean));
            var numLLSubtract = parseInt(seperatedEquation[0]);
            for (var i = 0; i <= step; i++){
                var final = numLLSubtract - (i * coefficient);
                final.style = "color:red;"
               par.innerHTML += i + ".:" + "<span style='color: #D8BFD8;'>" + final + "</span>" + "<br>";
            }
        }
    }
}
