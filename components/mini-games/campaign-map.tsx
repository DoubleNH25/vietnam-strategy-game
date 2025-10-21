"use client"

import { useState } from "react"

interface MapLocation {
  id: string
  name: string
  x: number
  y: number
  type: "city" | "base" | "battlefield"
  status: "controlled" | "contested" | "enemy"
}

interface CampaignMapProps {
  locations: MapLocation[]
  onLocationClick?: (location: MapLocation) => void
}

export default function CampaignMap({ locations, onLocationClick }: CampaignMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  const handleLocationClick = (location: MapLocation) => {
    setSelectedLocation(location.id)
    onLocationClick?.(location)
  }

  const getLocationColor = (status: string) => {
    switch (status) {
      case "controlled":
        return "fill-green-500"
      case "contested":
        return "fill-yellow-500"
      case "enemy":
        return "fill-red-500"
      default:
        return "fill-slate-500"
    }
  }

  const getLocationIcon = (type: string) => {
    switch (type) {
      case "city":
        return "🏛️"
      case "base":
        return "🏕️"
      case "battlefield":
        return "⚔️"
      default:
        return "📍"
    }
  }

  return (
    <div className="bg-slate-800 border border-amber-600 rounded-lg p-6">
      <h3 className="text-lg font-bold text-amber-400 mb-4">Bản đồ chiến dịch</h3>

      <svg viewBox="0 0 400 500" className="w-full border border-slate-700 rounded bg-slate-900">
        {/* Map background */}
        <rect width="400" height="500" fill="#1e293b" />

        {/* Grid lines */}
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={`grid-${i}`} opacity="0.1">
            <line x1={i * 100} y1="0" x2={i * 100} y2="500" stroke="white" strokeWidth="1" />
            <line x1="0" y1={i * 100} x2="400" y2={i * 100} stroke="white" strokeWidth="1" />
          </g>
        ))}

        {/* Locations */}
        {locations.map((location) => (
          <g key={location.id} onClick={() => handleLocationClick(location)} className="cursor-pointer">
            <circle
              cx={location.x}
              cy={location.y}
              r="12"
              className={`${getLocationColor(location.status)} transition hover:opacity-80`}
              opacity={selectedLocation === location.id ? 1 : 0.7}
            />
            <circle
              cx={location.x}
              cy={location.y}
              r="12"
              fill="none"
              stroke={selectedLocation === location.id ? "#fbbf24" : "none"}
              strokeWidth="2"
            />
            <text x={location.x} y={location.y + 25} textAnchor="middle" className="text-xs fill-slate-300">
              {location.name}
            </text>
          </g>
        ))}
      </svg>

      {selectedLocation && (
        <div className="mt-4 p-3 bg-slate-700 rounded text-sm text-slate-300">
          <p className="font-bold text-amber-400">{locations.find((l) => l.id === selectedLocation)?.name}</p>
          <p className="text-xs mt-1">
            {locations.find((l) => l.id === selectedLocation)?.type === "city"
              ? "Thành phố"
              : locations.find((l) => l.id === selectedLocation)?.type === "base"
                ? "Căn cứ"
                : "Chiến trường"}
          </p>
        </div>
      )}
    </div>
  )
}
