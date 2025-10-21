"use client"

import { useGame } from "@/context/game-context"
import MissionScreen from "./missions/mission-screen"
import GameStats from "./game-stats"
import HistoryPanel from "./history-panel"
import AudioManager from "./audio-manager"
import GameOverScreen from "./game-over-screen"
import CutsceneOverlay from "./cutscene-overlay"

export default function GameScreen() {
  const { gameState } = useGame()
  const { chapter, mission, gameOver } = gameState

  if (gameOver) {
    return <GameOverScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <AudioManager />
      <CutsceneOverlay />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Game Area */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700/50 shadow-2xl">
              <div className="p-6">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-white mb-2">
                    Chương {chapter} - Nhiệm vụ {mission}
                  </h1>
                  <div className="w-full bg-slate-700/30 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(mission / 4) * 100}%` }}
                    />
                  </div>
                </div>
                
                <MissionScreen />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <GameStats />
            <HistoryPanel />
          </div>
        </div>
      </div>
    </div>
  )
}
