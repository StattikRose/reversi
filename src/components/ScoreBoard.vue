<template>
  <div class="p-2 bg-green-800 text-white rounded shadow">
    <div class="text-center text-3xl">Reversi Board Game</div>
    <div class="text-center text-lg">Remaining Moves: {{ remainder }}</div>
    <div class="flex justify-between items-center">
      <div
        v-for="player in playerScores"
        :key="player.number"
        class="text-center"
      >
        <div>Player {{ player.number }}</div>
        <div class="text-4xl">{{ player.score }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScoreBoard",
  props: {
    scores: Object,
    remainder: Number,
  },
  computed: {
    // format the players so they are easier to iterate
    playerScores() {
      return Object.entries(this.scores).map(([key, value]) => ({
        number: key,
        score: value,
      }));
    },
  },
};
</script>

<style scoped></style>
