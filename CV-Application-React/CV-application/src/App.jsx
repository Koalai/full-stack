import { useState } from "react"
import PersonalInfo from "./components/personal-info/personalInfo"
import Education from "./components/education/Education"
import Experience from "./components/experience/Experience"
import Skills from "./components/skill/Skill"

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

        <div className="education">
          <Education educations={educations} setEducations={setEducations} />
        </div>

        <div className="work">
          <Experience
            experiences={experiences}
            setExperiences={setExperiences}
          />
        </div>

        <div className="skill">
          <Skills skills={skills} setSkills={setSkills} />
        </div>
          </div>
          <div className="cv-preview">
              
          </div>
    </div>
  )
}

export default App
