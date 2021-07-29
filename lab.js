//////////////////////////// PROBLEM 1 ////////////////////////////
/*
  Create an object called me.
  Give it a key of name with the value being your name, and another key of age with the value being your age.
*/

let me = {
  name: "Aiden, The Dorky",
  age: 24
}
console.log(me)
//////////////////////////// PROBLEM 2 ////////////////////////////

//Create an object saved to the variable dog.
//The dog object should have the following properties:
//name (a string), color (a string), age (a number),
//and goodBoy (a boolean).

let dog = {
  name : 'Doggo',
  color : 'Dog',
  age : '12',
  goodBoy : true
}


//////////////////////////// PROBLEM 3 ////////////////////////////
/* Print out the name of the dog you created in problem 2 using dot-notation. */

console.log(dog.name)


//////////////////////////// PROBLEM 4 ////////////////////////////
/* Print out the color of the dog you created in problem 2 using bracket-notation. */

console.log(dog['color'])


//////////////////////////// PROBLEM 5 ////////////////////////////
/*
  Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
  Have the values to those keys be strings that are equal to your favorite thing in that category.
*/

let favoriteThings = {
  band: "The Killers",
  food: "Hamburgers",
  person: `Mr.Rogers`,
  book: " Wise Man's Fear",
  movie: "The Green Mile",
  holiday:  "Christmas Eve"
}

/*
  After you've made your object, use bracket or dot notation to add another key named 
  'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.
*/

favoriteThings.car = 'Pagani Huarya'
favoriteThings.brand = 'Puma'


/*
  Now use bracket or dot notation to change the value of the food key in your favoriteThings object to be 'Chicken Nuggets'
  and change the value of the book key in your favoriteThings object to be 'Harry Potter'.
*/

favoriteThings.food = "Chicky Nuggy"
favoriteThings.book = "Not Harry Potter"
console.log(favoriteThings)
//////////////////////////// PROBLEM 6 ////////////////////////////
// Do not edit the code below.
var user = {
  name: 'Bryan',
  age: 24,
  pwHash: 'U+Ldlngx2BYQk',
  email: 'BryanSmith33@gmail.com',
  birthday: '05/02/1990',
  username: 'bryansmith33'
};
// Do not edit the code above.

/*
  Let's say I, the user, decided to change my name and email address to the following:
  name -> 'Bryan G. Smith' and email -> 'bryan.smith@devmounta.in'.
  Make that change without modifying the original object code above.
*/

user.name = `Bryan G. Smith`
user.email ='bryan.smith@devmounta.in'

//////////////////////////// PROBLEM 7 ////////////////////////////
/*
  Using the user object above, delete the users age off of the object.
*/

delete user.age
console.log(user)
//////////////////////////// PROBLEM 8 ////////////////////////////
/*
  Create a class called 'Cat'. Make sure to call your constructor, and require these 3 parameters: name, age, color.
  Outside of your class, create an instance of your cat, passing in whatever values you would like.
  Print the name of your cat instance using dot notation.
*/

class Cat {
  constructor(name,age,color){
    this.name = name;
    this.age = age;
    this.color = color
  }
}
Cat1 = new Cat('Buttermilk Walkingstick',32,'Calico')

console.log(Cat1.name)
//////////////////////////// PROBLEM 9 ////////////////////////////
/*
  Create a class called 'Wizard'. Make sure to call your constructor, and require these 3 parameters: name, age, favoriteSpell.
  Add a function to your Wizard class called castSpell. This function should print "{name} has cast {favoriteSpell}"
  Outside of your class, create an instance of your Wizard, passing in whatever values you would like.
  Call the castSpell function on the instance of your wizard.
*/

class WarlockBecauseScrewYouD10Cantrips {
constructor(name,age,favoriteSpell){
  this.name = name
  this.age = age
  this.favoriteSpell = favoriteSpell
  }
  castSpell(){
    console.log(`${this.name} has cast ${this.favoriteSpell}, it was WAY cooler than waiting 3 rounds concentrating`);
}
}
war1 = new WarlockBecauseScrewYouD10Cantrips("Dhukey Oro", 134, 'Eldritch Blast')
war1.castSpell()
//////////////////////////// PROBLEM 10 ////////////////////////////
/*
    Write a class called Phone. We'll use it as if we were creating
    phone objects to keep track of inventory using an app.

    Phone will build phone objects with brand, model, storage, color, price, and sold properties.

    Write a constructor that sets those values -- all of the values 
    should come from the constructors parameters except sold, which
    should always be set to false. We want that to be false since 
    when we create a new phone, we're putting it in our inventory
    and it won't be sold yet. 

    Create a method called 'sell'.
    sell should be a function that changes the value of sold to true and prints the string: '{brand} {model} has been sold.'
    
    Create another method called 'changePrice'. We can use this 
    to change the price in case a phone isn't selling.
    changePrice should take in one argument, 'newPrice'. 
    Inside the function, reassign the value of the object's price
    to be newPrice.
*/

class Phone {
  constructor(brand,model,storage,color,price){
    this.brand = brand;
    this.model = model;
    this.storage = storage;
    this.color = color;
    this.price = price;
    this.sold = false
    }
  sell(){
    this.sold = true, console.log(`${this.brand} ${this.model} has been yeeted out of the store`)
  }
  changePrice(newPrice){
    this.price = `${newPrice}`
  }
 }

/*
    Next make three new phone instances using your class.
    Send in values of your choice. They should match these data types:
    - brand: string
    - model: string
    - storage: number
    - color: string
    - price: number
*/

let phun1 = new Phone('Microhard', 'Square', 7, 'Not Quite Black', 75)
let phun2 = new Phone('blackberry', 'IBM Model M Mobile', 2.8, 'Grey/Pepple', 279.99)
let phun3 = new Phone('Gaggle', 'Giggle', 3,'Salmon', 827683 )

/* 
  Call the changePrice function on one of your phones, 
  don't forget to pass in a new price 

  Then console.log that object to see the price change
*/ 

phun2.changePrice(15)
console.log(phun2)

/*
  Now call the sell method on one of your other phone objects

  Print the value of that phone's sell property to make sure it's been changed to true
*/

phun1.sell()
console.log(phun1.sold)

//////////////////////////// PROBLEM 11 ////////////////////////////

/*
  Use the spread operator to create a copy of the colors object below.
  Store the copy in a variable called colorsCopy.
  Note: We did not cover the spread operator in class. We do not expect you to know how to use it. 
  Challenge yourself by going online and researching what the spread operator is and how to use it.
*/

//do not edit this object
const colors = {
  background: 'red',
  highlight: 'blue',
  text: 'yellow'
}
//do not edit this object

let colorsCopy = {...colors}
console.log(colorsCopy)

/*
 Now use the spread operator to combine the following 2 objects into one. 
 Call the new variable helensInfo. 
 When they combine, none of the properties should be repeated.
*/

//do not edit the objects below
const contactInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  phoneNumber: 1234445555,
  email: 'helen@mymail.com',
}

const shippingInfo = {
  firstName: 'Helen',
  lastName: 'Parr',
  street: '100 E. Main Street',
  city: 'Anytown',
  state: 'AZ',
  zipCode: 85004,
}
//do not edit the objects above

let helensInfo = {...contactInfo,...shippingInfo}
console.log(helensInfo)

//Print helensInfo to see what it looks like, there should be no repeating properties.


//////////////////////////// PROBLEM 12 ////////////////////////////

/*
  Create a class called Vehicle. Make sure to call your constructor, 
  and require these 3 parameters: capacity (how many passengers), color, and mileage.

  Write a method inside your class called 'move'.
  The move function should take in one parameter, miles.
  Inside the function, add the number of miles to the object's mileage.
  And finally, print the value of the mileage.
*/

class Vehicle {
  constructor(capacity,color,milage){
  this.capacity = capacity ,
  this.color = color,
  this.milage = milage
  }
  move(miles){
    this.milage += miles, console.log(this.milage)
  }

}


/*
  Create a vehicle using your new class and save it to a variable called myFirstVehicle
*/

let car1 = new Vehicle(5,'red',245323)

/* 
  Now we'll create a class that's based off of the vehicle class. 

  Write a class called Motorcycle that *extends* the Vehicle class. In the constructor, 
  make sure you require all of the parameters from the Vehicle class as well as 2 
  new ones: make and isCool. (Hint: don't forget to call the super function)
  Note: You might need to go research 'how to extend a class'. 
*/

class Motorcycle extends Vehicle {
  constructor(capacity,color,milage,make,isCool){
    super (capacity,color,milage)
    this.make = make
    this.isCool = isCool
  }
}
/*
  Create a Motorcycle using your new class and save it to a variable called myFirstMotorcycle
*/

let myFirstMotorcycle = new Motorcycle(1,'green',13222,'R6', true)
/*
  Call the move function on myFirstMotorcycle (don't forget the parameter)
*/
myFirstMotorcycle.move(175)

/*
  Let's make another class based off of Vehicle. 

  Write a class called Boat that *extends* the Vehicle class. The constructor should take in
  all the same arguments as Vehicle plus 3 new ones: name (boats gotta have cool names), type (ski boat, yacht, etc), and isSeaworthy.

  Create a method inside of the Boat class called checkSeaworthiness 
  Inside the method, check to see if the boat is seaworthy
  If it is, console.log a string: 'The {color} {type} {name} is seaworthy!'
  If it isn't, console.log a string: 'You need to get your {type} in shape!'

  Write a second function in this class called performMaintenance 
  This function should set isSeaworthy to be true
*/

class Boat extends Vehicle{
  constructor(capacity,color,milage,name,type,isSeaworthy){
    super (capacity,color,milage)
    this.name = name
    this.type = type
    this.isSeaworthy = isSeaworthy
  }
  checkSeaworthiness(){
    if(this.isSeaworthy === true){
      console.log(`${this.color} ${this.type} ${this.name} is sailing the Seven Seas`)
    } else {
      console.log(`Your ${this.type} is sinking, better get that looked into`)
    }
  }
  performMaintenance(){
    this.isSeaworthy = true
  }
}

/*
  Create a new boat using your class. You can choose whatever values you like for all the 
  properties except isSeaworthy -- make that one false. Call your variable myFirstBoat.
*/

let boatyMcBoatface = new Boat(1921,'Grey',315000,`U.S.S. Missouri`,"Iowa-class Battleship",false)
/*
  Call the checkSeaworthiness method on your new boat
*/

boatyMcBoatface.checkSeaworthiness()
/*
  Now run the performMaintenance method on your boat
*/

boatyMcBoatface.performMaintenance()
/*
  Check the seaworthiness once more (you should be ready for the water!)
*/

boatyMcBoatface.checkSeaworthiness()