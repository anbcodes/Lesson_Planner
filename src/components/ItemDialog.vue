<template>
  <v-dialog v-model="value" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">{{itemToSave.name}}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field label="Name" v-model="itemToSave.name" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                label="Time"
                v-model="itemToSave.time"
                suffix="Minutes"
                type="number"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-autocomplete
                :items="['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'blue-grey', 'grey']"
                label="Color"
                v-model="itemToSave.color"
                :color="itemToSave.color"
              ></v-autocomplete>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <editor v-model="itemToSave.notes" />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn v-if="!create" color="red darken-1" text @click="removeItem()">Delete</v-btn>
        <v-btn color="blue darken-1" text @click="close(false)">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="close(true)">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import Editor from "./Editor";

export default {
  props: {
    value: Boolean,
    item: Object,
    strand: Object,
    create: Boolean
  },
  components: {
    Editor
  },
  data: () => ({
    itemToSave: {}
  }),
  methods: {
    async close(closeWithSave) {
      this.$emit("input", false);
      if (closeWithSave) {
        await this.$db.putItem(this.itemToSave);
        this.$bus.$emit("dbItemUpdate");
        this.$bus.$emit("dbStrandUpdate");
        this.$bus.$emit("dbUpdate");
      }
    },
    async removeItem() {
      delete this.strand.itemOrder[this.strand.itemOrder.indexOf(this.item.id)];
      this.strand.itemOrder = this.removeEmpty(this.strand.itemOrder);
      await this.$db.removeItem(this.item);
      this.close(false);
      this.$bus.$emit("dbStrandUpdate");
      this.$bus.$emit("dbItemUpdate");
    },
    removeEmpty(array) {
      return array.filter(v => v);
    }
  },
  watch: {
    item: {
      handler() {
        this.itemToSave = { ...this.item };
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
