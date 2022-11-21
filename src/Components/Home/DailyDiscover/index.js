import { addToCart } from "../../../Actions/index"
import { connect } from "react-redux"
import store from '../../../store'
import { useState } from "react"

const DailyDiscover = ({addToCart}) => {
    const handleClickCartIcon = () => {
      const fakeData = {
          id: store.getState().cart.length,
          img: null,
          heading: "Ferrero Rocher Premium Gourmet Milk ChocolateHazelnut, Individually Wrapped",
          price: "148.50",
          stock: 10,
          cartPush: 5
      }
      addToCart(fakeData)
    }
    return (
        <div className="col-lg-12 col-12">
        <div className="daily-discover mt-3 pb-4">
          <h2 className="flash-title text-center pb-3 pt-4">Daily<b> Discover</b></h2>
          {/* <!-- 1ST CONTAINER --> */}
          <div className="container">
            <div className="row">
              {/* <!-- DAILY DISCOVER 1 --> */}
              <div className="col-lg-2 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                <div className="product">
                  <a>
                    <img className="pic-1" src="https://img.ltwebstatic.com/images3_pi/2022/03/24/16481157508b89f6106be323a6f2a31051d0165309_thumbnail_900x.webp"/>
                    <img className="pic-2" src="https://img.ltwebstatic.com/images3_pi/2022/03/24/16481157451d364ac4df79aba0f30ab8506b74ba9d_thumbnail_900x.webp"/>
                    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                        {/* <li className="icon"><span><img src={require("../../../Assets/images/icon-zoom.png")}/></span></li> */}
                        {/* <li className="icon mx-3"><span><img src={require("../../../Assets/images/icon-heart.png")}/></span></li> */}
                        <li onClick={handleClickCartIcon} className="icon"><span><img src={require("../../../Assets/images/icon-cart.png")}/></span></li>
                    </ul>
                  </a>
                </div>
                <small className="tag bg-red">sale</small>
                  <div className="title pt-4 pb-1">Polo & Shorts set</div>
                <div className="d-flex align-content-center justify-content-center star">
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                </div>
                <h6 className="price">₱750.00</h6>
                <button className="buy-1 btn btn-sm" onClick={handleClickCartIcon}>Add to Cart</button>
              </div>

              {/* <!-- DAILY DISCOVER 2 --> */}
              <div className="col-lg-2 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                <div className="product">
                  <a>
                    <img className="pic-1" src="https://img.ltwebstatic.com/images3_pi/2022/10/28/1666923235bea45877565cd7e4ee7ea2a3542c04f8_thumbnail_900x.webp"/>
                    <img className="pic-2" src="https://img.ltwebstatic.com/images3_pi/2022/10/28/16669232381095f35ded8f8fb2d422f2946c713a52_thumbnail_900x.webp"/>
                    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                        {/* <li className="icon"><span><img src={require("../../../Assets/images/icon-zoom.png")}/></span></li> */}
                        {/* <li className="icon mx-3"><span><img src={require("../../../Assets/images/icon-heart.png")}/></span></li> */}
                        <li onClick={handleClickCartIcon} className="icon"><span><img src={require("../../../Assets/images/icon-cart.png")}/></span></li>
                    </ul>
                  </a>
                </div>
                <small className="tag bg-green">new</small>
                  <div className="title pt-4 pb-1">Tweed Cami Dress</div>
                <div className="d-flex align-content-center justify-content-center star">
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                </div>
                <h6 className="price">₱964.00</h6>
                <button className="buy-1 btn btn-sm" onClick={handleClickCartIcon}>Add to Cart</button>
              </div>

              {/* <!-- DAILY DISCOVER 3 --> */}
              <div className="col-lg-2 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                <div className="product">
                  <a>
                    <img className="pic-1" src="https://img.ltwebstatic.com/images3_pi/2022/10/11/1665465731aec4ed8e972feab5c4bfd6a721be8e9b_thumbnail_900x.webp"/>
                    <img className="pic-2" src="https://img.ltwebstatic.com/images3_pi/2022/10/11/16654657294f848b875caebeefba41a16d74035c65_thumbnail_900x.webp"/>
                    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                        {/* <li className="icon"><span><img src={require("../../../Assets/images/icon-zoom.png")}/></span></li> */}
                        {/* <li className="icon mx-3"><span><img src={require("../../../Assets/images/icon-heart.png")}/></span></li> */}
                        <li onClick={handleClickCartIcon} className="icon"><span><img src={require("../../../Assets/images/icon-cart.png")}/></span></li>
                    </ul>
                  </a>
                </div>
                <small className="tag bg-green">new</small>
                <div className="title pt-4 pb-1">Ruffle Trim Bodysuit
                </div>
                <div className="d-flex align-content-center justify-content-center star">
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                </div>
                <h6 className="price">₱685.00</h6>
                <button className="buy-1 btn btn-sm" onClick={handleClickCartIcon}>Add to Cart</button>
              </div>

              <div className="col-lg-2 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                <div className="product">
                  <a>
                    <img className="pic-1" src="https://img.ltwebstatic.com/images3_pi/2022/03/24/16481157508b89f6106be323a6f2a31051d0165309_thumbnail_900x.webp"/>
                    <img className="pic-2" src="https://img.ltwebstatic.com/images3_pi/2022/03/24/16481157451d364ac4df79aba0f30ab8506b74ba9d_thumbnail_900x.webp"/>
                    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                        {/* <li className="icon"><span><img src={require("../../../Assets/images/icon-zoom.png")}/></span></li> */}
                        {/* <li className="icon mx-3"><span><img src={require("../../../Assets/images/icon-heart.png")}/></span></li> */}
                        <li onClick={handleClickCartIcon} className="icon"><span><img src={require("../../../Assets/images/icon-cart.png")}/></span></li>
                    </ul>
                  </a>
                </div>
                <small className="tag bg-red">sale</small>
                  <div className="title pt-4 pb-1">Polo & Shorts set</div>
                <div className="d-flex align-content-center justify-content-center star">
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                </div>
                <h6 className="price">₱750.00</h6>
                <button className="buy-1 btn btn-sm" onClick={handleClickCartIcon}>Add to Cart</button>
              </div>

              {/* <!-- DAILY DISCOVER 2 --> */}
              <div className="col-lg-2 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                <div className="product">
                  <a>
                    <img className="pic-1" src="https://img.ltwebstatic.com/images3_pi/2022/10/28/1666923235bea45877565cd7e4ee7ea2a3542c04f8_thumbnail_900x.webp"/>
                    <img className="pic-2" src="https://img.ltwebstatic.com/images3_pi/2022/10/28/16669232381095f35ded8f8fb2d422f2946c713a52_thumbnail_900x.webp"/>
                    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                        {/* <li className="icon"><span><img src={require("../../../Assets/images/icon-zoom.png")}/></span></li> */}
                        {/* <li className="icon mx-3"><span><img src={require("../../../Assets/images/icon-heart.png")}/></span></li> */}
                        <li onClick={handleClickCartIcon} className="icon"><span><img src={require("../../../Assets/images/icon-cart.png")}/></span></li>
                    </ul>
                  </a>
                </div>
                <small className="tag bg-green">new</small>
                  <div className="title pt-4 pb-1">Tweed Cami Dress</div>
                <div className="d-flex align-content-center justify-content-center star">
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                </div>
                <h6 className="price">₱964.00</h6>
                <button className="buy-1 btn btn-sm" onClick={handleClickCartIcon}>Add to Cart</button>
              </div>

              {/* <!-- DAILY DISCOVER 3 --> */}
              <div className="col-lg-2 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3">
                <div className="product">
                  <a>
                    <img className="pic-1" src="https://img.ltwebstatic.com/images3_pi/2022/10/11/1665465731aec4ed8e972feab5c4bfd6a721be8e9b_thumbnail_900x.webp"/>
                    <img className="pic-2" src="https://img.ltwebstatic.com/images3_pi/2022/10/11/16654657294f848b875caebeefba41a16d74035c65_thumbnail_900x.webp"/>
                    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                        {/* <li className="icon"><span><img src={require("../../../Assets/images/icon-zoom.png")}/></span></li> */}
                        {/* <li className="icon mx-3"><span><img src={require("../../../Assets/images/icon-heart.png")}/></span></li> */}
                        <li onClick={handleClickCartIcon} className="icon"><span><img src={require("../../../Assets/images/icon-cart.png")}/></span></li>
                    </ul>
                  </a>
                </div>
                <small className="tag bg-green">new</small>
                <div className="title pt-4 pb-1">Ruffle Trim Bodysuit
                </div>
                <div className="d-flex align-content-center justify-content-center star">
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                    <span>
                        <img src={require("../../../Assets/images/icon-star.png")}/>
                    </span>
                </div>
                <h6 className="price">₱685.00</h6>
                <button className="buy-1 btn btn-sm" onClick={handleClickCartIcon}>Add to Cart</button>
              </div>
                {/* <!-- END COL --> */}
                </div>
              </div>
            {/* <!-- END 1ST CONTAINER --> */}
            </div>
          </div>
          
    )
}

export default connect(null, {addToCart})(DailyDiscover)