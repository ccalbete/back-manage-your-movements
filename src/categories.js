const categories = require('./../data/categories');


function getCategories() {
    return categories;
}

function getCategoriesByUser(userId) {
    const userCategories = categories.filter(category => category.userId == userId);
    return userCategories;
}

function addToSpent(categoryToUpdate, amount) {
    const selectedCategory = categories.find(category => category.name === categoryToUpdate);
    selectedCategory.spent += amount;
}

module.exports.getCategories = getCategories;
module.exports.getCategoriesByUser = getCategoriesByUser;
module.exports.addToSpent = addToSpent;