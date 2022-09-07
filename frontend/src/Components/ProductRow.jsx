function ProductRow() {
    return (
        <>
             <tr>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            
                <td>
                <div className="uk-button-group">
                         <button data-uk-toggle="target: #viewModal" className="uk-button uk-button-small uk-button-secondary"  >View</button>
                        <button data-uk-toggle="target: #updateProductModal" className="uk-button uk-button-small uk-button-primary">Update</button>
                        <button className="uk-button uk-button-small uk-button-danger">Delete</button>
                            </div>
                            </td>
                        </tr>
        </>
    )
}

export default ProductRow