"use client"

import { useState, useEffect } from "react"
import { useGame } from "@/context/game-context"
import { useEvent } from "@/context/event-context"
import { useTypewriter } from "@/hooks/use-typewriter"
import type { EventChoice } from "@/lib/events"

export default function EventDisplay() {
  const { currentEvent, hideEvent } = useEvent()
  const { updateStats, recordDecision, gameState, clearEvent } = useGame()
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null)
  const [showChoices, setShowChoices] = useState(false)

  const { displayedText, isComplete } = useTypewriter(currentEvent?.description || "", 50, !!currentEvent)

  useEffect(() => {
    if (isComplete && currentEvent && !currentEvent.isSpecial) {
      setShowChoices(true)
    }
  }, [isComplete, currentEvent])

  useEffect(() => {
    if (currentEvent?.isSpecial && isComplete) {
      const timer = setTimeout(() => {
        hideEvent()
        clearEvent()
        setShowChoices(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isComplete, currentEvent, hideEvent, clearEvent])

  if (!currentEvent) return null

  const handleChoice = (choiceIndex: number) => {
    const choice = currentEvent.choices[choiceIndex]
    setSelectedChoice(choiceIndex)

    recordDecision({
      chapter: gameState.chapter,
      mission: gameState.mission,
      title: `[Sự kiện] ${currentEvent.title}`,
      decision: choice.text,
      effects: choice.effects,
    })

    updateStats(choice.effects)

    setTimeout(() => {
      hideEvent()
      clearEvent()
      setSelectedChoice(null)
      setShowChoices(false)
    }, 1500)
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gradient-to-b from-[#141210] to-[#0a0805] border-2 border-[#a8d261]/50 rounded-lg max-w-2xl w-full shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#2a2218] to-[#1a1410] px-6 py-4 border-b border-[#a8d261]/30">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{currentEvent.icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-[#a8d261] font-mono">
                {currentEvent.isSpecial ? "⚠️ SỰ KIỆN ĐẶC BIỆT" : "SỰ KIỆN NGẪU NHIÊN"}
              </h2>
              <p className="text-[#c4e87f] text-sm font-mono">{currentEvent.title}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-[#e8e3d8] text-lg leading-relaxed font-mono min-h-24">
            {displayedText}
            {!isComplete && <span className="animate-pulse">▌</span>}
          </p>

          {!currentEvent.isSpecial && showChoices && (
            <>
              {/* Choices */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-[#a8d261] font-mono">Lựa chọn của bạn:</h3>
                {currentEvent.choices.map((choice: EventChoice, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => handleChoice(idx)}
                    disabled={selectedChoice !== null}
                    className={`w-full p-4 rounded-lg border-2 transition text-left transform ${
                      selectedChoice === idx
                        ? "bg-[#a8d261] border-[#a8d261] text-[#0a0805] scale-102 shadow-lg"
                        : selectedChoice !== null
                          ? "bg-[#2a2218] border-[#2a2218] text-[#7a7570] opacity-50"
                          : "bg-[#2a2218] border-[#a8d261]/20 hover:border-[#a8d261]/60 text-[#e8e3d8] hover:text-[#a8d261] hover:bg-[#141210] hover:scale-102 hover:shadow-lg"
                    }`}
                  >
                    <div className="font-semibold text-base font-mono">{choice.text}</div>
                    <div className="text-sm mt-2 opacity-75 font-mono">{choice.reasoning}</div>
                    <div className="text-xs mt-2 opacity-60 space-y-0.5 font-mono">
                      {Object.entries(choice.effects).map(([key, value]) => {
                        const statNames: Record<string, string> = {
                          publicSupport: "Lòng dân",
                          resources: "Kinh tế", 
                          militaryPower: "Quân lực",
                          diplomaticStanding: "Ngoại giao",
                          morale: "Tinh thần"
                        }
                        return (
                          <span key={key} className="block">
                            {statNames[key] || key}: {value > 0 ? "+" : ""}
                            {value}
                          </span>
                        )
                      })}
                    </div>
                  </button>
                ))}
              </div>

              {selectedChoice !== null && (
                <div className="bg-[#a8d261]/15 border-2 border-[#a8d261]/50 rounded-lg p-4 text-[#a8d261] animate-pulse font-mono">
                  <p className="font-bold">✓ Quyết sách được thực hiện</p>
                  <p className="text-sm mt-1">Tiếp tục trò chơi...</p>
                </div>
              )}
            </>
          )}

          {currentEvent.isSpecial && isComplete && (
            <div className="bg-[#a8d261]/15 border-2 border-[#a8d261]/50 rounded-lg p-4 text-[#a8d261] animate-pulse font-mono">
              <p className="font-bold">⚠️ SỰ KIỆN ĐẶC BIỆT ĐÃ XẢY RA</p>
              <p className="text-sm mt-1">Quay lại trò chơi...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
