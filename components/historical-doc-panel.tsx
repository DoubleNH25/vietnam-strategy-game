"use client"

import { useGame } from "@/context/game-context"
import { historicalDocuments } from "@/data/historical-documents"

export default function HistoricalDocPanel() {
  const { gameState } = useGame()
  const { chapter, mission } = gameState

  const docKey = `ch${chapter}_m${mission}`
  const doc = historicalDocuments[docKey as keyof typeof historicalDocuments]

  return (
    <div className="flex-1 overflow-auto p-4 space-y-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="sticky top-0 bg-slate-900 py-2 border-b border-amber-600 pb-3">
        <h3 className="text-lg font-bold text-amber-400">📖 Tư liệu lịch sử</h3>
        <p className="text-xs text-slate-400 mt-1">
          Chương {chapter} - Nhiệm vụ {mission}
        </p>
      </div>

      {doc ? (
        <div className="space-y-3 text-sm text-slate-300 pr-2">
          <div className="bg-slate-800 border-l-4 border-amber-600 pl-3 py-2">
            <h4 className="font-bold text-amber-300 text-base">{doc.title}</h4>
            <p className="text-xs text-slate-400 mt-1">{doc.date}</p>
          </div>

          <div className="space-y-2 text-justify leading-relaxed">
            {doc.content.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 text-sm">
                {paragraph}
              </p>
            ))}
          </div>

          {doc.source && (
            <div className="bg-slate-800 rounded p-2 border border-slate-700">
              <p className="text-xs text-slate-400 italic">
                <span className="text-amber-600 font-semibold">Nguồn:</span> {doc.source}
              </p>
            </div>
          )}

          <div className="bg-blue-900 border border-blue-600 rounded p-3 mt-4">
            <p className="text-xs text-blue-200">
              <span className="font-bold">Ghi chú:</span> Tư liệu này được trích từ các nguồn lịch sử chính thức. Hãy sử
              dụng kiến thức này để đưa ra quyết sách tốt hơn!
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <p className="text-slate-400">Không có tư liệu cho nhiệm vụ này</p>
          <p className="text-xs text-slate-500 mt-2">Hãy hoàn thành nhiệm vụ để mở khóa tư liệu tiếp theo</p>
        </div>
      )}
    </div>
  )
}
