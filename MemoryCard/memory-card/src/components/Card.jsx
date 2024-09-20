export default function Card(item) {
  return (
    <img
      key={item.id}
      alt="gif"
      className="card"
      src="item.images.original.url"
      onClick={() => handleClick(item)}
    />
  )
}
