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
  props: ['sentences', 'scores'],
  setup(props) {
    const chart = {
      id: 'line',
      type: 'line',
      data: {
        labels: props.sentences,
        datasets: [
          {
            data: props.scores,
            borderColor: 'rgb(0, 0, 255)',
            pointBackgroundColor: 'rgb(255, 0, 0)',
            pointRadius: 5,
            pointHitRadius: 12,
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
            text: 'Sentiment Score of Lyrics',
            font: {
              size: 20,
            },
            padding: 30,
            color: 'rgb(0, 0, 0)',
          },
          legend: {
            display: false,
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
