import categories from '../../../API/categories'

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
                                {categories.filter(category=>[2, 4, 8, 17, 18, 22].includes(category.id)).map((category, i)=>{
                                    return (
                                        <div className="card-inner p-3 d-flex flex-column align-items-center" key={i}>
                                            <img alt="prod" src={require(`../../../Assets/images/${category.imgFile}`)}
                                            style={{width: deviceWidth <= 700 ? `${deviceWidth/3}px` : ``}} />
                                            <div className="text-center mg-text">
                                                <span className="mg-text"><b>{category.categGroup} {category.categLabel}</b></span>
                                            </div>
                                        </div>
                                    )
                                })}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Categories