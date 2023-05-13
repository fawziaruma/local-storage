// get  input filed valu  clear input  field and return 
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

    // display product  ui
    addProductToDisplay(product, quantity)

    //  set to local storage 
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

const addProductToDisplay = (product , quantitys) =>{

    const productContainer = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText =`${product} : ${quantitys}`
    productContainer.appendChild(li)

}


const displayProduct =()=>{
    const cart = getShoppingCartFromLocalStroge()
    console.log(cart);
    for(const product in cart){
        const quantitys = cart[product]
        console.log(product, quantitys);
        addProductToDisplay(product , quantitys)
    }



}

displayProduct()