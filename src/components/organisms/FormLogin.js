import FormBgGuest from '@molecules/FormBgGuest';
import FormInput from '@molecules/FormInput';
import Button from '@atoms/Button';



export default function FormLogin(){

    return(
        
        <FormBgGuest>

            <div className="flex flex-col items-center justify-center gap-5 p-8">

                <FormInput 
                    id="email" 
                    text="Email" 
                    placeholder="Enter your email" 
                    type="email" 
                    required={true}
                    className="bg-white"
                />

                <FormInput 
                    id="password"  
                    text="Password" 
                    placeholder="Enter your password" 
                    type="password" 
                    required={true}
                    className="bg-white"
                />

            
            </div>

            <div className="text-center flex flex-col items-center gap-4 mt-28 mb-10">

                <Button to="/login/otp" className='w-[185px]'>Proceed</Button>
                
                <Button to="/register" className='w-[146px]' type="White" txt="tDeepBlue" >Sign Up</Button>

            </div>



        </FormBgGuest>
    )

    
}