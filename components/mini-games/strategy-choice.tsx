"use client"

import { useState } from "react"

interface StrategyOption {
  id: string
  name: string
  description: string
  riskLevel: "low" | "medium" | "high"
  effects: Record<string, number>
}

interface StrategyChoiceProps {
  title: string
  options: StrategyOption[]
  onSelect: (option: StrategyOption) => void
}

export default function StrategyChoice({ title, options, onSelect }: StrategyChoiceProps) {
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (option: StrategyOption) => {
    setSelected(option.id)
    setTimeout(() => {
      onSelect(option)
    }, 500)
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "bg-green-900 border-green-600"
      case "medium":
        return "bg-yellow-900 border-yellow-600"
      case "high":
        return "bg-red-900 border-red-600"
      default:
        return "bg-slate-800 border-slate-700"
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-amber-400">{title}</h3>

      <div className="grid gap-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option)}
            disabled={selected !== null}
            className={`p-4 rounded-lg border-2 transition text-left ${
              selected === option.id
                ? "bg-amber-600 border-amber-400"
                : selected !== null
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:border-amber-600"
            } ${!selected || selected === option.id ? "" : getRiskColor(option.riskLevel)}`}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-slate-100">{option.name}</h4>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  option.riskLevel === "low"
                    ? "bg-green-600 text-white"
                    : option.riskLevel === "medium"
                      ? "bg-yellow-600 text-white"
                      : "bg-red-600 text-white"
                }`}
              >
                {option.riskLevel === "low"
                  ? "Rủi ro thấp"
                  : option.riskLevel === "medium"
                    ? "Rủi ro trung bình"
                    : "Rủi ro cao"}
              </span>
            </div>
            <p className="text-sm text-slate-300 mb-3">{option.description}</p>
            <div className="text-xs text-slate-400 space-y-1">
              {Object.entries(option.effects).map(([key, value]) => (
                <div key={key}>
                  {key}: {value > 0 ? "+" : ""}
                  {value}
                </div>
              ))}
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="bg-green-900 border border-green-600 rounded p-3 text-green-200 text-sm">
          Chiến lược được chọn. Thực hiện...
        </div>
      )}
    </div>
  )
}
