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
    constructor( renderHook) {
        this.hook = renderHook;
    }

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
    render() {
        const cartEl = this.createRootElement('section', 'cart');
        cartEl.innerHTML = `
            <h2> Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        
        this.totalOutput = cartEl.querySelector('h2');
        
    }
}

class ProductItem {
    constructor(product){
        this.product = product;
    }
    addToCart(){
        App.addProductToCart(this.product);
    }

    render(){
        const prodEl= document.createElement('li');
            prodEl.className = 'product-item';
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
            addCartBtn.addEventListener('click',this.addToCart.bind(this))
        return prodEl;
    }
}

class ProductList {
    products = [
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

    constructor(){}

    render() {
        const prodList = document.createElement('ul');
        prodList.className= 'product-list';
        for (const prod of this.products){
            const prodItem = new ProductItem(prod);
            const prodEl = prodItem.render();
            prodList.append(prodEl);
        }
        return prodList;
    }
}

class Shop {
    render(){
        const renderHook = document.getElementById('app');

        this.cart = new ShoppingCart('app');
        this.cart.render();
        const productList = new ProductList()
        const prodListEl = productList.render();

        
        renderHook.append(prodListEl);
    }
}

class App {
    static init() {
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;

    }
    static addProductToCart(product){
        this.cart.addItem(product);
    }
}
App.init();