import React, { useState, useEffect } from 'react'

const Clock = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()
      // Montreal timezone (America/Montreal = Eastern Time)
      const montrealTime = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Toronto',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
      setTime(montrealTime)
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="c-clock">
      {/* Globe SVG icon */}
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <span>MONTREAL_{time}</span>
    </div>
  )
}

export default Clock
