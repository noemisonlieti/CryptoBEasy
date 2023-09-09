import ProfileImage from "@atoms/ProfileImage";
import BackButton from "@atoms/BackButton";

export default function ActionHeader({title}){

    return(
        
        <header className="-mt-4">

            <div className="flex items-center justify-between">

                <BackButton/>     
                   
                <ProfileImage/>
                

            </div>


            <div className="text-center">

                <h1 className="text-4xl font-semibold text-Purple">{title}</h1>
                
            </div>

            

                   
        </header>
    )
}