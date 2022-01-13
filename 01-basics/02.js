// Use the arithmetic operators to determine the individual digits of a
// 4-digit number like 4936:

let number = 4936;
const ones = number % 10;
ones;
6;

number = (number - ones) / 10;
493;
const tens = number % 10;
tens;
3;
number = (number - tens) / 10;
49;
const hundreds = number % 10;
hundreds;
9;

const thousands = (number - hundreds) / 10;
thousands;
