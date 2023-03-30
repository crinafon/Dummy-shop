import { useEffect, useState } from "react";
import { getProductById } from "../services/api";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const [product, setProduct] = useState();
    const params = useParams();
    console.log(params)

    useEffect(() => {
        getProductById(params.id)
        .then(res => setProduct(res))
    }, [])

    console.log(product)

    return(
        <div style={{margin: '1rem'}}>
           <h1>{product?.title}</h1>
           <h3>{product?.brand}</h3>
           <p><span>Category: </span>{product?.category}</p>
           <p>{product?.description}</p>
           <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem'}}>
            {product?.images.map((image, index) => (
                <img key={image + index} src={image} alt="..." />
            ))}
           </div>
        </div>
    )
}

export default ProductDetails;