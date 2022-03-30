export const DebugUtilities = {
    drawGrid: function (grids) {
        // move to const
        const cellWidth = 32, maxX = 25, maxY = 18;
    
        let current;
        for (current = 0; current < maxX; current++) {
            grids.create(current * cellWidth, 300, 'vertical-line');
        }
        for (current = 0; current < maxY; current++) {
            grids.create(300, current * cellWidth, 'horizontal-line');
        }
    }
}
export default DebugUtilities;