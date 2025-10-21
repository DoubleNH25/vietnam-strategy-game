import type { GameStats } from "@/context/game-context"

export interface GameEvent {
  id: string
  title: string
  description: string
  icon: string
  chapter: number[]
  isSpecial?: boolean
  triggerCondition?: (stats: GameStats, chapter: number, mission: number) => boolean
  choices: EventChoice[]
}

export interface EventChoice {
  text: string
  effects: Partial<GameStats>
  reasoning: string
}

export const gameEvents: GameEvent[] = [
  {
    id: "french-ultimatum",
    title: "Tối hậu thư của Pháp",
    description:
      "Pháp gửi tối hậu thư yêu cầu Việt Nam giải tán quân đội và chấp nhận quyền kiểm soát. Bạn phải quyết định ngay.",
    icon: "📜",
    chapter: [1, 2],
    triggerCondition: (stats) => stats.diplomaticStanding < 40,
    choices: [
      {
        text: "Từ chối quyết liệt, chuẩn bị kháng chiến",
        effects: { morale: 15, diplomaticStanding: -10, militaryPower: 5 },
        reasoning: "Tăng tinh thần nhưng mất ảnh hưởng quốc tế.",
      },
      {
        text: "Đàm phán để giành thời gian",
        effects: { morale: -5, diplomaticStanding: 10, resources: 5 },
        reasoning: "Giành thời gian chuẩn bị nhưng dân chúng mất niềm tin.",
      },
    ],
  },
  {
    id: "peasant-uprising",
    title: "Nông dân nổi dậy",
    description:
      "Nông dân ở vùng nông thôn nổi dậy phản đối chính sách của chính quyền. Bạn cần hành động nhanh chóng.",
    icon: "👨‍🌾",
    chapter: [1, 2],
    triggerCondition: (stats) => stats.publicSupport < 50,
    choices: [
      {
        text: "Gửi quân đội để dập tắt",
        effects: { publicSupport: -15, militaryPower: 5 },
        reasoning: "Kiểm soát tình hình nhưng mất lòng dân.",
      },
      {
        text: "Lắng nghe và cải cách chính sách",
        effects: { publicSupport: 20, resources: -10 },
        reasoning: "Khôi phục lòng dân nhưng tốn tài nguyên.",
      },
      {
        text: "Cử đại diện để thương lượng",
        effects: { publicSupport: 10, morale: 5 },
        reasoning: "Giải pháp cân bằng, ổn định tình hình.",
      },
    ],
  },
  {
    id: "supply-shortage",
    title: "Thiếu hụt lương thực",
    description: "Đường vận chuyển bị gián đoạn, lương thực thiếu hụt trầm trọng. Quân đội và dân cư đều đói khát.",
    icon: "🌾",
    chapter: [1, 2, 3],
    triggerCondition: (stats) => stats.resources < 40,
    choices: [
      {
        text: "Ưu tiên quân đội",
        effects: { militaryPower: 10, publicSupport: -10 },
        reasoning: "Quân đội mạnh nhưng dân chúng đói khát.",
      },
      {
        text: "Ưu tiên dân cư",
        effects: { publicSupport: 15, militaryPower: -5 },
        reasoning: "Dân chúng hài lòng nhưng quân đội yếu.",
      },
      {
        text: "Tìm nguồn cung cấp quốc tế",
        effects: { resources: 15, diplomaticStanding: 5 },
        reasoning: "Giải quyết vấn đề nhưng phụ thuộc nước ngoài.",
      },
    ],
  },
  {
    id: "american-support",
    title: "Hoa Kỳ đề nghị hỗ trợ",
    description:
      "Đại sứ Hoa Kỳ liên hệ đề nghị hỗ trợ quân sự và kinh tế. Tuy nhiên, điều kiện là phải chống lại Liên Xô.",
    icon: "🇺🇸",
    chapter: [2, 3],
    triggerCondition: (stats) => stats.militaryPower < 50 && stats.resources < 50,
    choices: [
      {
        text: "Chấp nhận hỗ trợ",
        effects: { militaryPower: 20, resources: 15, diplomaticStanding: -10 },
        reasoning: "Tăng sức mạnh nhưng mất độc lập ngoại giao.",
      },
      {
        text: "Từ chối để giữ độc lập",
        effects: { militaryPower: -5, resources: -5, morale: 10 },
        reasoning: "Giữ độc lập nhưng khó khăn hơn.",
      },
      {
        text: "Đàm phán điều kiện",
        effects: { militaryPower: 10, resources: 8, diplomaticStanding: -5 },
        reasoning: "Giải pháp cân bằng, nhưng rủi ro cao.",
      },
    ],
  },
  {
    id: "soldier-morale-crisis",
    title: "Khủng hoảng tinh thần quân đội",
    description:
      "Binh lính mệt mỏi sau những trận chiến liên tiếp. Tỷ lệ bỏ trốn tăng cao. Bạn cần khôi phục tinh thần.",
    icon: "🎖️",
    chapter: [2, 3],
    triggerCondition: (stats) => stats.morale < 45,
    choices: [
      {
        text: "Tăng lương và phúc lợi",
        effects: { morale: 20, resources: -15 },
        reasoning: "Khôi phục tinh thần nhưng tốn tài nguyên.",
      },
      {
        text: "Tuyên truyền về lý tưởng độc lập",
        effects: { morale: 15, publicSupport: 10 },
        reasoning: "Khôi phục tinh thần và lòng dân.",
      },
      {
        text: "Cho phép nghỉ ngơi",
        effects: { morale: 10, militaryPower: -10 },
        reasoning: "Khôi phục tinh thần nhưng quân lực yếu.",
      },
    ],
  },
  {
    id: "chinese-support",
    title: "Trung Quốc cung cấp vũ khí",
    description: "Trung Quốc đồng ý cung cấp vũ khí và huấn luyện quân sự. Đây là cơ hội lớn để tăng sức mạnh quân sự.",
    icon: "🇨🇳",
    chapter: [2, 3],
    triggerCondition: (stats) => stats.militaryPower < 60,
    choices: [
      {
        text: "Chấp nhận toàn bộ hỗ trợ",
        effects: { militaryPower: 25, diplomaticStanding: -5 },
        reasoning: "Tăng sức mạnh quân sự đáng kể.",
      },
      {
        text: "Chỉ chấp nhận một phần",
        effects: { militaryPower: 15, diplomaticStanding: 5 },
        reasoning: "Tăng sức mạnh nhưng giữ độc lập.",
      },
    ],
  },
  {
    id: "dien-bien-phu-preparation",
    title: "Chuẩn bị Điện Biên Phủ",
    description:
      "Tướng Võ Nguyên Giáp đề xuất kế hoạch tấn công căn cứ Pháp tại Điện Biên Phủ. Đây là cơ hội quyết định.",
    icon: "⚔️",
    chapter: [3],
    triggerCondition: (stats) => stats.militaryPower > 60 && stats.morale > 60,
    choices: [
      {
        text: "Phê chuẩn kế hoạch ngay",
        effects: { militaryPower: 10, morale: 20, resources: -20 },
        reasoning: "Cơ hội chiến thắng nhưng rủi ro cao.",
      },
      {
        text: "Chuẩn bị thêm thời gian",
        effects: { militaryPower: 5, morale: 5, resources: -10 },
        reasoning: "Giảm rủi ro nhưng mất cơ hội.",
      },
    ],
  },
  {
    id: "international-pressure",
    title: "Áp lực quốc tế",
    description: "Liên Hợp Quốc và các nước trung lập yêu cầu Pháp ngừng chiến tranh. Đây là cơ hội ngoại giao.",
    icon: "🌍",
    chapter: [2, 3],
    triggerCondition: (stats) => stats.diplomaticStanding > 50,
    choices: [
      {
        text: "Tận dụng áp lực để đàm phán",
        effects: { diplomaticStanding: 15, morale: 10 },
        reasoning: "Tăng ảnh hưởng quốc tế.",
      },
      {
        text: "Tiếp tục kháng chiến quân sự",
        effects: { militaryPower: 10, diplomaticStanding: -5 },
        reasoning: "Tập trung vào quân sự.",
      },
    ],
  },
]

export function getRandomEvent(stats: GameStats, chapter: number, mission: number): GameEvent | null {
  const possibleEvents = gameEvents.filter((event) => {
    const isChapterValid = event.chapter.includes(chapter)
    const conditionMet = event.triggerCondition ? event.triggerCondition(stats, chapter, mission) : true
    return isChapterValid && conditionMet
  })

  if (possibleEvents.length === 0) return null

  // 30% chance to trigger an event
  if (Math.random() > 0.3) return null

  return possibleEvents[Math.floor(Math.random() * possibleEvents.length)]
}
