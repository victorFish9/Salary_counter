let sum = 0;
let evening_increase = 0;
function Show(){
    var input1 = document.getElementById("startHour").value;
    var input2 = document.getElementById("endHour").value;
    
    var a = new Date("12 May, 2018 " + input1);
    var b = new Date("12 May, 2018 " + input2);
    var c = new Date("12 may, 2018 18:00")
    var hours = Math.abs(b - a) / 36e5;

    if (b > c){
        evening_increase += Math.abs(b - c) / 36e5;
        console.log(evening_increase)

        document.getElementById("answer4").innerHTML = "Eveining increase: " + evening_increase;
    }

    document.getElementById("answer").innerHTML = "Workhour: " + Math.round(hours * 100) / 100;
    sum += hours;
    document.getElementById("answer2").innerHTML = "Sum hour: " + Math.round(sum * 100) / 100;
}
function CountSalary(){
    var input1 = document.getElementById("amount").value;
    var evening_salary = evening_increase * 1.33;
    var salary = sum * input1 + evening_salary;
    var tyel = 7.15 / 100 * salary;
    var unemployment = 1.50 / 100 * salary;
    salary -= tyel;
    salary -= unemployment;
    console.log(unemployment);

    document.getElementById("asnwer3").innerHTML = "Salary gonna be " + Math.round(salary * 100) / 100;
}