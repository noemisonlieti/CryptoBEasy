import FormInput from '@molecules/FormInput';
import Button from '@atoms/Button';




export default function FormSell(){

    return(
        <form className="flex flex-1 flex-col items-center py-10 text-lg gap-8 p-1">

            <FormInput

                id="amount"
                text="Amount in BTC"
                placeholder="Insert amount in BTC"
                type="number"
                required={true}
                className="bg-white"
            
            />

            <FormInput 
                id="conversion" 
                text="Conversion in USD" 
                placeholder="Amount in USD" 
                type="number" 
                className="bg-Azure-light/20"
                
            />

    
             
       

            <div className="text-center flex flex-col items-center gap-4 mt-28 mb-10">

                <Button to="/market" className='w-[185px]'>Sell</Button>
   
            </div>






        </form>





    )       
}