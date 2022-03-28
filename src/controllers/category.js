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


async function addToSpent(userId, categoryIdToUpdate, amount) {
    try {
        const currentSpent = await db.query("select spent from categories where user_id=" + userId + " and id=" + categoryIdToUpdate);
        const newSpent = currentSpent.rows[0].spent + amount;
        await db.query("update categories set spent=" + newSpent + " where user_id=" + userId + " and id=" + categoryIdToUpdate);
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

async function getNotFixedExpensesCategoriesByUser(userId, currencyId) {
    try {
        const userCategories = await db.query(`
            SELECT categories.id, categories.name, SUM(expenses.amount) as spent
            FROM categories
            INNER JOIN expenses
            ON categories.id = expenses.category_id
            WHERE expenses.currency_id = ${currencyId} and categories.user_id = ${userId} and categories.is_fixed_expense = false
            GROUP BY categories.id, categories.name;    
        `);
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