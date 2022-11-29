
const userCart = require('./userCart.json');
const category = require('./category.json');
const catalogItems = require('./catalogItems.json');
const advantages = require('./advantages.json');
const menu = require('./menu.json');


module.exports = () => ({
  userCart: userCart,
  category: category,
  catalogItems: catalogItems,
  advantages: advantages,
  menu: menu
});