"use client"

import { useState } from "react"
import { useGame } from "@/context/game-context"
import { useTypewriter } from "@/hooks/use-typewriter"

export default function Chapter2Mission() {
  const { gameState, updateStats, advanceMission, recordDecision, showCutsceneSequence } = useGame()
  const { mission } = gameState
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null)

  const missions = [
    {
      title: "Xây dựng căn cứ Việt Bắc - Hậu phương vững chắc",
      description:
        "Giai đoạn 1947-1950: Xây dựng căn cứ kháng chiến ở Việt Bắc. Bạn phải quyết định ưu tiên xây dựng: xưởng chế tạo vũ khí, hệ thống y tế, hay giáo dục?",
      context: "Giai đoạn 1947-1950: Tăng cường xây dựng cơ sở hậu phương vùng kiểm soát (miền Bắc - Việt Bắc). Làm đường giao thông, mở trường học/hệ thống y tế/tổ chức sinh hoạt dân chủ tại vùng căn cứ.",
      image: "/viet-bac-base-construction-1947.jpg",
      choices: [
        {
          text: "Ưu tiên xưởng chế tạo vũ khí và dự trữ vật tư",
          effects: { militaryPower: 22, resources: -18, morale: 8 },
          reasoning: "Tăng sức mạnh quân sự mạnh mẽ nhưng tốn nhiều tài nguyên và cần hy sinh các lĩnh vực khác.",
          cutscene: {
            title: "Xưởng vũ khí hoạt động ngày đêm",
            description:
              "Quyết định ưu tiên xưởng chế tạo vũ khí đã mang lại kết quả ngoạn mục. Các xưởng sản xuất pháo, súng, và đạn dược ngày đêm hoạt động. Dự trữ vật tư quân sự được tăng cường. Quân đội có đủ vũ khí để tiếp tục kháng chiến lâu dài.",
            image: "/viet-bac-weapon-factory-1947.jpg",
            duration: 4000,
          },
        },
        {
          text: "Cân bằng: vũ khí, y tế, giáo dục, giao thông",
          effects: { militaryPower: 12, resources: -12, publicSupport: 15, morale: 10 },
          reasoning: "Chiến lược cân bằng toàn diện, xây dựng căn cứ vững chắc.",
          cutscene: {
            title: "Căn cứ toàn diện",
            description:
              "Chiến lược cân bằng đã tạo nên một căn cứ Việt Bắc vững chắc và toàn diện. Vũ khí được sản xuất, y tế được chăm sóc, giáo dục được phát triển, và giao thông được cải thiện. Mọi thứ hoạt động như một cơ chế được bôi trơn tốt.",
            image: "/viet-bac-balanced-base-1947.jpg",
            duration: 4000,
          },
        },
        {
          text: "Ưu tiên y tế, giáo dục và sinh hoạt dân chủ",
          effects: { publicSupport: 20, resources: -8, morale: 15, militaryPower: 5 },
          reasoning: "Tăng lòng dân và tinh thần nhưng quân lực phát triển chậm.",
          cutscene: {
            title: "Chăm sóc toàn diện nhân dân",
            description:
              "Ưu tiên y tế, giáo dục và sinh hoạt dân chủ đã giành được lòng tin sâu sắc của nhân dân. Các trường học, phòng khám, và tổ chức dân chủ được xây dựng. Trẻ em được học tập, bệnh nhân được chữa trị, và nhân dân được tham gia quản lý. Tuy nhiên, quân lực phát triển chậm hơn.",
            image: "/viet-bac-healthcare-education-1947.jpg",
            duration: 4000,
          },
        },
      ],
    },
    {
      title: "Phát động toàn dân kháng chiến - Mặt trận dân sự",
      description: "Giai đoạn 1946-1950: Thành lập Mặt trận Liên Việt và các tổ chức đoàn thể vận động nhân dân. Bạn phải chọn thông điệp chính để vận động nhân dân tham gia kháng chiến.",
      context: "Giai đoạn 1946-1950: Thành lập Mặt trận Liên Việt và các tổ chức đoàn thể vận động nhân dân (Hội Nông dân, Thanh niên, Phụ nữ, Hội chữ thập đỏ...). Phát động phong trào ủng hộ tiền của, lương thực cho quân đội.",
      image: "/viet-nam-resistance-propaganda-1947.jpg",
      choices: [
        {
          text: '"Không có gì quý hơn độc lập tự do" - Thông điệp của Hồ Chí Minh',
          effects: { morale: 25, publicSupport: 20, resources: 5 },
          reasoning: "Thông điệp mạnh mẽ và thiêng liêng, tăng cả tinh thần, lòng dân và thu hút ủng hộ vật chất.",
          cutscene: {
            title: "Tinh thần độc lập bùng cháy",
            description:
              'Thông điệp "Không có gì quý hơn độc lập tự do" của Hồ Chí Minh đã lan tỏa khắp đất nước. Từ thành phố đến nông thôn, mọi người đều sẵn sàng hy sinh cho độc lập. Các hội quyên góp ủng hộ binh lính tại vùng tiền tuyến được thành lập. Tinh thần kháng chiến đạt đỉnh cao.',
            image: "/viet-nam-independence-spirit-1947.jpg",
            duration: 4000,
          },
        },
        {
          text: '"Vừa kháng chiến vừa kiến quốc" - Đường lối toàn diện',
          effects: { morale: 18, publicSupport: 15, resources: 8, militaryPower: 5 },
          reasoning: "Thông điệp cân bằng, vừa kháng chiến vừa xây dựng đất nước.",
          cutscene: {
            title: "Con đường kháng chiến toàn diện",
            description:
              'Thông điệp "Vừa kháng chiến vừa kiến quốc" đã được chấp nhận rộng rãi. Nhân dân hiểu rằng phải vừa chiến đấu vừa xây dựng. Các tổ chức đoàn thể được thành lập để vận động nhân dân. Sự quyết tâm lan tỏa khắp các vùng.',
            image: "/viet-nam-resistance-path-1947.jpg",
            duration: 4000,
          },
        },
        {
          text: '"Toàn dân kháng chiến, toàn diện kháng chiến" - Chiến lược tổng thể',
          effects: { morale: 15, publicSupport: 12, militaryPower: 12, diplomaticStanding: 5 },
          reasoning: "Chiến lược tổng thể, tăng quân lực và ảnh hưởng quốc tế.",
          cutscene: {
            title: "Kháng chiến toàn dân",
            description:
              "Chiến lược 'Toàn dân kháng chiến, toàn diện kháng chiến' đã thu hút sự tham gia của mọi tầng lớp nhân dân. Quân đội được tăng cường, các tổ chức dân sự được thành lập, và ảnh hưởng quốc tế được nâng cao. Mọi người đều tham gia vào cuộc kháng chiến vĩ đại.",
            image: "/viet-nam-sacrifice-call-1947.jpg",
            duration: 4000,
          },
        },
      ],
    },
    {
      title: "Tổ chức dân quân tự vệ & sản xuất vũ khí",
      description:
        "Giai đoạn 1946-1950: Tổ chức dân quân tự vệ địa phương và sản xuất vũ khí. Bạn phải cân đối nhân lực giữa nông nghiệp và quân đội, giữa sản xuất vũ khí và lương thực.",
      context: "Giai đoạn 1946-1950: Các làng xã được tổ chức dân quân tự vệ để giữ trật tự, bảo vệ an ninh, chống gián điệp/phần tử thù; đồng thời tham gia thông tin hậu cần cho quân đội chính quy. Việc tập huấn/tổ chức các lớp huấn luyện dân quân nhỏ theo chỉ thị địa phương.",
      image: "/viet-nam-militia-training-1948.jpg",
      choices: [
        {
          text: "Tập trung sản xuất vũ khí, dân quân chuyên nghiệp",
          effects: { militaryPower: 18, resources: -25, morale: 8 },
          reasoning: "Quân lực mạnh mẽ nhưng thiếu lương thực và cần hy sinh nhiều.",
          cutscene: {
            title: "Quân lực mạnh, lương thực thiếu",
            description:
              "Tập trung sản xuất vũ khí và huấn luyện dân quân chuyên nghiệp đã tạo nên một quân đội mạnh mẽ và kỷ luật. Tuy nhiên, lương thực bắt đầu thiếu hụt nghiêm trọng. Nhân dân phải siết chặt dây buộc để hỗ trợ chiến đấu.",
            image: "/viet-nam-strong-military-1948.jpg",
            duration: 4000,
          },
        },
        {
          text: "Cân bằng dân quân và sản xuất nông nghiệp",
          effects: { militaryPower: 12, resources: -8, publicSupport: 10, morale: 12 },
          reasoning: "Chiến lược cân bằng tốt nhất, đảm bảo cả quân sự và kinh tế.",
          cutscene: {
            title: "Cân bằng hoàn hảo",
            description:
              "Chiến lược cân bằng đã duy trì sự ổn định giữa quân sự và kinh tế. Dân quân được huấn luyện tốt, vũ khí được sản xuất đủ, và lương thực vẫn đủ dùng. Các làng xã được tổ chức dân quân tự vệ hiệu quả.",
            image: "/viet-nam-balanced-militia-1948.jpg",
            duration: 4000,
          },
        },
        {
          text: "Ưu tiên nông nghiệp, dân quân bán thời gian",
          effects: { militaryPower: 8, resources: 12, publicSupport: 15, morale: 5 },
          reasoning: "Kinh tế ổn định và lòng dân cao nhưng quân lực yếu hơn.",
          cutscene: {
            title: "Kinh tế ổn định, dân quân bán thời gian",
            description:
              "Ưu tiên nông nghiệp đã đảm bảo lương thực cho nhân dân và tăng lòng dân. Dân quân được tổ chức theo hình thức bán thời gian, vừa sản xuất vừa chiến đấu. Tuy nhiên, quân lực chuyên nghiệp phát triển chậm chạp.",
            image: "/viet-nam-agriculture-priority-1948.jpg",
            duration: 4000,
          },
        },
      ],
    },
    {
      title: "Liên minh quốc tế và viện trợ quân sự",
      description: "Giai đoạn 1947-1950: Trao đổi viện trợ với Trung Quốc và Liên Xô. Bạn phải cân đối lượng vũ khí nhận về và tài nguyên trả, đồng thời duy trì độc lập ngoại giao.",
      context: "Giai đoạn 1947-1950: Nhập khẩu/viện trợ từ Trung Quốc (pháo hạng nặng, đạn pháo); phiên chế các đơn vị pháo binh. Trong khi chuẩn bị kháng chiến, chính quyền vẫn giữ kênh ngoại giao với các nước thân thiện để tìm viện trợ hoặc hỗ trợ chính trị.",
      image: "/viet-nam-international-alliance-1949.jpg",
      choices: [
        {
          text: "Nhận viện trợ lớn từ Trung Quốc - Pháo hạng nặng",
          effects: { militaryPower: 25, diplomaticStanding: 18, resources: -10 },
          reasoning: "Quân lực mạnh mẽ và ảnh hưởng quốc tế tăng nhưng phụ thuộc nhiều vào Trung Quốc.",
          cutscene: {
            title: "Viện trợ quân sự từ Trung Quốc",
            description:
              "Nhận viện trợ lớn từ Trung Quốc đã trang bị cho quân đội những vũ khí hiện đại. Pháo hạng nặng, đạn dược, và vật tư quân sự đổ về liên tục. Các đơn vị pháo binh được phiên chế và huấn luyện. Quân đội Việt Nam trở nên mạnh mẽ hơn nhưng phụ thuộc nhiều vào Trung Quốc.",
            image: "/viet-nam-chinese-aid-1949.jpg",
            duration: 4000,
          },
        },
        {
          text: "Cân bằng viện trợ từ nhiều nước - Đa phương hóa",
          effects: { militaryPower: 15, diplomaticStanding: 12, resources: -5, morale: 8 },
          reasoning: "Chiến lược cân bằng, không phụ thuộc một nước và tăng tinh thần độc lập.",
          cutscene: {
            title: "Liên minh đa phương",
            description:
              "Cân bằng viện trợ từ nhiều nước đã giúp Việt Nam không phụ thuộc quá nhiều vào một quốc gia. Viện trợ từ Trung Quốc, Liên Xô, và các nước khác đều được tiếp nhận. Sự độc lập ngoại giao được duy trì và tinh thần tự lực được nâng cao.",
            image: "/viet-nam-multilateral-aid-1949.jpg",
            duration: 4000,
          },
        },
        {
          text: "Tự lực cánh sinh - Giảm phụ thuộc nước ngoài",
          effects: { militaryPower: 8, diplomaticStanding: 8, morale: 18, publicSupport: 12 },
          reasoning: "Tăng tinh thần độc lập và lòng dân nhưng quân lực phát triển chậm.",
          cutscene: {
            title: "Tự lực cánh sinh",
            description:
              "Quyết định tự lực cánh sinh đã tăng tinh thần độc lập của nhân dân và giành được lòng tin sâu sắc. Mặc dù quân lực phát triển chậm, nhưng sự tự tin, quyết tâm và lòng dân đã tăng lên đáng kể. Việt Nam tự tin vào khả năng của mình.",
            image: "/viet-nam-self-reliance-1949.jpg",
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
          <p className="text-slate-200 text-lg leading-relaxed">
            {displayedDescription}
            {!descriptionComplete && <span className="animate-pulse">▌</span>}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-slate-200">CHỌN CHIẾN LƯỢC:</h3>
        {descriptionComplete ? (
          <div className="space-y-2">
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
        ) : (
          <div className="text-amber-600/60 text-sm italic">⏳ Đang nhận tín hiệu... Vui lòng chờ...</div>
        )}
      </div>

      {selectedChoice !== null && (
        <div className="bg-green-900 border-2 border-green-600 rounded-lg p-4 text-green-200 animate-pulse">
          <p className="font-bold">✓ Chiến lược được thực hiện</p>
          <p className="text-sm mt-1">Chuyển sang nhiệm vụ tiếp theo...</p>
        </div>
      )}
    </div>
  )
}
