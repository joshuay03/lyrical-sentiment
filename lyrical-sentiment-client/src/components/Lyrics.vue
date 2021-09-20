<template>
  <div class="w-screen bg-gray-300">
    <div class="" v-if="!state.loading">
      <div class="grid place-items-center pt-16 pb-16">
        <span class="text-3xl pb-10">Lyrics</span>
        <input class="grid place-items-center bg-purple-300 w-60 h-12 rounded-lg text-xl
          cursor-pointer hover:bg-blue-300" type="button" value="View Analysis Results"
          @click="analyseLyrics">
      </div>
      <div class="grid grid-cols-3 mx-12">
        <div v-for="item in store.state.data" :key="item.song">
          <span class="text-xl font-semibold">Artist: {{item.artist}}</span>
          <br>
          <span class="text-xl font-semibold">Song: {{item.song}}</span>
          <br>
          <p class="whitespace-pre-line pt-12 pb-16">
            {{item.lyrics}}
          </p>
        </div>
      </div>
    </div>

    <div class="h-screen grid place-content-center w-full text-4xl" v-if="state.loading">
      <div class="flex">
        <div style="border-top-color:transparent"
        class="w-14 h-14 border-4 border-red-700 border-dashed rounded-full animate-spin">
        </div>
        <span class="pl-6 pt-2">
          Loading
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  name: 'Lyrics',
  setup() {
    const router = useRouter();
    const store = useStore();

    const state = reactive({
      loading: false,
    });

    const analyseLyrics = () => {
      state.loading = true;
      router.push({ name: 'Sentiment' });
      setTimeout(() => {
        state.loading = false;
      }, 500);
    };

    return {
      store,
      state,
      analyseLyrics,
    };
  },
};
</script>
