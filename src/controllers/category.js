//database
const db = require("../../database");

async function getCategories() {
    try {
        const categories = await db.query("select * from categories");
        return categories.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function getCategoriesByUser(userId) {
    try {
        const userCategories = await db.query("select * from categories where user_id=" + userId);
        return userCategories.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function getCategoryId(userId, name) {
    try {
        const category = await db.query("select id from categories where name='" + name + "' and user_id=" + userId);
        return category.rows[0].id;
    } catch (error) {
        throw new Error(error);
    }
}


async function addToSpent(userId, categoryToUpdate, amount) {
    try {
        const currentSpent = await db.query("select spent from categories where user_id=" + userId + " and name= '" + categoryToUpdate + "'")
        const newSpent = currentSpent.rows[0].spent + amount;
        await db.query("update categories set spent=" + newSpent + " where user_id=" + userId + " and name= '" + categoryToUpdate + "'")
    } catch (error) {
        throw new Error(error);
    }
}

async function getFixedExpensesCategoriesByUser(userId) {
    try {
        const userCategories = await db.query("select * from categories where user_id=" + userId + " and is_fixed_expense=true");
        return userCategories.rows;
    } catch (error) {
        throw new Error(error);
    }
}

async function getNotFixedExpensesCategoriesByUser(userId) {
    try {
        const userCategories = await db.query("select * from categories where user_id=" + userId + " and is_fixed_expense=false");
        return userCategories.rows;
    } catch (error) {
        throw new Error(error);
    }
}


module.exports.getCategories = getCategories;
module.exports.getCategoriesByUser = getCategoriesByUser;
module.exports.getCategoryId = getCategoryId;
module.exports.addToSpent = addToSpent;
module.exports.getFixedExpensesCategoriesByUser = getFixedExpensesCategoriesByUser;
module.exports.getNotFixedExpensesCategoriesByUser = getNotFixedExpensesCategoriesByUser;