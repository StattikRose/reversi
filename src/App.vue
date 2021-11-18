<template>
  <div
    id="app"
    class="antialiased relative min-h-screen flex justify-center items-center"
  >
    <div class="max-w-4xl">
      <game-board v-if="gameState" :state="gameState" :size="boardSize" />
    </div>
  </div>
</template>

<script>
import GameBoard from "./components/GameBoard";

export default {
  name: "App",
  components: { GameBoard },
  data: () => ({
    gameState: undefined,
    boardSize: 8,
  }),
  created() {
    this.generateGameState();
  },
  methods: {
    /* Initialize the game board */
    generateGameState() {
      this.gameState = Array(this.boardSize)
        .fill()
        .map(() => Array(this.boardSize).fill(0));
    },
    updateGameState() {
      // set cell
      // check if there are any pieces to flip
    },
  },
};
</script>
h

<style></style>
