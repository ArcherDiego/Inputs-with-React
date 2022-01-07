import StyledInput from "./style"

const Input = ({id, name, value, setValue, type, ...props }) => {

    const handleChange = ({target}) => {
        setValue(target.value)
    }

    return (
        <StyledInput>
            <label htmlFor={ id }>{ name }</label>
            <input id={ id } name={ id } type={ type } onChange={ handleChange } {...props} />
        </StyledInput>
    )
}

export default Input
