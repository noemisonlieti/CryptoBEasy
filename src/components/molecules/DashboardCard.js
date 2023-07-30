export default function DashboardCard({usd , btc}){

    return(

        <div className="relative mb-12">
                        
            <div className="bg-MiddleBlue text-white p-6 rounded-xl min-h-[195px] relative">

                <h2 className=" text-5xl font-bold">{usd}</h2>

                <h3 className="text-xl font-medium pt-3">{btc}</h3>
                
                <img className="absolute right-[-4px] h-32 top-[70px] pr-2" src="/media/money.png" alt="money"/>

            </div>                   

        </div>


    )
}