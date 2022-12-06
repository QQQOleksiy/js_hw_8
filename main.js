// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }
// let arr_users = []
// let user1 = new User(1, 'Name_1', 'Surname_1', 'user1@gmail.com', 38055555555)
// let user2 = new User(3, 'Name_2', 'Surname_2', 'user2@gmail.com', 38077777777)
// let user3 = new User(5, 'Name_3', 'Surname_3', 'user3@gmail.com', 38077777777)
// let user4 = new User(4, 'Name_4', 'Surname_4', 'user4@gmail.com', 38077777777)
// let user5 = new User(2, 'Name_5', 'Surname_5', 'user5@gmail.com', 38077777777)
// let user6 = new User(6, 'Name_6', 'Surname_6', 'user6@gmail.com', 38077777777)
// let user7 = new User(8, 'Name_7', 'Surname_7', 'user7@gmail.com', 38077777777)
// let user8 = new User(10, 'Name_8', 'Surname_8', 'user8@gmail.com', 38077777777)
// let user9 = new User(7, 'Name_9', 'Surname_9', 'user9@gmail.com', 38077777777)
// let user10 = new User(9, 'Name_10', 'Surname_10', 'user10@gmail.com', 38077777777)
//
// arr_users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
// console.log(arr_users);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(arr_users.filter(value => value.id % 2 === 0));
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(arr_users.sort((a, b) =>a.id - b.id ));



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
//
// class Client{
//
//     constructor(id, name, surname, email, phone, orderArr) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.orderArr = orderArr;
//     }
// }
// let arr_client = []
// let user1 = new Client(1, 'Name_1', 'Surname_1', 'user1@gmail.com', 38055555555, ['product1'])
// let user2 = new Client(3, 'Name_2', 'Surname_2', 'user2@gmail.com', 38077777777, ['product1', 'product2'])
// let user3 = new Client(5, 'Name_3', 'Surname_3', 'user3@gmail.com', 38077777777, ['product1'])
// let user4 = new Client(4, 'Name_4', 'Surname_4', 'user4@gmail.com', 38077777777, ['product1', 'product2', 'product3', 'product4'])
// let user5 = new Client(2, 'Name_5', 'Surname_5', 'user5@gmail.com', 38077777777, ['product1', 'product2'])
// let user6 = new Client(6, 'Name_6', 'Surname_6', 'user6@gmail.com', 38077777777, ['product1'])
// let user7 = new Client(8, 'Name_7', 'Surname_7', 'user7@gmail.com', 38077777777, ['product1', 'product2', 'product3'])
// let user8 = new Client(10, 'Name_8', 'Surname_8', 'user8@gmail.com', 38077777777, ['product1', 'product2'])
// let user9 = new Client(7, 'Name_9', 'Surname_9', 'user9@gmail.com', 38077777777, ['product1'])
// let user10 = new Client(9, 'Name_10', 'Surname_10', 'user10@gmail.com', 38077777777, ['product1', 'product2'])
//
// arr_client.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// console.log(arr_client.sort((a, b) => a.orderArr.length - b.orderArr.length));



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(produser, year, max_speed, engine) {
//     this.produser = produser
//     this.year = year
//     this.max_speed = max_speed
//     this.engine = engine
//     this.driver = undefined
//
//     Car.prototype.drive = function(){
//         console.log(`їдемо зі швидкістю ${max_speed} на годину`)
//     }
//     Car.prototype.info = function(){
//         console.log(`Виробник: ${produser}`)
//         console.log(`Рік випуску: ${year}`)
//         console.log(`Максимальна швидкість: ${max_speed}`)
//         console.log(`Обєм двигуна: ${engine}`)
//     }
//     Car.prototype.increaseMaxSpeed = function(newSpeed){
//         max_speed = newSpeed
//         this.max_speed = newSpeed
//     }
//     Car.prototype.changeYear = function(newValue){
//         this.year = newValue
//         year = newValue
//     }
//     Car.prototype.addDriver = function(driverObj) {
//         this.driver = driverObj
//     }
// }
// let car = new Car('BMW', 2022, 220, 2.7)
// console.log(car);
// car.drive()
// car.info()
// car.increaseMaxSpeed(300)
// car.changeYear(1999)
// car.addDriver({name:'Vasya', age:'20'})
// console.log(car);



// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car{
//
//     constructor(produser, year, max_speed, engine) {
//         this.produser = produser;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.engine = engine;
//         this.driver = undefined
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
//     }
//     info(){
//         console.log(`Виробник: ${this.produser}`)
//         console.log(`Рік випуску: ${this.year}`)
//         console.log(`Максимальна швидкість: ${this.max_speed}`)
//         console.log(`Обєм двигуна: ${this.engine}`)
//     }
//     increaseMaxSpeed (newSpeed){
//         this.max_speed = newSpeed
//     }
//     changeYear (newValue){
//         this.year = newValue
//     }
//     addDriver (driverObj) {
//         this.driver = driverObj
//     }
// }
// let car = new Car('BMW', 2022, 220, 2.7)
// console.log(car);
// car.drive()
// car.info()
// car.increaseMaxSpeed(300)
// car.changeYear(1999)
// car.addDriver({name:'Sasha', age:'22'})
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Cinderella{
//
//     constructor(name, age, foot_size) {
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//     }
// }
// arr_cinderella = []
//
// let girl1 = new Cinderella('Olya', 18, 38)
// let girl2 = new Cinderella('Solomia', 21, 39)
// let girl3 = new Cinderella('Angelina', 19, 37)
// let girl4 = new Cinderella('Katya', 20, 36)
// let girl5 = new Cinderella('Vika', 22, 40)
//
// arr_cinderella.push(girl1, girl2, girl3, girl4, girl5)
// console.log(arr_cinderella)
//
// class Prince{
//
//     constructor(name, age, size_found_shoe) {
//         this.name = name;
//         this.age = age;
//         this.size_found_shoe = size_found_shoe;
//     }
// }
// let prince = new Prince('Vasya', 21, 36)
// console.log(prince);
//
//
// for (const arrCinderellaElement of arr_cinderella) {
//     if (arrCinderellaElement.foot_size === prince.size_found_shoe){
//         console.log(arrCinderellaElement)
//     }
// }
//
// console.log(arr_cinderella.find(value => value.foot_size === prince.size_found_shoe));