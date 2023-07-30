import { Link } from "react-router-dom";


export default function CardButton({to = '#', text, icon, className}){

    return(

        <Link to={to} className="  w-[103px] h-[90px] flex flex-col items-center justify-center text-center bg-white border-[2px] border-solid border-accent rounded-md shadow-[4px_4px_10px_rgba(7,7,76,0.5)]">

            <button className={`${className} flex flex-col items-center justify-center`} >

               {icon}
                                       
               <p className="text-accent font-semibold">{text}</p>

            </button>

        </Link>


    )
}