<template>
  <v-app>
    <v-app-bar app>
      <v-row no-gutters>
        <v-col mt-5 cols="1">
          <v-row>
            <v-btn icon @click="drawer = !drawer">
              <v-icon>fas fa-list</v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-spacer />
        <v-col mt-3 cols="8">
          <v-row>
            <topbar v-model="week" />
          </v-row>
        </v-col>
        <v-spacer />
        <v-col cols="1">
          <v-row justify="end">
            <v-btn icon @click="clear">
              <v-icon>close</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-content>
      <sideBar v-model="drawer" :week="week" />
      <week :week="week" />
    </v-content>
  </v-app>
</template>

<script>
import Topbar from "./components/TopBar";
import Week from "./components/Week";
import SideBar from "./components/Sidebar";
export default {
  name: "App",
  components: {
    Topbar,
    Week,
    SideBar
  },
  data: () => ({
    week: Number(localStorage.getItem("selectedWeek")) || 1,
    drawer: false,
    downloadHref: "",
    console: console
  }),
  methods: {
    async clear() {
      if (
        confirm(
          "You are clearing all the items for this week. Click ok to continue."
        )
      ) {
        for (let x = 0; x < this.$dayHandler.shownStrands.length; x++) {
          let strand = this.$dayHandler.shownStrands[x].strand;
          let items = await this.$db.getItems(strand);
          for (let i = 0; i < items.length; i++) {
            let item = items[i];
            this.$db.removeItem(item);
          }
        }
        this.$bus.$emit("dbUpdate");
      }
    }
  },
  computed: {
    expandedWeek() {
      let challenges = ["A", "B", "1", "2", "3", "4"];
      let challenge = challenges[Math.floor((this.week - 1) / 30)];
      let weekTo30 = ((this.week - 1) % 30) + 1;
      let weekTo15 = weekTo30 > 15 ? weekTo30 - 15 : weekTo30;
      let semester = weekTo30 > 15 ? 2 : 1;
      if (this.$vuetify.breakpoint.smAndDown) {
        return `Chall. ${challenge}, Week ${weekTo15}, Sem. ${semester}`;
      } else {
        return `Challenge ${challenge}, Week ${weekTo15}, Semester ${semester}`;
      }
    }
  }
};
</script>
