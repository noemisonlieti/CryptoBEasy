import AccordionItem from "@molecules/AccordionItem";
import { useState } from 'react';

export default function Accordion({items}){


    const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);

    function handleAccordionToggle(index) {

      setActiveAccordionIndex(activeAccordionIndex === index ? null : index);
      
    }


    return(

        <div>

            {
                items.map((item , index) => {

                    return (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            bodytxt={item.bodytxt}
                            first={index === 0}
                            last={index === (items.length - 1)}
                            active={activeAccordionIndex === index}
                            onAccordionToggle={() => handleAccordionToggle(index)}
                            
                        /> 
                    )
                })
            }

        </div>
    )
}