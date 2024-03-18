
const mxFactory  = require('mxgraph')

const mx = mxFactory({
    mxBasePath: './src',
    mxImageBasePath: './src/images'
})
const { mxGraph } = mx;

class BaseGraph {
    mx: typeof mxFactory;
    containerId: string;
    graph: typeof mxGraph;

    constructor(containerId: string){
        this.mx = mx;
        this.containerId = containerId;
        this.graph = new mxGraph(document.getElementById(containerId))
    }
}

export default BaseGraph;