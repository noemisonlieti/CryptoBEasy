export default function Input({id, placeholder , type = 'text' , value = '', className}){

    return(

        <input 

            id={id}
            name={id}
            placeholder={placeholder}
            type={type}
            defaultValue={value}
            className={`${className} py-2 px-4 border border-MiddleBlue font-medium rounded-xl mt-3 placeholder-Azure-light text-Azure-light focus:outline-none focus:ring-4 focus:text-DeepBlue`} 
        />
    )
}