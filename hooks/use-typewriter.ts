"use client"

import { useState, useEffect } from "react"

export function useTypewriter(text: string, speed = 50, enabled = true) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (!enabled) {
      setDisplayedText(text)
      setIsComplete(true)
      return
    }

    setDisplayedText("")
    setIsComplete(false)
    let index = 0
    const words = text.split(" ")
    let currentText = ""

    const interval = setInterval(() => {
      if (index < words.length) {
        currentText += (index === 0 ? "" : " ") + words[index]
        setDisplayedText(currentText)
        index++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, enabled])

  return { displayedText, isComplete }
}
