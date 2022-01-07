import StyledCheckbox from "./style"

const Checkbox = ({ name, value, setValue }) => {

    const handleChange = ({target}) => {
        if(target.checked){
            setValue([...name, target.value])
        } else {
            setValue(value.filter((prop) => (prop !== target.value)))
        }
    }

    const checkedFun = () => {
        value.includes(name)
    }

    return (
        <StyledCheckbox>
            {name.map((name, index) => (
                <label key={ index }>
                    <input
                        key={ index }
                        type="checkbox" 
                        value={ name } 
                        checked={ checkedFun } 
                        onChange={ handleChange } 
                    />
                    { name }
                </label>))
            }
        </StyledCheckbox>
        
    )
}

export default Checkbox
