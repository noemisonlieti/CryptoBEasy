import MainLayout from "@layouts/MainLayout";
import ActionHeader from "@organisms/ActionHeader";
import Transaction from "@molecules/Transaction";
import { useState } from 'react';



export default function Movements(){

    const [TypeFilter, setTypeFilter] = useState(null); 
    
    
    const transactions = [

        { type: 'Received', date: '01/01/2023', amount: '250.000 USD', conversion: '0,011 BTC' },

        { type: 'Sent', date: '30/12/2022', amount: '1.200,00 USD', conversion: '0,052 BTC' },

        { type: 'Received', date: '01/01/2023', amount: '250.000 USD', conversion: '0,011 BTC' },

        { type: 'Received', date: '01/01/2023', amount: '250.000 USD', conversion: '0,011 BTC' },

        { type: 'Sent', date: '30/12/2022', amount: '1.200,00 USD', conversion: '0,052 BTC' },

        { type: 'Received', date: '01/01/2023', amount: '250.000 USD', conversion: '0,011 BTC' },

        { type: 'Received', date: '01/01/2023', amount: '250.000 USD', conversion: '0,011 BTC' },

        { type: 'Sent', date: '30/12/2022', amount: '1.200,00 USD', conversion: '0,052 BTC' },

        { type: 'Received', date: '01/01/2023', amount: '250.000 USD', conversion: '0,011 BTC' },

    ]

   
    return(

        <MainLayout

            header={<ActionHeader title="Movements"/>}
        
        
        >

            <div className="h-full flex flex-col justify-center">

                <div className="flex mb-6">

                    <h2 className="text-2xl font-bold text-Purple">Filter : </h2>

                    <button onClick={() => setTypeFilter('Sent')} className={`${TypeFilter === 'Sent' ? 'bg-accent/60 text-white' : 'bg-white border-accent opacity-50'} text-accent border-2 rounded-2xl mx-2 font-bold grow`}>
                        Sent
                    </button>

                    <button onClick={() => setTypeFilter('Received')}  className={`${TypeFilter ==='Received'? ' bg-DeepBlue text-white border-white' : 'bg-white opacity-70'} text-DeepBlue border-2 border-DeepBlue rounded-2xl mx-2 font-bold grow`}>
                        Received
                    </button>

                    <button onClick={() => setTypeFilter(null)}  className={`${TypeFilter === null ? ' bg-MiddleBlue text-white border-white' : ' bg-white opacity-70'} text-MiddleBlue border-2 border-MiddleBlue rounded-2xl mx-2 font-bold grow`}>
                        All
                    </button>

                </div>

                <div className="overflow-y-scroll max-h-96 bg-BgGlassMovements rounded-xl p-1 mt-3 pl-4 pr-3 shadow-[0px_12px_34px_rgba(7,7,76,0.5)]">

                    {   
                        transactions
                        .filter(transaction => TypeFilter === null || transaction.type === TypeFilter)
                        .map((transaction, index) => {
                            return (

                                <Transaction

                                    key={index}
                                    type={transaction.type}
                                    date={transaction.date}
                                    amount={transaction.amount}
                                    conversion={transaction.conversion}


                                />

                            )

                        })
                    } 

                </div>

            </div>
            
        </MainLayout>
    )
}