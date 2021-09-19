<template>
  <div class="w-screen bg-purple-300">
    <div class="pt-16 mx-12">
      <span class="text-3xl grid place-items-center mb-12">Lyrical Sentiment</span>
      <div class="pb-16" v-for="item in store.state.data" :key="item.song">
        <div class="pl-4 text-2xl">
          <span>Artist: {{item.artist}}</span>
          <br>
          <span>Song: {{item.song}}</span>
          <br>
          <span>Song Sentiment: {{item.sentimentData.documentSentiment.score}}</span>
        </div>
        <Chart
          :sentences="item.sentimentData.sentences.map((sentence) => sentence.text.content)"
          :scores="item.sentimentData.sentences.map((sentence) => sentence.sentiment.score)"
        />
      </div>
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
