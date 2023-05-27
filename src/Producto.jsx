const Producto = () => {
    let coca = "original";

    return (
        <img src={(coca === "original") ? "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg/320px-15-09-26-RalfR-WLC-0098_-_Coca-Cola_glass_bottle_%28Germany%29.jpg" : "https://www.coca-cola.com.ar/content/dam/one/ar/es/products/ccsa/Shot-product-argentina_gu%C3%ADa-Coca-Cola-sin-azucar.png"} alt="Coca Cola" className="img-fluid" />
    )
}

export default Producto;