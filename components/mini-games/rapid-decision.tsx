"use client"

import { useState, useEffect } from "react"

interface RapidDecisionProps {
  onComplete: (success: boolean, effects: any) => void
}

export default function RapidDecision({ onComplete }: RapidDecisionProps) {
  const [timeLeft, setTimeLeft] = useState(10)
  const [selected, setSelected] = useState<number | null>(null)
  const [completed, setCompleted] = useState(false)

  const decisions = [
    {
      scenario: "Quân địch phát hiện vị trí. Hành động?",
      options: ["Rút lui ngay", "Phản công", "Đàm phán"],
      correct: 0,
      effects: { militaryPower: 10, morale: 5 },
    },
    {
      scenario: "Lương thực sắp hết. Quyết định?",
      options: ["Tìm nguồn mới", "Giảm khẩu phần", "Chiếm giữ kho địch"],
      correct: 0,
      effects: { resources: 15, publicSupport: -5 },
    },
    {
      scenario: "Gián điệp báo cáo thông tin quan trọng. Tin tưởng?",
      options: ["Tin tưởng hoàn toàn", "Xác minh thêm", "Bỏ qua"],
      correct: 1,
      effects: { diplomaticStanding: 10, morale: 5 },
    },
  ]

  const currentDecision = decisions[Math.floor(Math.random() * decisions.length)]

  useEffect(() => {
    if (timeLeft <= 0 || selected !== null) return

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft, selected])

  const handleChoice = (index: number) => {
    setSelected(index)
    setCompleted(true)
    const success = index === currentDecision.correct
    setTimeout(() => {
      onComplete(success, currentDecision.effects)
    }, 800)
  }

  useEffect(() => {
    if (timeLeft <= 0 && selected === null) {
      setCompleted(true)
      setTimeout(() => {
        onComplete(false, { morale: -10 })
      }, 800)
    }
  }, [timeLeft, selected])

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-military-panel border-4 border-military-accent rounded-lg p-8 max-w-2xl w-full mx-4">
        {/* Timer */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-military-accent font-mono">⚡ QUYẾT ĐỊNH NHANH</h2>
          <div
            className={`text-4xl font-bold font-mono ${timeLeft <= 3 ? "text-red-500 animate-pulse" : "text-military-accent"}`}
          >
            {timeLeft}s
          </div>
        </div>

        {/* Scenario */}
        <div className="bg-military-bg border-2 border-military-accent/50 rounded p-4 mb-6">
          <p className="text-military-text text-lg font-mono text-center">{currentDecision.scenario}</p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentDecision.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleChoice(idx)}
              disabled={completed}
              className={`w-full p-4 rounded-lg border-2 font-mono font-bold text-lg transition ${
                selected === idx
                  ? idx === currentDecision.correct
                    ? "bg-green-600 border-green-400 text-white"
                    : "bg-red-600 border-red-400 text-white"
                  : completed
                    ? "bg-military-border border-military-border text-military-text-muted opacity-50"
                    : "bg-military-border border-military-accent hover:bg-military-accent hover:text-military-bg text-military-text"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Result */}
        {completed && (
          <div
            className={`text-center font-mono font-bold text-lg ${selected === currentDecision.correct ? "text-green-400" : "text-red-400"}`}
          >
            {selected === currentDecision.correct ? "✓ ĐÚNG!" : "✗ SAI!"}
          </div>
        )}
      </div>
    </div>
  )
}
