const calculateTemp=()=>{

    let tempnum=document.getElementById("temp").value;
    let temp_type=document.getElementById("temp_diff").value;

    let result=document.getElementById("resultcont");

    if(temp_type=="fah")
    {
        let newtemp=(tempnum-32)*(5.0/9.0);
        result.textContent=`${newtemp.toFixed(2)} celcius`;
    }
    else
    {
        let newtemp=(tempnum*(9.0/5.0))+32; 
        result.textContent=`${newtemp.toFixed(2)} fahrenheit`;
    }
}