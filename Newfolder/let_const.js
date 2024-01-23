function letReassignment(){
    let a = 10;
    console.log(a);
    a = "Sanket"
    console.log(a);
}
letReassignment();

function constReassignment(){
    const b = 10;
    console.log(b);
    // b = "Nitin"
    console.log(b);//cz b is const , so reassingment is not possible
}
constReassignment();

function constReassignmentWithObjects(){
    const obj = {a:1,b:2}
    console.log(obj);
    obj.a = 10
    console.log(obj);
}
constReassignmentWithObjects();