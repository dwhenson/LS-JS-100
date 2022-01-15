// Add a qux property with value 3 to the myObj object we created in the
// previous exercise. Now, examine the following code snippets
//
//
const myProtoObject = {
  foo: 1,
  bar: 2,
};

const myObject = Object.create(myProtoObject);
myObject.qux = 3;

const objectKeys = Object.keys(myObject);
for (const key of objectKeys) {
  console.log(key);
}

for (const key in myObject) {
  console.log(key);
}

// objectkeys will include properties from the prototype, for-in won't !! WRONG WAY AROUND!!
