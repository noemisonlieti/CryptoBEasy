import { Link } from "react-router-dom";
import MainHeader from "@organisms/MainHeader";
import DashboardCard from "@molecules/DashboardCard";
import Transaction from "@molecules/Transaction";
import CardButton from "@molecules/CardButton";
import Send from "@icons/Send";
import Receive from "@icons/Receive";

import MainLayout from "@layouts/MainLayout";


export default function Home() {

    const transactions = [

        { type: 'Received', date: '01/01/2023', amount: '250.000 USD', conversion: '0,011 BTC' },

        { type: 'Sent', date: '30/12/2022', amount: '1.200,00 USD', conversion: '0,052 BTC' },

        { type: 'Received', date: '01/01/2023', amount: '250.000 USD', conversion: '0,011 BTC' },

    ]


    return (

        <MainLayout
            header={
                <MainHeader 
                    title="Wallet"
                    subtitle={<span>Welcome, <span className="font-bold">Name</span></span>}
                />
            }
        >

            <DashboardCard
                usd="1.234 USD"
                btc="0.0000123 BTC"
            />

           

            <div className="-mt-8">

                <div className="flex justify-between pt-1">

                    <p className="text-lg text-Purple font-bold">Last Transactions</p>
                    <Link to="/wallet/movements" className="text-MiddleBlue text-lg font-bold underline">View All</Link>
                </div>

                <div className="bg-BgGlassMovements rounded-xl p-1 mt-3 pl-4 pr-3 shadow-[0px_12px_34px_rgba(7,7,76,0.5)]">

                  

                    {
                        transactions.map((transaction, index) => {
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


                <div className=" mt-8 flex justify-evenly gap-3">

                    <CardButton
                        to="/wallet/send"
                        icon={<Send/>}
                        text="Send"
                        className="mt-5"


                    />

                    <CardButton
                        to="/wallet/receive"
                        icon={<Receive/>}
                        text="Receive"
                        className="mt-5"
                     

                    />

                </div>

                

            </div>




        </MainLayout>












    )
}