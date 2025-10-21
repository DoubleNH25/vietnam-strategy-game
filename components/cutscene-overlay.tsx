"use client"

import { useEffect } from "react"
import { useGame } from "@/context/game-context"

export default function CutsceneOverlay() {
  const { gameState, hideCutscene } = useGame()
  const { showCutscene, cutsceneData } = gameState

  useEffect(() => {
    if (showCutscene && cutsceneData) {
      const timer = setTimeout(() => {
        hideCutscene()
      }, cutsceneData.duration)
      return () => clearTimeout(timer)
    }
  }, [showCutscene, cutsceneData, hideCutscene])

  if (!showCutscene || !cutsceneData) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer"
      onClick={hideCutscene}
    >
      <div className="w-full max-w-2xl scale-in">
        <div
          className="relative overflow-hidden rounded-lg border-2 shadow-2xl"
          style={{ borderColor: "#d4af37", backgroundColor: "#1a1f3a" }}
        >
          <div
            className="relative h-96 w-full overflow-hidden"
            style={{
              backgroundImage: "linear-gradient(to bottom, #0a0e27, #1a1f3a)",
            }}
          >
            <img
              src={cutsceneData.image || "/placeholder.svg"}
              alt="Cutscene"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="space-y-4 p-8">
            <h2 className="text-3xl font-bold glow-pulse" style={{ color: "#f4d03f" }}>
              {cutsceneData.title}
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#e2e8f0" }}>
              {cutsceneData.description}
            </p>
            <div className="flex items-center justify-between pt-4">
              <div
                className="h-1 flex-1"
                style={{
                  backgroundImage: "linear-gradient(to right, #d4af37, transparent)",
                }}
              />
              <span className="ml-4 text-sm" style={{ color: "#94a3b8" }}>
                Nhấn để tiếp tục...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
