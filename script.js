window.onload = () => {

    const button = (document.querySelector('#btn'));
    button.addEventListener('click', calculateBMI) // make a function that will call when we clicked on calculate button 
  
}
function calculateBMI() {
    const height = document.querySelector('#height').value; //taking the input height for the console 
    const weight = document.querySelector('#weight').value; // taking the input weight for the console
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0) { //1st undefine null empty string 0 
        //second it will check value should be an number and third it will check wether the number is greater than 0 or not
        result.innerText = "Please provide a valid height";
        return;
    } 
    else if (!weight || isNaN(weight) || weight < 0) {
            result.innerText = "Please provide a valid weight";
            return;
        }

        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.5 ) {
            result.innerText = `Under Weight: ${bmi}`; // "",'',``, all these are use to concatenation of string but in `` we write ${to concatenate}      
          }
        else if (bmi >= 18.5 && bmi < 24.9) {
            result.innerText = `Normal : ${bmi}`;
        }
        else if (bmi >= 25.0 && bmi < 29.9) {

            result.innerText = `Over Weight : ${bmi}`;
        }
        else if (bmi >= 30 && bmi < 34.9){
            result.innerText = `Obesity (Class - 1) : ${bmi}`;
        }
        else if (bmi >= 35 && bmi < 39.9){
            result.innerText = `Obesity (Class - 2) : ${bmi}`;
        }
        else {
            result.innerText = `Extreme Obesity: ${bmi}`;
        }   
} 