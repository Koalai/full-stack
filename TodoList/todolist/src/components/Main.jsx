import PropTypes from "prop-types"
import { useContext } from "react"
import { ProjectsContext } from "../context/projectsContext"


export const Main = ({expanded}) => {

    const {projectSelected} = useContext(ProjectsContext)

    return (
        <div className={`flex px-16 ${expanded ? 'w-4/5' : 'flex-1'}`}>
          {projectSelected ? (
            <div className="bg-green-600 rounded-md h-1/6 w-full flex justify-center items-center text-white font-black text-4xl">
                <h1>{projectSelected.name}</h1>
            </div>
          ): (
            <div>All Task</div>
          )}
        </div>
    )
}

Main.propTypes = {
    expanded: PropTypes.bool.isRequired
}