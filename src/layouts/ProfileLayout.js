import Navbar from "@organisms/Navbar";

export default function ProfileLayout({children, header}){
    return(

        <div className="h-screen">

            <div className="h-[20vh] flex-flex-col justify-between py-12 px-6">

              {header}

            </div>
            
            <div className="h-[69vh]"> 

        
             {children}

            </div>

            <Navbar/>

        </div>

    )
}