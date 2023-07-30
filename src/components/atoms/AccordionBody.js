export default function AccordionBody({children , active , last}){

    let isActive = active ? " " : " hidden ";
    let isLast = last ? " rounded-b-xl " : " border-b-0"; 

    let additionalClasses = isActive + isLast; 



    return(
        
        <div className={"p-5 border border-MiddleBlue" + additionalClasses}>

            <p className="text-DeepBlue text-sm font-semibold">

                {children}

            </p>

        </div>
    )
}