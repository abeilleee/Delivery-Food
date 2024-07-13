const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay');
    const cartBtn = document.querySelector('#cart-button');


    const openModal = () => {
        modal.classList.add('open');
    };

    const closeModal = () => {
        modal.classList.remove('open');
    };

    cartBtn.addEventListener('click', () => {
        openModal();
    });

    modal.addEventListener('click', (event) => {
        if (
          event.target.classList.contains('cart-modal__overlay') ||
          event.target.closest('.cart-modal__header--close')
        ) {
            closeModal();
        }
    });
};


const restsFunc = () => {
    const container = document.querySelector('#rests-container')

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image:'image1.jpg'
        },
        {
            id: 1,
            title: 'Тануки ',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image:'image3.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image:'image5.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image:'image2.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image:'image4.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image:'image6.jpg'
        },
        
    ]

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align:center;">Загрузка</p>'
    }

    const randerRests = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="./goods.html?id=${card.id}" class="products-card">
                            <div class="products-card_image">
                                <img src="./images/rests/${card.image}" alt="image1">
                            </div>
                            <div class="products-card_description">
                                <div class="products-card_description-row">
                                    <h4 class="products-card_description--title">${card.title}</h4>
                                    <div class="products-card_description--badge">${card.time} мин</div>
                                </div>
                                <div class="products-card_description-row">
                                    <div class="products-card_description-info">
                                        <div class="products-card_description-info--raiting">
                                            <img src="./images/icons/star.svg" alt="star">
                                            ${card.rating}
                                        </div>
                                        <div class="products-card_description-info--price">
                                            От ${card.price} Р
                                        </div>
                                        <div class="products-card_description-info--group">
                                        ${card.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                `)
        })
    }

    if (container){
        loading()

        setTimeout(() => {
            randerRests(restArray)
        }, 1000)
    }
}


modalFunc()
restsFunc()



// Функции для страницы с товарами


const goodsFunc = () => {
    const container = document.querySelector('#goods-container')

    const goodsArray = [
        {
            id: 0,
            title: 'Ролл угорь стандарт',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            buttontext: 'В корзину',
            price: 250,
            image:'image1.jpg',
            btnImg:'shopping-cart.svg'
        },
        {
            id: 1,
            title: 'Калифорния лосось стандарт',
            description: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            buttontext: 'В корзину',
            price: 395,
            image:'image3.jpg',
            btnImg:'shopping-cart.svg'
        },
        {
            id: 2,
            title: 'Окинава стандарт',
            description: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            buttontext: 'В корзину',
            price: 250,
            image:'image5.jpg',
            btnImg:'shopping-cart.svg'
        },
        {
            id: 3,
            title: 'Цезарь маки хl',
            description: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            buttontext: 'В корзину',
            price: 250,
            image:'image2.jpg',
            btnImg:'shopping-cart.svg'
        },
        {
            id: 4,
            title: 'Ясай маки стандарт 185 г',
            description: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            buttontext: 'В корзину',
            price: 250,
            image:'image3.jpg',
            btnImg:'shopping-cart.svg'
        },
        {
            id: 5,
            title: 'Ролл с креветкой стандарт',
            description: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            buttontext: 'В корзину',
            price: 250,
            image:'image5.jpg',
            btnImg:'shopping-cart.svg'
        }        
    ]
    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align:center;">Загрузка</p>'
    }

    const randerGoods = (array) => {
        container.innerHTML = ''

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <div class="products-card">
                            <div class="products-card_image">
                                <img src="./images/goods/${card.image}" alt="image1">
                            </div>
                            <div class="products-card_description">
                                <div class="products-card_description-row">
                                    <h5 class="products-card_description--name">
                                    ${card.title}
                                    </h5>
                                </div>
                                <div class="products-card_description-row">
                                    <p class="products-card_description--text">
                                    ${card.description}
                                    </p>
                                </div>
                                <div class="products-card_description-row">
                                    <div class="products-card_description-controls">
                                        <button class="btn btn-primary">
                                        ${card.buttontext}
                                            <img src="./images/icons/${card.btnImg}" alt="user">                                            
                                        </button>

                                        <span class="products-card_description-controls--price">
                                            ${card.price} ₽
                                        </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                `)
        })
    }

    if (container){
        loading()

        setTimeout(() => {
            randerGoods(goodsArray)
        }, 1000)
    }
}


goodsFunc()