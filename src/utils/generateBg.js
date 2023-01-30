const generateSampleHeatMap = () => {
    const points = [];
    let max = 0;
    const width = window.innerWidth;
    const height = window.innerHeight;
    let len = 100;

    while (len--) {
        const val = Math.floor(Math.random() * 100);
        max = Math.max(max, val);
        const point = {
            x: Math.floor(Math.random() * width),
            y: Math.floor(Math.random() * height),
            value: val,
        };
        points.push(point);
    }
    return points;
};

export default generateSampleHeatMap;
