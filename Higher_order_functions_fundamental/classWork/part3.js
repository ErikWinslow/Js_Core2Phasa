
const products = [

    { name: "Laptop", category: "electronics", price: 450000, stock: 3 },

    { name: "Headphones", category: "electronics", price: 25000, stock: 0 },

    { name: "Phone", category: "electronics", price: 320000, stock: 5 },

    { name: "Desk", category: "furniture", price: 85000, stock: 2 },

    { name: "Chair", category: "furniture", price: 40000, stock: 0 },

    { name: "Notebook", category: "stationery", price: 900, stock: 120 },

    { name: "Pen", category: "stationery", price: 200, stock: 300 },

];

// task 15

/*

function inStockNames(list) {

    const Stock_Names = list.filter(list => list.stock > 0);

    return Stock_Names ;
    

}

console.log( inStockNames(products) ) ;

*/

// task 16

/*

function stockValue (list) {

    const stock_Value = list.reduce( (total , list) => total + list.price * list.stock , 0);

    return stock_Value ;

}

console.log( stockValue (products) ) ;

*/

 // task 17

/*

 function mostExpensive (list) {

    const most_Expensive = list.reduce ( ( best , product) => 
        
    product.price > best.price ? product : best ) ;

    return most_Expensive ;

 }

 console.log (mostExpensive (products) ) ;

 */

// task 18

// sa el chaskaca vonc anem

/*

function countByCategory (list) {

    return list.reduce( (acc , product) => {

        if (acc[product.category]) {

            acc[product.category]++ ;

        } else {

            acc[product.category] = 1;

        }

        return acc;

    }, {} );
    

}

console.log(countByCategory (products) ) ;

*/

// task 19

// sa esem arel ))) verjapes

/*

function namesByCategory (list) {

    return list.reduce ( (acc , product) => {

        if (!acc[product.category]) {

            acc[product.category] = [] ;

        } 

        acc[product.category].push(product.name) ;

        return acc ;

    }, {}) ;


}

console.log(namesByCategory (products) ) ;

*/

