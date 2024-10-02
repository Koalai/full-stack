import { useContext, useEffect, useState } from "react"
import { BookContext } from "./BookProvider"
import PropTypes from "prop-types"
import { Modal } from "./Modal"

export const BookForm = ({ bookToEdit, closeForm }) => {
  const { editBook, addBook } = useContext(BookContext)
  const [book, setBook] = useState({
    id: "",
    title: "",
    author: "",
    pages: "",
    isRead: false,
  })

  useEffect(() => {
    if (bookToEdit) {
        setBook({ ...bookToEdit })
    } else {
      setBook((prevBook) =>
        ({ ...prevBook, id: self.crypto.randomUUID() })
      )
    }
  }, [bookToEdit])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (bookToEdit) {
      editBook(book)
    } else {
      addBook(book)
    }
    closeForm()
  }

  return (
    <Modal closeForm={closeForm}>
      <form className="flex flex-col gap-8 py-8 px-16" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            placeholder="Title"
            value={book.title}
            className="input-form"
            onChange={(e) => setBook({ ...book, title: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            placeholder="Author"
            value={book.author}
            className="input-form"
            onChange={(e) => setBook({ ...book, author: e.target.value })}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="page">Page:</label>
          <input
            type="number"
            placeholder="Page"
            value={book.pages}
            className="input-form"
            onChange={(e) => setBook({ ...book, pages: e.target.value })}
            required
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="read">Read: </label>
          <input
            type="checkbox"
            checked
            onChange={(e) => setBook({ ...book, isRead: e.target.checked })}
          />
        </div>
        <div className="flex justify-between px-2 mt-12 ">
          <button className="form-btn">{bookToEdit ? "Save Changes" : "Add Book"}</button>
          <button className="cancel-btn" onClick={closeForm} type="button">Cancel</button>
        </div>
      </form>
    </Modal>
  )
}


BookForm.propTypes = {
    bookToEdit: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      pages: PropTypes.number.isRequired,
      isRead: PropTypes.bool.isRequired,
    }),
    closeForm: PropTypes.func.isRequired,
  };