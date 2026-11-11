// ---------- functions ----------

// (id: number) => Product | undefined
function findProduct(id) {

    const findprod = catalog.find(element => element.id === id) ;

      return findprod ;
     
}

// (cart: CartItem[], productId: number, qty?: number) => CartItem[]
function addToCart(cart, productId, qty = 1) {

    const IsSomeCatalog = catalog.some(item => item.id === productId) ;4

    if (!IsSomeCatalog) {

        return cart ;

    }

    const IsFindCart = cart.find(CartItem => CartItem.productId === productId) ;

    if (IsFindCart) {

        const new_Arr = cart.map(element => {

            if (element.productId === productId) {

                return {productId:element.productId , qty: element.qty + qty} ;

            } else {

                return element ;
            }

        });

        return new_Arr

    } else {

        const new_Arr = [...cart , {productId:productId , qty:qty}] ;

        return new_Arr ;

    }


}

// (cart: CartItem[], productId: number, qty?: number) => CartItem[]
function removeFromCart(cart, productId, qty = 1) {

    const test = cart.find(CartItem => CartItem.productId === productId) ;

    if (!test) {

        return cart ;
    }

    let newQty = test.qty - qty ;

    if (newQty <= 0) {

        const dell_obj = cart.filter(item => item.productId !== productId) ;

        return dell_obj ;


    } else {

        const new_map_arr = cart.map(element => {

          if (element.productId === productId) {

            return {productId:element.productId , qty:newQty} ;

          } else {

            return element ;

          }

        })

        return new_map_arr ;

    }


}

// (cart: CartItem[], promoCode?: string) => { subtotal, discount, delivery, total }
function calculateTotal(cart, promoCode) {

    let subtotal = 0 , discount = 0 , delivery = 0 , total = 0; 

    if (cart.length === 0) {return {subtotal , discount , delivery , total} } ;

        let GetTotal = cart.reduce((accumlator , curr) => {

            let FindProduct = catalog.find(element => element.id === curr.productId) ;
            
           return accumlator + (FindProduct.price * curr.qty) ;

        }, 0) ;

        subtotal = GetTotal ;

        if (promoCode in PROMO_CODES) {
            
           discount = Math.round(subtotal * PROMO_CODES[promoCode].percent / 100) ;

        } else {

            discount = 0 ;

        } ;

        if (subtotal - discount >= FREE_DELIVERY_FROM) {

            delivery = 0 ;

        } else {

            delivery = DELIVERY_FEE ;

        }

        total = subtotal - discount + delivery ;


        return {subtotal , discount , delivery , total} ;



}

// bonus: (cart: CartItem[]) => string[]
function getReceipt(cart) {

   const new_Arr = cart.map(curr => {

     const NameProduct = catalog.find(item => item.id === curr.productId) ;
     
     return `${NameProduct.name} x${curr.qty} = ${NameProduct.price * curr.qty}` ;

   })

   return new_Arr ;

}

// ---------- state ----------

// Product:  { id: number, name: string, price: number, category: string }
// CartItem: { productId: number, qty: number }   qty — integer >= 1

const catalog = [
    { id: 1, name: "Keyboard", price: 150, category: "electronics" },
    { id: 2, name: "Mouse", price: 80, category: "electronics" },
    { id: 3, name: "Notebook", price: 12, category: "stationery" },
    { id: 4, name: "Pen", price: 3, category: "stationery" }
];

const DELIVERY_FEE = 10;
const FREE_DELIVERY_FROM = 200; // compared with subtotal - discount

const PROMO_CODES = {
    SAVE10: { percent: 10 },
    STATIONERY20: { percent: 20, category: "stationery" }
};

// ---------- calls ----------

console.log(findProduct(3));  // { id: 3, name: "Notebook", price: 12, category: "stationery" }
console.log(findProduct(99)); // undefined

let cart = [];
cart = addToCart(cart, 1);
cart = addToCart(cart, 3, 5);
cart = addToCart(cart, 1);
cart = addToCart(cart, 99);
console.log(cart); // [{ productId: 1, qty: 2 }, { productId: 3, qty: 5 }]

console.log(calculateTotal(cart));                 // { subtotal: 360, discount: 0,  delivery: 0, total: 360 }
console.log(calculateTotal(cart, "SAVE10"));       // { subtotal: 360, discount: 36, delivery: 0, total: 324 }
console.log(calculateTotal(cart, "STATIONERY20")); // { subtotal: 360, discount: 12, delivery: 0, total: 348 }
console.log(calculateTotal(cart, "WRONG"));        // { subtotal: 360, discount: 0,  delivery: 0, total: 360 }

let small = addToCart(addToCart([], 3, 5), 4, 2);
console.log(calculateTotal(small, "SAVE10"));      // { subtotal: 66, discount: 7, delivery: 10, total: 69 }
console.log(calculateTotal([]));                   // { subtotal: 0, discount: 0, delivery: 0, total: 0 }

small = removeFromCart(small, 3, 2);
console.log(small); // [{ productId: 3, qty: 3 }, { productId: 4, qty: 2 }]
small = removeFromCart(small, 4, 2);
console.log(small); // [{ productId: 3, qty: 3 }]

const before = [{ productId: 1, qty: 1 }];
addToCart(before, 1);
console.log(before); // [{ productId: 1, qty: 1 }]

console.log(getReceipt(cart)); // ["Keyboard x2 = $300", "Notebook x5 = $60"]