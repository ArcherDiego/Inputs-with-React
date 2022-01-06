const Input = ({id, name, value, setValue, type, ...props }) => {

    const handleChange = ({target}) => {
        setValue(target.value)
    }

    return (
        <>
            <label htmlFor={ id }>{ name }</label>
            <input id={ id } name={ id } type={ type } onChange={ handleChange } {...props} />
        </>
    )
}

export default Input
