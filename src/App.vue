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
          <v-btn icon @mouseenter="prepareDownload()" @click="download">
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
import * as jsPDF from "jspdf";
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
    async prepareDownload() {
      this.jsp = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "letter",
        putOnlyUsedFonts: true
      });
      let pdf = [];
      let strands = await this.$db.getStrands(this.week);
      for (let x = 0; x < strands.length; x++) {
        let strand = strands[x];
        let items = await this.$db.getItems(strand);
        pdf.push({
          text: strand.strandName,
          size: 20,
          type: "bold",
          indent: 0,
          space: 1,
          align: "center"
        });
        for (let y = 0; y < items.length; y++) {
          let item = items[y];
          pdf.push({
            text: `${item.name} (${item.time}min)`,
            size: 15,
            type: "bold",
            indent: 1,
            space: 1
          });
          pdf.push({
            text: `${item.notes}`,
            size: 15,
            type: "",
            indent: 1.5,
            space: 1
          });
        }
      }
      let downPage = 40;
      this.jsp.setFontSize(25);
      this.jsp.setFontStyle("bold");
      this.jsp.text(this.expandedWeek, 215.9 / 2, 10, { align: "center" });

      for (let x = 0; x < pdf.length; x++) {
        let pdfMultilinelen =
          pdf[x].text.split("\n").length > 0
            ? pdf[x].text.split("\n").length * pdf[x].size
            : 0;
        if (downPage > 280 - pdfMultilinelen) {
          this.jsp.addPage();
          downPage = 40;
          this.jsp.setFontSize(25);
          this.jsp.setFontStyle("bold");
          this.jsp.text(this.expandedWeek, 215.9 / 2, 10, { align: "center" });
        }
        this.jsp.setFontSize(pdf[x].size);
        this.jsp.setFontStyle(pdf[x].type);
        this.jsp.text(
          pdf[x].text,
          pdf[x].align ? 215.9 / 2 : Math.floor(10 + 10 * pdf[x].indent),
          downPage,
          { align: pdf[x].align || "left" }
        );
        pdfMultilinelen =
          pdf[x].text.split("\n").length > 0
            ? pdf[x].text.split("\n").length * pdf[x].size
            : 0;
        downPage += pdf[x + 1]
          ? pdf[x + 1].space
            ? Math.floor(pdf[x + 1].space / 1.5 + pdfMultilinelen)
            : Math.floor(pdf[x + 1].size / 1.5 + pdfMultilinelen)
          : 10;
      }
    },
    download() {
      this.jsp.output("save", "Challange Lesson Plan.pdf");
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
