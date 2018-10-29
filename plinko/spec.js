import { onScoreUpdated, runAnalysis } from './score';

describe('Score function', () => {
    it('should be testable', () => {
        expect(true).toBe(true);
    })

    describe('onScoreUpdated', () => {
        it('should save the items in the array properly', () => {
            const outputs = onScoreUpdated(300, 0.5, 0.8, 1);
            expect(outputs).toHaveLength(1);
        })
    });

    describe('knnAlgorithm', () => {
        it('should return the proper grouping', () => {
            const knnOutput = runAnalysis([[10, 0.5, 16, 1], [250, 0.5, 16, 4], [350, 0.5, 16, 4], [600, 0.5, 16, 5]])
            expect(knnOutput).toBe(4);
        })
    })
})