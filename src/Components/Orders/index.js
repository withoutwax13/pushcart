const products = [
    {
        id: 0,
        img: null,
        heading: "Polo & Shorts set",
        productImage1: `prod_example_card_1.webp`,
        productImage2: `prod_example_card_2.webp`,
        price: 18.50,
        stock: 40,
        cartPush: 0
    },
    {
        id: 1,
        img: null,
        heading: "Polo & Shorts set",
        productImage1: `prod_example_card_1.webp`,
        productImage2: `prod_example_card_2.webp`,
        price: 48.00,
        stock: 5,
        cartPush: 0
    },
    {
        id: 2,
        img: null,
        heading: "Polo & Shorts set",
        productImage1: `prod_example_card_1.webp`,
        productImage2: `prod_example_card_2.webp`,
        price: 520.50,
        stock: 9,
        cartPush: 0
    },
    {
        id: 3,
        img: null,
        heading: "Polo & Shorts set",
        productImage1: `prod_example_card_1.webp`,
        productImage2: `prod_example_card_2.webp`,
        price: 38.50,
        stock: 6,
        cartPush: 0
    },
    {
        id: 4,
        img: null,
        heading: "Polo & Shorts set",
        productImage1: `prod_example_card_1.webp`,
        productImage2: `prod_example_card_2.webp`,
        price: 12.20,
        stock: 3,
        cartPush: 0
    },
    {
        id: 5,
        img: null,
        heading: "Polo & Shorts set",
        productImage1: `prod_example_card_1.webp`,
        productImage2: `prod_example_card_2.webp`,
        price: 148.50,
        stock: 10,
        cartPush: 0
    }
]
const name = "John"
const Orders = () => {
    return (
        <section class="h-100 gradient-custom">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-lg-10 col-xl-8">
                    <div class="card" style={{borderRadius: '10px'}}>
                    <div class="card-header px-4 py-5">
                        <h5 class="text-muted mb-0">Thanks for your support, <span style={{color: '#C7493A'}}>{name}</span>!</h5>
                    </div>
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-center mb-4">
                        <p class="lead fw-normal mb-0" style={{color: "#C7493A"}}>Order History</p>
                        </div>
                        {products.map(p=>{
                            return (
                                <div class="card shadow-0 border mb-4">
                                    <div class="card-body">
                                        <div class="row">
                                        <div class="col-md-2">
                                            <img src={require(`../../Assets/images/${p.productImage1}`)}
                                            class="img-fluid" alt="Phone"/>
                                        </div>
                                        <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                                            <p class="text-muted mb-0">{p.heading}</p>
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
                        paid: <span class="h2 mb-0 ms-2">PHP {(Math.round(products.reduce((a,b)=>a + (b.price), 0) * 100)/100).toFixed(2)}</span></h5>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Orders