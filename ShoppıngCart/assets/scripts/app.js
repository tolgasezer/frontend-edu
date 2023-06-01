class Product {
    title = 'Default';
    imageUrl;
    price;
    description;

    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ElementAttribute {
    constructor(attrName, attrValue) {
        this.name =attrName;
        this.value = attrValue;
    }
}

class Component {
    constructor(renderHook, shouldRender = true) {
        this.hook = renderHook;
        if(shouldRender){
            this.render();
        }
    }
    render() {}

    createRootElement(tag, cssClasses, attributes) {
        const rootElemet = document.createElement(tag);
        if (cssClasses) {
            rootElemet.className = cssClasses;
            }
        if  (attributes && attributes.length >0){
            for (const attr of attributes) {
                rootElemet.setAttribute(attr.name, attr.value);
            }
        }
        document.getElementById(this.hook).append(rootElemet);
        return rootElemet;
    }
}

class ShoppingCart extends Component {
    item = [];

    set cartItems(value) {
        this.item =value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`
    }

    get totalAmount() {
        const sum = this.item.reduce((prevValue, curItem) => prevValue + curItem.price, 0);
        return sum;
    }

    constructor(renderHook){
        super(renderHook);
    }

    addItem(product){
        const updatedItems = [...this.item];
        updatedItems.push(product);
        this.cartItems = updatedItems;
        
    }
    orderProducts() {
        console.log('Ordering...');
        console.log(this.item);
    }

    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
            <h2> Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        const orderNowBtn = cartEl.querySelector('button');
        //orderNowBtn.addEventListener('click',() =>this.orderProducts());
        orderNowBtn.addEventListener('click',() =>this.orderProducts());
        
        this.totalOutput = cartEl.querySelector('h2');
        
    }
}

class ProductItem extends Component {
    constructor(product, renderHook ){
        super(renderHook, false)
        this.product = product;
        this.render();
    }
    addToCart(){
        App.addProductToCart(this.product);
    }

    render(){
        const prodEl= this.createRootElement('li', 'product-item');
            
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}" >
                <div class="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        `;
        const addCartBtn = prodEl.querySelector('button');
        addCartBtn.addEventListener('click',this.addToCart.bind(this));
        
    }
}

class ProductList extends Component {
    products = [];

    constructor(renderHook){
        super(renderHook);
        this.fetchProducts();
    }
    fetchProducts(){
        this.products = [
            new Product(
                'A Pillow',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkhRx3olkhh8Cw8U0a1ayx5LbKzMwSm4SjFwzZCuelQ&s', 
                'Lorem Ipsum', 
                19.99 ),
                new Product(
                    'A Carpet',
                    'https://justfunfacts.com/wp-content/uploads/2019/05/carpet.jpg',
                    'Lorem ipsum',
                    69.99)
                ];    
        this.renderProducts();
    }

    renderProducts(){
        for (const prod of this.products){
            new ProductItem(prod, 'prod-list');
        }
    }

    render() {
        this.createRootElement('ul', 'product-list',[new ElementAttribute('id','prod-list')]);
        
        if (this.products && this.products.length > 0) {
            this.renderProducts();
        }
    
    }
}

class Shop extends Component {
    constructor() {
        super();
    }

    render(){
        this.cart = new ShoppingCart('app');
        new ProductList('app')
        

    }
}

class App {
    static init() {
        const shop = new Shop();
        this.cart = shop.cart;

    }
    static addProductToCart(product){
        this.cart.addItem(product);
    }
}
App.init();