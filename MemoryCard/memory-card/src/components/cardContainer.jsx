import { useEffect, useState } from "react"

// shuffle the array card

const shuffle = (arr) => {
  const currentIndex = arr.length

  while (currentIndex !== 0) {
    currentIndex--
    let randomIndex = (Math.floor(Math.random() * currentIndex)[
      (arr[currentIndex], arr[randomIndex])
    ] = [arr[randomIndex], arr[currentIndex]])
  }
  return arr
}

const CardContainer = () => {
  const [gifs, setGifs] = useState([])

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
          setGifs(gifsData.data)
      } catch {
          console.log("Error")
      }
    }
      fetchGifs();
  }, [])
    
    return (
        <></>
    )
}
