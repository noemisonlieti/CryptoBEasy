import Label from  '@atoms/Label';
import Input from '@atoms/Input';


export default function FormInput({id, text, placeholder, type="text", required = false, value="", className}){

    return(

        <div className="flex flex-col text-left w-full">

            <Label required={required} >{text}</Label>
            
            <Input id={id} placeholder={placeholder} type={type} value={value} className={className}/>
                      
        </div>
    )
}