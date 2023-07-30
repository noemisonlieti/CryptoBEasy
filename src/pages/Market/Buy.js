import MainLayout from "@layouts/MainLayout";
import ActionHeader from "@organisms/ActionHeader";
import FormBuy from "@organisms/FormBuy";


export default function Buy(){
    return(

        <MainLayout

            header={<ActionHeader title="Buy"/>}
        
        
        >

            <FormBuy/>

            
        </MainLayout>
    )
}