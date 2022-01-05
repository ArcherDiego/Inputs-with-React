const Input = ({id, name, value, setValue, ...props }) => {

    const handleChange = ({target}) => {
        return setValue(target.value)
    }

    return (
        <>
            <label htmlFor={ id }>{ name }</label>
            <input id={ id } name={ id } type="text" onChange={ handleChange } {...props} />
        </>
    )
}

export default Input
