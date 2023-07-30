import NavLink from "@molecules/NavLink";
import Wallet from "@icons/Wallet";
import Market from "@icons/Market";
import Profile from "@icons/Profile";



export default function Navbar(){

    return(
        
        <nav className="fixed bottom-0 h-[11vh] bg-CardBgGlas text-DeepBlue w-full rounded-t-[50px] flex items-center justify-center gap-14">

            <NavLink

                to="/wallet"
                icon={<Wallet/>}
                text="Wallet"
              
            
            />

            <NavLink

                to="/market"        
                icon={<Market/>}
                text="Market"
            
            />

            <NavLink

                to="/profile"      
                icon={<Profile/>}
                text="Profile"
   
            />



        </nav>
    )
}