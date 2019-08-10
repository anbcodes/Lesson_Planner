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
          space: 1
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
      let downPage = 10;

      for (let x = 0; x < pdf.length; x++) {
        let pdfMultilinelen =
          pdf[x].text.split("\n").length > 0
            ? pdf[x].text.split("\n").length * pdf[x].size
            : 0;
        if (downPage > 280 - pdfMultilinelen) {
          this.jsp.addPage();
          downPage = 10;
        }
        this.jsp.setFontSize(pdf[x].size);
        this.jsp.setFontStyle(pdf[x].type);
        this.jsp.text(
          pdf[x].text,
          Math.floor(10 + 10 * pdf[x].indent),
          downPage
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
  }
};
</script>
