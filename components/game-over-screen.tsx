"use client"

import { useGame } from "@/context/game-context"
import { Button } from "@/components/ui/button"

export default function GameOverScreen() {
  const { gameState, resetGame } = useGame()
  const { victory, stats } = gameState

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0805] via-[#141210] to-[#0a0805] px-4 military-grid">
      <div className="max-w-2xl text-center space-y-8">
        {victory ? (
          <>
            <div className="space-y-4 animate-bounce">
              <h1
                className="text-7xl font-bold text-[#a8d261] font-mono drop-shadow-lg"
                style={{ textShadow: "0 0 30px rgba(168, 210, 97, 0.5)" }}
              >
                Chiến Thắng!
              </h1>
              <h2 className="text-4xl text-[#c4e87f] font-mono">Hiệp định Genève 1954</h2>
              <p className="text-[#e8e3d8] text-lg font-mono">
                Bạn đã thành công dẫn dắt đất nước đến chiến thắng Điện Biên Phủ và ký kết Hiệp định Genève.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#141210] to-[#0a0805] border-2 border-[#a8d261]/50 rounded-lg p-8 space-y-6 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#a8d261] font-mono">Kết quả cuối cùng</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0a0805]/60 rounded-lg p-4 border border-blue-500/40">
                  <p className="text-[#7a7570] text-sm font-mono">Lòng dân</p>
                  <p className="text-3xl font-bold text-blue-400 font-mono">{stats.publicSupport}%</p>
                </div>
                <div className="bg-[#0a0805]/60 rounded-lg p-4 border border-yellow-500/40">
                  <p className="text-[#7a7570] text-sm font-mono">Kinh tế</p>
                  <p className="text-3xl font-bold text-yellow-400 font-mono">{stats.resources}%</p>
                </div>
                <div className="bg-[#0a0805]/60 rounded-lg p-4 border border-red-500/40">
                  <p className="text-[#7a7570] text-sm font-mono">Quân lực</p>
                  <p className="text-3xl font-bold text-red-400 font-mono">{stats.militaryPower}%</p>
                </div>
                <div className="bg-[#0a0805]/60 rounded-lg p-4 border border-purple-500/40">
                  <p className="text-[#7a7570] text-sm font-mono">Ngoại giao</p>
                  <p className="text-3xl font-bold text-purple-400 font-mono">{stats.diplomaticStanding}%</p>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1410]/60 border-2 border-[#a8d261]/50 rounded-lg p-6 shadow-lg">
              <p className="text-[#a8d261] text-lg font-semibold font-mono">
                Việt Nam đã giành độc lập toàn bộ. Lịch sử đã ghi nhận chiến thắng của bạn!
              </p>
              <p className="text-[#c4e87f] text-sm mt-3 font-mono">
                Hiệp định Genève 1954 đánh dấu kết thúc cuộc kháng chiến chống thực dân Pháp. Việt Nam được công nhận
                độc lập.
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <h1
                className="text-7xl font-bold text-[#d85a54] font-mono drop-shadow-lg"
                style={{ textShadow: "0 0 30px rgba(216, 90, 84, 0.5)" }}
              >
                Thất bại
              </h1>
              <p className="text-[#e8e3d8] text-lg font-mono">
                Bạn không thể duy trì đủ sức mạnh để chiến thắng. Chính quyền sụp đổ.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#141210] to-[#0a0805] border-2 border-[#d85a54]/50 rounded-lg p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#d85a54] mb-6 font-mono">Nguyên nhân thất bại</h3>
              <div className="space-y-3 text-left">
                {stats.publicSupport <= 50 && (
                  <div className="bg-[#0a0805]/60 rounded-lg p-3 border-l-4 border-[#d85a54]">
                    <p className="text-[#d85a54] font-semibold font-mono">Lòng dân quá thấp ({stats.publicSupport}%)</p>
                    <p className="text-[#7a7570] text-sm font-mono">Dân chúng mất niềm tin vào chính quyền.</p>
                  </div>
                )}
                {stats.militaryPower <= 40 && (
                  <div className="bg-[#0a0805]/60 rounded-lg p-3 border-l-4 border-[#d85a54]">
                    <p className="text-[#d85a54] font-semibold font-mono">
                      Sức mạnh quân sự không đủ ({stats.militaryPower}%)
                    </p>
                    <p className="text-[#7a7570] text-sm font-mono">Quân đội không đủ mạnh để kháng cự.</p>
                  </div>
                )}
                {stats.morale <= 50 && (
                  <div className="bg-[#0a0805]/60 rounded-lg p-3 border-l-4 border-[#d85a54]">
                    <p className="text-[#d85a54] font-semibold font-mono">
                      Tinh thần chiến đấu suy yếu ({stats.morale}%)
                    </p>
                    <p className="text-[#7a7570] text-sm font-mono">Binh lính mất quyết tâm chiến đấu.</p>
                  </div>
                )}
              </div>
            </div>

            <p className="text-[#7a7570] text-sm font-mono">
              Hãy thử lại và đưa ra những quyết sách tốt hơn để dẫn dắt đất nước đến chiến thắng!
            </p>
          </>
        )}

        <Button
          onClick={resetGame}
          className="military-button px-8 py-4 text-lg font-bold rounded-none shadow-lg transform hover:scale-105 transition"
        >
          Chơi lại
        </Button>
      </div>
    </div>
  )
}
