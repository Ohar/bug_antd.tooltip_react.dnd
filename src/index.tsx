import { type ReactNode, useRef } from 'react'

import { Tooltip } from 'antd'
import { DndProvider, useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root')!)

const DnDElementWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [, drag] = useDrag({ type: 'foo' })

  drag(ref)

  return (
    <div
      ref={ref}
      style={{ cursor: 'grab' }}
    >
      {children}
    </div>
  )
}

const CustomMetricListItem = () => (
  <DnDElementWrapper>
    <div style={{
      backgroundColor: 'gold',
      paddingTop: '20px',
      textAlign: 'center',
    }}>
      <Tooltip title='Part of this tooltip is rendered over draggable item till dragging, which is wrong'>
        <p>Hover over this item, wait for the tooltip to show on and drag this item after that.</p>
        <p>You could see that part of tooltip is rendered over the draggable item till dragging. This is the Bug.</p>
      </Tooltip>
    </div>
  </DnDElementWrapper>
)

root.render(
  <DndProvider backend={HTML5Backend}>
    <div style={{ width: '100%', backgroundColor: 'red', display: 'flex', flexDirection: 'column' }}>
      <CustomMetricListItem />
      <CustomMetricListItem />
      <CustomMetricListItem />
      <CustomMetricListItem />
      <CustomMetricListItem />
      <CustomMetricListItem />
      <CustomMetricListItem />
      <CustomMetricListItem />
      <CustomMetricListItem />
      <CustomMetricListItem />
    </div>
  </DndProvider>,
)
