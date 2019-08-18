var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 8889
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazonDB"
});

// "connect" function to connect and run "startBamazon()" function
connection.connect(function(err) {
  if (err) throw err;
  startBamazon();
});

// "startBamazon()" function to run query
function startBamazon() {
  // select all entries in "products" table
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
      // display results in table
      console.log("\n");
      console.log("----------------------------------  BAMAZON  ----------------------------------\n");
      console.table(res);
      // run "askQuestions()" function
      askQuestions();
  });
}

// "askQuestions()" function to prompt user with 2 questions
function askQuestions() {
  
  inquirer
    // captures user input and assigns to variable "itemID"
    .prompt([{
      message: "What is the item id you would like to buy?",
      type: "input",
      name: "itemID"
    },{
      // captures user input and assigns to variable "buyUnits"
      message: "How many units would you like to buy?",
      type: "input",
      name: "buyUnits"
    }
  ])
  // prints out console.log response and runs "updateProduct()" function
  .then(function(answer) {
    console.log("\n");
    console.log("You purchased " + answer.buyUnits + " units from item # " + answer.itemID + ".\n");
    updateProduct(answer);
  });
}

// function validateUnits(isNegative) {
//     connection.query("CASE WHEN stock_quantity < 0 THEN 'False' ELSE 'True' END FROM products",
//       function(err, res) {
//         if (err) throw err;
//           console.log("----------------------------------  BAMAZON  ----------------------------------\n");
//           console.table("There are NOT enough units of that product!");
//           console.table("Please select a lesser number of units or select another item id");
//           updateProduct();
//       });
//     }

// "updateProduct()" function to upate DB
function updateProduct(answer) {
  connection.query(
    // updates item user selected ("itemID") by the amount the user selected ("buyUnits")
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    // "CASE WHEN stock_quantity < 0 THEN 'False' ELSE 'True' END FROM products",
    [
      answer.buyUnits, answer.itemID
    ],
    
    function(err, res) {
      // select all items in products table and prints out table with new results
      connection.query("SELECT * FROM products", function(err, res) {
        
        if (err) throw err;
          console.log("----------------------------------  BAMAZON  ----------------------------------\n");
          console.table(res);
          // runs "askQuestions()" function to start again
          askQuestions();
      });
    }
  );
}