//import Modules
const http = require("http");
const url = require("url");
const fs = require("fs");
const getAreaFile = require("./Routes/AreaCalculation");
const getAgeFile = require("./Routes/AgeCalculation");

//Create Http Server
http
  .createServer(function (req, res) {
    const path = req.url;
    console.log(path);
    const query = url.parse(path, true).query;
    console.log(query);

    if (path.includes("age")) {
      const name = query.name;
      console.log(name);
      const dataToString = `${query.year}/${query.month}/${query.date}`;
      const age = getAgeFile.Age(dataToString, name, res);
    } else if (path.includes("vegetables")) {
      //Address of the json file
      const pathString = `${__dirname}/data/vegetables.json`;
      console.log(__dirname);

      //Executing ReadFile to get the file
      fs.readFile(pathString, function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end(err);
        }

        //Getting Response in json
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(data);
        res.end();
      });
    } else if (path.includes("object=circle")) {
      const radius = queryParamsUrlData.radius;
      const area = getAreaFile.Area(radius, res);
    } else if (path.includes("object=sphere")) {
      const radius = queryParamsUrlData.radius;
      console.log(radius);
      const volume = getAreaFile.Sphere(radius, res);
    }
  })
  .listen(8080);
