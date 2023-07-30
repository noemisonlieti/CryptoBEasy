export default function Select({id, placeholder , options = []}){

    return(

        <select 
            
            id={id}
            name={id} 
            defaultValue={placeholder}
            className="py-2 px-4 border bg-white border-MiddleBlue font-medium rounded-xl mt-3 placeholder-Azure-light text-Azure-light focus:outline-none focus:ring-4 focus:text-DeepBlue"
        >
            <option disabled>{placeholder}</option>
            
           {
            options.map((option, index) => {

                return(

                    <option key={index}>{option}</option>
                )
            })
           }

        </select>
    )
}