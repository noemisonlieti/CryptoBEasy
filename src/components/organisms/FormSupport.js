import FormBgEdit from '@molecules/FormBgEdit';
import FormTextArea from '@molecules/FormTextArea';
import FormSelect from '@molecules/FormSelect';
import Button from '@atoms/Button';



export default function FormSupport(){


    return(

        <FormBgEdit>


            <div className="flex flex-col items-center justify-center gap-5 px-8 py-12">

                <FormSelect
                    id="problem" 
                    text="Problem" 
                    placeholder="Choose a Problem" 
                    required={true}
                    options={['Problem with the app','Problem with the payment', 'Other']}
                   
                    
                />

                

                <FormTextArea 
                    id="description"  
                    text="Description" 
                    placeholder="Describe your problem" 
                    required={true}
                    
                />

                              


            </div>

            <div className="text-center flex flex-col items-center gap-4 mt-28 mb-10">
                
                <Button to='/profile' className='w-[185px]'>Confirm</Button>
              
            </div>



        </FormBgEdit>
    )

    
}