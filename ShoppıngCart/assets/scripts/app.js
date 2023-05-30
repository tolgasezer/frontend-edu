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

class ProductItem {
    constructor(product){
        this.product = product;
    }
    addToCart(){
        console.log('Item added');
        console.log(this.product);
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
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className= 'product-list';
        for (const prod of this.products){
            const prodItem = new ProductItem(prod);
            const prodEl = prodItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

const productList = new ProductList()
productList.render();