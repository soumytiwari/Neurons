document.addEventListener("DOMContentLoaded", function() {
    // genral informations neeeded: threshold, weight/s, input/s, and bias
const threshold = 0.9;
const inputs = [1, 0, 1, 0, 0, 1];
const weights = [0.4, 0.3, 0.2, 0.5, 0.1, 0.2];
const bias = 1;

let sum = 0;
for (let i=0; i<inputs.length; i++){
    sum += inputs[i]*weights[i];
}
sum += bias;

document.getElementById("result").innerHTML = (sum > threshold) ? "Buy the items" : "Don't buy the items";
});