export default function GuestHeader({title}){


    return(

        <header className="text-center h-1/4 flex flex-col items-center justify-center gap-3">

            <img className="w-full max-w-[100px] mt-16" src="/media/welcome-header.png" alt="logo"/>      
                  
            <h1 className="text-center text-4xl text-Purple font-semibold pb-5">{title}</h1>

        </header>
    )
}