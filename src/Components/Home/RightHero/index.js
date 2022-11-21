const RightHero = () => {
    let deviceWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    return (
        <img style={{width: deviceWidth <= 768 ? `${deviceWidth/1.7}px` : ``}} alt="prod" className="header-ads" src={require("../../../Assets/images/featured-item.png")} />
    )
}

export default RightHero