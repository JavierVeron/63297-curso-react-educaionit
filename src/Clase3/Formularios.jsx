import { useState } from "react";

const Formularios = () => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [price, setPrice] = useState("");
    const [priceError, setPriceError] = useState("");
    const [description, setDescription] = useState("");
    const [descriptionError, setDescriptionError] = useState("");
    const [image, setImage] = useState("");
    const [imageError, setImageError] = useState("");
    const [category, setCategory] = useState("");
    const [categoryError, setCategoryError] = useState("");
    const [resultado, setResultado] = useState("");

    const validarFormulario = (event) => {
        event.preventDefault(); //Detiene la ejecución de mi Formulario

        if (title === "") {
            setTitleError("Error! Debe completar el campo Título!");
            return false;
        } else {
            setTitleError("");
        }

        if (price === "") {
            setPriceError("Error! Debe completar el campo Precio!");
            return false;
        } else {
            setPriceError("");
        }

        if (description === "") {
            setDescriptionError("Error! Debe completar el campo Descripción!");
            return false;
        } else {
            setDescriptionError("");
        }

        if (image === "") {
            setImageError("Error! Debe completar el campo Imagen!");
            return false;
        } else {
            setImageError("");
        }

        if (category === "") {
            setCategoryError("Error! Debe completar el campo Categoría!");
            return false;
        } else {
            setCategoryError("");
        }

        //event.target.submit(); //Envío del Formulario
        // Posteando un nuevo Producto
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title:title,
                    price:price,
                    description:description,
                    image:image,
                    category:category
                }
            )
        })
        .then(res=>res.json())
        .then(json=>{
            console.log(json);
            setResultado(`El producto con el #${json.id} se cargo correctamente!`);
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Formularios</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={validarFormulario}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Título:</label>
                            <input type="text" className="form-control" value={title} onChange={(e) => {setTitle(e.target.value)}} />
                            <div className="form-text text-danger">{titleError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Precio:</label>
                            <input type="text" className="form-control" value={price} onChange={(e) => {setPrice(e.target.value)}} />
                            <div className="form-text text-danger">{priceError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Descripción:</label>
                            <textarea cols="30" rows="10" className="form-control" value={description} onChange={(e) => {setDescription(e.target.value)}} />
                            <div className="form-text text-danger">{descriptionError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Imagen:</label>
                            <input type="text" className="form-control" value={image} onChange={(e) => {setImage(e.target.value)}} />
                            <div className="form-text text-danger">{imageError}</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Categoría:</label>
                            <input type="text" className="form-control" value={category} onChange={(e) => {setCategory(e.target.value)}} />
                            <div className="form-text text-danger">{categoryError}</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-md-6">
                    {resultado ? <div className="alert alert-success" role="alert">{resultado}</div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Formularios;