
let temp1 = 0;
let temp2 = 0;

let operator = '';
let inputValue = document.getElementById("numberInput");
let clearBtn = document.getElementById("actionClear");
let backSpace = document.getElementById('actionBackSpace')

clearBtn.addEventListener("click", function (event) {
    inputValue.value = 0;
});

backSpace.addEventListener('click', function(event){
    inputValue.value = inputValue.value.slice(0,-1);
    inputValue.value = inputValue.value>0 ? inputValue.value : 0;

})

let n = document.querySelectorAll(".number");

// Loop through numbers and assign events
for (let i = 0; i < n.length; i++) {
    n[i].addEventListener("click", function (event) {
        if(inputValue.value == "0"){
            inputValue.value=event.target.innerHTML;
        }else{

        inputValue.value += event.target.innerHTML;
        }

    });
}

// Loop through actions
let ops = document.querySelectorAll(".op");
for (let i = 0; i < ops.length; i++) {
    ops[i].addEventListener("click", function (event) {
        temp1 =parseInt(inputValue.value);
        operator=event.target.innerHTML;
        inputValue.value = '0';

    });
}




// Equals
let equals = document.querySelector(".equals");
let result =0;
equals.addEventListener("click", function (event) {
    temp2 = parseInt(inputValue.value);
    switch (operator) {
        case "/":
            inputValue.value=temp1/temp2;
            break;
        case "X":
            inputValue.value=temp1*temp2;
            break;
        case "-":
            inputValue.value=temp1-temp2;
            break;
        case "+":
            inputValue.value=temp1+temp2;
            break;
    }

    return inputValue.value;


});

// }

