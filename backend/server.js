const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require("mysql");
const server = express();

server.use(cors())
server.use(bodyParser.json());


//Establish the database connection

const db = mysql.createConnection({
  //CREATE USER demo@'%' IDENTIFIED BY 'Tiger1234';
  //GRANT ALL PRIVILEGES ON employee.* TO 'demo'@'%' WITH GRANT OPTION;
  //ALTER USER 'demo'@'%' IDENTIFIED WITH mysql_native_password BY 'Tiger1234';
  //FLUSH PRIVILEGES;
    host: "localhost",
    port: 3306,
    user: "demo",
    password: "Tiger1234",
    database: "employee",

});

db.connect(function (error) {
    if (error) {
      console.log("Error Connecting to DB", error);
    } else {
      console.log("successfully Connected to DB");
    }
  });

//Establish the Port

  server.listen(8085,function check(error) {
    if (error) 
    {
    console.log("Error....dddd!!!!");
    }

    else 
    {
        console.log("Started....!!!! 8085");

    }
});

//Create the Records

server.post("/api/employee/add", (req, res) => {
    let details = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      number: req.body.number,
      password: req.body.password,
      address: req.body.address,
      country: req.body.country,
      city: req.body.city,
      state: req.body.state,
      dependent: req.body.dependent,
      doj: req.body.doj,
      dob: req.body.dob,
    };
    let sql = "INSERT INTO emp SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "Employee created Failed" });
      } else {
        res.send({ status: true, message: "Employee created successfully" });
      }
    });
  });



//view the Records

server.get("/api/employee", (req, res) => {
    var sql = "SELECT * FROM emp";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB", error);
      } else {
        res.send({ status: true, data: result });
      }
    });
  });


//Search the Records

server.get("/api/employee/:id", (req, res) => {
    var empid = req.params.id;
    var sql = "SELECT * FROM emp WHERE id=" + empid;
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });



//Update the Records

server.put("/api/employee/update/:id", (req, res) => {
    let sql =
      "UPDATE emp SET first_name='" +
      req.body.first_name +
      "', last_name='" +
      req.body.last_name +
      "',number='" +
      req.body.number +
      "', password='" +
      req.body.password +
      "',address='" +
      req.body.address +
      "',country='" +
      req.body.country +
      "', city='" +
      req.body.city +
      "',state='" +
      req.body.state +
      "',dependent='" +
      req.body.dependent +
      "',doj='" +
      req.body.doj +
      "',dob='" +
      req.body.dob +
      "'  WHERE id=" +
      req.params.id;
  
    let a = db.query(sql, (error, result) => {
      if (error) {
        res.send({ status: false, message: "Employee Updated Failed" });
      } else {
        res.send({ status: true, message: "Employee Updated successfully" });
      }
    });
  });



  //Delete the Records

  server.delete("/api/employee/delete/:id", (req, res) => {
    let sql = "DELETE FROM emp WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "Employee Deleted Failed" });
      } else {
        res.send({ status: true, message: "Employee Deleted successfully" });
      }
    });
  });
