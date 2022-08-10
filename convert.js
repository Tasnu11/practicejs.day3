//covert feet to inch
function feetToInch(feet){
    const inch=feet*12;
    return inch;
}
const herFeet=5;
const herInch=feetToInch(herFeet);
console.log(herInch);


// convert centimeter to meter

function centimeterToMeter(centimeter){
const meter=centimeter/100;
return meter;
}
const theCentimeter= 234;
const theMeter=centimeterToMeter(theCentimeter);
console.log(theMeter);