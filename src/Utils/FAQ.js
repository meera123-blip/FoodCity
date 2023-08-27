import { useState } from "react";

const Section = ({title,description,isVisible,setIsVisible}) =>
{
    
   return(
    <div className="border border-black p-2 m-2">
        <h3>{title}</h3>
        {!isVisible?
       ( <button className="cursor-pointer underline" onClick={
            () =>
            {
                setIsVisible(true);
               
            }
        }>Show</button>) :
        (

        <button className="cursor-pointer underline" onClick={
            () =>
            {
                setIsVisible(false);

                
            }
        }>Hide</button>
   )}
        {isVisible &&<p>{description}</p>}
    </div>
   )
}



const Faq = () =>
{


    const [visibleSection,setVisibleSection] = useState("");
    // const [isVisible,setIsVisible] = useState(false); 
    return(
        <div>
            <h1 className="text-3xl p-2 font-bold">Instamart</h1>
            <Section
                title={"About Instamart"} 
                 description =  {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}  
                 isVisible ={visibleSection === "about"}
                 setIsVisible= {()=> setVisibleSection((prev) =>
                    prev === "about" ? "" : "about"
                  )}
                />
                <Section

                title={"Team Instamart"} 
                description =  {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}  
                isVisible ={visibleSection === "team"}
                setIsVisible= {()=> setVisibleSection((prev) =>
                    prev === "team" ? "" : "team"
                  )}
          />
         

                <Section

                title={"Contact Instamart"} 
                description =  {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}  
                isVisible ={visibleSection === "contact"}
                setIsVisible= {()=> setVisibleSection((prev) =>
                    prev === "contact" ? "" : "contact"
                  )}
/>


            
        </div>
    );
}

export default Faq;