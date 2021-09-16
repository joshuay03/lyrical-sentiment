<template>
  <div>
    <form class="grid grid-rows-6 w-form" v-on:submit="searchLyrics">
      <div class="relative">
        <label class="absolute bottom-1 left-0 text-3xl">Artist</label>
      </div>
      <div class="w-full">
        <input class="w-full border-2 border-gray-500 bg-blue-200 rounded-md h-12 pl-2 text-xl"
          type="text" required v-model="artist">
      </div>
      <div class="relative">
        <label class="absolute bottom-1 left-0 text-3xl">Song</label>
      </div>
      <div class="w-full mb-2">
        <input class="w-full border-2 border-gray-500 bg-blue-200 rounded-md h-12 pl-2 text-xl"
          type="text" required v-model="song">
      </div>
      <div></div>
      <div class=" grid place-items-center">
        <input class="w-24 h-12 rounded-lg text-xl cursor-pointer hover:bg-blue-200"
          type="submit" value="Search">
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'Lyrics',
  setup() {
    const artist = ref('');
    const song = ref('');

    const searchLyrics = (e) => {
      e.preventDefault();

      axios
        .get(`/music/lyrics?artist=${artist.value}&song=${song.value}`)
        .then((res) => console.log(res));
    };

    return {
      artist,
      song,
      searchLyrics,
    };
  },
};
</script>
