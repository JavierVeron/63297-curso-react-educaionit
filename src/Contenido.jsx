const Contenido = ({producto, tipo, precio}) => {
    const IVA = 21;
    let precioIVA = precio + ((precio * IVA) / 100);

    return (
        <>
            <p><b>Coca-Cola</b> (conocida comúnmente como Coca en muchos países hispanohablantes; en inglés también conocida como Coke) es una bebida azucarada gaseosa vendida a nivel mundial en tiendas, restaurantes y máquinas expendedoras en más de doscientos países o territorios. Es el principal producto de The Coca-Cola Company, de origen estadounidense. En un principio, cuando la inventó el farmacéutico John Pemberton, fue concebida como una bebida medicinal patentada, aunque posteriormente, fue adquirida por el empresario Asa Griggs Candler, que hizo de la bebida una de las más consumidas del siglo XX, y del siglo XXI.</p>
            <p>La compañía produce un concentrado que luego vende a varias empresas embotelladoras licenciadas, las cuales mezclan el concentrado con agua filtrada y edulcorantes para, posteriormente, vender y distribuir la bebida en latas de aluminio y botellas de plástico o de vidrio en los comercios.</p>
            <p>También existen variantes, fabricadas por la misma empresa, como la Coca-Cola Light (también llamada Diet Coke o Coca-Cola Diet); otras son la Coca-Cola sin cafeína, Coca-Cola Cereza, Coca-Cola Zero, entre otras lanzadas especialmente, como la de sabor a limón.</p>
            <p>Es la marca más comprada a nivel mundial,1​ y su mayor competidora es Pepsi, también una bebida estadounidense. Entre otras cosas, además del color rojo predominante en sus etiquetas, es reconocida también gracias a su estilizada botella, presentada en el año 1915,2​ cuyo diseño sigue siendo de exclusividad para el producto, en casi todas las formas en las que es ofrecido.</p>
            <p>{producto + " " + tipo + " $" + precioIVA + " pesos"}</p>
        </>
    )
}

export default Contenido;