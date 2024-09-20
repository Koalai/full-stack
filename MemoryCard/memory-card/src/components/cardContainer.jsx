import { useEffect, useState } from "react"
import Card from "./Card"

// shuffle the array card

const shuffle = (arr) => {
  let currentIndex = arr.length
  const newArr = [...arr]

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[newArr[currentIndex], newArr[randomIndex]] = [
      newArr[randomIndex],
      newArr[currentIndex],
    ]
  }
  console.log(newArr)
  return newArr
}

export const CardContainer = ({ score, setScore, best, setBest }) => {
  const [gifs, setGifs] = useState([])
  const [gifsClicked, setGifsClicked] = useState(new Set())
  // for css

  useEffect(() => {
    async function fetchGifs() {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=lhYBqr3WJEOTPkHZaHDHZlpFImoy1U5K&q=cat&limit=10`,
          { mode: "cors" }
        )

        if (!response.ok) {
          throw new Error("Network response not ok")
        }
        const gifsData = await response.json()
        console.log(gifsData)
        setGifs(gifsData.data)
      } catch {
        console.log("Error")
      }
    }
    fetchGifs()
  }, [])

  const handleClick = (item) => {
    if (gifsClicked.has(item.id)) {
      setGifsClicked(new Set())
      setScore(0)
      if (score > best) {
        setBest(score)
      }
    } else {
      setScore(prevScore => prevScore + 1)
      setGifs(prevGif => shuffle(prevGif))
    }
  }


  return (
    <>
      {gifs.length > 0 && (
        <div className={`cardContainer ${active}`}>
          {gifs.map((item) => {
            return <Card key={item.id} item={item} handleClick={handleClick} />
          })}
        </div>
      )}
    </>
  )
}
