"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"
import { getRandomEvent } from "@/lib/events"
import type { GameEvent } from "@/lib/events"

export interface GameStats {
  publicSupport: number // Lòng dân (0-100)
  resources: number // Kinh tế - Hậu cần (0-100)
  militaryPower: number // Sức mạnh quân sự (0-100)
  diplomaticStanding: number // Ảnh hưởng quốc tế (0-100)
  morale: number // Tinh thần chiến đấu (0-100)
}

export interface HistoryEntry {
  chapter: number
  mission: number
  title: string
  decision: string
  effects: Partial<GameStats>
  timestamp: number
}

export interface GameState {
  chapter: number
  mission: number
  stats: GameStats
  gameOver: boolean
  victory: boolean
  currentHistoricalDoc: string | null
  showCutscene: boolean
  cutsceneData: CutsceneData | null
  history: HistoryEntry[]
  currentEvent: GameEvent | null
}

export interface CutsceneData {
  title: string
  description: string
  image: string
  audio?: string
  duration: number
}

interface GameContextType {
  gameState: GameState
  updateStats: (updates: Partial<GameStats>) => void
  advanceMission: () => void
  setHistoricalDoc: (doc: string) => void
  resetGame: () => void
  endGame: (victory: boolean) => void
  showCutsceneSequence: (data: CutsceneData) => void
  hideCutscene: () => void
  recordDecision: (entry: Omit<HistoryEntry, "timestamp">) => void
  triggerRandomEvent: () => void
  clearEvent: () => void
}

const GameContext = createContext<GameContextType | undefined>(undefined)

const initialStats: GameStats = {
  publicSupport: 70,
  resources: 50,
  militaryPower: 40,
  diplomaticStanding: 30,
  morale: 60,
}

const initialGameState: GameState = {
  chapter: 1,
  mission: 1,
  stats: initialStats,
  gameOver: false,
  victory: false,
  currentHistoricalDoc: null,
  showCutscene: false,
  cutsceneData: null,
  history: [],
  currentEvent: null,
}

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [gameState, setGameState] = useState<GameState>(initialGameState)

  const updateStats = useCallback((updates: Partial<GameStats>) => {
    setGameState((prev) => {
      const newStats = {
        publicSupport: Math.max(0, Math.min(100, prev.stats.publicSupport + (updates.publicSupport || 0))),
        resources: Math.max(0, Math.min(100, prev.stats.resources + (updates.resources || 0))),
        militaryPower: Math.max(0, Math.min(100, prev.stats.militaryPower + (updates.militaryPower || 0))),
        diplomaticStanding: Math.max(0, Math.min(100, prev.stats.diplomaticStanding + (updates.diplomaticStanding || 0))),
        morale: Math.max(0, Math.min(100, prev.stats.morale + (updates.morale || 0))),
      }
      
      // Kiểm tra điều kiện thua cuộc
      const hasLowStats = Object.values(newStats).some(value => value < 20)
      
      return {
        ...prev,
        stats: newStats,
        gameOver: hasLowStats ? true : prev.gameOver,
        victory: hasLowStats ? false : prev.victory,
      }
    })
  }, [])

  const advanceMission = useCallback(() => {
    setGameState((prev) => {
      const nextMission = prev.mission + 1
      if (nextMission > 4) {
        if (prev.chapter < 3) {
          return {
            ...prev,
            chapter: prev.chapter + 1,
            mission: 1,
          }
        } else {
          // Chương 3 hoàn thành - kiểm tra điều kiện thắng
          const hasGoodStats = prev.stats.publicSupport > 50 && 
                              prev.stats.militaryPower > 40 && 
                              prev.stats.morale > 50
          return {
            ...prev,
            gameOver: true,
            victory: hasGoodStats,
          }
        }
      }
      return {
        ...prev,
        mission: nextMission,
      }
    })
  }, [])

  const setHistoricalDoc = useCallback((doc: string) => {
    setGameState((prev) => ({
      ...prev,
      currentHistoricalDoc: doc,
    }))
  }, [])

  const resetGame = useCallback(() => {
    setGameState(initialGameState)
  }, [])

  const endGame = useCallback((victory: boolean) => {
    setGameState((prev) => ({
      ...prev,
      gameOver: true,
      victory,
    }))
  }, [])

  const showCutsceneSequence = useCallback((data: CutsceneData) => {
    setGameState((prev) => ({
      ...prev,
      showCutscene: true,
      cutsceneData: data,
    }))
  }, [])

  const hideCutscene = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      showCutscene: false,
      cutsceneData: null,
    }))
  }, [])

  const recordDecision = useCallback((entry: Omit<HistoryEntry, "timestamp">) => {
    setGameState((prev) => ({
      ...prev,
      history: [
        ...prev.history,
        {
          ...entry,
          timestamp: Date.now(),
        },
      ],
    }))
  }, [])

  const triggerRandomEvent = useCallback(() => {
    setGameState((prev) => {
      const event = getRandomEvent(prev.stats, prev.chapter, prev.mission)
      if (event) {
        return {
          ...prev,
          currentEvent: event,
        }
      }
      return prev
    })
  }, [])


  const clearEvent = useCallback(() => {
    setGameState((prev) => ({
      ...prev,
      currentEvent: null,
    }))
  }, [])

  return (
    <GameContext.Provider
      value={{
        gameState,
        updateStats,
        advanceMission,
        setHistoricalDoc,
        resetGame,
        endGame,
        showCutsceneSequence,
        hideCutscene,
        recordDecision,
        triggerRandomEvent,
        clearEvent,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error("useGame must be used within GameProvider")
  }
  return context
}
