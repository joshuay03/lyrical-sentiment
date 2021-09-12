<template>
  <div class="font-VarelaRound grid place-items-center h-screen w-screen bg-purple-500">
    <div class="-mt-32">
      <Lyrics/>
    </div>
  </div>
</template>

<script>
import Lyrics from '@/components/Lyrics.vue';

export default {
  name: 'Home',
  components: {
    Lyrics,
  },
};
</script>
