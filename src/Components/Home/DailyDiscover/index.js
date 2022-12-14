import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ProductCard from '../../Products/ProductCard'

const Placeholder = () => {
  return (
    <>
      <p class="placeholder-glow">
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
      </p>
</>
  )
}

const DailyDiscover = ({addToCart, products}) => {
  
  const randomProdsID = () => {
    let randomProductsID = []
    for(let _ = 0; _ < 8; _++){
      randomProductsID.push(products.data[(Math.floor(Math.random() * products.data.length))].product_id)
    }
    return randomProductsID
  }

  const [randomProductsID, setRandomProdsID] = useState([])

  useEffect(()=>{
    setRandomProdsID(products.data === undefined ? [] : randomProdsID())
  }, [products])

  const tagRandomizer = () => Math.floor(Math.random() * 3)
  
  return products.data === undefined || products.data.length === 0 ? <Placeholder/> : (
        <div className="col-lg-12 col-12">
        <div className="daily-discover mt-3 pb-4">
          <h2 className="flash-title text-center pb-3 pt-4">Daily<b> Discover</b></h2>
          {/* <!-- 1ST CONTAINER --> */}
          <div className="container">
            <div className="row">
              {/* <!-- DAILY DISCOVER 1 --> */}
              {products.data.filter((prod, i)=>{return randomProductsID.includes(prod.product_id)}).map((product, index)=>{
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

const mapStateToProps = (state) => {
  return {
      products: state.products
  }
}

export default connect(mapStateToProps)(DailyDiscover)