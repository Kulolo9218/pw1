//Kiến thức bổ sung cho object và const
const a = 10;
//a = 15; //lỗi

const student = { "name": "Alex", "age": 12 };
//student = {"name": "Alex", "age": 19}; //lỗi

student.name = "Nagi"; //hợp lệ

//
// Thêm thuộc tính vào object
// Để thêm thuộc tính mới vào object cần dùng dấu . hoặc dấu [] để định nghĩa thuộc tính mới
let bike = {
    make: 'Yamaha',
    model: 'Y2F-R3',
};
bike.color = "Red";
bike["price new"] = 100;

console.log(bike);

//
// Xóa thuộc tính của Object
// Dùng hàm delete để xóa thuộc tính của object
let employee = {
    name: "Le Van C",
    age: 28,
    department: "HR",
};

delete employee.age;
console.log(employee);

