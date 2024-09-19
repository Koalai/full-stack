import {useState} from "react";



function OpenSection({title, children}){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="open-section">
            <div className="text-section" onClick={() => setIsOpen(!isOpen)}>
                <span> {title} </span>
                <span>{isOpen ? '▲' : '▼'} </span>
            </div>
            {isOpen && (
                <div className="section-content">
                {children}
                </div>
            )}
        </div>
    );
}

export default OpenSection;