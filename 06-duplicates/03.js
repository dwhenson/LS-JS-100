// The following code causes an infinite loop (a loop that never stops
// iterating). Why?

let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// Becuase the counter augument is reset to 1 each time
