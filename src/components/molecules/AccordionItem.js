import AccordionHeader from "@atoms/AccordionHeader";
import AccordionBody from "@atoms/AccordionBody";


export default function AccordionItem({title , bodytxt , active = false , first = false , last = false, onAccordionToggle}){

   
    function toggleAccordion(){
        onAccordionToggle();
    }



    return(
        
        <div>
           

            <AccordionHeader
                active={active}
                first={first}
                last={last}
                onClick={toggleAccordion}
   
            >
                {title}

            </AccordionHeader>
        

            <AccordionBody
                active={active}
                last={last}
              
            >
                {bodytxt}
                
            </AccordionBody>

          
        </div>
    )
}