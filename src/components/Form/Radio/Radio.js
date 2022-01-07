import StyledRadio from "./style"

const Radio = ({ option, question, value, setValue, ...props }) => {

    const handleChange = ({target}) => {
        setValue(target.value)
    }

    return(
        <StyledRadio>
           <fieldset>
                <legend>{ question }</legend>
                    {option.map((option, index) => (
                    <>
                    <label>
                        <input 
                            key={ index } 
                            type="radio" 
                            value={ option }
                            checked={ value === option } 
                            onChange={ handleChange }
                            {...props}
                        />
                        { option }
                    </label>
                    </>))
                    }
           </fieldset>
        </StyledRadio>
        )
}

export default Radio
