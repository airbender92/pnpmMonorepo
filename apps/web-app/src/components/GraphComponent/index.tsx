
import React, {useRef, useEffect} from 'react';

import Graph from '@utils/mxgraph/Graph'

interface GraphComponentProps {
  containerId: string;
}

const GraphComponent: React.FC<GraphComponentProps> = ({containerId}) => {
    const graphRef = useRef<Graph | null>(null);

    useEffect(() => {
        graphRef.current = new Graph(containerId);

        return () => {
            if(graphRef.current) {
                // Clean up
            }
        }
    }, [containerId])

    return <div id={containerId} style={{width: '500px', height: '500px'}}>hiss</div>
}

export default GraphComponent;