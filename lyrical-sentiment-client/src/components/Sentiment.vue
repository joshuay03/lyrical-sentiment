<template>
  <div class="w-screen bg-gray-300">
    <div class="pt-16 mx-12">
      <span class="text-3xl grid place-items-center">Lyrical Sentiment</span>
      <span class="text-xl grid place-items-center mb-12">
        <a href="https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values"
          target="_blank"
          class="hover:text-blue-500 underline text-red-500">
          interpretation
        </a>
      </span>
      <div class="pb-16" v-for="item in store.state.data" :key="item.song">
        <div class="mx-10 text-2xl grid grid-cols-2">
          <div>
            <span>Artist: {{item.artist}}</span>
            <br>
            <span>Song: {{item.song}}</span>
          </div>
          <div class="grid place-content-end">
            <span>Song Sentiment Score: {{item.sentimentData.documentSentiment.score}}</span>
            <span>
              Song Sentiment Magnitude: {{item.sentimentData.documentSentiment.magnitude}}
            </span>
          </div>
        </div>
        <Chart
          :labels="item.sentimentData.sentences.map((sentence) => sentence.text.content)"
          :scoreData="item.sentimentData.sentences.map((sentence) => sentence.sentiment.score)"
          :magnitudeData="item.sentimentData.sentences.map((sentence) =>
            sentence.sentiment.magnitude)"
          title="Sentiment Score & Magnitude of Lyrics"
        />
        <hr class="mt-14">
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
