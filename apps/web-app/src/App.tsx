
import React, {useRef, useEffect} from 'react';
import { isBlank } from 'common'
import GraphComponent from '@components/GraphComponent'

const App: React.FC = () => {

  return (
    <>
    <GraphComponent containerId='graphContainer'></GraphComponent>
    <p>undefined isBlank - {isBlank(undefined) ? 'true' : false}</p>
    </>
  )
}

export default App
