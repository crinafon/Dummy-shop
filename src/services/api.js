

const getProducts = async (pageNo, pageQty) => {
    const skip = pageNo * pageQty
    try {
        const res = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${pageQty}`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        return error
    }
}

const getProductsByCategory = async (category) => {
    try {
        const res = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        return error
    }
}

const getProductCategories = async () => {
    try {
        const res = await fetch(`https://dummyjson.com/products/categories`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        return error
    }
}

const getProductById = async (productId) => {
    try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        return error
    }
}


export { getProducts, getProductsByCategory, getProductCategories, getProductById }