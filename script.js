let currentValue = 0;

function updateValue() {
    document.getElementById('currentValue').innerText = currentValue;
}

function increment() {
    currentValue++;
    updateValue();
}

function decrement() {
    currentValue--;
    updateValue();
}

function incrementByValue() {
    const value = parseInt(document.getElementById('valueInput').value);
    currentValue += value;
    updateValue();
}

function decrementByValue() {
    const value = parseInt(document.getElementById('valueInput').value);
    currentValue -= value;
    updateValue();
}
const quotes =
[
    "l1lorem ipsum dolor sit amet",
    "m2Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "n3Lorem ipsum dolor sit amet consectetur.",
    "o4Lorem ipsum, dolor sit amet consectetur adipisicing.",
    "p50px ipsum dolor sit amet.",
    "u6Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "u8Lorem ipsum dolor sit amet consectetur.",
    "r8Lorem ipsum, dolor sit amet consectetur adipisicing."
]

const quotestext = document.getElementById("para");
function GQuote()
{
    const val = Math.floor(Math.random() * quotes.length);
    const text = quotes[val];
    quotestext.innerHTML=text;
}