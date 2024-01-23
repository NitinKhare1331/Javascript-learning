const d = Date();
console.log(d); //It returns a new string which has a date data.
const dt = new Date();
console.log(dt);
console.log(dt.getDate());
console.log(dt.getHours());//To get a new object we need to do new Date(), this returns a special object which has date related properties
console.log(dt.getTime()); //Gives time in ms since 1 jan 1970