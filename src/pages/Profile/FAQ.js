import MainLayout from "@layouts/MainLayout";
import ActionHeader from "@organisms/ActionHeader";
import Accordion from "@organisms/Accordion";



export default function FAQ(){


    const accordionItems = [

        {title : "What is Bitcoin?" , bodytxt : "Bitcoin is a cryptocurrency, a form of electronic cash. It is a decentralized digital currency without a central bank or single administrator that can be sent from user to user in the peer-to-peer bitcoin network without the need for intermediaries." }, 

        {title : "Is there any risk?" , bodytxt : "Cryptocurrencies aren't backed by a government or central bank. Unlike most traditional currencies, such as the U.S. dollar, the value of a cryptocurrency is not tied to promises by a government or a central bank."}, 

        {title : "How can I buy Bitcoin?" , bodytxt : "You can buy Bitcoin with a credit card, debit card, bank transfer, or cash. You can also buy Bitcoin with PayPal, Apple Pay, or Google Pay", }, 

    ]

    return(

        <MainLayout

            header={<ActionHeader title="FAQ"/>}
        
        
        >
            <div className="mt-6">

                <Accordion

                    items={accordionItems}
                
                />

                    


            </div>
            

            
        </MainLayout>
    )
}