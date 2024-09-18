
import React, {useState} from "react";
import ItemTemplate from "../FormTemplate/ItemTemplate";

function Skill({skills, setSkills}){
    const [showForm, setShowForm] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [skill, setSkill] = useState({
        skillName: ''
    });

    const fields = [
        {name:'skillName', type:'text', label:'Skill', placeholder:'Enter Skill', required: true}
    ];

    return (
        <div className="skill-section">
            <div className="skill-list">
                {skills.map((skl, index) => (
                    <ItemTemplate 
                        key={index}
                        title={skl.skillName}
                    />

                ))}
            </div>
        </div>
    );

}

export default Skill