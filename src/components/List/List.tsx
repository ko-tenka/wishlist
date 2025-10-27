import './List.css'
import productImage1 from './img/IMG_9067.PNG'
import productImage2 from './img/IMG_9074.PNG'
import productImage3 from './img/IMG_9077.PNG'
import productImage4 from './img/IMG_9080.PNG'
import productImage5 from './img/IMG_9083.PNG'
import productImage6 from './img/IMG_9086.PNG'
import productImage7 from './img/IMG_9087.jpg'
import productImage8 from './img/IMG_9088.jpg'
import productImage9 from './img/IMG_9090.PNG'
import productImage10 from './img/IMG_9093.PNG'
import productImage11 from './img/IMG_9094.PNG'
import productImage12 from './img/IMG_9095.PNG'

interface Product {
  id: number;
  name: string;
  price: string | number;
  image: string;
  paymentLink: string;
}

function List() {
  const products: Product[] = [
    {
      id: 1,
      name: 'Byredo Mixed Emotions',
      price: '19 574',
      image: productImage1,
      paymentLink: 'https://goldapple.ru/catalogsearch/result?q=mixed%20emotions'
    },
    {
      id: 2,
      name: 'Оправа Blumarine',
      price: "14 999",
      image: productImage2,
      paymentLink: 'https://new.happylook.ru/catalog/glasses/opr_blumarine_213s_8fc_54_/'
    },
    {
      id: 3,
      name: 'Курс мезотерапии для волос',
      price: '37 500',
      image: productImage3,
      paymentLink: 'https://www.instagram.com/anastasi.cosmetolog?igsh=cDA3eTJ4N3ZnM3Ji'
    },
    {
      id: 4,
      name: 'Пилинг для лица',
      price: '7 000',
      image: productImage4,
      paymentLink: 'https://www.instagram.com/anastasi.cosmetolog?igsh=cDA3eTJ4N3ZnM3Ji'
    },
    {
        id: 5,
        name: 'Поход к стоматологу',
        price: '50 000',
        image: productImage5,
        paymentLink: 'https://www.instagram.com/anastasi.cosmetolog?igsh=cDA3eTJ4N3ZnM3Ji'
      },
      {
        id: 6,
        name: 'Nuke Dunk Low',
        price: '16 000',
        image: productImage6,
        paymentLink: 'https://t.me/unicorn_go_bot/app?startapp=product_3764677'

      },
      {
        id: 7,
        name: 'Green Flow Lakhta Park на двоих',
        price: '8 200',
        image: productImage7,
        paymentLink: 'https://greenflowlakhtapark.ru/widget'

      },
      {
        id: 8,
        name: 'Банное SPA-прстранство ДЗЕН на четверых Боярская',
        price: '70 000',
        image: productImage8,
        paymentLink: 'https://www.instagram.com/banya_zen?igsh=MWFiM3JwY3owdnN1NA=='

      },
      {
        id: 9,
        name: 'Chanel Les Beiges - дюти фрии',
        price: '8 000',
        image: productImage9,
        paymentLink: ''

      },
      {
        id: 10,
        name: 'Louis Vuitton',
        price: '330 000',
        image: productImage10,
        paymentLink: 'https://collect.tsum.ru/item/ITEM372439'

      },
      {
        id: 11,
        name: 'Saint Laurent',
        price: '154 000',
        image: productImage11,
        paymentLink: 'https://collect.tsum.ru/item/ITEM342758'

      },
      {
        id: 12,
        name: 'Платье',
        price: '30 000',
        image: productImage12,
        paymentLink: ''

      },
    
  ];

  const handleProductClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className='shop-container'>
      <h2 className='shop-title'>Wish List</h2>
      <div className='products-grid'>
        {products.map((product) => (
          <div 
            key={product.id} 
            className='product-card'
            onClick={() => handleProductClick(product.paymentLink)}
          >
            <img src={product.image} alt={product.name} className='product-image' />
            <div className='product-info'>
              <h3 className='product-name'>{product.name}</h3>
              <p className='product-price'>
                {product.price} <span className='ruble-sign'>₽</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List