<template>
  <div class="w-full">
    <div class="mx-12" v-for="item in store.state.data" :key="item.song">
      <Chart
        :sentences="item.sentimentData.sentences.map((sentence) => sentence.text.content)"
        :scores="item.sentimentData.sentences.map((sentence) => sentence.sentiment.score)"
      />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import Chart from './Chart.vue';

export default {
  name: 'Sentiment',
  components: { Chart },
  setup() {
    const store = useStore();

    return {
      store,
    };
  },
};
</script>
