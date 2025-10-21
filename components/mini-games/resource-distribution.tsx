"use client"

import { useState, useEffect } from "react"
import { useGame } from "@/context/game-context"

interface Region {
  id: string
  name: string
  x: number
  y: number
  allocation: number
  maxCapacity: number
}

export default function ResourceDistributionGame() {
  const { updateStats } = useGame()
  const [regions, setRegions] = useState<Region[]>([
    { id: "north", name: "Bắc Bộ", x: 20, y: 20, allocation: 0, maxCapacity: 40 },
    { id: "central", name: "Trung Bộ", x: 50, y: 50, allocation: 0, maxCapacity: 30 },
    { id: "south", name: "Nam Bộ", x: 80, y: 80, allocation: 0, maxCapacity: 30 },
  ])

  const [totalResources] = useState(100)
  const [timeLeft, setTimeLeft] = useState(30)
  const [gameComplete, setGameComplete] = useState(false)

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameComplete(true)
      const totalAllocated = regions.reduce((sum, r) => sum + r.allocation, 0)
      const efficiency = (totalAllocated / totalResources) * 100
      updateStats({ resources: Math.min(100, efficiency) })
    }
  }, [timeLeft])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => Math.max(0, t - 1))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleAllocationChange = (regionId: string, amount: number) => {
    setRegions((prev) =>
      prev.map((r) => (r.id === regionId ? { ...r, allocation: Math.min(r.maxCapacity, Math.max(0, amount)) } : r)),
    )
  }

  const totalAllocated = regions.reduce((sum, r) => sum + r.allocation, 0)
  const remaining = totalResources - totalAllocated

  if (gameComplete) {
    return (
      <div className="bg-gradient-to-br from-[#141210] to-[#0a0805] border-2 border-[#a8d261]/40 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-[#a8d261] mb-4">Phân phối hoàn tất!</h3>
        <p className="text-[#e8e3d8]">Bạn đã phân phối {totalAllocated} đơn vị lương thực cho các vùng.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-[#a8d261] font-mono">Phân phối lương thực</h3>
        <div className={`font-bold font-mono ${timeLeft <= 10 ? "text-[#d85a54]" : "text-[#c4e87f]"}`}>
          Thời gian: {timeLeft}s
        </div>
      </div>

      <div className="bg-[#141210]/60 rounded-lg p-4 space-y-4 border border-[#a8d261]/20">
        {regions.map((region) => (
          <div key={region.id} className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[#e8e3d8] font-mono">{region.name}</span>
              <span className="text-[#a8d261] font-mono font-bold">
                {region.allocation}/{region.maxCapacity}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max={region.maxCapacity}
              value={region.allocation}
              onChange={(e) => handleAllocationChange(region.id, Number.parseInt(e.target.value))}
              className="w-full h-2 bg-[#2a2218] rounded-lg appearance-none cursor-pointer accent-[#a8d261]"
            />
          </div>
        ))}
      </div>

      <div className="bg-[#2a2218]/60 rounded-lg p-4 border border-[#a8d261]/20 space-y-2">
        <p className="text-[#e8e3d8] font-mono text-sm">
          Tổng phân phối: <span className="text-[#a8d261] font-bold">{totalAllocated}</span> / {totalResources}
        </p>
        <p className="text-[#7a7570] font-mono text-sm">Còn lại: {remaining}</p>
        <div className="w-full bg-[#141210] rounded-full h-2 overflow-hidden border border-[#2a2218] mt-2">
          <div
            className="h-full bg-gradient-to-r from-[#a8d261] to-[#c4e87f] transition-all duration-300"
            style={{ width: `${(totalAllocated / totalResources) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
