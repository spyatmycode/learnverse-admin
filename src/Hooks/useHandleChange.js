


export const handleChange = (e,valuesObject ,setValuesFunction)=>{

    const {name, value} = e.target
    setValuesFunction({...valuesObject,[name]:value})


}