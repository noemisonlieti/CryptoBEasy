import { NavLink as Link } from "react-router-dom";

export default function NavLink({text, icon, to ="#"}){
    
    return(

        <Link to={to} className={({isActive}) => isActive ? 
        
            "w-11 h-11 bg-white/20 bg-blend-overlay shadow-[10px_4px_10px_rgba(7,7,76,0.5)] border-[0.27px] border-solid border-white/5 flex flex-col items-center rounded-md font-bold"
             : 
            "w-11 h-11 bg-white/20 bg-blend-overlay shadow-[4px_4px_10px_rgba(7,7,76,0.5)] border-[0.27px] border-solid border-white/5 flex flex-col items-center rounded-md opacity-80 font-semibold" }>

            {icon}

            <p className="mt-2">{text}</p> 
                             
        </Link>


    )
}


