<template>
  <div
    class="h-24 w-24 rounded flex items-center justify-center bg-green-100"
    @click="cellClicked"
  >
    <div
      v-if="showMarker"
      class="rounded-full h-20 w-20 shadow"
      :class="markerColor"
    ></div>
  </div>
</template>

<script>
export default {
  name: "BoardCell",
  props: {
    row: Number,
    col: Number,
    cellState: Number,
  },
  computed: {
    showMarker() {
      return this.cellState !== 0;
    },
    markerColor() {
      return this.showMarker
        ? this.cellState === 1
          ? "bg-white"
          : "bg-black"
        : undefined;
    },
  },
  methods: {
    cellClicked() {
      const { row, col } = this;

      if (!this.showMarker) {
        this.$emit("cell-clicked", { row, col });
      }
    },
  },
};
</script>

<style scoped></style>
