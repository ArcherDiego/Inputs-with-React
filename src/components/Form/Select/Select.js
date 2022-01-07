import StyledSelect from "./style"

const Select = ({ option, value, setValue, template, ...props }) => {

    const handleChange = ({target}) => {
        setValue(target.value)
    }

    return (
        <StyledSelect defaultValue={ template } onChange={ handleChange } { ...props } >
            <option value={ template } disabled>{ template }</option>
            {option.map((option, index) => (<option key={ index } value={ option }>{ option }</option>))}
        </StyledSelect>
    )
}

export default Select
