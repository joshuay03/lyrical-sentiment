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
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: {
              autoSkip: false,
              maxRotation: 80,
              minRotation: 80,
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
