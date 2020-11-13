const Cart = require('../models/cart');


exports.addItemToCart = (req, res) => {
    
    Cart.findOne({ user: req.user._id })
    .exec((error, cart) => {
        if(error) return res.status(400).json({ error });
        console.log("cart : ",cart);
        if(cart){
            // If cart already exits then only update it
            console.log("Req.body",req.body);
            const product = req.body.cartItems.product;
            console.log("Product : ",product);
            const item = cart.cartItems.find(c => c.product == product);
            console.log("Item : ",item);
            if(item){

                Cart.findOneAndUpdate({ "user": req.user._id, "cartItems.product": product},{
                    "$set": {
                        "cartItems": {
                            ...req.body.cartItems,
                            quantity: item.quantity + req.body.cartItems.quantity                   
                        }
                    }
                })
                .exec((error, _cart) => {
                    if(error) return res.status(400).json({ error });
                    if(_cart){
                        res.status(201).json({ _cart: _cart });
                    }
                });
            }
            else{
                Cart.findOneAndUpdate({ user: req.user._id },{
                    "$push": {
                        "cartItems": req.body.cartItems
                    }
                })
                .exec((error, _cart) => {
                    if(error) return res.status(400).json({ error });
                    if(_cart){
                        res.status(201).json({ _cart: _cart });
                    }
                });
            }

        }
        else{
            // If cart not exists then create a new cart
            const cart = new Cart({
                user: req.user._id,
                cartItems: [req.body.cartItems]
            });
        
            cart.save((error, cart) => {
                
                if(error) return res.status(400).json({ error });
        
                if(cart){
                    return res.status(201).json({ cart });
                }
            });
        }
    })

    

    
}