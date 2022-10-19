import { createShoppingList } from "../repository/shoppingListRepository.js";
import { findLastPurchaseByUser } from "../../purchases/repository/purchaseRepository.js"
import { findProductsByPurchaseId } from "../../purchasedProducts/repository/purchasedProductsRepository.js" 

async function createSmartList(userId, products){
    const title = 'Nova Lista Inteligente'
    const shoppingList = await createShoppingList(title, userId)
    const purchasesProducts = await findLastPurchasesProducts(userId)
    const productsSmartList = await generateSmartShoppingListProducts(products, purchasesProducts)
}

async function findLastPurchasesProducts(userId) {
    const lastPurchase = await findLastPurchaseByUser(userId)
    return await findProductsByPurchaseId(lastPurchase);
}

async function generateSmartShoppingListProducts(products, purchasesProducts) {
    
}


export { createSmartList }