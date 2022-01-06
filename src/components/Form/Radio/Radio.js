const Radio = ({ option, question, value, setValue, ...props }) => {

    const handleChange = ({target}) => {
        setValue(target.value)
    }

    return(
        <>
           <fieldset>
                <legend>{ question }</legend>
                    {option.map((option, index) => (
                    <input 
                            key={ index } 
                            type="radio" 
                            value={ option }
                            checked={ value === option } 
                            onChange={ handleChange }
                            {...props}
                    />))
                    }
           </fieldset>
        </>
        )
}

export default Radio
