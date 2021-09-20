<template>
  <vue3-chart-js
    :id="chart.id"
    :type="chart.type"
    :data="chart.data"
    :options="chart.options"
  ></vue3-chart-js>
</template>

<script>
import Vue3ChartJs from '@pathscale/vue3-chartjs';

export default {
  name: 'Chart',
  components: { Vue3ChartJs },
  props: ['labels', 'scoreData', 'magnitudeData', 'title'],
  setup(props) {
    const chart = {
      id: 'line',
      type: 'line',
      data: {
        labels: props.labels,
        datasets: [
          {
            data: props.scoreData,
            borderColor: 'rgb(0, 0, 230)',
            pointBackgroundColor: 'rgb(225, 0, 0)',
            pointRadius: 5,
            pointHitRadius: 12,
            label: 'Sentiment score',
          },
          {
            data: props.magnitudeData,
            borderColor: 'rgb(0, 200, 0)',
            pointBackgroundColor: 'rgb(225, 0, 0)',
            pointRadius: 5,
            pointHitRadius: 12,
            label: 'Sentiment Magnitude',
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: {
              autoSkip: false,
              maxRotation: 75,
              minRotation: 75,
              color: 'rgb(0, 0, 0)',
              font: {
                size: 16,
              },
            },
            grid: {
              color: 'rgb(30, 60, 100)',
            },
          },
          y: {
            ticks: {
              color: 'rgb(0, 0, 0)',
              font: {
                size: 16,
              },
            },
            grid: {
              color: 'rgb(30, 60, 100)',
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: props.title,
            font: {
              size: 20,
            },
            padding: 30,
            color: 'rgb(0, 0, 0)',
          },
          legend: {
            labels: {
              color: 'rgb(0, 0, 0)',
            },
          },
        },
      },
    };
    return {
      chart,
    };
  },
};
</script>
