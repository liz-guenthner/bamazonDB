# Node.js & MySQL

## Login info

1. Login to SequelPro
2. Standard tab
3. Name: UT Bootcamp DB
4. Host: localhost (127.0.0.1)
5. Username: root
6. Password: root
7. Database: blank
8. Port: 8889
9. DB name: bamazon
10. Technologies: MySQL database, Node.js, Inquirer NPM package (data input), MySQL NPM package (data storage)

## Overview

Bamazon is an Amazon-like storefront that uses MySQL database accessed by Node.js. The CLI app takes in orders from customers and depletes stock from the store's inventory. The app uses MySQL DB, Node.js, Inquirer and MySQL NPM packages for data input and storage.

## Submission Guide

In README.md file...include screenshots, a gif, and/or a video showing us that you got the app working with no bugs.

* Include screenshots (or a video) of typical user flows through your application (for the customer and if relevant the manager/supervisor). This includes views of the prompts and the responses after their selection (for the different selection options).

* Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works. 

* Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.



## Instructions

### Challenge #1: Customer View (Minimum Requirement)


3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.


### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

