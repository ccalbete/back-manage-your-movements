const categories = require('./../data/categories');

function getFixedCategoriesByUser(userId) {
    const userCategories = categories.filter(category => category.userId == userId);
    const fixedCategories = userCategories.filter(category => category.isFixed);
    return fixedCategories;
}

module.exports.getFixedCategoriesByUser = getFixedCategoriesByUser;