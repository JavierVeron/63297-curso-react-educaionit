const CurrencyField = ({divisa, value, onChange}) => {
    return (
        <fieldset>
            <legend>{divisa}</legend>
            <input type="text" value={value} onChange={(e) => {onChange(e.target.value)}} />
        </fieldset>
    )
}

export default CurrencyField;