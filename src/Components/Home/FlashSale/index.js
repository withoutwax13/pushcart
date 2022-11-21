import { useEffect } from "react"

const FlashSale = () => {
    useEffect(()=>{
        function getTimeRemaining(endtime) {
            const total = Date.parse(endtime) - Date.parse(new Date());
            const seconds = Math.floor((total / 1000) % 60);
            const minutes = Math.floor((total / 1000 / 60) % 60);
            const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
          
            return {
              total,
              hours,
              minutes,
              seconds,
            };
          }
          
          function initializeClock(id, endtime) {
            const clock = document.getElementById(id);
            const hoursSpan = clock.querySelector(".hours");
            const minutesSpan = clock.querySelector(".minutes");
            const secondsSpan = clock.querySelector(".seconds");
          
            function updateClock() {
              const t = getTimeRemaining(endtime);
          
              hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
              minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
              secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
          
              if (t.total <= 0) {
                clearInterval(timeinterval);
              }
            }
          
            updateClock();
            const timeinterval = setInterval(updateClock, 1000);
          }
          
          const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
          initializeClock("clockdiv", deadline);
    })
    return (
        <div className="col-lg-5">
                    <div className="flash-deals mt-3 pt-3 pb-5">
                        {/* <!-- HEADER-FLASH SALE --> */}
                        <h2 className="flash-title text-center">
                        Flash <span><img alt="prod" src={require("../../../Assets/images/icon-flash.png")} width="50" /></span>
                        <b>Sale</b>
                        </h2>
                        {/* <!-------- COUNTDOWN-----------> */}
                        <div className="countdown text-center pb-3">
                        <div id="clockdiv">
                        <h5 className="text-center">Ending in:</h5>
                        <div>
                            <span className="hours"></span>
                            <div className="smalltext">Hours</div>
                        </div>
                        <div>
                            <span className="minutes"></span>
                            <div className="smalltext">Minutes</div>
                        </div>
                        <div>
                            <span className="seconds"></span>
                            <div className="smalltext">Seconds</div>
                        </div>
                        </div>
                    </div>
                    {/* <!--------END COUNTDOWN-------------> */}
                    
                    <div className="owl-2-style">
                        <div className="owl-carousel owl-2">
                        {/* <!----------- FLASH 1------------> */}
                        <div className="col-lg-12">
                            <div className="product-grid pb-3">
                            <div className="product-image">
                                <a href="#">
                                <img alt="prod" className="pic-1" src="https://img.ltwebstatic.com/images3_pi/2022/10/26/166675277034a84aa5a2f8c5d34738dd0d5a5ee22e_thumbnail_900x.webp"/>
                                <img alt="prod" className="pic-2" src="https://img.ltwebstatic.com/images3_pi/2022/10/26/16667527675cacbda8b2df85c098ec741d16014626_thumbnail_900x.webp"/>
                                </a>
                                <h3 className="pt-2"><a href="#">Graphic sweatshirt</a></h3>
                                <h6 className="price">₱386.00</h6>
                                <h6>
                                <small className="discount">₱772.00</small><b className="percent">-50%</b>
                                </h6>
                                <button className="buy-1 btn btn-sm">Add to Cart</button>
                            </div>
                            </div>
                        </div>
                        {/* <!-- flash2 --> */}
                        <div className="col-lg-12">
                            <div className="product-grid pb-3">
                            <div className="product-image">
                                <a href="#">
                                <img alt="prod" className="pic-1" src="https://img.ltwebstatic.com/images3_pi/2021/09/14/163160896159b29047eba36ecd6af7907387344ee1_thumbnail_900x.webp"/>
                                <img alt="prod" className="pic-2" src="https://img.ltwebstatic.com/images3_pi/2021/09/14/16316089566f20ce08512c328a4f149cceb8790447_thumbnail_900x.webp"/>
                                </a>
                                <h3 className="pt-2"><a href="#">Crop Top</a></h3>
                                <h6 className="price">₱169.20</h6>
                                <h6>
                                <small className="discount">₱564.00</small
                                ><b className="percent">-70%</b>
                                </h6>
                                <button className="buy-1 btn btn-sm">
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        </div>
                        {/* <!-- flash3 --> */}
                        <div className="col-lg-12">
                            <div className="product-grid pb-3">
                            <div className="product-image">
                                <a href="#">
                                <img alt="prod" className="pic-1" src="https://img.ltwebstatic.com/images3_pi/2022/05/09/1652075405a50dfe5b082264ea6399c5938cfda1eb_thumbnail_900x.webp"/>
                                <img alt="prod" className="pic-2" src="https://img.ltwebstatic.com/images3_pi/2022/05/09/1652075407224346372e622797b67919e2dcd78937_thumbnail_900x.webp"/>
                                </a>
                                <h3 className="pt-2"><a href="#">Body Suit</a></h3>
                                <h6 className="price">₱335.16</h6>
                                <h6>
                                <small className="discount">₱558.60</small
                                ><b className="percent">-40%</b>
                                </h6>
                                <button className="buy-1 btn btn-sm">
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        </div>
                        {/* <!-- flash4 --> */}
                        <div className="col-lg-12">
                            <div className="product-grid pb-3">
                            <div className="product-image">
                                <a href="#">
                                <img alt="prod" className="pic-1" src="https://img.ltwebstatic.com/images3_pi/2022/10/18/166609039401fdd7b6042f3c51b6ce37ef905393b7_thumbnail_900x.webp"/>
                                <img alt="prod" className="pic-2" src="https://img.ltwebstatic.com/images3_pi/2022/10/18/1666090399a2d9b84cab98fcb1cbe92a5d45accbf2_thumbnail_900x.webp"/>
                                </a>
                                <h3 className="pt-2"><a href="#">Table Cloth</a></h3>
                                <h6 className="price">₱157.68</h6>
                                <h6>
                                <small className="discount">₱394.20</small
                                ><b className="percent">-60%</b>
                                </h6>
                                <button className="buy-1 btn btn-sm">
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        </div>
                        {/* <!-- flash5 --> */}
                        <div className="col-lg-12">
                            <div className="product-grid pb-3">
                            <div className="product-image">
                                <a href="#">
                                <img alt="prod" className="pic-1" src="https://img.ltwebstatic.com/images3_pi/2022/11/04/166753098883f934cf8bb26e226c5a08a2e04a290d_thumbnail_900x.webp"/>
                                <img alt="prod" className="pic-2" src="https://img.ltwebstatic.com/images3_pi/2022/09/30/1664515986dd94106134c5bbc08f4c58c030a2e439_thumbnail_900x.webp"/>
                                </a>
                                <h3 className="pt-2"><a href="#">White drawer</a></h3>
                                <h6 className="price">₱940.20</h6>
                                <h6>
                                <small className="discount">₱1567.00</small
                                ><b className="percent">-40%</b>
                                </h6>
                                <button className="buy-1 btn btn-sm">
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        </div>
                        {/* <!-- flash6 --> */}
                        <div className="col-lg-12">
                            <div className="product-grid pb-3">
                            <div className="product-image">
                                <a href="#">
                                <img alt="prod" className="pic-1" src="https://img.ltwebstatic.com/images3_pi/2022/10/26/1666747673aae27ccfa6a1e63de35003539145a6b8_thumbnail_900x.webp"/>
                                <img alt="prod" className="pic-2" src="https://img.ltwebstatic.com/images3_pi/2022/10/26/16667476764ed0091e2e645a1160825a63430f17cc_thumbnail_900x.webp"/>
                                </a>
                                <h3 className="pt-2"><a href="#">Snack Jar</a></h3>
                                <h6 className="price">₱595.00</h6>
                                <h6>
                                    <small className="discount">₱850.00</small> 
                                    <b className="percent">-30%</b>
                                </h6>
                                <button className="buy-1 btn btn-sm">
                                Add to Cart
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
)
}

export default FlashSale