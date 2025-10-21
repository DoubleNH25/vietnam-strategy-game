"use client"

import { useState, useEffect } from "react"

interface TimingChallengeProps {
  title: string
  description: string
  duration: number
  onComplete: (score: number) => void
}

export default function TimingChallenge({ title, description, duration, onComplete }: TimingChallengeProps) {
  const [timeLeft, setTimeLeft] = useState(duration)
  const [score, setScore] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [clicks, setClicks] = useState(0)

  useEffect(() => {
    if (!isActive || timeLeft <= 0) {
      setIsActive(false)
      onComplete(score)
      return
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft, isActive, score, onComplete])

  const handleClick = () => {
    if (isActive) {
      setClicks((c) => c + 1)
      setScore((s) => s + Math.max(1, timeLeft))
    }
  }

  const progress = ((duration - timeLeft) / duration) * 100

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-bold text-amber-400 mb-2">{title}</h3>
        <p className="text-slate-300 text-sm">{description}</p>
      </div>

      <div className="bg-slate-800 rounded-lg p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-slate-300">Thời gian còn lại:</span>
          <span className="text-2xl font-bold text-amber-400">{timeLeft}s</span>
        </div>

        <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
          <div className="h-full bg-amber-600 transition-all" style={{ width: `${progress}%` }} />
        </div>

        {isActive ? (
          <button
            onClick={handleClick}
            className="w-full py-8 bg-amber-600 hover:bg-amber-700 text-white font-bold text-2xl rounded-lg transition transform hover:scale-105 active:scale-95"
          >
            Nhấn!
          </button>
        ) : (
          <div className="bg-green-900 border border-green-600 rounded-lg p-4 text-center">
            <p className="text-green-200 font-bold">Hoàn tất!</p>
            <p className="text-green-300 text-sm mt-2">
              Điểm số: {score} (Nhấn {clicks} lần)
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
