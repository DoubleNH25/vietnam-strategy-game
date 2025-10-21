"use client"

import { useGame } from "@/context/game-context"
import Chapter1Mission from "./chapter1-mission"
import Chapter2Mission from "./chapter2-mission"
import Chapter3Mission from "./chapter3-mission"

export default function MissionScreen() {
  const { gameState } = useGame()
  const { chapter } = gameState

  return (
    <div className="p-6 h-full flex flex-col">
      <div className="space-y-6 flex-1 overflow-auto">
        {chapter === 1 && <Chapter1Mission />}
        {chapter === 2 && <Chapter2Mission />}
        {chapter === 3 && <Chapter3Mission />}
      </div>
    </div>
  )
}
