const BaseLayout = (props) => {
    return (
        <div className={props.className}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default BaseLayout;