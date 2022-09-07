import Product from "../Components/Product"
import Footer from "../Components/Footer"
import { useEffect, useState } from "react";

function Home() {
    const [products, setProduct]=useState([])
   async function getProducts() {
       const res = await fetch("http://localhost:5432/api/product/all");
       const data = await res.json()
       return Promise.allSettled(data.response)
   }
    useEffect(() => {
        async function getAll() {
            const data = await getProducts()
            
            setProduct(data)
        }getAll()
    },[])
    return (
        <>
            <div className="uk-section uk-section-primary uk-section-large">
                <div className="uk-container">

                    <h1>Store by Jo</h1>

                    <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                <a class="uk-button uk-button-text uk-button-small uk-margin-top" href="/signin">Sign in</a>

               </div>
            </div>
                <h4 class="uk-heading-small uk-text-center">Available Products</h4>
            <div className="uk-section uk-section-default uk-margin-left uk-margin-right">
                <div className="uk-container ">
                </div>
                <div>
                <div class="uk-child-width-1-3@s" data-uk-grid>
                        {products.forEach(product => {
                            console.log(product.value)
                            return (
                            
                                <Product name={ product.value.name} />
                        )
                    })}
                        
                    </div>
                    <ul className="uk-pagination">
    <li><a href="#"><span className="uk-margin-small-right" data-uk-pagination-previous></span> Previous</a></li>
    <li className="uk-margin-auto-left"><a href="#">Next <span className="uk-margin-small-left" data-uk-pagination-next></span></a></li>
</ul>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Home