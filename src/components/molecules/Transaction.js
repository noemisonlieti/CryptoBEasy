import ArrowDown from "@icons/ArrowDown";
import ArrowUp from "@icons/ArrowUp";
import TextLg from "@atoms/TextLg";
import TextSm from "@atoms/TextSm";



export default function Transaction({type , date , amount , conversion}){

      
    return(
    
        <div className="flex justify-between items-center">

            <div className="flex justify-center items-center my-2">

                {type === 'Sent' ? <ArrowUp/> : <ArrowDown/>}
                

                <div className="ml-2">

                    <TextLg className=" font-bold">

                        {type === 'Sent' ? <p className="text-accent">{type}</p> : <p className="text-DeepBlue">{type}</p>}

                    </TextLg>

                    <TextSm className=" text-MiddleBlue">{date}</TextSm>

                </div>


            </div>

            <div className="text-right">
                

                <p>

                    {type === 'Sent' ?

                         
                        <TextLg className=" font-bold text-accent">

                            {type === 'Sent' ? '-' : '+'} {amount}

                        </TextLg>

                        :

                        <TextLg className=" font-bold text-DeepBlue">

                            {type === 'Sent' ? '-' : '+'} {amount}


                        </TextLg>


                    }


                </p>


                <TextSm className=" text-MiddleBlue">{conversion}</TextSm>

            </div>

        </div>

    )
}