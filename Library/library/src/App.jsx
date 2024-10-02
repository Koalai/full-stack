import { Books } from "./components/Books"
import {  BookProvider } from "./components/BookProvider"
import { BookForm } from "./components/BookForm"
import {  useState } from "react"

function App() {
  const [bookToEdit, setBookToEdit] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)

  const openForm = () => {
    setIsFormOpen(true)
    console.log("hoi")
  }

  const closeForm = () => {
    setIsFormOpen(false)
    setBookToEdit(null)
  }

  const handleEdit = (book) => {
    openForm();
    setBookToEdit(book)
  }

  return (
    <BookProvider>
      <div>
        <div className="bg-blue-500 text-center h-20 flex items-center text-white font-bold text-3xl ">
          <p className="mx-auto">My Library</p>
      </div>
      <div>
        <button className="fixed bottom-5 right-5 bg-blue-500 text-white text-3xl w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-blue-600" onClick={() => openForm()}>+</button>
        {isFormOpen && (
          <BookForm bookToEdit={bookToEdit} closeForm={closeForm} />
        )}
        <Books editBook={handleEdit} />
      </div>
      </div>
    </BookProvider>
  )
}

export default App
