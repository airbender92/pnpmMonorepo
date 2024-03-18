
const mxFactory  = require('mxgraph')

const mx = mxFactory({
    mxBasePath: './src',
    mxImageBasePath: './src/images'
})
const { mxGraph } = mx;

class BaseGraph {

    containerId: string;
    graph: typeof mxGraph;

    constructor(containerId: string){
        this.containerId = containerId;
        this.graph = new mxGraph(document.getElementById(containerId))
    }
}

export default BaseGraph;