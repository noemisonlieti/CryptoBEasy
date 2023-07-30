import FormBgGuest from '@molecules/FormBgGuest';
import InputOTP from '@atoms/InputOTP';
import Button from '@atoms/Button';


export default function FormOTP(){

    return(
        
        <FormBgGuest>
            
            <div className='flex flex-col gap-10 p-8'> 
            
                <p className='text-DeepBlue font-semibold mt-8 text-left'>
                    We have sent you an OTP to your email address. Please enter the OTP below to verify your email address. 
                </p>

                <div className="flex justify-between">

                    <InputOTP/>
                    <InputOTP/>
                    <InputOTP/>
                    <InputOTP/>
                    <InputOTP/>
                    <InputOTP/>
                

                </div>


                <p className='text-DeepBlue text-center text-lg mt-6'>

                    <span className='font-bold'>Sending the new code in:</span> 00:20

                </p>



            </div>

          
            <div className="text-center flex flex-col items-center gap-4 mt-28 mb-36">
                
                <Button to='/wallet' className='w-[185px]'>Proceed</Button>
            
            </div>


        </FormBgGuest>
    )

    
}