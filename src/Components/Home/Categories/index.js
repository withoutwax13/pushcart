const Categories = () => {
    let deviceWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    return (
        <div className="container" style={{width: deviceWidth <= 700 ? `${deviceWidth/1.7}px` : ``}}>
                <div>
                    <div>
                        <div className="container card-section card mb-3 mt-2" style={{width: deviceWidth <= 700 ? `${deviceWidth/1.7}px` : ``}}>
                            <div className="d-flex justify-content-center px-5" style={{width: deviceWidth <= 700 ? `${deviceWidth/1.7}px` : ``}}></div>
                            <div className="row mt-3 g-1 px-4 py-3 mb-5" style={{width: deviceWidth <= 700 ? `${deviceWidth/1.7}px` : ``}}>
                                <div className="col-md-2 col-xs-12 col-sm-12 my-5">
                                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                                        <img alt="prod" src={require("../../../Assets/images/mobile-phone.png")}
                                        style={{width: deviceWidth <= 700 ? `${deviceWidth/3}px` : ``}} />
                                        <div className="text-center mg-text">
                                            <span className="mg-text"><b>Mobile Phones</b></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-xs-12 col-sm-12 my-5 mx-auto">
                                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                                        <img alt="prod" src={require("../../../Assets/images/headphones.png")}
                                         style={{width: deviceWidth <= 700 ? `${deviceWidth/3}px` : ``}} />
                                        <div className="text-center mg-text">
                                            <span className="mg-text"><b>Headphones</b></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-xs-12 col-sm-12 my-5 mx-auto">
                                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                                        <img alt="prod" src={require("../../../Assets/images/smart-watch.png")}
                                         style={{width: deviceWidth <= 700 ? `${deviceWidth/3}px` : ``}} />
                                        <div className="text-center mg-text">
                                            <span className="mg-text"><b>Smart Watches</b></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-xs-12 col-sm-12 my-5 mx-auto">
                                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                                        <img alt="prod" src={require("../../../Assets/images/laptops.png")}
                                         style={{width: deviceWidth <= 700 ? `${deviceWidth/3}px` : ``}} />
                                        <div className="text-center mg-text">
                                            <span className="mg-text"><b>Laptops</b></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-xs-12 col-sm-12 my-5 mx-auto">
                                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                                        <img alt="prod" src={require("../../../Assets/images/air-purifier.png")}
                                         style={{width: deviceWidth <= 700 ? `${deviceWidth/3}px` : ``}} />
                                        <div className="text-center mg-text">
                                            <span className="mg-text"><b>Air Purifiers</b></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-xs-12 col-sm-12 my-5 mx-auto">
                                    <div className="card-inner p-3 d-flex flex-column align-items-center">
                                        <img alt="prod" src={require("../../../Assets/images/smart-tv.png")}
                                         style={{width: deviceWidth <= 700 ? `${deviceWidth/3}px` : ``}} />
                                        <div className="text-center mg-text">
                                            <span className="mg-text"><b>Smart TV</b></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Categories