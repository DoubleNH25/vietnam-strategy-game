"use client"

import { useGame } from "@/context/game-context"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react"

export default function HistoryPanel() {
  const { gameState } = useGame()
  const { chapter } = gameState
  const [activeTab, setActiveTab] = useState("facts")

  const historicalFacts = {
    1: {
      title: "Cách mạng Tháng Tám 1945",
      facts: [
        {
          title: "Tuyên ngôn Độc lập",
          content: "Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa.",
          source: "https://vi.wikipedia.org/wiki/Tuy%C3%AAn_ng%C3%B4n_%C4%90%E1%BB%99c_l%E1%BA%ADp_(Vi%E1%BB%87t_Nam)"
        },
        {
          title: "Chính quyền cách mạng",
          content: "Chính quyền cách mạng được thành lập ngay sau Cách mạng Tháng Tám, phải đối mặt với việc thiết lập quyền lực nhà nước từ trung ương xuống địa phương.",
          source: "https://vi.wikipedia.org/wiki/C%C3%A1ch_m%E1%BA%A1ng_Th%C3%A1ng_T%C3%A1m"
        },
        {
          title: "Hội nghị Fontainebleau",
          content: "Tháng 6-8/1946, Hội nghị Fontainebleau diễn ra để thương thảo về vị thế pháp lý và chủ quyền giữa Việt Nam và Pháp.",
          source: "https://vi.wikipedia.org/wiki/H%E1%BB%99i_ngh%E1%BB%8B_Fontainebleau"
        }
      ]
    },
    2: {
      title: "Kháng chiến chống Pháp 1946-1954",
      facts: [
        {
          title: "Toàn quốc kháng chiến",
          content: "Ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến, chính thức bắt đầu cuộc kháng chiến chống thực dân Pháp.",
          source: "https://vi.wikipedia.org/wiki/L%E1%BB%9Di_k%C3%AAu_g%E1%BB%8Di_to%C3%A0n_qu%E1%BB%91c_kh%C3%A1ng_chi%E1%BA%BFn"
        },
        {
          title: "Căn cứ Việt Bắc",
          content: "Việt Bắc trở thành căn cứ địa chính của cuộc kháng chiến, nơi xây dựng các cơ sở hậu phương vững chắc.",
          source: "https://vi.wikipedia.org/wiki/Vi%E1%BB%87t_B%E1%BA%AFc"
        },
        {
          title: "Mặt trận Liên Việt",
          content: "Thành lập Mặt trận Liên Việt và các tổ chức đoàn thể để vận động nhân dân tham gia kháng chiến.",
          source: "https://vi.wikipedia.org/wiki/M%E1%BA%B7t_tr%E1%BA%ADn_Li%C3%AAn_Vi%E1%BB%87t"
        }
      ]
    },
    3: {
      title: "Chiến dịch Điện Biên Phủ 1954",
      facts: [
        {
          title: "Chuẩn bị chiến dịch",
          content: "Tháng 3-4/1954, quân đội Việt Nam chuẩn bị kỹ lưỡng cho chiến dịch Điện Biên Phủ với việc vận chuyển pháo và vật tư qua các đường mòn hiểm trở.",
          source: "https://vi.wikipedia.org/wiki/Chi%E1%BA%BFn_d%E1%BB%8Bch_%C4%90i%E1%BB%87n_Bi%C3%AAn_Ph%E1%BB%A7"
        },
        {
          title: "Tổng công kích",
          content: "Ngày 7-8/5/1954, quân đội Việt Nam tiến hành tổng công kích cuối cùng, buộc quân Pháp đầu hàng tại Điện Biên Phủ.",
          source: "https://vi.wikipedia.org/wiki/Tr%E1%BA%ADn_%C4%90i%E1%BB%87n_Bi%C3%AAn_Ph%E1%BB%A7"
        },
        {
          title: "Hội nghị Genève",
          content: "Tháng 7/1954, Hội nghị Genève được tổ chức để đàm phán hòa bình, dẫn đến Hiệp định Genève và kết thúc chiến tranh Đông Dương.",
          source: "https://vi.wikipedia.org/wiki/H%E1%BB%99i_ngh%E1%BB%8B_Gen%C3%A8ve_(1954)"
        }
      ]
    }
  }

  const currentFacts = historicalFacts[chapter as keyof typeof historicalFacts] || historicalFacts[1]

  return (
    <div className="flex flex-col h-[600px] max-h-[600px] bg-gradient-to-b from-slate-800 to-slate-900 border-t-2 border-slate-700 rounded-lg overflow-hidden">
      <div className="p-4 border-b-2 border-slate-700 bg-slate-800 flex-shrink-0">
        <h3 className="text-lg font-bold text-amber-400">📚 Kiến thức Lịch sử</h3>
        <p className="text-xs text-slate-400 mt-1">{currentFacts.title}</p>
      </div>

      <div className="flex border-b border-slate-700 flex-shrink-0">
        <button
          onClick={() => setActiveTab("facts")}
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "facts"
              ? "text-amber-400 border-b-2 border-amber-400 bg-slate-700"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Sự kiện
        </button>
        <button
          onClick={() => setActiveTab("sources")}
          className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
            activeTab === "sources"
              ? "text-amber-400 border-b-2 border-amber-400 bg-slate-700"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          Nguồn
        </button>
      </div>

      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-4 space-y-4">
            {activeTab === "facts" ? (
              currentFacts.facts.map((fact, idx) => (
                <div
                  key={idx}
                  className="bg-slate-700/50 border border-slate-600/50 rounded-lg p-4 hover:border-amber-600/50 transition-all"
                >
                  <h4 className="text-sm font-bold text-amber-400 mb-2">{fact.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed mb-3">{fact.content}</p>
                  <a
                    href={fact.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    🔗 Xem nguồn
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              ))
            ) : (
              <div className="space-y-3">
                <div className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-amber-400 mb-2">📖 Nguồn chính</h4>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Văn kiện Đảng Cộng sản Việt Nam</li>
                    <li>• Toàn tập Hồ Chí Minh</li>
                    <li>• Sách giáo khoa Lịch sử lớp 12</li>
                    <li>• Viện Sử học Việt Nam</li>
                  </ul>
                </div>
                
                <div className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-amber-400 mb-2">🌐 Nguồn trực tuyến</h4>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Wikipedia tiếng Việt</li>
                    <li>• Bảo tàng Lịch sử Quân sự Việt Nam</li>
                    <li>• Trung tâm Lưu trữ Quốc gia</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
