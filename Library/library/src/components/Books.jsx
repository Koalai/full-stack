import PropTypes from "prop-types"
import { useContext } from "react"
import { BookContext } from "./BookProvider"

export const Books = ({ editBook }) => {
  const { books, delBook } = useContext(BookContext)

  return (
    <div className="flex flex-wrap gap-12 mt-12 ml-12">
      {books.map((book) => {
        return (
          <div
            key={book.id}
            className="shadow-xl rounded-lg px-12 py-12 bg-stone-300 flex flex-col gap-8 text-neutral-700 text-xl font-bold"
          >
            <h3>Title: {book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
            <p>Status: {book.isRead ? "Read" : "Not Read"}</p>
            <div className="flex gap-4">
              <button className="bg-green-600 px-4 py-2 rounded-lg text-white hover:bg-green-800" onClick={() => editBook(book)}>Edit</button>
              <button className="bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-800 " onClick={() => delBook(book.id)}>Delete</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Books.propTypes = {
  editBook: PropTypes.func.isRequired,
}
