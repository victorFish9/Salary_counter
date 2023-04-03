let sum = 0;
function Show(){
    var input1 = document.getElementById("startHour").value;
    var input2 = document.getElementById("endHour").value;
    //document.getElementById("answer").innerHTML = "Answer is " + (input2-input1);
    var a = new Date("12 May, 2018 " + input1);
    var b = new Date("12 May, 2018 " + input2);
    var c = new Date("12 may, 2018 18:00")
    var hours = Math.abs(b - a) / 36e5;

    if (b > c){
        console.log((b - c) / 36e5)
    }

    document.getElementById("answer").innerHTML = "Workhour is " + hours;
    sum += hours;
    document.getElementById("answer2").innerHTML = "Sum hour: " +(sum);
}
function CountSalary(){
    var input1 = document.getElementById("amount").value;

    var salary = sum * input1

    document.getElementById("asnwer3").innerHTML = "Salary gonna be " + Math.round(salary);
}