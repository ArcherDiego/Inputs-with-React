const Select = ({ option, value, setValue, template, ...props }) => {

    const handleChange = ({target}) => {
        setValue(target.value)
    }

    return (
        <select defaultValue={ template } onChange={ handleChange } { ...props } >
            <option value={ template } disabled>{ template }</option>
            {option.map((option, index) => (<option key={ index } value={ option }>{ option }</option>))}
        </select>
    )
}

export default Select
