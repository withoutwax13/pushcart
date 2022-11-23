import { connect } from 'react-redux'
import ProductCard from '../../Products/ProductCard'

const DailyDiscover = ({addToCart, products}) => {
  const tagRandomizer = () => Math.floor(Math.random() * 3)
    return (
        <div className="col-lg-12 col-12">
        <div className="daily-discover mt-3 pb-4">
          <h2 className="flash-title text-center pb-3 pt-4">Daily<b> Discover</b></h2>
          {/* <!-- 1ST CONTAINER --> */}
          <div className="container">
            <div className="row">
              {/* <!-- DAILY DISCOVER 1 --> */}
              {products.data.filter((prod, i)=>i<8).map((product, index)=>{
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