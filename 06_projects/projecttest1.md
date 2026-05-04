# projects related to js

## project link
[click here]( )

# solution code

```javascript
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

console.log(button);

button.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = 'grey';
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    } else if (e.target.id == 'green') {
      body.style.backgroundColor = 'green';
    }
  });
});

```