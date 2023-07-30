import FormInput from '@molecules/FormInput';
import Button from '@atoms/Button';


export default function FormSend(){

    return(
        
        <form className="flex flex-1 flex-col items-center py-10 text-lg gap-8 p-1">

            <FormInput 
                    id="withdrawalAddress" 
                    text="Withdrawal Address" 
                    placeholder="Withdrawal Address" 
                    type="email" 
                    required={true}
                    className="bg-white"
                />

            <FormInput 
                id="withdrawalAmount" 
                text="Withdrawal Amount" 
                placeholder="Withdrawal Amount" 
                type="number" 
                required={true}
                className="bg-white"
            />

             
       

            <div className="text-center flex flex-col items-center gap-4 mt-28 mb-10">

                <Button to="/wallet" className='w-[185px]'>Send</Button>
   
            </div>






        </form>





    )       
}