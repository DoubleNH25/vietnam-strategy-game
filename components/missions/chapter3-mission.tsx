"use client"

import { useState } from "react"
import { useGame } from "@/context/game-context"

export default function Chapter3Mission() {
  const { gameState, updateStats, advanceMission, recordDecision, showCutsceneSequence, endGame } = useGame()
  const { mission } = gameState
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null)

  const missions = [
    {
      title: "Chuẩn bị chiến dịch Điện Biên Phủ - Hậu cần và tiếp vận",
      description: "Tháng 3-4/1954: Chuẩn bị quân sự và hậu cần cho chiến dịch Điện Biên Phủ. Bạn phải quyết định chiến lược vận chuyển pháo và vật tư: nhanh chóng hay an toàn?",
      context: "Tháng 3-4/1954: Dự trữ đạn dược, sử dụng tuyến vận chuyển lương thực/vật tư từ căn cứ Việt Bắc qua các đường mòn/đường bộ/đường thủy nhỏ vào khu vực Tây Bắc. Khảo sát địa hình Điện Biên Phủ, lập sơ đồ cao điểm, xây dựng công sự.",
      image: "/dien-bien-phu-preparation-1954.jpg",
      choices: [
        {
          text: "Vận chuyển nhanh, rủi ro cao - Ưu tiên thời gian",
          effects: { militaryPower: 18, resources: -25, morale: 8 },
          reasoning: "Quân lực sẵn sàng nhanh và tinh thần cao nhưng tốn nhiều tài nguyên và có rủi ro.",
          cutscene: {
            title: "Vận chuyển nhanh chóng",
            description:
              "Quyết định vận chuyển nhanh đã đưa pháo và vũ khí nặng đến Điện Biên Phủ trong thời gian kỷ lục qua các đường mòn hiểm trở. Quân đội sẵn sàng cho trận chiến quyết định, tinh thần chiến đấu cao, mặc dù tài nguyên đã suy kiệt và có một số tổn thất trong quá trình vận chuyển.",
            image: "/dien-bien-phu-fast-transport-1954.jpg",
            duration: 4000,
          },
        },
        {
          text: "Vận chuyển cân bằng - Chiến lược ổn định",
          effects: { militaryPower: 14, resources: -12, morale: 10, publicSupport: 5 },
          reasoning: "Chiến lược cân bằng tốt nhất, đảm bảo cả quân lực và tài nguyên.",
          cutscene: {
            title: "Chuẩn bị chu đáo",
            description:
              "Chiến lược vận chuyển cân bằng đã đảm bảo quân đội sẵn sàng mà vẫn duy trì tài nguyên. Pháo được kéo vào vị trí một cách an toàn, công sự được xây dựng vững chắc, và mọi thứ được chuẩn bị chu đáo. Nhân dân ủng hộ chiến lược này.",
            image: "/dien-bien-phu-balanced-prep-1954.jpg",
            duration: 4000,
          },
        },
        {
          text: "Vận chuyển chậm, an toàn - Bảo toàn lực lượng",
          effects: { militaryPower: 10, resources: -8, morale: 5, publicSupport: 8 },
          reasoning: "Tiết kiệm tài nguyên và bảo vệ lực lượng nhưng quân lực chậm sẵn sàng.",
          cutscene: {
            title: "Chuẩn bị thận trọng",
            description:
              "Vận chuyển chậm nhưng an toàn đã bảo vệ tài nguyên quý báu và lực lượng quân sự. Tuy nhiên, quân đội phải chờ đợi lâu hơn để sẵn sàng cho trận chiến. Nhân dân đánh giá cao sự thận trọng này.",
            image: "/dien-bien-phu-careful-prep-1954.jpg",
            duration: 4000,
          },
        },
      ],
    },
    {
      title: "Chiến lược tấn công Điện Biên Phủ - Đánh nhanh hay đánh chắc?",
      description: 'Tháng 5/1954: Giai đoạn chính tấn công. Bạn phải chọn chiến lược tấn công chính: "Đánh nhanh thắng nhanh" hay "Đánh chắc tiến chắc"?',
      context: "Tháng 5/1954: Giai đoạn chính tấn công. Các cứ điểm địch (căn cứ A1, B1, C1, các cứ điểm phụ quanh Thung lũng Điện Biên) lần lượt bị tấn công & tiêu diệt qua các đợt. Xác lập các trung đoàn/tiểu đoàn bộ đội tham gia chiến dịch.",
      image: "/dien-bien-phu-attack-strategy-1954.jpg",
      choices: [
        {
          text: "Đánh nhanh - Rủi ro cao, thắng nhanh",
          effects: { militaryPower: 22, morale: 18, resources: -8 },
          reasoning: "Chiến thắng nhanh và tinh thần cao nhưng rủi ro cao và tốn nhiều tài nguyên.",
          cutscene: {
            title: "Tấn công quyết liệt",
            description:
              "Chiến lược đánh nhanh đã tạo nên những cuộc tấn công quyết liệt và dồn dập. Quân đội Việt Nam tiến công mạnh mẽ từ nhiều hướng, các cứ điểm địch A1, B1, C1 lần lượt sụp đổ nhanh chóng. Tinh thần chiến đấu đạt đỉnh cao nhưng có tổn thất lớn.",
            image: "/dien-bien-phu-fierce-attack-1954.jpg",
            duration: 4000,
          },
        },
        {
          text: "Đánh chắc - Ổn định, tiến từng bước",
          effects: { militaryPower: 18, morale: 12, publicSupport: 8 },
          reasoning: "Chiến lược ổn định, rủi ro thấp và được nhân dân ủng hộ.",
          cutscene: {
            title: "Tiến công có kế hoạch",
            description:
              "Chiến lược đánh chắc đã đảm bảo tiến bộ ổn định và có kế hoạch. Mỗi cứ điểm được tấn công một cách có kế hoạch, giảm thiểu tổn thất. Quân đội tiến lên từng bước một, giành được sự ủng hộ của nhân dân.",
            image: "/dien-bien-phu-planned-attack-1954.jpg",
            duration: 4000,
          },
        },
      ],
    },
    {
      title: "Tổng công kích cuối cùng - Ngày quyết định",
      description: "Ngày 7-8/5/1954: Tổng công kích cuối cùng. Bạn phải điều phối 3 mũi tấn công (A1, C1, trung tâm) để giành chiến thắng quyết định.",
      context: "Ngày 7-8/5/1954: Đây là thời điểm mà quân Pháp đầu hàng vị trí trung tâm ('điểm cứ điểm chính') của chiến trường Điện Biên Phủ, chấm dứt chiến dịch bằng thắng lợi toàn diện của phía Việt Nam. Sau khi cứ điểm trung tâm đầu hàng, lực lượng Pháp mất khả năng kháng cự hiệu quả.",
      image: "/dien-bien-phu-final-assault-1954.jpg",
      choices: [
        {
          text: "Tấn công đồng bộ, quyết liệt - Áp đảo hoàn toàn",
          effects: { militaryPower: 28, morale: 25, resources: -10 },
          reasoning: "Tấn công mạnh mẽ và áp đảo, chiến thắng nhanh nhưng tốn nhiều tài nguyên.",
          cutscene: {
            title: "Chiến thắng Điện Biên Phủ",
            description:
              "Tấn công đồng bộ từ ba mũi (A1, C1, trung tâm) đã tạo nên một cuộc tấn công áp đảo và quyết liệt. Quân Pháp không thể chống cự trước sức mạnh tổng hợp, lá cờ Việt Nam được cắm trên vị trí trung tâm. Chiến dịch kết thúc bằng thắng lợi toàn diện và vang dội.",
            image: "/dien-bien-phu-victory-1954.jpg",
            duration: 4000,
          },
        },
        {
          text: "Tấn công từng giai đoạn - Chiến thắng có kế hoạch",
          effects: { militaryPower: 22, morale: 18, publicSupport: 10 },
          reasoning: "Tấn công có kế hoạch và ổn định, được nhân dân ủng hộ.",
          cutscene: {
            title: "Chiến thắng từng bước",
            description:
              "Tấn công từng giai đoạn đã đảm bảo chiến thắng ổn định và có kế hoạch. Mỗi giai đoạn được thực hiện một cách có kế hoạch, quân Pháp dần dần bị đẩy lùi. Cuối cùng, lá cờ Việt Nam được cắm trên Điện Biên Phủ. Nhân dân ủng hộ chiến lược này.",
            image: "/dien-bien-phu-staged-victory-1954.jpg",
            duration: 4000,
          },
        },
      ],
    },
    {
      title: "Hội nghị Genève - Đàm phán hòa bình",
      description: "Tháng 7/1954: Hội nghị Quốc tế về Đông Dương tại Genève. Bạn phải thương thuyết về ranh giới và hiệp định. Kết quả phụ thuộc vào ảnh hưởng quốc tế và thắng lợi quân sự của bạn.",
      context: "Tháng 7/1954: Hội nghị Quốc tế về Đông Dương diễn ra tại Genève. Ngay sau khi phía Pháp bị buộc đầu hàng, Việt Nam có lợi thế lớn hơn khi bước vào bàn đàm phán đình chiến. Sự kiện chiến thắng quân sự được tận dụng để tăng áp lực ngoại giao lên Pháp và các bên liên quan quốc tế.",
      image: "/geneva-conference-1954.jpg",
      choices: [
        {
          text: "Đàm phán mạnh mẽ - Tận dụng thắng lợi quân sự",
          effects: { diplomaticStanding: 25, morale: 15, publicSupport: 10 },
          reasoning: "Tận dụng thắng lợi quân sự để tăng ảnh hưởng quốc tế và đạt kết quả tốt nhất.",
          cutscene: {
            title: "Độc lập được công nhận",
            description:
              "Đàm phán mạnh mẽ tại Genève đã tận dụng thắng lợi quân sự Điện Biên Phủ để giành được sự công nhận độc lập của Việt Nam từ cộng đồng quốc tế. Hiệp định Genève được ký kết, Pháp rút khỏi Đông Dương. Việt Nam bước vào một kỷ nguyên mới với vị thế quốc tế cao.",
            image: "/geneva-independence-1954.jpg",
            duration: 4000,
          },
        },
        {
          text: "Đàm phán cân bằng - Hòa bình ổn định",
          effects: { diplomaticStanding: 15, morale: 8, publicSupport: 12, resources: 5 },
          reasoning: "Đàm phán ổn định và cân bằng, đảm bảo hòa bình lâu dài.",
          cutscene: {
            title: "Hòa bình được thiết lập",
            description:
              "Đàm phán cân bằng đã dẫn đến một hiệp định hòa bình ổn định. Mặc dù không phải tất cả yêu cầu đều được đáp ứng, nhưng Việt Nam đã giành được độc lập và thiết lập hòa bình. Một kỷ nguyên mới bắt đầu với sự ổn định và phát triển.",
            image: "/geneva-peace-1954.jpg",
            duration: 4000,
          },
        },
      ],
    },
  ]

  const currentMission = missions[mission - 1] || missions[0]

  const handleChoice = (choiceIndex: number) => {
    if (!currentMission) return
    const choice = currentMission.choices[choiceIndex]
    setSelectedChoice(choiceIndex)

    recordDecision({
      chapter: gameState.chapter,
      mission: gameState.mission,
      title: currentMission.title,
      decision: choice.text,
      effects: choice.effects,
    })

    updateStats(choice.effects)

    if (choice.cutscene) {
      setTimeout(() => {
        showCutsceneSequence(choice.cutscene)
      }, 500)
    }

    setTimeout(() => {
      advanceMission()
      setSelectedChoice(null)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 border-2 border-amber-600 rounded-lg overflow-hidden shadow-lg">
        <div className="relative w-full h-64 bg-slate-800 overflow-hidden">
          <img
            src={currentMission.image || "/placeholder.svg"}
            alt={currentMission.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold text-amber-400 mb-2">
                Màn {mission}: {currentMission.title}
              </h2>
              <p className="text-slate-400 text-sm italic">{currentMission.context}</p>
            </div>
          </div>
          <p className="text-slate-200 text-lg leading-relaxed">{currentMission.description}</p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-slate-200">Chọn hành động:</h3>
        {currentMission.choices.map((choice, idx) => (
          <button
            key={idx}
            onClick={() => handleChoice(idx)}
            disabled={selectedChoice !== null}
            className={`w-full p-4 rounded-lg border-2 transition text-left transform hover:scale-102 ${
              selectedChoice === idx
                ? "bg-amber-600 border-amber-400 text-white scale-102"
                : selectedChoice !== null
                  ? "bg-slate-800 border-slate-700 text-slate-400 opacity-50"
                  : "bg-slate-800 border-slate-700 hover:border-amber-600 text-slate-200 hover:text-amber-400 hover:bg-slate-700"
            }`}
          >
            <div className="font-semibold text-base">{choice.text}</div>
            <div className="text-sm mt-2 opacity-75">{choice.reasoning}</div>
            <div className="text-xs mt-2 opacity-60 space-y-0.5">
              {Object.entries(choice.effects).map(([key, value]) => {
                const statNames: Record<string, string> = {
                  publicSupport: "Lòng dân",
                  resources: "Kinh tế", 
                  militaryPower: "Quân lực",
                  diplomaticStanding: "Ngoại giao",
                  morale: "Tinh thần"
                }
                return (
                  <span key={key} className="block">
                    {statNames[key] || key}: {value > 0 ? "+" : ""}
                    {value}
                  </span>
                )
              })}
            </div>
          </button>
        ))}
      </div>

      {selectedChoice !== null && (
        <div className="bg-green-900 border-2 border-green-600 rounded-lg p-4 text-green-200 animate-pulse">
          <p className="font-bold">✓ Hành động được thực hiện</p>
          <p className="text-sm mt-1">
            {mission === 4 ? "Kết thúc chiến dịch..." : "Chuyển sang giai đoạn tiếp theo..."}
          </p>
        </div>
      )}
    </div>
  )
}
