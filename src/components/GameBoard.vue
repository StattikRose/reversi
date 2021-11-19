<template>
  <div
    class="grid gap-2 bg-green-800 rounded p-2 shadow"
    :class="`grid-cols-${size} grid-rows-${size}`"
    :key="boardKey"
  >
    <template v-for="(row, rowIndex) in size">
      <board-cell
        v-for="(col, colIndex) in size"
        :key="`${row}-${col}-${state[rowIndex][colIndex]}`"
        :cell-state="state[rowIndex][colIndex]"
        :row="row"
        :col="col"
        @cell-clicked="$emit('cell-clicked', { row: rowIndex, col: colIndex })"
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
  computed: {
    boardKey() {
      return JSON.stringify(this.state);
    },
  },
};
</script>

<style scoped></style>
