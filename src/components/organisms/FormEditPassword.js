import FormBgEdit from '@molecules/FormBgEdit';
import FormInput from '@molecules/FormInput';
import Button from '@atoms/Button';



export default function FormEditPassword(){

    

    return(

            
        <FormBgEdit>
 
            <div className="flex flex-col items-center justify-center gap-5 px-8 py-12">

                <FormInput 
                    id="currentPassword" 
                    text="Current Password" 
                    placeholder="Enter your current password" 
                    type="password" 
                    required={true}
                    className="bg-white"
                    
                />

                

                <FormInput 
                    id="newPassword"  
                    text="New Password" 
                    placeholder="Enter your new password" 
                    type="password" 
                    required={true}
                    className="bg-white"
                />

                <FormInput 
                    id="confirmNewPassword"  
                    text="Confirm New Password" 
                    placeholder="Confirm your new password" 
                    type="password" 
                    required={true}
                    className="bg-white"
                />                          


            </div>

            <div className="text-center flex flex-col items-center gap-4 mt-28 mb-10">
                
                <Button to='/profile' className='w-[185px]'>Confirm</Button>
              
            </div>



        </FormBgEdit>
    )

    
}