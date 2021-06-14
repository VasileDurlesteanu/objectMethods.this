let calculator = {
  read(){
    let firstVal = prompt("Insert first value", "first value");
    let secondVal = prompt("Now the second value", "second value");
  },

  sum(){ 
    return firstVal + secondVal
  },

  mul(){
    return firstVal * secondVal
  }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// SOLUTION


let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );