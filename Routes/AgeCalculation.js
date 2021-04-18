function Age(dataToString, name, res){
    let dob = new Date(dataToString);
     //calculate month difference from current date in time  
     let month_diff = Date.now() - dob.getTime();  
      
     //convert the calculated difference in date format  
     let age_dt = new Date(month_diff);   
       
     //extract year from date      
     let year = age_dt.getUTCFullYear();  
       
     //now calculate the age of the user  
     let age = Math.abs(year - 1970);
     
     res.setHeader("Content-Type","text/html");
    res.write(
        `<p>Hello ${name}</p><p>Your Age is ${age} years old.</p>`)
        res.end();
}

module.exports.Age = Age;