import {Link} from 'react-router-dom'
function Footer() {
    const categories = [
        {id: 0, categLabel: "Tops", categGroup: "Women", imgFile: "crop-top.png"},
        {id: 1, categLabel: "Bottoms", categGroup: "Women", imgFile: "skirt.png"},
        {id: 2, categLabel: "Dresses", categGroup: "Women", imgFile: "dress.png"},
        {id: 3, categLabel: "Bags", categGroup: "Women", imgFile: "fbags.png"},
        {id: 4, categLabel: "Shoes", categGroup: "Women", imgFile: "fshoes.png"},
        {id: 5, categLabel: "Accessories", categGroup: "Women", imgFile: "jewelry.png"},
        {id: 6, categLabel: "Tops", categGroup: "Men", imgFile: "shirt.png"},
        {id: 7, categLabel: "Bottoms", categGroup: "Men", imgFile: "shorts.png"},
        {id: 8, categLabel: "Formal Wear", categGroup: "Men", imgFile: "suit.png"},
        {id: 9, categLabel: "Bags", categGroup: "Men", imgFile: "mbag.png"},
        {id: 10, categLabel: "Shoes", categGroup: "Men", imgFile: "mshoes.png"},
        {id: 11, categLabel: "Accessories", categGroup: "Men", imgFile: "watch.png"},
        {id: 12, categLabel: "Tops", categGroup: "Kid", imgFile: "ktops.png"},
        {id: 13, categLabel: "Bottoms", categGroup: "Kid", imgFile: "kpants.png"},
        {id: 14, categLabel: "Bags", categGroup: "Kid", imgFile: "kbags.png"},
        {id: 15, categLabel: "Shoes", categGroup: "Kid", imgFile: "kshoes.png"},
        {id: 16, categLabel: "Baby Products", categGroup: "Kid", imgFile: "bproducts.png"},
        {id: 17, categLabel: "Toys", categGroup: "Kid", imgFile: "toys.png"},
        {id: 18, categLabel: "Home & Living", categGroup: "Home", imgFile: "h-entertainment.png"},
        {id: 19, categLabel: "Electronics", categGroup: "Home", imgFile: "h-oven.png"},
        {id: 20, categLabel: "Furniture", categGroup: "Home", imgFile: "h-chair.png"},
        {id: 21, categLabel: "Kitchenware", categGroup: "Home", imgFile: "h-kitchen.png"},
        {id: 22, categLabel: "Outdoor & Garden", categGroup: "Home", imgFile: "h-garden.png"},
    ]
    return ( 
        <footer class="footer-39201">
            <div class="container mt-5">
                <div class="row">
                <div class="col-md mb-4 mb-md-0">
                    <h3>Shop</h3>
                    <ul class="list-unstyled nav-links">
                        {categories.map((category, index)=>{
                            return index <= 10 ? <li key={index}><Link to={`/pushcart/products`}>{category.categLabel}</Link></li> : null
                        })}
                        <li><Link to={`/pushcart/products`}>More...</Link></li>
                    </ul>
                </div>
                <div class="col-md mb-4 mb-md-0">
                    <h3>About</h3>
                    <ul class="list-unstyled nav-links">
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Developers</a></li>
                    <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="col-md mb-4 mb-md-0">
                    <h3>Social Links</h3>
                    <ul class="list-unstyled nav-links">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                    <h1>PushCart.Com</h1>
                    <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolor ducimus doloremque earum ullam. Architecto voluptatum odio magni.</p>
                    {/* <form action="#" class="subscribe">
                        <input type="text" class="form-control" placeholder="Enter your e-mail">
                        <input type="submit" class="btn btn-submit" value="Send">
                    </form> */}
                </div>
                </div>

                <div class="row align-items-center">
                <div class="col-12">
                    <div class="border-top my-5"></div>
                </div>
                <div class="col-md-6">
                    <p><small>&copy; 2019 All Rights Reserved.</small></p>
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;