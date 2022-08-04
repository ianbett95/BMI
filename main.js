let form = document.querySelector("form");
let imperialUnits = document.querySelector("#unit1");
let metricUnits = document.querySelector("#unit2");
let result = document.querySelector("#result");
//imperialcalculator values
let weight_2 = (document.querySelector("#weight_2"))
let height_2 = (document.querySelector("#height_2"))
let inches = document.querySelector("#inches")
// metric calculator values
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
// the divs containing the calculators
let imperialCalculator = document.querySelector("#imperial-calculator");
let metricCalculator = document.querySelector("#metric-calculator");
let heightStatus = false;
let weightStatus = false;
metricUnits.addEventListener("click", () => {
  metricUnits.style.backgroundColor = "blue";
  imperialUnits.style.backgroundColor = "black";
  imperialCalculator.style.display = "none";
  metricCalculator.style.display = "block";
});

let calculate1 = document.querySelector("#calculate1");
calculate1.addEventListener("click", () => {
  if (height === "" || isNaN(height) || height < 0) {
    document.querySelector("#height-error").innerHTML =
      "please provide  a valid height";
    heightStatus = false;
  } else {
    document.querySelector("#height-error").innerHTML = "";
    heightStatus = true;
  }

  if (weight === "" || isNaN(height) || weight <= 0) {
    document.querySelector("#weight-error").innerHTML =
      "please provide  a valid weight";
      console.log=(weight)
    weightStatus = false;
  } else {
    document.querySelector("#weight-error").innerHTML = "";

    weightStatus = true;
  }

  if (heightStatus === true && weightStatus === true) {
    let calculator = ((Number(weight.value)) / (Number(height.value) **2) / 1000).toFixed(2);
    if (calculator < 18.6) {
      result.textContent = `underweight ${calculator}`;
    } else if (calculator >= 18.6 && calculator < 24.9) {
      result.textContent = `normal weight ${calculator}`;
    } else if (calculator > 24.9) {
      result.textContent = `overweight:: ${calculator}`;
    } else {
      alert("the form has errors");
    }

  }

});

imperialUnits.addEventListener("click", () => {
  imperialUnits.style.backgroundColor = "blue";
  metricUnits.style.backgroundColor = "black";
  imperialCalculator.style.display = "block";
  metricCalculator.style.display = "none";
})
  let calculate2 = document.querySelector("#calculate2");

  if (height_2 === "" || isNaN(height_2) || height_2 < 0) {
    document.querySelector("#height_error").innerHTML =
      "please provide  a valid height";
  } else {
    document.querySelector("#height_error").innerHTML = "";
  }
  heightStatus = true;

  if (weight_2 === "" || isNaN(weight_2) || weight_2 <= 0) {
    document.querySelector("#weight_error").innerHTML =
      "please provide  a valid weight";
  } else {
    document.querySelector("#weight_error").innerHTML = "";
  }
  weightStatus = true;
  if (weightStatus === true && heightStatus === true) {
    calculate2.addEventListener("click", () => {
      (weight_2) = ((Number(weight_2.value)* 12) +inches);
      const calculator2 = (weight_2/ ((Number(height_2.value) **2 )* 703)).toFixed(2);
      if (calculator2 < 18.6) {
        result.textContent = `underweight ${calculator2}`;
      } else if (calculator2 >= 18.6 && calculator2 < 24.9) {
        result.textContent = `normal weight ${calculator2}`;
      } else if (calculator2 > 24.9) {
        result.textContent = `overweight:: ${calculator2}`;
      } else {
        alert("the form has errors");
      }
    })
  };
