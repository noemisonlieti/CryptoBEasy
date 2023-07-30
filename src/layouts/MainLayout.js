import Navbar from "@organisms/Navbar";

export default function MainLayout({children, header}){

    return(

        <div className="h-screen">

            <div className="h-[89vh] flex-flex-col justify-between py-12 px-6 bg-white">

                {header}
            
                <div className="grow pt-8">

                    {children}


                </div>

            </div>

            <Navbar/>

        </div>

    )
}