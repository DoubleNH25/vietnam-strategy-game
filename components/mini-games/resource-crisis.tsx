"use client"

import { useState, useEffect } from "react"

interface ResourceCrisisProps {
  onComplete: (success: boolean, effects: any) => void
}

export default function ResourceCrisis({ onComplete }: ResourceCrisisProps) {
  const [timeLeft, setTimeLeft] = useState(15)
  const [resources, setResources] = useState({ food: 50, ammo: 50, medicine: 50 })
  const [completed, setCompleted] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (timeLeft <= 0 || completed) return

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft, completed])

  const handleAllocate = (type: string, amount: number) => {
    setResources((prev) => ({
      ...prev,
      [type]: Math.max(0, Math.min(100, prev[type] + amount)),
    }))
  }

  const handleSubmit = () => {
    const isSuccess = resources.food >= 40 && resources.ammo >= 50 && resources.medicine >= 30
    setSuccess(isSuccess)
    setCompleted(true)
    setTimeout(() => {
      onComplete(isSuccess, isSuccess ? { resources: 20, morale: 10 } : { resources: -15, morale: -10 })
    }, 1000)
  }

  useEffect(() => {
    if (timeLeft <= 0 && !completed) {
      setCompleted(true)
      setSuccess(false)
      setTimeout(() => {
        onComplete(false, { resources: -20, morale: -15 })
      }, 1000)
    }
  }, [timeLeft, completed])

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-military-panel border-4 border-military-accent rounded-lg p-8 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-military-accent font-mono">📦 PHÂN BỐ TÀI NGUYÊN</h2>
          <div
            className={`text-3xl font-bold font-mono ${timeLeft <= 5 ? "text-red-500 animate-pulse" : "text-military-accent"}`}
          >
            {timeLeft}s
          </div>
        </div>

        <p className="text-military-text mb-6 font-mono text-center">Phân bố tài nguyên để đáp ứng nhu cầu chiến đấu</p>

        <div className="space-y-4 mb-6">
          {Object.entries(resources).map(([type, value]) => (
            <div key={type} className="bg-military-bg border-2 border-military-accent/50 rounded p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono font-bold text-military-accent capitalize">
                  {type === "food" ? "Lương thực" : type === "ammo" ? "Đạn dược" : "Thuốc"}
                </span>
                <span className="text-military-text font-mono">{value}%</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAllocate(type, -10)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-mono font-bold py-2 rounded"
                >
                  -
                </button>
                <div className="flex-1 bg-military-border border border-military-accent rounded flex items-center justify-center">
                  <div className="w-full h-6 bg-military-accent/30 rounded relative overflow-hidden">
                    <div className="h-full bg-military-accent transition-all" style={{ width: `${value}%` }} />
                  </div>
                </div>
                <button
                  onClick={() => handleAllocate(type, 10)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-mono font-bold py-2 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={completed}
          className="w-full bg-military-accent hover:bg-military-accent/80 text-military-bg font-mono font-bold py-3 rounded-lg disabled:opacity-50"
        >
          XÁC NHẬN PHÂN BỐ
        </button>

        {completed && (
          <div
            className={`text-center font-mono font-bold text-lg mt-4 ${success ? "text-green-400" : "text-red-400"}`}
          >
            {success ? "✓ PHÂN BỐ HỢP LÝ!" : "✗ PHÂN BỐ KHÔNG ĐỦ!"}
          </div>
        )}
      </div>
    </div>
  )
}
