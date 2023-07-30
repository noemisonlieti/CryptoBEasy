import FormBgGuest from '@molecules/FormBgGuest';
import Button from '@atoms/Button';
import InputUploadFile from '@molecules/InputUploadFile';

export default function FormUploadDocuments(){

    return(
              
        <FormBgGuest>

            <div className="flex flex-col items-center justify-center gap-14 p-8 mt-12">

                <InputUploadFile id="userID" title="Upload your ID" text="ID"/>
                
                <InputUploadFile id="userPhoto" title="Upload your Photo" text="Photo"/>
                          

            </div>

            <div className="text-center flex flex-col items-center mb-20">

                <Button to='/wallet' className='w-[185px]'>Proceed</Button>

            </div>



        </FormBgGuest>
    )

    
}