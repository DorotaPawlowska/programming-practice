// var a = "test";
// var b = "test2";

// console.log(a);
// console.log(b);

// function testVar(){
//   var a = 30;
//   if(true){
//     var a = 50;
//     console.log(' var in' + a);
//   }
//   console.log('out' + a);
// }

// testVar();

// function testLet(){
//   let a = 30;
//   if(true){
//     let a = 50;
//     console.log(' let in' + a);
//   }
//   console.log('out' + a);
// }

// testLet();

// for(var i = 0; i < 10; i++){
//   console.log(i);
// }
// console.log(i);

// for(let i = 0; i < 10; i++){
//   console.log(i);
// }
// console.log(i);

// --------------------------------------------
// const colors = [];
// colors.push('red');
// colors.push('blue');

// // colors = "green";

// console.log(colors);

//  ============================================

class User{
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static countUsers(){
    console.log('there are 50 users');
  }

  register(){
    console.log(this.username + ' is now registered');
  }
}

let bob = new User('bob', 'bob@email.com', '123456');
bob.register()
User.countUsers();

class Memeber extends User{
  constructor(username, email, password, memberPackage){
    super(username, email, password);
    this.memberPackage = memberPackage;
  }

  getPackage(){
    console.log(this.username + ' is subscribed to the ' + this.memberPackage + ' package');
  }
}

let mike = new Memeber('mike', 'mike@email.com', '0987765', 'standard');
mike.getPackage();
mike.register();