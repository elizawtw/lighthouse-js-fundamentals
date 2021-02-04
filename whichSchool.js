const whichSchool  = function (age) {
 if(age <13){
   return(`I am ${age}. I should go to Elementary School.`);
 }
 else if(age>=13 && age<=18){
   return(`I am ${age}. I should go to Secondary School.`);
 }
 else {
   return("I should go to Lighthouse Labs.");
 }
}
console.log(whichSchool(22))