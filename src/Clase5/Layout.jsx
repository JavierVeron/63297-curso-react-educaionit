import BaseLayout from "./BaseLayout"
import Contenido5 from "./Contenido5";

const Layout = () => {
    return (
        <BaseLayout className="bg-dark text-white p-5">
            <h1>Educación IT</h1>
            <h3>Curso de React JS</h3>
            <Contenido5 />
        </BaseLayout>
    )
}

export default Layout;