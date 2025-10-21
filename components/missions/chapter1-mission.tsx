"use client"

import { useState } from "react"
import { useGame } from "@/context/game-context"
import { useTypewriter } from "@/hooks/use-typewriter"

export default function Chapter1Mission() {
  const { gameState, updateStats, advanceMission, recordDecision, showCutsceneSequence } = useGame()
  const { mission } = gameState
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null)

  const missions = [
    {
      title: "Tuyên bố Độc lập và xây dựng chính quyền",
      description:
        "Ngày 2/9/1945: Tuyên bố Độc lập tại Quảng trường Ba Đình. Bạn phải quyết định cách tổ chức chính quyền mới để đảm bảo quyền lực nhà nước từ trung ương xuống địa phương.",
      context:
        "Tháng 8-9/1945: Cách mạng Tháng Tám thành công, chính quyền cách mạng được thành lập nhưng cần thiết lập quyền lực nhà nước từ trung ương lan xuống địa phương.",
      image: "/vietnamese-government-officials-1945-meeting.jpg",
      choices: [
        {
          text: "Tập trung quyền lực trung ương mạnh",
          effects: { publicSupport: 8, militaryPower: 15, resources: -5 },
          reasoning: "Quyền lực tập trung mạnh nhưng có thể thiếu linh hoạt địa phương.",
          cutscene: {
            title: "Chính quyền tập trung",
            description:
              "Quyết định tập trung quyền lực trung ương đã tạo nên một chính quyền mạnh mẽ và thống nhất. Tuy nhiên, một số địa phương cảm thấy bị kiểm soát quá chặt chẽ.",
            image: "/vietnamese-capable-officials-1945.jpg",
            duration: 4000,
          },
        },
        {
          text: "Phân quyền cho địa phương",
          effects: { publicSupport: 15, militaryPower: 8, resources: 5 },
          reasoning: "Tăng lòng dân địa phương nhưng có thể thiếu thống nhất.",
          cutscene: {
            title: "Quyền tự chủ địa phương",
            description:
              "Phân quyền cho địa phương đã giành được lòng tin của nhân dân các vùng. Tuy nhiên, việc phối hợp giữa các địa phương còn gặp khó khăn.",
            image: "/vietnamese-local-influence-officials-1945.jpg",
            duration: 4000,
          },
        },
        {
          text: "Cân bằng trung ương và địa phương",
          effects: { publicSupport: 12, militaryPower: 12, resources: 0 },
          reasoning: "Chiến lược cân bằng tốt nhất, đảm bảo cả thống nhất và linh hoạt.",
          cutscene: {
            title: "Cân bằng quyền lực",
            description:
              "Chiến lược cân bằng đã tạo nên một chính quyền vừa thống nhất vừa linh hoạt. Cả trung ương và địa phương đều có vai trò quan trọng trong việc xây dựng đất nước.",
            image: "/vietnamese-party-loyal-officials-1945.jpg",
            duration: 4000,
          },
        },
      ],
    },
    {
      title: "Hội nghị Fontainebleau và đàm phán với Pháp",
      description: "Tháng 6-8/1946: Hội nghị Fontainebleau để thương thảo về vị thế pháp lý và chủ quyền. Pháp muốn phục hồi ảnh hưởng ở Đông Dương. Bạn phải quyết định lập trường ngoại giao.",
      context:
        "Từ giữa năm 1945 đến đầu năm 1946: Hoạt động đàm phán ngoại giao với Pháp. Kết quả không được như mong muốn (Pháp giữ nhiều quyền trông nom) nên lòng tin vào ngoại giao bị thử thách.",
      image: "/fontainebleau-conference-1946-diplomatic-meeting.jpg",
      choices: [
        {
          text: "Nhượng bộ một phần để giữ hòa bình",
          effects: { morale: -10, diplomaticStanding: 15, resources: 5 },
          reasoning: "Duy trì hòa bình và có thêm thời gian chuẩn bị, nhưng tinh thần chiến đấu giảm.",
          cutscene: {
            title: "Hòa bình tạm thời",
            description:
              "Quyết định nhượng bộ một phần đã giữ được hòa bình tạm thời với Pháp và có thêm thời gian chuẩn bị. Tuy nhiên, một số người dân cảm thấy thất vọng vì không thể giành độc lập hoàn toàn ngay lập tức.",
            image: "/vietnamese-temporary-peace-1946.jpg",
            duration: 4000,
          },
        },
        {
          text: "Cứng rắn bảo vệ độc lập tuyệt đối",
          effects: { morale: 20, diplomaticStanding: -10, resources: -5 },
          reasoning: "Tăng tinh thần chiến đấu nhưng sẽ dẫn đến xung đột quân sự sớm.",
          cutscene: {
            title: "Quyết tâm độc lập",
            description:
              "Lập trường cứng rắn đã tăng tinh thần chiến đấu của quân đội và nhân dân. Mọi người sẵn sàng hy sinh cho độc lập của đất nước, nhưng xung đột với Pháp là không thể tránh khỏi và sẽ diễn ra sớm hơn dự kiến.",
            image: "/vietnamese-independence-determination-1946.jpg",
            duration: 4000,
          },
        },
        {
          text: "Đàm phán cân bằng, chuẩn bị kháng chiến",
          effects: { morale: 5, diplomaticStanding: 5, militaryPower: 10 },
          reasoning: "Chiến lược cân bằng, vừa đàm phán vừa chuẩn bị quân sự.",
          cutscene: {
            title: "Chiến lược kép",
            description:
              "Chiến lược cân bằng đã cho phép vừa đàm phán với Pháp vừa chuẩn bị lực lượng quân sự. Điều này giúp duy trì hòa bình trong thời gian ngắn nhưng cũng sẵn sàng cho kháng chiến khi cần thiết.",
            image: "/vietnamese-independence-determination-1946.jpg",
            duration: 4000,
          },
        },
      ],
    },
    {
      title: "Toàn quốc kháng chiến - Chuyển đổi lịch sử",
      description: "Ngày 30/11/1946: Quân Pháp tấn công Hải Phòng, mở đầu xung đột quân sự. Tháng 12/1946: Chuyển sang kháng chiến toàn quốc. Bạn phải quyết định chiến lược sơ tán và tổ chức kháng chiến.",
      context: "Ngày 30/11/1946: Quân Pháp mở đợt tấn công Hải Phòng - mốc đầu tiên chuyển từ đàm phán sang xung đột quân sự. Tháng 12/1946: Đảng/Chính phủ ban hành các văn bản về kháng chiến lâu dài.",
      image: "/hanoi-evacuation-1946-resistance-war.jpg",
      choices: [
        {
          text: "Sơ tán nhanh, ưu tiên bảo vệ lực lượng quân sự",
          effects: { militaryPower: 18, publicSupport: -8, morale: 12 },
          reasoning: "Bảo vệ được lực lượng quân sự nhưng một số dân cư bị bỏ rơi.",
          cutscene: {
            title: "Bảo vệ lực lượng quân sự",
            description:
              "Sơ tán nhanh chóng với ưu tiên cho quân đội đã bảo vệ được lực lượng quân sự chủ lực. Tuy nhiên, một số dân cư không kịp sơ tán cảm thấy bị bỏ rơi, gây ra sự bất mãn.",
            image: "/vietnamese-military-evacuation-1946.jpg",
            duration: 4000,
          },
        },
        {
          text: "Sơ tán có tổ chức, bảo vệ cả quân đội và dân cư",
          effects: { militaryPower: 12, publicSupport: 15, morale: 8 },
          reasoning: "Cân bằng giữa quân lực và lòng dân, tạo sự đoàn kết.",
          cutscene: {
            title: "Sơ tán có tổ chức",
            description:
              "Sơ tán có tổ chức đã bảo vệ cả quân đội lẫn dân cư. Mọi người cảm thấy được chính quyền quan tâm, tạo nên sự đoàn kết và quyết tâm trong kháng chiến lâu dài.",
            image: "/vietnamese-balanced-evacuation-1946.jpg",
            duration: 4000,
          },
        },
        {
          text: "Ưu tiên bảo vệ tài liệu và cán bộ chủ chốt",
          effects: { militaryPower: 8, publicSupport: 5, resources: 10, diplomaticStanding: 8 },
          reasoning: "Bảo vệ được tài liệu và cán bộ nhưng quân lực yếu hơn.",
          cutscene: {
            title: "Bảo vệ tài sản trí tuệ",
            description:
              "Ưu tiên bảo vệ tài liệu và cán bộ chủ chốt đã giữ được những tài sản quý báu của cách mạng. Tuy nhiên, lực lượng quân sự phát triển chậm hơn so với yêu cầu kháng chiến.",
            image: "/vietnamese-balanced-evacuation-1946.jpg",
            duration: 4000,
          },
        },
      ],
    },
  ]

  const currentMission = missions[mission - 1] || missions[0]

  const { displayedText: displayedDescription, isComplete: descriptionComplete } = useTypewriter(
    currentMission?.description || "",
    50,
    true,
  )

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

  if (!currentMission) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-b from-[#2a2218] to-[#0a0805] border-2 border-[#a8d261]/30 rounded-lg overflow-hidden shadow-2xl p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#a8d261] font-mono tracking-wide">Đang tải...</h2>
            <p className="text-[#7a7570] text-sm font-mono mt-2">Vui lòng chờ trong giây lát</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-b from-[#2a2218] to-[#0a0805] border-2 border-[#a8d261]/30 rounded-lg overflow-hidden shadow-2xl hover:border-[#a8d261]/50 transition-all duration-300">
        <div className="relative w-full h-56 bg-[#0a0805] overflow-hidden">
          <img
            src={currentMission.image || "/placeholder.svg"}
            alt={currentMission.title}
            className="w-full h-full object-cover opacity-75 hover:opacity-85 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0805] via-[#0a0805]/50 to-transparent" />
          <div className="absolute top-3 left-3 bg-[#a8d261] text-[#0a0805] px-4 py-2 rounded font-mono text-xs font-bold tracking-wider shadow-lg">
            NHIỆM VỤ {mission}
          </div>
        </div>

        <div className="p-6 space-y-4 bg-gradient-to-b from-[#141210] to-[#0a0805]">
          <h2 className="text-2xl font-bold text-[#a8d261] font-mono tracking-wide">{currentMission.title}</h2>
          <p className="text-[#7a7570] text-sm font-mono italic border-l-2 border-[#a8d261]/40 pl-4">
            {currentMission.context}
          </p>
          <p className="text-[#e8e3d8] text-base leading-relaxed font-mono">
            {displayedDescription}
            {!descriptionComplete && <span className="animate-pulse">▌</span>}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-[#a8d261] font-mono tracking-wider uppercase">▼ CHỌN QUYẾT SÁCH</h3>
        {descriptionComplete ? (
          <div className="space-y-2">
            {currentMission.choices.map((choice, idx) => (
              <button
                key={idx}
                onClick={() => handleChoice(idx)}
                disabled={selectedChoice !== null}
                className={`w-full p-4 rounded-lg border-2 transition text-left transform ${
                  selectedChoice === idx
                    ? "bg-[#a8d261] border-[#a8d261] text-[#0a0805] scale-102 shadow-lg"
                    : selectedChoice !== null
                      ? "bg-[#2a2218] border-[#2a2218] text-[#7a7570] opacity-50"
                      : "bg-[#2a2218] border-[#a8d261]/20 hover:border-[#a8d261]/60 text-[#e8e3d8] hover:text-[#a8d261] hover:bg-[#141210] hover:shadow-lg"
                }`}
              >
                <div className="font-semibold text-base font-mono">{choice.text}</div>
                <div className="text-sm mt-2 opacity-75 font-mono">{choice.reasoning}</div>
                <div className="text-xs mt-2 opacity-60 space-y-0.5 font-mono">
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
        ) : (
          <div className="text-[#a8d261]/60 text-sm font-mono italic">⏳ Đang nhận tín hiệu... Vui lòng chờ...</div>
        )}
      </div>

      {selectedChoice !== null && (
        <div className="bg-[#a8d261]/15 border-2 border-[#a8d261]/50 rounded-lg p-4 text-[#a8d261] animate-pulse font-mono">
          <p className="font-bold">✓ QUYẾT SÁCH ĐÃ THỰC HIỆN</p>
          <p className="text-sm mt-1">Chuyển sang nhiệm vụ tiếp theo...</p>
        </div>
      )}
    </div>
  )
}
