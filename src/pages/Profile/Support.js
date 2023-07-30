import ProfileLayout from "@layouts/ProfileLayout";
import ActionHeader from "@organisms/ActionHeader";
import FormSupport from "@organisms/FormSupport";



export default function Support(){
    return(

        <ProfileLayout

            header={<ActionHeader title="Support"/>}
        
        
        >
            <FormSupport/>

           

            

            
        </ProfileLayout>
    )
}