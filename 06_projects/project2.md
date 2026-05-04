# Project 2

## BMI Generator

# code part

```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `${height} is invalid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `${weight} is invalid weight`;
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) {
      results.innerHTML = `<span>Under-Weight</span>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `<span>Normal-range</span>`;
    } else {
      results.innerHTML = `<span>Over-Weight</span>`;
    }

    // switch (bmi) {
    //   case bmi < 18.6:
    //     results.innerHTML = `<span>Under Weight </span>`;
    //     break;
    //   case 18.6 < bmi && bmi < 24.9:
    //     results.innerHTML = `<span>Normal range </span>`;
    //     break;
    //   case bmi > 24.9:
    //     results.innerHTML = `<span>Over Weight </span>`;
    //     break;
    // }
  }
});







```