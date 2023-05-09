const getInputValueId = id =>{
    const inputField = document.getElementById(id)
    const inputValue = inputField.value 
    inputField.value = ' '
    return inputValue
} 

const addProduct =()=>{
    const product = getInputValueId('product-name-field')
    const quantity = getInputValueId('product-quantity-field')
    console.log(product, quantity);
    saveItemLocalStorage(product, quantity)
}

const getShoppingCartFromLocalStroge = ()=>{
    let saveCart = localStorage.getItem('cart')
    let cart = {}
    if(saveCart){
        cart = JSON.parse(saveCart)
    }
    return cart
}

const saveItemLocalStorage = (product, quantity)=>{
        const cart = getShoppingCartFromLocalStroge()
    // add product to the object has proparty
    cart[product]= quantity
    const cartStringyfi = JSON.stringify(cart)
    localStorage.setItem('cart' , cartStringyfi )
}