// values do the following expressions evaluate to?

false || (true && false); // false
true || 1 + 2; // true
1 + 2 || true; // true  ** 3
true && 1 + 2; // true  ** 3
false && 1 + 2; // false
1 + 2 && true; // true
32 * 4 >= 129; // false
!true !== false; // false
true === 4; // true ** Plain wrong!
(847 === "847") === false; // true
(847 == "847") === false; // false
!true || !(100 / 5) === 20 || 328 / 4 === 82 || false; //
