import categories from '../../../API/categories'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import {setCategoryFilter} from '../../../Actions'

const Categories = ({setCategoryFilter}) => {
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
                                {categories.filter((category, index)=>[2, 4, 8, 17, 21, 22].includes(index)).map((category, i)=>{
                                    return (
                                        <Link 
                                            to={`/pushcart/products`} 
                                            onClick={()=>setCategoryFilter(category.id)} 
                                            style={{color: 'inherit'}} 
                                            className="card-inner p-3 d-flex flex-column align-items-center" 
                                            key={i}>
                                                <img alt="prod" src={require(`../../../Assets/images/${category.imgFile}`)}
                                                style={{width: deviceWidth <= 700 ? `${deviceWidth/3}px` : ``}} />
                                                <div className="text-center mg-text">
                                                    <span className="mg-text">
                                                        <b>{category.categGroup} {category.categLabel}</b>
                                                    </span>
                                                </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default connect(null, {setCategoryFilter})(Categories)