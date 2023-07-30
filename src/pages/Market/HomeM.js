import MainHeader from "@organisms/MainHeader";
import DashboardCard from "@molecules/DashboardCard";
import CardButton from "@molecules/CardButton";
import Buy from "@icons/Buy";
import Sell from "@icons/Sell";

import MainLayout from "@layouts/MainLayout";
import TextSm from '@atoms/TextSm';

import MarketChart from '@organisms/MarketChart';


export default function HomeM() {

    return (

        <MainLayout

            header={

                <MainHeader 
                    title="Market"
                    subtitle={<span>Welcome, <span className="font-bold">Name</span></span>}
                />
            }
        >

            <DashboardCard
                usd="+ 1.234 USD"
                btc=" 0.0000123 BTC"
            />

            <div className="-mt-4 max-w-sm">

                <MarketChart/>

            </div>

                
            <div className="flex justify-around text-DeepBlue mt-2 mb-8">

                <TextSm className=" ">1D</TextSm>
                <TextSm className=" ">1W</TextSm>
                <TextSm className=" ">1M</TextSm>
                <TextSm className=" ">6M</TextSm>
                <TextSm className=" ">1Y</TextSm>
                <TextSm className=" font-bold">All</TextSm>

            </div>
           

            <div className="mt-8">


                <div className=" mt-8 flex justify-evenly gap-3">

                    <CardButton
                        to="/market/buy"
                        icon={<Buy/>}
                        text="Buy"
                        className="mt-2"


                    />

                    <CardButton
                        to="/market/sell"
                        icon={<Sell/>}
                        text="Sell"
                        className="mt-2"
                     

                    />

                </div>

            </div>



        </MainLayout>












    )
}