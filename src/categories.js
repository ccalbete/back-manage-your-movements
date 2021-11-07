const categories = require('./../data/categories');


function getCategories() {
    return categories;
}


function getCategoriesByUser(userId) {
    const userCategories = categories.filter(category => category.userId == userId);
    return userCategories;
}

module.exports.getCategories = getCategories;
module.exports.getCategoriesByUser = getCategoriesByUser;