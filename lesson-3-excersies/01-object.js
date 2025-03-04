//Câu 1
const car = {
    make: "Toyota",
    model: "Corrolla",
    year: 2021
};

console.log(car.year);

//Cau 2
const person = {
    name: "Thuy",
    address: {
        street: "Chua Lang",
        city: "Ha Noi",
        contry: "Viet Nam"
    }
};
console.log(person.address);

//Cau 3
let student = {
    name: "An",
    grades: {
        math: 9.5,
        english: 7
    }
};
console.log(student.grades["math"]);

//Cau 4
const settings = {
    volume: "15hz", 
    brightness: "x"
};
settings.volume = "20HZ";
settings["brightness"] = "ABC"; //bắt buộc phải có "" trong trường hợp thêm thuộc tính mà dùng dấu []

console.log(settings);

//Câu 5
const bike = {
    make: "Toyota",
    model: "Corrolla",
    year: 2021
};
bike.color = "blue";
bike["color2"] = "green";

console.log(bike);

//Cau 6
const employee = {
    name: "Thuy",
    age: 20,
    favorite: "Reading" 
};
delete employee.age;
delete employee["favorite"];
console.log(employee);

//Cau 7
const school = {
    classA: ["An", "Binh", "Chau"], //khai báo mảng sử dung [], khai báo object sử dụng {}
    classB: ["Dao", "Huong", "Giang"]
};
console.log(school);