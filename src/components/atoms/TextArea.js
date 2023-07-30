export default function TextArea({id, placeholder , type = 'text' , value = '',}){

    return(

        <textarea 

            id={id}
            name={id}
            placeholder={placeholder}
            type={type}
            defaultValue={value}
            className= "py-2 px-4 min-h-[150px] border border-MiddleBlue bg-white font-medium rounded-xl mt-3 placeholder-Azure-light text-Azure-light focus:outline-none focus:ring-4 focus:text-DeepBlue" 
            
        ></textarea>
    )
}