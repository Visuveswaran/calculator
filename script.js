function display(val) 
{ 
    document.getElementById("result").value+=val 
} 
  
//function that evaluates the digit and return result 
function solve() 
{ 
    let x = document.getElementById("result").value 
    result = x.trim()
    if(result == ""){
     document.getElementById("result").value = ""
    }
    else{
        let y = eval(x) 
        document.getElementById("result").value = y 
    }
    

} 
  
//function that clear the display 
function clearvalue() 
{ 
    document.getElementById("result").value = "  "
} 