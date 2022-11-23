import Categories from "./Categories"
import DailyDiscover from "./DailyDiscover"
import FlashSale from "./FlashSale"
import LeftHero from "./LeftHero"
import RightHero from "./RightHero"

const Home = () => {
    return (
        <div className="wrapper-body border border-light bg-white">
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-lg-7 col-12 mx-auto pt-3">
                            <LeftHero/>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-lg-5 col-12 mx-auto pt-3">
                            <RightHero/>
                        </div>
                    </div>
                </div>
            </div>
            <Categories/>
            <div className="container">
                <div class="row d-flex text-center ">
                    {/* <FlashSale/> */}
                    <DailyDiscover/>
                </div>
            </div>
        </div>
    )
}

export default Home