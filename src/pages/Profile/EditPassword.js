import ProfileLayout from "@layouts/ProfileLayout";
import ActionHeader from "@organisms/ActionHeader";
import FormEditPassword from "@organisms/FormEditPassword";



export default function EditPassword(){
    return(

        <ProfileLayout

            header={<ActionHeader title="Edit password"/>}
        
        
        >

            <FormEditPassword></FormEditPassword>

            

            

            
        </ProfileLayout>
    )
}