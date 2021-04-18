//Function to Calculate Area of Circle
function Area(radius, res){
    const areaOfCircle = Math.PI * radius * radius;
    const responseObject = {
        "area Of circle": areaOfCircle
    }
    res.setHeader("content-type", "application/json");
    res.write(JSON.stringify(responseObject))
    res.end();
}

//Function to calculate volume of sphere
function Sphere(radius, res){
    const volumeOfSphere = 1.33 * Math.PI * radius * radius * radius
    console.log(volumeOfSphere);  

    const  responseObject = {
        "Volume Of sphere" : volumeOfSphere
    }
    res.setHeader("content-type","application/json");
    res.write(JSON.stringify(responseObject));
    res.end();
}

//export modules
module.exports.Area = Area;
module.exports.Sphere = Sphere;