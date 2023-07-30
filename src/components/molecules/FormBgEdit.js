export default function FormBgEdit({children}){

    return(

        <form className="h-[68vh] w-full bg-CardBgGlas flex flex-col justify-between rounded-[50px] border border-MiddleBlue/[.50] shadow-[0_4px_4px_rgba(0, 0, 0, 0.25)] backdrop-blur-sm">

            {children}

        </form>
    )
}