const Select = ({ option, value, setValue, templete, ...props }) => {

    const handleChange = ({target}) => {
        setValue(target.value)
        console.log('koé')
    }

    return (
        <select value={ value } onChange={ handleChange } { ...props } >
            <option value={ templete } disabled>{ templete }</option>
            {option.map((option, index) => (<option key={ index } value={ option }>{ option }</option>))}
        </select>
    )
}

export default Select
