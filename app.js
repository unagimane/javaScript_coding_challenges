console.log('Connected!')

let favNum=prompt('What is your favorite number?');

if (favNum > 1000) {
    alert("Whoa, that's a big number")
} else if (favNum > 0) {
    alert("That's a cool number")
} else if (favNum < 0) {
    alert("Negative numbers? That's bananas!")
}