
function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
} 
function getResult(){
    return document.getElementById("result").innerText;
}

function printResult(num){
    if(num=="")
        document.getElementById("result").innerText=num;
    else{   
        document.getElementById("result").innerText=getFormattedNumber(num);
    }
} 
function getFormattedNumber(num){
    if(num=="-")
        return "";
    var n = Number(num);
    var val= n.toLocaleString("en");
    return val;
}
function getReverseFormattedNumber(num){
    return Number(num.replace(/,/g,''));
}

var operator=document.getElementsByClassName("operator");

for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printResult("");
            printHistory("");
           
        }
        if(this.id=="C"){
             var output=getReverseFormattedNumber(getResult()).toString();
             if(output){
                 output=output.substr(0,output.length-1);
                 printResult(output);
             }
        }
        else{
            var history=getHistory();
            var output=getResult();
            if(output==""){
                if(isNaN(history[history.length-1]))
                    history=history.substr(0,history.length-1);
            }
            if(output!="" || history!=""){
                output=output==""?"":getReverseFormattedNumber(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printResult(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history)
                    printResult("");
                }
            }
        }
    })
}
var number=document.getElementsByClassName("number");

for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=getReverseFormattedNumber(getResult());
        if(output!=NaN){
            output=output+this.id;
            printResult(output);
        }
    })
}

