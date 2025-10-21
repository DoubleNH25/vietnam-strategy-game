"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"
import type { GameEvent } from "@/lib/events"

export interface EventContextType {
  currentEvent: GameEvent | null
  showEvent: (event: GameEvent) => void
  hideEvent: () => void
}

const EventContext = createContext<EventContextType | undefined>(undefined)

export function EventProvider({ children }: { children: React.ReactNode }) {
  const [currentEvent, setCurrentEvent] = useState<GameEvent | null>(null)

  const showEvent = useCallback((event: GameEvent) => {
    setCurrentEvent(event)
  }, [])

  const hideEvent = useCallback(() => {
    setCurrentEvent(null)
  }, [])

  return (
    <EventContext.Provider
      value={{
        currentEvent,
        showEvent,
        hideEvent,
      }}
    >
      {children}
    </EventContext.Provider>
  )
}

export function useEvent() {
  const context = useContext(EventContext)
  if (!context) {
    throw new Error("useEvent must be used within EventProvider")
  }
  return context
}
