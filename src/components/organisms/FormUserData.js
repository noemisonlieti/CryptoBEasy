import FormBgGuest from '@molecules/FormBgGuest';
import FormInput from '@molecules/FormInput';
import Button from '@atoms/Button';


export default function FormUserData(){

    return(
        
        <FormBgGuest>

            <div className="flex flex-col items-center justify-center gap-5 p-8">

                <FormInput 
                    id="name" 
                    text="Name" 
                    placeholder="Enter your Name" 
                    required={true}
                    className="bg-white"
                />

                <FormInput 
                    id="surname" 
                    text="Surname" 
                    placeholder="Enter your Surname" 
                    required={true}
                    className="bg-white"
                />

                <FormInput
                    id="birthday" 
                    text="Birthday" 
                    type="date"
                    required={true}
                    className="bg-white"
                />

                <FormInput
                    id="address" 
                    text="Address" 
                    placeholder="Insert your Address"
                    required={true}
                    className="bg-white"
                />

                <div className='grid grid-cols-2 gap-5'>

                    <FormInput
                        id="city" 
                        text="City" 
                        placeholder="Insert your City"
                        required={true}
                        className="bg-white"
                    />

                    <FormInput
                        id="postalCode" 
                        text="Postal Code" 
                        placeholder="Insert your Po..."
                        required={true}
                        className="bg-white"
                    />



                </div>               

            </div>

            <div className="text-center flex flex-col items-center mb-20">

                <Button to='/register/upload-documents' className='w-[185px]'>Proceed</Button>
                
            </div>



        </FormBgGuest>
    )

    
}