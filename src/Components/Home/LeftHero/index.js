import { useEffect } from "react"

const LeftHero = () => {
    let deviceWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    return (
        <div id="demo" className="carousel slide pb-3" data-bs-ride="carousel" style={{width: deviceWidth <= 700 ? `${deviceWidth/1.7}px` : ``}}>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                    src={require("../../../Assets/images/carousel-12.12.png")}
                                    alt="Los Angeles"
                                    className="img-responsive img-fluid"
                                    style={{width: deviceWidth <= 700 ? `${deviceWidth/1.7}px` : ``}}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                    src={require("../../../Assets/images/carousel1.gif")}
                                    alt="Chicago"
                                    className="img-responsive img-fluid"
                                    style={{width: deviceWidth <= 700 ? `${deviceWidth/1.7}px` : ``}}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                    src={require("../../../Assets/images/carousel2.gif")}
                                    alt="New York"
                                    className="img-responsive img-fluid"
                                    style={{width: deviceWidth <= 700 ? `${deviceWidth/1.7}px` : ``}}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                    src={require("../../../Assets/images/carousel4.gif")}
                                    alt="New York"
                                    className="img-responsive img-fluid"
                                    style={{width: deviceWidth <= 700 ? `${deviceWidth/1.7}px` : ``}}
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                    src={require("../../../Assets/images/carousel5.gif")}
                                    alt="New York"
                                    className="img-responsive img-fluid"
                                    style={{width: deviceWidth <= 700 ? `${deviceWidth/1.7}px` : ``}}
                                    />
                                </div>
                            </div>
                            <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide="prev"
                            >
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#demo"
                            data-bs-slide="next"
                            >
                                <span className="carousel-control-next-icon"></span>
                            </button>
                            </div>
    )
}

export default LeftHero