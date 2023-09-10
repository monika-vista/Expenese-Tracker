import ChartBar from './ChartBar'

import './Chart.css'

const Chart:React.FC<{datapoints:{label:string, value:number}[]}> = props => {
    const dataPointValues = props.datapoints.map(dataPoint => dataPoint.value)

    const totalMaximum = Math.max(...dataPointValues);

    return (<div className="chart">
        {props.datapoints.map(datapoint => (<ChartBar
             value={datapoint.value} maxValue={totalMaximum}
            label={datapoint.label} />))}
    </div>)
}

export default Chart;