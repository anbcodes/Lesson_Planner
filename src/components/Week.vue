<template>
  <v-layout centered>
    <v-spacer />
    <template v-if="strandsLoaded">
      <template v-for="value in $dayHandler.shownStrands">
        <v-flex centered v-if="value.show" :key="value.strand.id" mx-1>
          <strand :strand="value.strand" :week="week" />
        </v-flex>
      </template>
    </template>
    <v-flex v-if="!strandsLoaded" ma-5 md12>
      <v-progress-linear indeterminate height="10"></v-progress-linear>
    </v-flex>

    <v-spacer />
  </v-layout>
</template>
<script>
import Strand from "./Strand";

export default {
  components: {
    Strand
  },
  props: {
    week: Number
  },
  created() {
    this.getStrands();
    this.$bus.$on("localStorageUpdate", () => {
      this.$dayHandler.onOptionsUpdate();
      this.$forceUpdate();
    });
    this.$bus.$on("dbUpdate", () => {
      this.$nextTick(() => {
        this.strandsLoaded = false;
        this.getStrands();
      });
    });
    this.$bus.$on("dbStrandUpdate", () => {
      this.getStrands();
    });
  },
  data: () => ({
    shownDays: [],
    shownDaysFiltered: [],
    strands: [],
    strandsLoaded: false
  }),
  methods: {
    async getStrands() {
      let strands = await this.$db.getStrands(this.week);
      this.strands = strands;
      this.$dayHandler.addStrands(strands);
      this.$dayHandler.onOptionsUpdate();

      this.strandsLoaded = true;
    }
  }
};
</script>
