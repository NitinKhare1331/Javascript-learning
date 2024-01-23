function block(){
    console.log(x); //Temporal dead zone for x
    let x = 10;
    console.log(x);
}
// block();

if(true){
    console.log(y); //Temporal dead zone for y
    let y = 10;
    console.log(y);
}

function no_TDZ(){
    console.log(z);
    var z = 10;
    console.log(z);
}
no_TDZ();
