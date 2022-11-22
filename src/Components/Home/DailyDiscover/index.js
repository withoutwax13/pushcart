import ProductCard from '../../Products/ProductCard'

const products = [
  {
      id: 0,
      img: null,
      heading: "Polo & Shorts set",
      productImage1: `prod_example_card_1.webp`,
      productImage2: `prod_example_card_2.webp`,
      price: 18.50,
      stock: 40,
      cartPush: 0
  },
  {
      id: 1,
      img: null,
      heading: "Polo & Shorts set",
      productImage1: `prod_example_card_1.webp`,
      productImage2: `prod_example_card_2.webp`,
      price: 48.00,
      stock: 5,
      cartPush: 0
  },
  {
      id: 2,
      img: null,
      heading: "Polo & Shorts set",
      productImage1: `prod_example_card_1.webp`,
      productImage2: `prod_example_card_2.webp`,
      price: 520.50,
      stock: 9,
      cartPush: 0
  },
  {
      id: 3,
      img: null,
      heading: "Polo & Shorts set",
      productImage1: `prod_example_card_1.webp`,
      productImage2: `prod_example_card_2.webp`,
      price: 38.50,
      stock: 6,
      cartPush: 0
  },
]

const DailyDiscover = ({addToCart}) => {
  const tagRandomizer = () => Math.floor(Math.random() * 3)
    return (
        <div className="col-lg-12 col-12">
        <div className="daily-discover mt-3 pb-4">
          <h2 className="flash-title text-center pb-3 pt-4">Daily<b> Discover</b></h2>
          {/* <!-- 1ST CONTAINER --> */}
          <div className="container">
            <div className="row">
              {/* <!-- DAILY DISCOVER 1 --> */}
              {products.map((product, index)=>{
                return(
                  <ProductCard tag={tagRandomizer()} key={index} data={product}/>
                )
              })}
              
                {/* <!-- END COL --> */}
                </div>
              </div>
            {/* <!-- END 1ST CONTAINER --> */}
            </div>
          </div>
          
    )
}

export default DailyDiscover