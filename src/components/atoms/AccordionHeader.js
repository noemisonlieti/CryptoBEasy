export default function AccordionHeader({children, active , first, last , onClick}){

    let isActive = active ? " bg-CardBgGlas border-b-0" : " bg-white";
    let isFirst = first ? " rounded-t-[50px] border-b-0" : "";
    
    let isActiveLast = last && !active ? " rounded-b-xl" : " ";

    let additionalClasses = isActive + isFirst + isActiveLast; 

    let accordionArrow = active ? "" : " rotate-180 ";


    return(
        <h2 onClick={onClick}>

            <button 
                className={"flex items-center justify-between w-full p-5 font-bold border border-MiddleBlue text-DeepBlue" + additionalClasses}
            >
                <span>{children}</span>
                
                <svg className={accordionArrow} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.8337 11.5252C15.8341 11.4007 15.8067 11.2777 15.7533 11.1652C15.7 11.0527 15.6221 10.9536 15.5254 10.8752L10.5254 6.85022C10.3763 6.72765 10.1892 6.66064 9.99623 6.66064C9.80321 6.66064 9.61617 6.72765 9.46706 6.85022L4.46706 11.0169C4.29688 11.1583 4.18986 11.3616 4.16954 11.5819C4.14923 11.8023 4.21728 12.0217 4.35873 12.1919C4.50017 12.3621 4.70343 12.4691 4.92379 12.4894C5.14414 12.5097 5.36355 12.4417 5.53373 12.3002L10.0004 8.57522L14.4671 12.1752C14.5894 12.2771 14.7383 12.3419 14.8963 12.3618C15.0542 12.3816 15.2146 12.3559 15.3584 12.2875C15.5021 12.2191 15.6233 12.111 15.7076 11.9759C15.7918 11.8408 15.8356 11.6844 15.8337 11.5252Z" fill="#03479B"/>
                </svg>

            </button>
        </h2>

    )
}