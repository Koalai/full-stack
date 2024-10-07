import PropTypes from "prop-types"
import { useContext } from "react"
import { ProjectsContext } from "../context/projectsContext"


export const Main = ({expanded}) => {
    
    const {projects} = useContext(ProjectsContext)

    return (
        <div className={` ${expanded ? 'w-4/5' : 'flex-1'}`}>
           <h1>Hello</h1>
        </div>
    )
}

Main.propTypes = {
    expanded: PropTypes.bool.isRequired
}