import GuestHeader from '@organisms/GuestHeader';

export default function GuestLayout({children , title}){

    return(
        
        <div className="h-screen flex flex-col justify-center bg-white">

            <GuestHeader title={title}/>
            

            {children}   


        </div>
    )
}