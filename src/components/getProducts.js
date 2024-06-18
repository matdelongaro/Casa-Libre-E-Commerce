import data from "../data/products.json" ;


const getProducts = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(data)
        }, 1000)
        
    })
}

export default getProducts;

export const filterProduct = (id) =>{
    return new Promise((resolve, reject) => {
        const item = data.find((el) => el.id === id);

        if(item) {
            resolve(item)
        } else {
            reject({
            error : "no hay productos "
    })
}
})
}