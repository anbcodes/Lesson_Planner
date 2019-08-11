<template>
  <v-app>
    <v-app-bar app>
      <v-layout>
        <!-- <v-flex>
          <v-btn icon @click="options.drawer = !options.drawer">
            <v-icon>fas fa-list</v-icon>
          </v-btn>
        </v-flex>-->
        <v-flex>
          <v-btn icon @click="download">
            <v-icon>save</v-icon>
          </v-btn>
        </v-flex>
        <v-flex>
          <topbar v-model="week" />
        </v-flex>
        <v-spacer />
      </v-layout>
    </v-app-bar>
    <v-content>
      <!-- <sidebar v-model="options" /> -->
      <week :week="week" />
    </v-content>
  </v-app>
</template>

<script>
import Topbar from "./components/TopBar";
import Week from "./components/Week";

export default {
  name: "App",
  components: {
    Topbar,
    Week
  },
  created() {
    this.$dayHandler.addSetCallback(this.$set);
  },
  data: () => ({
    week: Number(localStorage.getItem("selectedWeek")) || 1,
    options: JSON.parse(localStorage.getItem("options")) || {
      drawer: false,
      startWithCommunityDay: false,
      showCommunityDay: true,
      showWeekends: true,
      communityDay: "Monday"
    },
    downloadHref: ""
  }),
  methods: {
    async download() {
      let pdf = document.createElement("div");
      let weekName = document.createElement("h1");
      weekName.align = "center";
      weekName.innerText = this.expandedWeek;
      pdf.appendChild(weekName);
      let strands = await this.$db.getStrands(this.week);
      for (let x = 0; x < strands.length; x++) {
        let strand = strands[x];
        let items = await this.$db.getItems(strand);
        let strandText = document.createElement("h2");
        strandText.innerText = strand.strandName;
        strandText.align = "center";
        pdf.appendChild(strandText);
        for (let y = 0; y < items.length; y++) {
          let item = items[y];
          let itemNameTime = document.createElement("h3");
          itemNameTime.innerText = `${item.name} (${item.time}min)`;
          // itemNameTime.align = "center";

          pdf.appendChild(itemNameTime);
          let notes = document.createElement("div");

          notes.innerHTML = item.notes;
          pdf.appendChild(notes);
        }
      }
      let pdfFrame = document.createElement("iframe");
      pdfFrame.onload = () => {
        pdfFrame.contentDocument.body.appendChild(pdf);
        pdfFrame.contentWindow.focus();
        pdfFrame.contentWindow.print();
        pdfFrame.remove();
      };
      document.body.appendChild(pdfFrame);

      // this.jsp.html(pdf, {
      //   callback: () => {
      //     this.jsp.save();
      //   }
      // });
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
