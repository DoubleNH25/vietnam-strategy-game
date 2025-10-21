"use client"

import { useGame } from "@/context/game-context"

export default function GameStats() {
  const { gameState } = useGame()
  const { stats } = gameState

  const statItems = [
    {
      label: "Lòng dân",
      value: stats.publicSupport,
      color: "bg-blue-500",
      icon: "█",
      description: "Sự ủng hộ của nhân dân",
    },
    {
      label: "Kinh tế",
      value: stats.resources,
      color: "bg-yellow-500",
      icon: "█",
      description: "Tài nguyên và hậu cần",
    },
    {
      label: "Quân lực",
      value: stats.militaryPower,
      color: "bg-red-500",
      icon: "█",
      description: "Sức mạnh quân sự",
    },
    {
      label: "Ngoại giao",
      value: stats.diplomaticStanding,
      color: "bg-purple-500",
      icon: "█",
      description: "Ảnh hưởng quốc tế",
    },
    {
      label: "Tinh thần",
      value: stats.morale,
      color: "bg-green-500",
      icon: "█",
      description: "Tinh thần chiến đấu",
    },
  ]

  const getStatusColor = (value: number) => {
    if (value >= 70) return "text-[#a8d261]"
    if (value >= 50) return "text-[#c4e87f]"
    if (value >= 30) return "text-[#d4a574]"
    return "text-[#d85a54]"
  }

  const getStatusText = (value: number) => {
    if (value >= 70) return "Tốt"
    if (value >= 50) return "Bình thường"
    if (value >= 30) return "Yếu"
    return "Nguy hiểm"
  }

  const getStatusBg = (value: number) => {
    if (value >= 70) return "bg-[#1a1410]/60 border-[#a8d261]/30"
    if (value >= 50) return "bg-[#1a1410]/60 border-[#c4e87f]/30"
    if (value >= 30) return "bg-[#1a1410]/60 border-[#d4a574]/30"
    return "bg-[#1a1410]/60 border-[#d85a54]/30"
  }

  return (
    <div className="p-5 space-y-4 border-b border-[#a8d261]/20 bg-gradient-to-b from-[#141210] to-[#0a0805]">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-[#a8d261] font-mono tracking-wider">CHỈ SỐ CHỈ HUY</h3>
        <p className="text-xs text-[#7a7570] font-mono">Theo dõi tình hình quốc gia</p>
      </div>

      {statItems.map((item) => (
        <div
          key={item.label}
          className={`space-y-2 bg-[#0a0805]/40 rounded-lg p-4 border transition-all duration-300 hover:shadow-lg ${getStatusBg(item.value)}`}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3 flex-1">
              <div className="text-[#a8d261] font-mono text-lg">{item.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-[#e8e3d8] font-mono">{item.label}</span>
                  <span className="text-xs text-[#7a7570] font-mono">{item.description}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className={`text-lg font-bold ${getStatusColor(item.value)} font-mono`}>{item.value}%</span>
              <span
                className={`text-xs px-2 py-1 rounded font-semibold ${getStatusColor(item.value)} bg-[#141210]/80 font-mono`}
              >
                {getStatusText(item.value)}
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="w-full bg-[#141210] rounded-full h-3 overflow-hidden border border-[#2a2218]">
              <div
                className={`h-full ${item.color} transition-all duration-500 shadow-lg relative`}
                style={{ width: `${item.value}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </div>
            <div className="flex justify-between text-xs text-[#7a7570] font-mono">
              <span>0%</span>
              <span>50%</span>
              <span>100%</span>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-[#1a1410]/60 border border-[#d85a54]/40 rounded-lg p-4 mt-4 space-y-2">
        <p className="text-xs font-bold text-[#d85a54] font-mono">⚠ CẢNH BÁO</p>
        <p className="text-xs text-[#d4a574] font-mono">Nếu bất kỳ chỉ số nào xuống dưới 20%, bạn sẽ thua cuộc!</p>
        <div className="flex gap-2 mt-3">
          {statItems.map((item) => (
            <div
              key={item.label}
              className={`flex-1 h-1 rounded-full transition-all ${
                item.value < 20 ? "bg-[#d85a54]" : item.value < 40 ? "bg-[#d4a574]" : "bg-[#2a2218]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
