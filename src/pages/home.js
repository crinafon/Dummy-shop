import { useEffect, useState, useRef } from "react";
import Card from "../components/card/card";
import { useNavigate } from "react-router-dom";
import { getProducts, getProductCategories, getProductsByCategory } from "../services/api";
import { Dropdown, Pagination } from "react-bootstrap";

const Home = () => {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [page, setPage] = useState(0);

    //totalPages = {current: null}
    const totalPages = useRef();
    const containerRef = useRef();

    const navigate = useNavigate();

    const pageQty = 6;

    useEffect(() => {
        getProductCategories()
            .then(res => setCategories(res))
    }, [])

    useEffect(() => {
        console.log("component did mount");
        getProducts(page, pageQty)
            .then(res => {
                if(!totalPages.current)totalPages.current = Math.ceil(res.total / pageQty);
                setProducts(res.products);
            })

        //return () => console.log("component will unmount")
    }, [page])

    const handlePrevPage = () => {
        if (page === 0) return;
        setPage(state => state - 1)
    }

    const handleNextPage = () => {
        //if(page === 0)return;
        setPage(state => state + 1)
    }

    const handleSelectCategory = (category) => {
        if (category !== 'all') {
            getProductsByCategory(category)
                .then(res => setProducts(res.products))
        }
        else {
            getProducts(page, pageQty)
                .then(res => setProducts(res.products))
        }
    }

    const handleRedirect = (productId) => {
        console.log(productId);
        //navigate(`/details?id=${productId}`);//id passed as query params
        navigate(`details/${productId}`)//dynamic route
    }

    console.dir(containerRef.current)

    return (
        <>
            <div className="home-controls" ref={containerRef}>
                {/* <select onChange={handleSelectCategory} placeholder="select category">
                    {["all", ...categories].map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select> */}
                <button onClick={() => setShowFilter(state => !state)}>show filter</button>
                {showFilter && <Dropdown onSelect={handleSelectCategory} autoClose>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Select Category
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {["all", ...categories].map(cat => <Dropdown.Item key={cat} eventKey={cat}>{cat}</Dropdown.Item>)}
                    </Dropdown.Menu>
                </Dropdown>}
                <div>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev onClick={handlePrevPage} />
                        <Pagination.Item>{`${page + 1}/${totalPages.current}`}</Pagination.Item>
                        <Pagination.Next onClick={handleNextPage} />
                        <Pagination.Last />
                    </Pagination>
                </div>
            </div>
            <div className="home-container">
                {products?.length > 0 && products.map((product) => (
                    <Card
                        key={product.id}
                        imgSrc={product.thumbnail}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        onClick={() => handleRedirect(product.id)}
                    />))}
            </div>
        </>
    )
}

export default Home;