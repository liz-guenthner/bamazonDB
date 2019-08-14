var mysql = require("mysql");
var inquirer = require("inquirer");
const {table} = require('table');

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

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  startBamazon();
});


function startBamazon() {
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log("--------------  BAMAZON  -------------\n");
        for (var i = 0; i < res.length; i++) {
          console.log(res[i].item_id + "  |  " + res[i].product_name + "  |  " + res[i].department_name + "  |  " + res[i].price + "  |  " + res[i].stock_quantity);
        }
        console.log("\n-----------------------------------\r");
      });
    inquirer
      var answers = [
      {
          message: "What is the item id you would like to buy?",
          type: "input",
          name: "itemID"
        //   validate: /^\d+$/
      },{
          message: "How many units would you like to buy?",
          type: "input",
          name: "quantity"
        //   validate: validateName
      },
      
      ];
      inquirer.prompt(answers)
      .then(function(res) {
        var query = "SELECT item_id, stock_quantity FROM products WHERE ?";
        connection.query(query, { itemID: products.item_id, quantity: products.stock_quantity }, function(err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log("Item ID: " + res[i].item_id + " || Units: " + res[i].stock_quantity);
          }
        //   runSearch();
        });
      });
  }

// let config,
//   data,
//   output;
 
// data = [
//   ['0A', '0B', '0C'],
//   ['1A', '1B', '1C'],
//   ['2A', '2B', '2C']
// ];
 
// config = {
//   columns: {
//     0: {
//       alignment: 'left',
//       width: 10
//     },
//     1: {
//       alignment: 'center',
//       width: 10
//     },
//     2: {
//       alignment: 'right',
//       width: 10
//     }
//   }
// };
 
// output = table(data, config);
 
// console.log(output);