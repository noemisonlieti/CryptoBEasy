import { Link } from 'react-router-dom'

export default function Button({children, to = '#', type = 'MiddleBlue', txt = 'tWhite', className }){

    const styles = {

        MiddleBlue: 'bg-MiddleBlue',
        White: 'bg-white',

        tWhite: 'text-white',
        tDeepBlue: 'text-DeepBlue',  
        

    }


    return(

        <button className={`${className} mx-auto py-3 rounded-3xl  ` + styles[type]}>

            <Link to={to} className={"text-2xl font-medium uppercase " + styles[txt]}>

                {children}

            </Link>

        </button>
    )
}