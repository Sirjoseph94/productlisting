import Footer from "../Components/Footer";
import ProductRow from "../Components/ProductRow";

function Admin() {
    return (
        <>
        <div className="uk-section uk-section-primary uk-section-large">
                <div className="uk-container">

                    <h1>Store by Jo Admin</h1>

                    <div className="uk-grid-match uk-child-width-1-3@m" data-uk-grid>
                        <div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                <a className="uk-button uk-button-text uk-button-small uk-margin-top" href="/">Home page</a>

               </div>
            </div>

            <div className="uk-section uk-section-muted">
                <div className="uk-container uk-flex uk-flex-center">
                  <button data-uk-toggle="target: #addProductModal" class="uk-button uk-button-secondary uk-button-large uk-margin uk-text-center">Add Product</button>
               </div>
               <div className="uk-container uk-margin-top">
                <table class="uk-table uk-table-hover uk-table-divider uk-table-responsive uk-table-justify uk-table-small uk-table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th className="uk-width-small">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                      <ProductRow /> 
                      <ProductRow /> 
                      <ProductRow /> 
                      <ProductRow /> 
                    </tbody>
                </table>
            </div>
            </div>
            <Footer />

            {/* Add Product Modal */}
<div id="addProductModal" className="uk-flex-top" data-uk-modal>
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <h2 className="uk-modal-title">Add Product</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <div>
                    <form>
    <fieldset className="uk-fieldset">

        <legend className="uk-legend">Legend</legend>

        <div className="uk-margin">
            <input className="uk-input" type="text" name="name" placeholder="Name" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="text" name="image" placeholder="Image url" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="text" name="brand" placeholder="Brand" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="text" name="category" placeholder="Category" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="text" name="description" placeholder="Description" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="number" name="price" placeholder="Price" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="number" name="countInStock" placeholder="Stock count" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="number" name="rating" placeholder="Reviews count" />
                                </div>
                                
                            </fieldset>
                            </form>
                    </div>            
        <p class="uk-text-right">
            <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
            <button className="uk-button uk-button-primary" type="button">Save</button>
        </p>
    </div>
            </div>
            {/* View Product Modal */}
            <div id="viewModal" className="uk-flex-top" data-uk-modal>
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

        <button className="uk-modal-close-default" type="button" data-uk-close></button>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    </div>
            </div>
            
             {/* Update Product Modal */}
<div id="updateProductModal" className="uk-flex-top" data-uk-modal>
    <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
        <h2 className="uk-modal-title">Update Product</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
                    <div>
                    <form>
    <fieldset className="uk-fieldset">

        <legend className="uk-legend">Legend</legend>

        <div className="uk-margin">
            <input className="uk-input" type="text" name="name" placeholder="Name" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="text" name="image" placeholder="Image url" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="text" name="brand" placeholder="Brand" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="text" name="category" placeholder="Category" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="text" name="description" placeholder="Description" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="number" name="price" placeholder="Price" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="number" name="countInStock" placeholder="Stock count" />
        </div>
        <div className="uk-margin">
            <input className="uk-input" type="number" name="rating" placeholder="Reviews count" />
                                </div>
                                
                            </fieldset>
                            </form>
                    </div>            
        <p class="uk-text-right">
            <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
            <button className="uk-button uk-button-primary" type="button">Update</button>
        </p>
    </div>
            </div>
            </>
    )
}

export default Admin;