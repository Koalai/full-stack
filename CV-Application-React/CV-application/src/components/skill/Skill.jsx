import { useState } from "react"
import ItemTemplate from "../FormTemplate/ItemTemplate"
import FormTemplate from "../FormTemplate/FormTemplate"
import '.././styles/Button.css'

function Skills({ skills, setSkills }) {
  const [showForm, setShowForm] = useState(false)
  const [editingIndex, setEditingIndex] = useState(null)
  const [skill, setSkill] = useState({
    skillName: "",
  })

  const fields = [
    {
      name: "skillName",
      type: "text",
      label: "Skill",
      placeholder: "Enter Skill",
      required: true,
    },
  ]

  const handleSubmit = (data) => {
    if (editingIndex !== null) {
      const newSkills = [...skills]
      newSkills[editingIndex] = data
      setSkills(newSkills)
      setEditingIndex(null)
    } else {
      setSkills([...skills, data])
    }
    resetForm()
  }

  const resetForm = () => {
    setSkill({
      skillName: "",
    })
    setShowForm(false)
    setEditingIndex(null)
  }

  const handleDelete = (index) => {
    const newSkills = skills.filter((_, i) => i !== index)
    setSkills(newSkills)
  }

  const handleCancel = () => {
    resetForm()
  }

  const handleEdit = (index) => {
    setSkill(skills[index])
    setEditingIndex(index)
    setShowForm(true)
  }

  return (
    <div className="skill-section">
      <div className="skill-list">
        {skills.map((skl, index) => (
          <ItemTemplate
            key={index}
            title={skl.skillName}
            onEdit={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>

      {showForm ? (
        <div>
          <FormTemplate
            fields={fields}
            data={skill}
            setData={setSkill}
            onSubmit={handleSubmit}
          />
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <button className="new-entry-button" onClick={() => setShowForm(true)}>
          New Entry
        </button>
      )}
    </div>
  )
}

export default Skills
