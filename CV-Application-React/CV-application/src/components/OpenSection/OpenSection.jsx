import {useState} from "react";

//function to make a section collapsible

function OpenSection({title, children}){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="open-section">
            <h3 onClick={() => setIsOpen(!isOpen)}>
                <span> {title} </span>
                <span>{isOpen ? '▲' : '▼'} </span>
            </h3>
            {isOpen && (
                <div className="section-content">
                {children}
                </div>
            )}
        </div>
    );
}

export default OpenSection;