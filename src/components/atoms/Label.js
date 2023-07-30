export default function Label({htmlFor , children , required = false}){

    return (

        <label className="font-medium text-DeepBlue">
            
            {children} {required && <span className="text-accent font-bold">*</span>}
        
        </label>
    )
}