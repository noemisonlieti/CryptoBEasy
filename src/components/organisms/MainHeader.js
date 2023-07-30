import ProfileImage from "@atoms/ProfileImage";

export default function MainHeader({title , subtitle}){

    return(
        
        <header className="flex items-center justify-between">

            <div>

                <h1 className="text-4xl font-semibold text-Purple">{title}</h1>

                <p className="text-accent text-[20px] font-medium">{subtitle}</p>

            </div>

            <ProfileImage/>

                   
        </header>
    )
}