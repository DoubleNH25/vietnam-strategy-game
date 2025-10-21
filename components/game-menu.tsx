"use client"

import { Button } from "@/components/ui/button"

interface GameMenuProps {
  onStart: () => void
}

export default function GameMenu({ onStart }: GameMenuProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a0805] via-[#141210] to-[#0a0805] px-4 relative overflow-hidden military-grid">
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(168, 210, 97, 0.08) 2px, rgba(168, 210, 97, 0.08) 4px)",
          }}
        />
      </div>

      <div className="max-w-5xl text-center space-y-10 relative z-10">
        {/* Title section with enhanced styling */}
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block">
            <div
              className="text-6xl md:text-8xl font-bold text-[#a8d261] font-mono tracking-widest"
              style={{
                textShadow:
                  "0 0 20px rgba(168, 210, 97, 0.4), 0 0 40px rgba(168, 210, 97, 0.2), 2px 2px 0px rgba(0,0,0,0.9)",
              }}
            >
              CHIẾN DỊCH
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#a8d261] to-transparent mx-auto mt-4" />
          </div>
          <div className="text-[#c4e87f] text-3xl font-mono tracking-widest font-bold">ĐIỆN BIÊN PHỦ</div>
          <p className="text-[#a8d261] text-lg leading-relaxed font-mono tracking-wide">
            ▌ CHIẾN LƯỢC QUÂN SỰ ▌ VIỆT NAM 1945-1954 ▌
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="military-panel-bordered p-6 border-l-4 border-l-[#a8d261] hover:shadow-lg transition-all duration-300">
            <div className="text-[#a8d261] font-mono text-sm font-bold tracking-wider">TRẠNG THÁI HỆ THỐNG</div>
            <div className="text-[#c4e87f] font-mono text-xs mt-3 space-y-2">
              <div>█ Tất cả hệ thống sẵn sàng</div>
              <div>█ Cơ sở dữ liệu kết nối</div>
              <div>█ Sẵn sàng triển khai</div>
            </div>
          </div>
          <div className="military-panel-bordered p-6 border-l-4 border-l-[#c4e87f] hover:shadow-lg transition-all duration-300">
            <div className="text-[#c4e87f] font-mono text-sm font-bold tracking-wider">NHIỆM VỤ CHIẾN DỊCH</div>
            <div className="text-[#a8d261] font-mono text-xs mt-3 space-y-2">
              <div>█ 3 Chương chiến lược</div>
              <div>█ 12 Quyết định quan trọng</div>
              <div>█ Nhiều kết quả khác nhau</div>
            </div>
          </div>
          <div className="military-panel-bordered p-6 border-l-4 border-l-[#d85a54] hover:shadow-lg transition-all duration-300">
            <div className="text-[#d85a54] font-mono text-sm font-bold tracking-wider">MỨC ĐE DỌA</div>
            <div className="text-[#d4a574] font-mono text-xs mt-3 space-y-2">
              <div>█ Độ phức tạp cao</div>
              <div>█ Chiều sâu chiến lược</div>
              <div>█ Chính xác lịch sử</div>
            </div>
          </div>
        </div>

        <div className="military-panel-bordered border-2 border-[#a8d261] p-8 space-y-4 backdrop-blur-sm border-glow">
          <div className="text-[#a8d261] font-mono text-lg font-bold tracking-widest">LỆNH CHỈ HUY</div>
          <p className="text-[#e8e3d8] text-base leading-relaxed font-mono">
            Bạn được bổ nhiệm làm TỔNG CHỈ HUY Quân Đội Nhân Dân Việt Nam. Nhiệm vụ của bạn: dẫn dắt đất nước vượt qua
            khủng hoảng, tổ chức kháng chiến kéo dài, và đạt được chiến thắng tại Điện Biên Phủ. Mỗi quyết định sẽ định
            hình lịch sử.
          </p>
          <div className="flex gap-2 justify-center text-xs font-mono text-[#a8d261]">
            <span>▌ CẤP BẢO MẬT: TỐI MẬT</span>
            <span>▌ PHÉP CẤP: ĐÃ CẤP</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: "LÒNG DÂN", color: "text-blue-400" },
            { label: "KINH TẾ", color: "text-yellow-500" },
            { label: "QUÂN LỰC", color: "text-red-500" },
            { label: "NGOẠI GIAO", color: "text-purple-400" },
            { label: "TINH THẦN", color: "text-green-500" },
          ].map((metric) => (
            <div
              key={metric.label}
              className="military-panel-bordered p-4 border border-[#a8d261]/30 hover:border-[#a8d261]/60 transition-all duration-300"
            >
              <div className={`font-mono text-xs font-bold ${metric.color}`}>{metric.label}</div>
              <div className="text-[#a8d261] font-mono text-xs mt-2">████████░░ 80%</div>
            </div>
          ))}
        </div>

        <div className="military-panel-bordered border-2 border-[#a8d261]/40 p-6 space-y-4">
          <div className="text-[#a8d261] font-mono text-sm font-bold tracking-wider">CÁC CHƯƠNG CHIẾN DỊCH</div>
          <div className="space-y-3">
            {[
              { num: "I", title: "TÌNH HUỐNG NGUY CẤP (1945-46)", status: "KHÓA" },
              { num: "II", title: "KHÁNG CHIẾN & XÂY DỰNG ĐẤT NƯỚC (1947-50)", status: "KHÓA" },
              { num: "III", title: "ĐIỆN BIÊN PHỦ - CHIẾN THẮNG LỊCH SỬ (1953-54)", status: "KHÓA" },
            ].map((chapter) => (
              <div
                key={chapter.num}
                className="flex items-center justify-between p-4 bg-[#141210]/60 border border-[#a8d261]/20 hover:border-[#a8d261]/50 hover:bg-[#1a1410]/80 transition-all duration-300"
              >
                <div className="font-mono text-sm">
                  <span className="text-[#a8d261] font-bold">[{chapter.num}]</span>
                  <span className="text-[#e8e3d8] ml-3">{chapter.title}</span>
                </div>
                <span className="text-xs font-mono text-[#a8d261]/60">{chapter.status}</span>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={onStart}
          className="military-button px-20 py-5 text-xl font-bold rounded-none border-2 shadow-lg transform hover:scale-105 transition-all duration-200 font-mono tracking-widest glow-pulse"
        >
          ▶ BẮT ĐẦU CHIẾN DỊCH
        </Button>

        <div className="text-[#7a7570] text-xs font-mono space-y-1">
          <p>▌ MẠNG QUÂN SỰ AN TOÀN ▌ TRUYỀN TẢI MÃ HÓA ▌</p>
          <p>Lịch sử đang chờ bạn. Bạn đã sẵn sàng chỉ huy chưa?</p>
        </div>
      </div>
    </div>
  )
}
