import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const Orders = ({user, orders, products}) => {
    let sum = 0
    return user === null ? <Navigate replace to="/pushcart/login"/> : (
        <section class="h-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-10 col-xl-8">
                    <div class="card" style={{borderRadius: '10px'}}>
                    <div class="card-header px-4 py-5">
                        <h5 class="text-muted mb-0">Thanks for your support, <span style={{color: '#C7493A'}}>{user.first_name}</span>!</h5>
                    </div>
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                        <p class="lead fw-normal mb-0" style={{color: "#C7493A"}}>Order History</p>
                        </div>
                        {orders.length === 0 ? null : orders.map(z=>{
                            let p = products.data.filter(prod=>z.product_id === prod.product_id)[0]
                            console.log(p.price)
                            sum += Number(p.price)
                            return (
                                <div class="card shadow-0 border mb-4">
                                    <div class="card-body">
                                        <div class="row">
                                        <div class="col-md-2">
                                            {/* <img src={require(`../../Assets/images/${p.productImage1}`)}
                                            class="img-fluid" alt="Phone"/> */}
                                        </div>
                                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p class="text-muted mb-0">{p.product_name}</p>
                                        </div>
                                        {/* <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p class="text-muted mb-0 small">White</p>
                                        </div>
                                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p class="text-muted mb-0 small">Capacity: 64GB</p>
                                        </div>
                                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p class="text-muted mb-0 small">Qty: 1</p>
                                        </div> */}
                                        <div class="col-md-2 text-end d-flex justify-content-end align-items-center"></div>
                                        <div class="col-md-2 text-end d-flex justify-content-end align-items-center"></div>
                                        <div class="col-md-2 text-end d-flex justify-content-end align-items-center"></div>
                                        <div class="col-md-2 text-end d-flex justify-content-end align-items-center">
                                            <p class="text-muted mb-0 small">PHP {(Math.round(p.price * 100)/100).toFixed(2)}</p>
                                        </div>
                                        </div>
                                        <hr class="mb-4" style={{backgroundColor: '#e0e0e0', opacity: '1'}}/>
                                        <div class="row d-flex align-items-center">
                                        <div class="col-md-2">
                                        </div>
                                        <div class="col-md-10">
                                            <div class="progress" style={{height: '6px', borderRadius: '16px'}}>
                                            <div class="progress-bar" role="progressbar"
                                                style={{width: '100%', borderRadius: '16px', backgroundColor: '#C7493A'}} aria-valuenow="65"
                                                aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div class="d-flex justify-content-around mb-1">
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div class="card-footer border-0 px-4 py-5"
                        style={{backgroundColor: '#2B7A78', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
                        <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
                        paid: <span class="h2 mb-0 ms-2">PHP {(Math.round(sum * 100)/100).toFixed(2)}</span></h5>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        orders: state.orders,
        user: state.user,
        products: state.products
    }
}
export default connect(mapStateToProps)(Orders)