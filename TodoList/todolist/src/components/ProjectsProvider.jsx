import PropTypes from "prop-types"
import { ProjectsContext } from "../context/projectsContext"
import { useState } from "react"

export const ProjectsProvider = ({children}) => {
    const [projects, setProjects] = useState([
        { id: self.crypto.randomUUID(), name: ""}
   ])
   
    return (
        <ProjectsContext.Provider value={{ projects, setProjects }}>
            {children}
        </ProjectsContext.Provider>
    )

}

ProjectsProvider.propTypes = {
    children: PropTypes.node.isRequired
}