import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
    'Janeiro',
  ],
  datasets: [
    {
      label: '',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#f2c215',
      borderColor: '#f2c215',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#363740',
      pointBackgroundColor: '#f2c215',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#f2c215',
      pointHoverBorderColor: '#363740',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      hideInLegendAndTooltip: false,
      data: [10, 29, 130, 481, 656, 955, 1240, 1550, 1790, 2139, 3690, 5690],
    },
  ],
};

export default class LineChart extends Component {
  render() {
    return (
      <div>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}
