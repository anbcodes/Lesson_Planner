<template>
  <v-card>
    <v-card-title primary-title>
      <v-flex shrink>
        <v-btn icon @click="moveStrandLeft()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-flex>
      {{strand.strandName}}
      <v-flex shrink>
        <v-btn icon @click="moveStrandRight()">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-flex>
      <v-flex shrink>
        <v-btn icon @click="createItemDialog = true">
          <v-icon>add</v-icon>
        </v-btn>
      </v-flex>
    </v-card-title>
    <v-flex v-if="totalTime > 0" mx-1>
      <v-progress-linear
        :value="timeDone/totalTime*100"
        :color="barColor"
        height="25"
        reactive
        rounded
      >
        <template v-slot="{ value }">
          <strong>{{timeDone}}min used {{totalTime-timeDone}}min left</strong>
        </template>
      </v-progress-linear>
    </v-flex>

    <template v-if="itemsLoaded">
      <v-flex v-for="item in items" :key="item.id" ma-1>
        <item :item="item" :strand="strand" />
      </v-flex>
    </template>
    <v-flex v-if="!itemsLoaded" ma-5 md12>
      <v-progress-linear indeterminate height="10"></v-progress-linear>
    </v-flex>
    <itemDialog
      v-model="createItemDialog"
      :item="{name: 'New Item', time: 30, color: 'red', strand:strand.id}"
      :create="true"
      :strand="strand"
    />
  </v-card>
</template>
<script>
import Item from "./Item";
import ItemDialog from "./ItemDialog";
export default {
  components: {
    Item,
    ItemDialog
  },
  props: {
    strand: Object,
    week: Number
  },
  created() {
    this.getItems();
    this.$bus.$on("dbItemUpdate", () => {
      this.getItems();
    });
    this.$bus.$on("dbUpdate", () => {
      this.getItems();
    });
  },

  data: () => ({
    numToDay: [
      "Logic",
      "Grammer",
      "Reasoning",
      "Exposition",
      "Debate",
      "Research"
    ],
    itemsLoaded: false,
    items: [],
    createItemDialog: false,
    timeDone: 0,
    totalTime: 0
  }),
  methods: {
    async moveStrandLeft() {
      this.$dayHandler.moveShownStrandUp(this.strand.strandName);
      this.$bus.$emit("localStorageUpdate");
    },
    async moveStrandRight() {
      this.$dayHandler.moveShownStrandDown(this.strand.strandName);
      this.$bus.$emit("localStorageUpdate");
    },
    async getItems() {
      this.items = await this.$db.getItems(this.strand);
      this.updateItemTotal();
      this.updateItemOrder();
      this.itemsLoaded = true;
    },
    updateItemTotal() {
      let timeDone = 0;
      let totalTime = 55;
      this.items.forEach(item => {
        timeDone += Number(item.time);
      });
      this.timeDone = timeDone;
      this.totalTime = totalTime;
    },
    updateItemOrder() {
      if (!this.strand.itemOrder) {
        this.strand.itemOrder = [];
      }
      this.items.forEach(item => {
        if (!this.strand.itemOrder.includes(item.id)) {
          this.strand.itemOrder.push(item.id);
        }
      });
      let reorderedItems = [];
      for (let x = 0; x < this.items.length; x++) {
        reorderedItems.push(
          this.items.filter(item => {
            return this.strand.itemOrder[x] === item.id;
          })[0]
        );
      }
      this.items = reorderedItems;
    }
  },
  watch: {
    strand: {
      handler() {
        this.getItems();
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    barColor() {
      if (this.items[0]) {
        return this.items[0].color;
      } else {
        return "white";
      }
    }
  }
};
</script>
