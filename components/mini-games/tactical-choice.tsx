"use client"

import { useState, useEffect } from "react"

interface TacticalChoiceProps {
  onComplete: (success: boolean, effects: any) => void
}

export default function TacticalChoice({ onComplete }: TacticalChoiceProps) {
  const [timeLeft, setTimeLeft] = useState(12)
  const [selected, setSelected] = useState<number | null>(null)
  const [completed, setCompleted] = useState(false)

  const scenarios = [
    {
      title: "Chiến thuật Chiến dịch",
      description: "Địch có 3 lần số lượng. Chiến thuật nào?",
      options: [
        { text: "Tấn công trực diện", risk: "cao", reward: "cao" },
        { text: "Phục kích du kích", risk: "trung bình", reward: "trung bình" },
        { text: "Rút lui chiến lược", risk: "thấp", reward: "thấp" },
      ],
      correct: 1,
      effects: { militaryPower: 15, morale: 10 },
    },
    {
      title: "Chiến lược Ngoại giao",
      description: "Cơ hội liên minh với thế lực khác. Chọn?",
      options: [
        { text: "Liên minh ngay", risk: "cao", reward: "cao" },
        { text: "Đàm phán thêm", risk: "trung bình", reward: "trung bình" },
        { text: "Từ chối", risk: "thấp", reward: "thấp" },
      ],
      correct: 1,
      effects: { diplomaticStanding: 15, publicSupport: 5 },
    },
  ]

  const currentScenario = scenarios[Math.floor(Math.random() * scenarios.length)]

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
    const success = index === currentScenario.correct
    setTimeout(() => {
      onComplete(success, currentScenario.effects)
    }, 800)
  }

  useEffect(() => {
    if (timeLeft <= 0 && selected === null) {
      setCompleted(true)
      setTimeout(() => {
        onComplete(false, { morale: -10, militaryPower: -5 })
      }, 800)
    }
  }, [timeLeft, selected])

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-military-panel border-4 border-military-accent rounded-lg p-8 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-military-accent font-mono">🎯 {currentScenario.title}</h2>
          <div
            className={`text-4xl font-bold font-mono ${timeLeft <= 3 ? "text-red-500 animate-pulse" : "text-military-accent"}`}
          >
            {timeLeft}s
          </div>
        </div>

        <div className="bg-military-bg border-2 border-military-accent/50 rounded p-4 mb-6">
          <p className="text-military-text text-lg font-mono text-center">{currentScenario.description}</p>
        </div>

        <div className="space-y-3 mb-6">
          {currentScenario.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleChoice(idx)}
              disabled={completed}
              className={`w-full p-4 rounded-lg border-2 font-mono transition ${
                selected === idx
                  ? idx === currentScenario.correct
                    ? "bg-green-600 border-green-400 text-white"
                    : "bg-red-600 border-red-400 text-white"
                  : completed
                    ? "bg-military-border border-military-border text-military-text-muted opacity-50"
                    : "bg-military-border border-military-accent hover:bg-military-accent hover:text-military-bg text-military-text"
              }`}
            >
              <div className="font-bold text-lg">{option.text}</div>
              <div className="text-sm mt-1 opacity-75">
                Rủi ro: {option.risk} | Phần thưởng: {option.reward}
              </div>
            </button>
          ))}
        </div>

        {completed && (
          <div
            className={`text-center font-mono font-bold text-lg ${selected === currentScenario.correct ? "text-green-400" : "text-red-400"}`}
          >
            {selected === currentScenario.correct ? "✓ CHIẾN LƯỢC ĐÚNG!" : "✗ CHIẾN LƯỢC SAI!"}
          </div>
        )}
      </div>
    </div>
  )
}
