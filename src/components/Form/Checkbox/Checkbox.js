import StyledCheckbox from "./style"

const Checkbox = ({ value, setValue }) => {

    const positions = ['Levantador', 'Ponteiro', 'Central', 'Oposto', 'Libero']

    const handleChange = ({target}) => {
        if(target.checked){
            setValue([...value, target.value])
        } else {
            setValue(value.filter((prop) => (prop !== target.value)))
        }
    }

    return (
        <StyledCheckbox>
            {positions.map((name, index) => (
                <label key={ index }>
                    <input
                        type="checkbox" 
                        value={ name } 
                        checked={ value.includes(name) } 
                        onChange={ handleChange } 
                    />
                    { name }
                </label>))
            }
        </StyledCheckbox>
        
    )
}

export default Checkbox
