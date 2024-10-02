import PropTypes from "prop-types";

export const Modal = ({ children, closeForm }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
          <button onClick={closeForm} className="text-gray-500 text-3xl hover:text-gray-800 float-right">
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };
  
Modal.propTypes = {
    children: PropTypes.node.isRequired,
    closeForm: PropTypes.func.isRequired
  }