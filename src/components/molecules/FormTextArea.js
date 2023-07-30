import Label from  '@atoms/Label';
import TextArea from '@atoms/TextArea';


export default function FormTextArea({id, text, placeholder, required = false}){
    return(

        <div className="flex flex-col text-left w-full">

            <Label required={required} >{text}</Label>

            <TextArea

                id={id}
                placeholder={placeholder}
            
            />
       
                      
        </div>
    )
}