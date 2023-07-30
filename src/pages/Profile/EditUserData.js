import ProfileLayout from "@layouts/ProfileLayout";
import ActionHeader from "@organisms/ActionHeader";
import FormEditUserData from "@organisms/FormEditUserData";


export default function EditUserData(){
    return(

        <ProfileLayout

            header={<ActionHeader title="Edit user data"/>}
        
        
        >

            <FormEditUserData/> 

            

            
        </ProfileLayout>
    )
}