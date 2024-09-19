import { useState } from "react"
import PersonalInfo from "./components/personal-info/personalInfo"
import Education from "./components/education/Education"
import Experience from "./components/experience/Experience"
import Skills from "./components/skill/Skill"
import ResumePreview from "./components/ResumePreview/ResumePreview"
import './components/styles/App.css'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    birthDate: "",
    city: "",
  })
  const [educations, setEducations] = useState([])
  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

  return (
    <div className="App">
      <div className="input-section">
        <div className="section">
          <h3>Personal Information</h3>
          <PersonalInfo
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
        </div>

        <div title="Education">
          <Education educations={educations} setEducations={setEducations} />
        </div>

        <div title="Work Experience">
          <Experience
            experiences={experiences}
            setExperiences={setExperiences}
          />
        </div>

        <div title="Skills">
          <Skills skills={skills} setSkills={setSkills} />
        </div>

      </div>
      <div className="cv-preview">
        <ResumePreview
          personalInfo={personalInfo}
          educations={educations}
          experiences={experiences}
          skills={skills}
        />
      </div>
    </div>
  )
}

export default App
