export default function FormBgGuest({children}){

    return(

        <form className="h-3/4 w-full bg-CardBgGlas flex flex-col justify-between rounded-t-[50px] border border-MiddleBlue/[.50] shadow-[0_4px_4px_(0, 0, 0, 0.25)] backdrop-blur-sm">

            {children}

        </form>
    )
}