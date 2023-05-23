// theme changer
const lightIcon = document.getElementById('sun-icon');
const darkIcon = document.getElementById('moon-icon');

window.addEventListener('load', function(active) {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        darkIcon.style.display = 'block';
        lightIcon.style.display = 'none';
    } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            lightIcon.style.display = 'block';
            darkIcon.style.display = 'none';
        }
});

// darkIcon click event listener
darkIcon.addEventListener('click', () => {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'block';
});
// lightIcon click event listener
lightIcon.addEventListener('click', () =>{
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
});

// selector
const historyValue = document.getElementById('history-value');
const outputValue  = document.getElementById('output-value');

// getHistory function
function getHistory() {
    return historyValue.innerText;
}

// printHistory function 
function printHistory(num) {
    historyValue.innerText = num;
}

// getOutput function
function getOutput() {
    return outputValue.innerText;
}

// printOutput function 
function printOutput(num) {
    if(num == ""){
        outputValue.innerText = num;
    }else{
        outputValue.innerText= getFormattedNumber(num);
    }
}

// add comma to the number
function getFormattedNumber(num) {
    if(num == "-"){
        return "";
    }

    let n = Number(num);
    let value = n.toLocaleString("eg");
    return value;
}

// remove comma it means reverseFormatted Number
function reverseFormattedNumber(num) {
    return Number(num.replace(/,/g,''));
}

// select all operator button
const operator = document.getElementsByClassName('operator');
//run for loop
for(let i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function() {
        
        if(this.id == "clear"){
            printOutput("");
            printHistory("");
        }else if(this.id == "backspace"){
            let output = reverseFormattedNumber(getOutput()).toString();
            // if output has a value
            if(output) {
                output = output.substring(0, output.length - 1);
                printOutput(output);
                printHistory("");
            }
        }else{

            let history = getHistory();
            let output = getOutput();

            if(output == "" && hsitory != ""){
                if(isNaN(history[history.length - 1])){
                    history = history.substring(0, history.length - 1);
                }
            }

            if(output != "" || history != ""){
                output = output == "" ? output : reverseFormattedNumber(output);
                history += output;

                if(this.id == "="){
                    let result = eval(history);
                    printOutput(result);
                    printHistory("");
                }else{
                    history += this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
};

// select all number button
const number = document.getElementsByClassName('number');
//run for loop
for(let i = 0; i < number.length; i++){
    number[i].addEventListener('click', function() {
        let output = reverseFormattedNumber(getOutput());
        // if output has a number
        if(output != NaN) {
            output += this.id;
            printOutput(output);
        }
    })
};