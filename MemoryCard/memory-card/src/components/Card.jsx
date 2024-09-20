export default function Card({ item, handleClick }) {
  return (
    <img
      key={item.id}
      alt="gif"
      className="card"
      src={item.images.original.url}
      onClick={() => handleClick(item)}
    />
  )
}
