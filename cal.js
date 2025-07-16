function dis(n)
{
    console.log(`Button ${n} pressed`)
    document.getElementById("result").value +=n
}

function solve{
    try {
        let expression = document.getElementById("result").value;
        let result = eval(expression); 
        document.getElementById("result").value = result;
        console.log(`Expression: ${expression}, Result: ${result}`);
    } catch (err) {
        document.getElementById("result").value = "Error";
    }
}
    
function clr() {
    document.getElementById("result").value = "";
}

