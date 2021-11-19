<template>
  <div
    id="app"
    class="
      antialiased
      relative
      min-h-screen
      flex
      justify-center
      items-center
      bg-indigo-900
    "
  >
    <div class="max-w-4xl">
      <score-board :scores="scores" :remainder="remainingMoves" class="mb-4" />
      <game-board
        :state="gameState"
        :size="boardSize"
        @cell-clicked="updateGameState"
      />
    </div>
  </div>
</template>

<script>
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import {
  flipArray,
  getColumn,
  setColumn,
  // eslint-disable-next-line
  getDiagonals,
  // eslint-disable-next-line
  setDiagonals,
} from "./components/Utilities";

export default {
  name: "App",
  components: { ScoreBoard, GameBoard },
  data: () => ({
    gameState: undefined,
    boardSize: 8,
    playerCount: 2,
    player: 1,
  }),
  created() {
    this.generateGameState();
  },
  computed: {
    // Count the 0s
    remainingMoves() {
      return this.gameState.reduce(
        (sum, row) =>
          sum +
          row.reduce((rowSum, value) => (value === 0 ? ++rowSum : rowSum), 0),
        0
      );
    },
    // Count the numbers > 0 on the board
    scores() {
      const scores = {};
      for (let player = 1; player <= this.playerCount; player++) {
        scores[player] = this.gameState.reduce(
          (sum, row) =>
            sum +
            row.reduce(
              (rowSum, value) => (value === player ? ++rowSum : rowSum),
              0
            ),
          0
        );
      }
      return scores;
    },
  },
  methods: {
    // Initialize the game board
    generateGameState() {
      this.gameState = Array(this.boardSize)
        .fill()
        .map(() => Array(this.boardSize).fill(0));
    },
    // This is the function for a player move
    updateGameState({ row, col }) {
      // set cell - user vue $set since array reactivity can be weird
      const newRow = this.gameState[row].slice(0);
      newRow[col] = this.player;
      this.$set(this.gameState, row, newRow);

      // check if there are any pieces to flip
      this.checkForFlips({ row, col });

      // switch player
      this.player = this.player === 1 ? 2 : 1;
    },
    // Update the board with the flipped arrays
    checkForFlips(location = { row: 0, col: 0 }) {
      // Check rows
      const row = this.gameState[location.row];
      this.$set(this.gameState, row, flipArray(row, this.player));

      //Check cols
      const col = getColumn(this.gameState, location.col);
      this.gameState = setColumn(
        this.gameState,
        flipArray(col, this.player),
        location.col
      );

      // Check Diagonals
      // const { forward, backward } = getDiagonals(this.gameState, location);
      // const diagonals = {
      //   forward: flipArray(forward, this.player),
      //   backward: flipArray(backward, this.player),
      // };
      // this.gameState = setDiagonals(this.gameState, diagonals, location);
    },
  },
};
</script>
h

<style></style>
