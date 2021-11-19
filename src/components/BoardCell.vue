<template>
  <div
    class="h-24 w-24 rounded flex items-center justify-center bg-green-100"
    :class="hoverClass"
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
    cellState: { type: Number, default: 0 },
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
    hoverClass() {
      return !this.showMarker ? "cursor-pointer hover:bg-green-200" : undefined;
    },
  },
  methods: {
    cellClicked() {
      if (!this.showMarker) {
        this.$emit("cell-clicked");
      }
    },
  },
};
</script>

<style scoped></style>
