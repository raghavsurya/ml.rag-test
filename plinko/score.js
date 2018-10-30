import _ from 'lodash';
const outputs = [];


const onScoreUpdated = (dropPosition, bounciness, ballSize, bucketLabel) => {
    outputs.push([dropPosition, bounciness, ballSize, bucketLabel]);
    return outputs;
};

const predictionPoint = 300;
const k = 3;

const distance = (point) => {
    return Math.abs(point - predictionPoint);
}

const runAnalysis = (array) => {
    return _.chain(array)
            .map(row => [distance(row[0]), row[3]])
            .sortBy(row => row[0])
            .slice(0, k)
            .countBy(row => row[1]) //{ "1": 2, "4": 3 }
            .toPairs()
            .sortBy(row => row[1])
            .last()
            .first()
            .parseInt()
            .value();
}

const splitDataSet = (data, testCount) => {
    const shuffledData = _.shuffle(data);

    const testData = _.slice(shuffledData, 0, testCount);
    const trainingData = _.slice(shuffledData, testCount);

    return [testData, trainingData];
}

export { onScoreUpdated, runAnalysis };