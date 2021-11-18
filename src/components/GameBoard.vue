<template>
  <div
    class="grid gap-2 bg-green-800 rounded p-2"
    :class="`grid-cols-${size} grid-rows-${size}`"
  >
    <template v-for="row in size">
      <board-cell
        v-for="col in size"
        :key="`${row}-${col}`"
        :cell-state="getCellState(row, col)"
        :row="row"
        :col="col"
        @cell-clicked="(event) => $emit('cell-clicked', event)"
      />
    </template>
  </div>
</template>

<script>
import BoardCell from "./BoardCell";

export default {
  name: "GameBoard",
  components: { BoardCell },
  props: {
    size: { type: Number, default: 8 },
    state: Array,
  },
  methods: {
    getCellState(row = 0, col = 0) {
      return this.state[row - 1][col - 1];
    },
  },
};
</script>

<style scoped></style>
