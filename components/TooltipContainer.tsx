import TooltipComponent from "./Tooltip"
import {useState} from "react"

const TooltipContainer = () => {
    const [showTooltip, setShowTooltip] = useState(false)
  return (
    <div>
        <p>Toggle button to show tooltip component</p>
    <button onClick={() => setShowTooltip(!showTooltip)}>Toggle Tooltip</button>
    {showTooltip && <TooltipComponent />}
    </div>
  )
}

export default TooltipContainer