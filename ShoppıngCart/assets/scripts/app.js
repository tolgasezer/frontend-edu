const productList = {
    products: [
        {
            title: 'A Pillow',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkhRx3olkhh8Cw8U0a1ayx5LbKzMwSm4SjFwzZCuelQ&s',
            price: 19.99,
            description: 'Lorem ipsum'
        },
        {
            title: 'A Carpet',
            imageUrl: 'https://justfunfacts.com/wp-content/uploads/2019/05/carpet.jpg',
            price: 69.99,
            description: 'Lorem ipsum'
        }

    ],
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className= 'product-list';
        for (const prod of this.products){
            const prodEl= document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src="${prod.imageUrl}" alt="${prod.title}" >
                    <div class="product-item__content">
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
};

productList.render();