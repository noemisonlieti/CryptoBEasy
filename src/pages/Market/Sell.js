import MainLayout from "@layouts/MainLayout";
import ActionHeader from "@organisms/ActionHeader";
import FormSell from "@organisms/FormSell";



export default function Sell(){
    return(

        <MainLayout

            header={<ActionHeader title="Sell"/>}
        
            
        
        >
            <FormSell></FormSell>

            

            
        </MainLayout>
    )
}