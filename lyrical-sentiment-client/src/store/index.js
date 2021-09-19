import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
  state() {
    return {
      musicOptions: [
        {
          artist: 'Lewis Capaldi',
          song: 'Bruises',
        },
        {
          artist: 'Coldplay',
          song: 'Adventure of a Lifetime',
        },
        {
          artist: 'The Weeknd',
          song: 'Blinding Lights',
        },
        {
          artist: 'Ed Sheeran',
          song: 'Castle on the Hill',
        },
        {
          artist: 'twenty one pilots',
          song: 'Mulberry Street',
        },
        {
          artist: 'Adele',
          song: 'Hello',
        },
        {
          artist: 'John Lennon',
          song: 'Imagine',
        },
        {
          artist: 'Maroon 5',
          song: 'Memories',
        },
        {
          artist: 'Dean Lewis',
          song: 'Waves',
        },
        {
          artist: 'John Legend',
          song: 'All of Me',
        },
      ],
      data: {},
    };
  },
  mutations: {
    updateData(state, payload) {
      state.data = payload;
    },
  },
});

export default store;
