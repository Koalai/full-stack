
import PropTypes from "prop-types"



function Square({value, handleClick}) {
    return (
        <div onClick={handleClick } className='w-24 h-24 flex justify-center items-center border text-3xl'>{value}</div>
  )
}

export default Square

Square.propTypes = {
    value: PropTypes.oneOf([null, "X", "O"]),
    handleClick: PropTypes.func.isRequired
}