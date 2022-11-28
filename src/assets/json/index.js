
const cart = require('./cart.json');
const category = require('./category.json');
const catalogItems = require('./catalogItems.json');
const advantages = require('./advantages.json');
const menu = require('./menu.json');


module.exports = () => ({
  cart: cart,
  category: category,
  catalogItems: catalogItems,
  advantages: advantages,
  menu: menu
});