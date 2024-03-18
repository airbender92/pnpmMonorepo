
import React, {useRef, useEffect} from 'react';

import Graph from '@utils/mxgraph/Graph'

interface GraphComponentProps {
  containerId: string;
}

const GraphComponent: React.FC<GraphComponentProps> = ({containerId}) => {
    const graphRef = useRef<Graph | null>(null);

    const handleInitData = () => {
        const {mx, graph} = graphRef.current || {};
        const {mxPoint} = mx;
        var parent = graph.getDefaultParent();
        graph.getModel().beginUpdate();
        try
        {
            var v1 = graph.insertVertex(parent, null, 'Process', 60, 60, 90, 40);
            var v2 = graph.insertVertex(v1, null, 'in', 0, 0.5, 20, 20, 'fontSize=9;shape=ellipse;resizable=0;');
            v2.geometry.offset = new mxPoint(-10, -10);
            v2.geometry.relative = true;
            var v3 = graph.insertVertex(v1, null, 'out', 1, 0.5, 20, 20, 'fontSize=9;shape=ellipse;resizable=0;');
            v3.geometry.offset = new mxPoint(-10, -10);
            v3.geometry.relative = true;
        }
        finally
        {
            // Updates the display
            graph.getModel().endUpdate();
        }
    }

    useEffect(() => {
        graphRef.current = new Graph(containerId);
        handleInitData()
        return () => {
            if(graphRef.current) {
                // Clean up
            }
        }
    }, [containerId])

    return <div id={containerId} style={{width: '500px', height: '500px'}}>hiss</div>
}

export default GraphComponent;