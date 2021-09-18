<template>
  <div class="h-screen w-screen bg-purple-400">
    <div class="grid grid-cols-3 pl-12" v-if="!state.loading">
      <div class="mt-64">
        <span class="text-3xl">Some Options</span>
        <div class="grid grid-cols-2 grid-rows-5 gap-2 mt-4 mb-8">
          <button class="grid grid-rows-2 place-items-start bg-blue-500 w-64 pl-4 rounded-lg py-2
            hover:bg-blue-200" v-for="music in musicOptions" :key="music.song"
            @click="addMusic(music)">
            <label>Artist: {{music.artist}}</label>
            <label>Song: {{music.song}}</label>
          </button>
        </div>
      </div>

      <div class="mt-64 grid place-items-center">
        <span class="text-3xl grid place-items-center mb-12">Enter 5 Songs to Analyse</span>
        <form class="grid grid-rows-6 w-form" v-on:submit="searchLyrics">
          <div class="relative">
            <label class="absolute bottom-1 left-0 text-3xl">Artist</label>
          </div>
          <div class="w-full">
            <input class="w-full border-2 border-gray-500 bg-blue-200 rounded-md h-12 pl-2 text-xl"
              type="text" required v-model="state.selecteArtist">
          </div>
          <div class="relative">
            <label class="absolute bottom-1 left-0 text-3xl">Song</label>
          </div>
          <div class="w-full mb-2">
            <input class="w-full border-2 border-gray-500 bg-blue-200 rounded-md h-12 pl-2 text-xl"
              type="text" required v-model="state.selectedSong">
          </div>
          <div></div>
          <div class="grid place-items-center grid-cols-2">
            <input class="w-24 h-12 rounded-lg text-xl cursor-pointer hover:bg-blue-200"
              type="button" value="Add" :disabled="state.musicList.length === 5" @click="addMusic">
            <input class="w-24 h-12 rounded-lg text-xl cursor-pointer hover:bg-blue-200"
              type="button" value="Analyse" :disabled="state.musicList.length !== 5"
              @click="searchLyrics">
          </div>
        </form>
      </div>

      <div class="mt-64 pl-12">
        <span class="text-3xl">Music List</span>
        <div class="grid grid-rows-5 gap-2 mt-4">
          <div class="flex gap-2" v-for="music in state.musicList" :key="music.song">
            <div class="grid grid-rows-2 place-items-start bg-blue-500 w-64 pl-4 rounded-lg py-2">
              <label>Artist: {{music.artist}}</label>
              <label>Song: {{music.song}}</label>
            </div>
            <button class="grid place-items-center bg-red-600 w-32 rounded-lg py-4
            hover:bg-red-700" @click="removeMusic(music)">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="state.loading">
      test
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
import router from '../router/index';

export default {
  name: 'Lyrics',
  setup() {
    const store = useStore();

    const { musicOptions } = store.state;
    const state = reactive({
      selectedArtist: '',
      selectedSong: '',
      musicList: [],
      loading: false,
    });

    const addMusic = (music) => {
      if (state.musicList.length < 5) {
        if (music) state.musicList.push(music);
        else if (state.selectedArtist && state.selectedSong) {
          state.musicList.push({
            artist: state.selectedArtist,
            song: state.selectedSong,
          });
          state.selectedArtist = '';
          state.selectedSong = '';
        }
      } else {
        alert('Music List has a max limit of 5 songs!');
      }
    };

    const removeMusic = (music) => {
      const itemToRemove = state.musicList.find((item) => item.artist === music.artist
        && item.song === music.song);
      if (itemToRemove) {
        const indexOfItemToRemove = state.musicList.indexOf(itemToRemove);
        state.musicList.splice(indexOfItemToRemove, 1);
      }
    };

    const searchLyrics = () => {
      state.loading = true;

      let musicListQuery = '';

      for (let i = 0; i < state.musicList.length; i++) {
        musicListQuery += `artist${(i + 1).toString()}=${state.musicList[i].artist}`;
        musicListQuery += '&';
        musicListQuery += `song${(i + 1).toString()}=${state.musicList[i].song}`;
        if (i !== state.musicList.length - 1) musicListQuery += '&';
      }

      axios
        .get(`/music/lyrics?numSongs=${state.musicList.length}&${musicListQuery}`)
        .then((res) => store.commit('updateData', res.data))
        .then(() => router.push({ name: 'Sentiment' }));
    };

    return {
      musicOptions,
      state,
      addMusic,
      removeMusic,
      searchLyrics,
    };
  },
};
</script>
