import { useState } from "react"
import { Button } from "./components/ui"
import { AArrowDown } from "lucide-react"

export function App() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="container flex h-screen items-center justify-center">
      <Button loading={loading} prefix={<AArrowDown />} onPress={handleClick}>
        Button
      </Button>
    </div>
  )
}
