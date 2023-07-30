import FormInput from '@molecules/FormInput';
import Button from '@atoms/Button';


export default function FormReceive(){

    return(

        <form className="flex flex-col items-center py-4 text-lg gap-8">

            <img className='w-60 -mt-6' src="/media/qrcode.png" alt="qrCode"/>

            <FormInput 
                id="walletAddress" 
                text="Wallet Address" 
                placeholder="shd9uqwd7jekwu6end5n" 
                type="email" 
                required={true}
                className="bg-white"
            />


            <div className="text-center flex flex-col items-center gap-4 pt-8 mb-10">

                <Button to="/wallet" className='w-[185px]'>Copy Link</Button>
   
            </div>

        </form>





    )       
}