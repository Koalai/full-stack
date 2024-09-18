import { useState } from 'react'
import PersonalInfo from './components/personal-info/personalInfo'
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Skill from './components/skill/Skill';

function App() {
  const [personalInfo, setPersonalInfo] = useState({name:'', email:'', phone:'', birthDate:'', city:''  });
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);


  return (
    <div className="App">
      <div className="input-section">
        <div className='section'>
          <h3>Personal Information</h3>
          <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        </div>

        <div>
          <Education educations={educations} setEducations={setEducations} />
        </div>
        
        <div>
          <Experience experiences={experiences} setExperiences={setExperiences}></Experience>
        </div>

        <div>
          <Skill skills={skills} setSkills={setSkills}></Skill>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  )
}

export default App
