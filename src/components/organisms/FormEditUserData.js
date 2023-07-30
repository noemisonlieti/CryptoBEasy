import FormBgEdit from '@molecules/FormBgEdit';
import FormInput from '@molecules/FormInput';
import Button from '@atoms/Button';


export default function FormEditUserData(){

    return(

      
        <FormBgEdit>

            <div className="flex flex-col items-center justify-center gap-5 py-4 px-8">

                <FormInput 
                    id="name" 
                    text="Name" 
                    placeholder="Enter your Name" 
                    required={true}
                    className="bg-white"
                    value="Mary"
                />

                <FormInput 
                    id="surname" 
                    text="Surname" 
                    placeholder="Enter your Surname" 
                    required={true}
                    className="bg-white"
                    value="Blue"
                />

                <FormInput
                    id="birthday" 
                    text="Birthday" 
                    type="date"
                    required={true}
                    className="bg-white"
                    value="2000-04-05"
                />

                <FormInput
                    id="address" 
                    text="Address" 
                    placeholder="Insert your Address"
                    required={true}
                    className="bg-white"
                    value="Via Roma, 1"
                />

                <div className='grid grid-cols-2 gap-5'>

                    <FormInput
                        id="city" 
                        text="City" 
                        placeholder="Insert your City"
                        required={true}
                        className="bg-white"
                        value="Bari"
                    />

                    <FormInput
                        id="postalCode" 
                        text="Postal Code" 
                        placeholder="Insert your Po..."
                        required={true}
                        className="bg-white"
                        value="70123"
                    />



                </div>               

            </div>

            <div className="text-center flex flex-col items-center mb-20">

                <Button to='/profile' className='w-[185px]'>Confirm</Button>
                
            </div>



        </FormBgEdit>
    )

    
}