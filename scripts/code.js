// function that accepts a number as a position 
// and returns the number at that position in the Fibonacci sequence.
function fibonacci(number) {
	x = [0,1];
	for (var i = 0; i < 8; i++) {
		n = Number(x[x.length-2]) + Number(x[x.length-1]);
		x.push(n);
	}
	return x[number];

}

document.querySelector('body > h2').textContent = fibonacci(9);