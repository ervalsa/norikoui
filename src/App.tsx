import { Button } from "./components/ui"

export function App() {
  return (
    <div className="container flex h-screen items-center justify-center">
      <Button size="md" onPress={() => console.log("llolll")}>
        Button
      </Button>
    </div>
  )
}
