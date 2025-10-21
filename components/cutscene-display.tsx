"use client"

import { useEffect, useState } from "react"
import { useGame } from "@/context/game-context"

export default function CutsceneDisplay() {
  const { gameState, hideCutscene } = useGame()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (gameState.showCutscene) {
      setIsVisible(true)
    }
  }, [gameState.showCutscene])

  if (!gameState.showCutscene || !gameState.cutsceneData) {
    return null
  }

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(() => hideCutscene(), 300)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        className={`max-w-2xl w-full mx-4 bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-600 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Cutscene Image */}
        <div className="relative w-full h-64 bg-slate-800 overflow-hidden">
          <img
            src={gameState.cutsceneData.image || "/placeholder.svg?height=256&width=512&query=historical-vietnam-scene"}
            alt="Cutscene"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        {/* Cutscene Content */}
        <div className="p-8 space-y-4">
          <h2 className="text-3xl font-bold text-amber-400 font-serif">{gameState.cutsceneData.title}</h2>
          <p className="text-slate-300 text-lg leading-relaxed">{gameState.cutsceneData.description}</p>

          {gameState.cutsceneData.audio && (
            <div className="pt-4 border-t border-slate-700">
              <audio controls className="w-full" autoPlay src={gameState.cutsceneData.audio}>
                Trình duyệt của bạn không hỗ trợ phát âm thanh.
              </audio>
            </div>
          )}

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="w-full mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  )
}
