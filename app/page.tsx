"use client"

import { useState } from "react"
import GameMenu from "@/components/game-menu"
import GameScreen from "@/components/game-screen"
import { GameProvider } from "@/context/game-context"
import { EventProvider } from "@/context/event-context"

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)

  return (
    <GameProvider>
      <EventProvider>
        <main className="min-h-screen bg-slate-950 text-slate-100">
          {!gameStarted ? <GameMenu onStart={() => setGameStarted(true)} /> : <GameScreen />}
        </main>
      </EventProvider>
    </GameProvider>
  )
}
