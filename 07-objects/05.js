// Create a new object named myObj that uses myProtoObj as its prototype.

const myProtoObject = {
  foo: 1,
  bar: 2,
};

const myObject = Object.create(myProtoObject);
