"use strict"; //Strict mode stops auto global creation
var teacher = "Sanket"
var student = "Shashank"
function fun(){
    var student = "Nitin" //scope of fun/function scope
    cont = "JS" //Auto Global
    console.log("Hello",student);
}
function gun(){
    var teacher = "Shivam" //scope of gun/function scope
    console.log("hi",student,teacher);
}
console.log(teacher,cont); //Reference error
fun();
gun();
console.log(teacher,cont); //Reference error after strict mode