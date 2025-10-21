"use client"

import { useEffect, useRef, useState } from "react"

export default function AudioManager() {
  const bgMusicRef = useRef<HTMLAudioElement>(null)
  const soundEffectRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const audio = bgMusicRef.current
    if (audio) {
      audio.volume = 0.2
      audio.loop = true
      
      // Thử phát nhạc nền khi component mount
      const playBackgroundMusic = async () => {
        try {
          await audio.play()
          setIsPlaying(true)
        } catch (error) {
          console.log('Autoplay bị chặn bởi trình duyệt. Người dùng cần tương tác để phát nhạc.')
          setIsPlaying(false)
        }
      }
      
      playBackgroundMusic()
    }
  }, [])

  const toggleMusic = () => {
    const audio = bgMusicRef.current
    if (audio) {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        audio.play().then(() => {
          setIsPlaying(true)
        }).catch(() => {
          console.log('Không thể phát nhạc')
        })
      }
    }
  }

  const toggleMute = () => {
    const audio = bgMusicRef.current
    if (audio) {
      audio.muted = !audio.muted
      setIsMuted(audio.muted)
    }
  }

  const playSound = (soundType: "select" | "success" | "fail" | "cutscene") => {
    if (soundEffectRef.current) {
      soundEffectRef.current.volume = 0.5
      // Using Web Audio API to generate simple sounds
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      switch (soundType) {
        case "select":
          oscillator.frequency.value = 800
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
          oscillator.start(audioContext.currentTime)
          oscillator.stop(audioContext.currentTime + 0.1)
          break
        case "success":
          oscillator.frequency.value = 1200
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2)
          oscillator.start(audioContext.currentTime)
          oscillator.stop(audioContext.currentTime + 0.2)
          break
        case "fail":
          oscillator.frequency.value = 400
          gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)
          oscillator.start(audioContext.currentTime)
          oscillator.stop(audioContext.currentTime + 0.3)
          break
      }
    }
  }

  return (
    <>
      <audio ref={bgMusicRef} src="/audio/background.mp3" preload="auto" />
      <audio ref={soundEffectRef} />
      
      {/* Nút điều khiển âm thanh */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={toggleMusic}
          className="bg-[#a8d261]/20 hover:bg-[#a8d261]/40 border border-[#a8d261]/40 rounded px-3 py-2 text-[#a8d261] font-mono text-sm transition-all duration-200"
          title={isPlaying ? "Tạm dừng nhạc nền" : "Phát nhạc nền"}
        >
          {isPlaying ? "⏸️" : "▶️"}
        </button>
        <button
          onClick={toggleMute}
          className="bg-[#a8d261]/20 hover:bg-[#a8d261]/40 border border-[#a8d261]/40 rounded px-3 py-2 text-[#a8d261] font-mono text-sm transition-all duration-200"
          title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
        >
          {isMuted ? "🔇" : "🔊"}
        </button>
      </div>
    </>
  )
}