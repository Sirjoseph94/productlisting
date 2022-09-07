
function Product(props) {
    return (
      
           <div>
        <div className="uk-card uk-card-hover uk-margin uk-animation-fade">
            <div className="uk-card-media-top">
                <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg" width="1800" height="1200" alt="" />
            </div>
            <div className="uk-card-body uk-card-small">
                    <h3 className="uk-card-title">{ props.name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>
       
    )
}

export default Product