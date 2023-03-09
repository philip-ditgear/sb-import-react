import { Button } from 'reakit/Button';
import { Tooltip, TooltipArrow, TooltipReference, useTooltipState } from 'reakit/Tooltip';

const TooltipComponent= () => { 
  const tooltip = useTooltipState();
  return (
    <>
      <TooltipReference {...tooltip} as={Button}>
        Hover me
      </TooltipReference>
      <Tooltip {...tooltip} aria-label="Hello world">
        Hello world
        <TooltipArrow {...tooltip} />
      </Tooltip>
    </>
  );
};
export default TooltipComponent;