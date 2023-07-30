import { Link } from 'react-router-dom';
import TextLg from '@atoms/TextLg';
import ArrowRight from "@icons/ArrowRight";

export default function ButtonBlock({children , type = 'AzureDark' , to = '#' }){

    const styles = {

        MiddleBlue: 'bg-MiddleBlue',
        AzureDark: 'bg-Azure-dark',      

    }


    return(
        
        <Link to={to} className={"py-2 px-4 text-white font-bold flex justify-between items-center rounded-3xl " + styles[type]}>

            <TextLg>

                {children}

            </TextLg>

            <ArrowRight/>

        </Link>
    )
}