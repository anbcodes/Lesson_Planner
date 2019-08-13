<template>
  <v-app>
    <v-app-bar app>
      <v-row>
        <v-col mt-5>
          <v-row>
            <v-btn icon @click="download">
              <v-icon>print</v-icon>
            </v-btn>
          </v-row>
        </v-col>
        <v-col mt-3>
          <v-row>
            <topbar v-model="week" />
          </v-row>
        </v-col>
        <v-col>
          <v-row justify="end">
            <v-btn icon @click="clear">
              <v-icon>close</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-content>
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
    if (!localStorage.getItem("tutorialDoneLesson")) {
      if (confirm("Would you like the tutorial? You can't get it again.")) {
        this.showTutorial();
      } else {
        localStorage.setItem("tutorialDoneLesson", "true");
      }
    }
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
    },
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
          for (let x = 0; x < this.$dayHandler.shownStrands.length; x++) {
            await this.$db.removeStrand(
              this.$dayHandler.shownStrands[x].strand
            );
          }
        }
        this.$bus.$emit("dbUpdate");
      }
    },
    async showTutorial() {
      localStorage.setItem("tutorialDoneLesson", "true");
      let tutorialItems = [
        {
          name: "When you are done click the X to erase this week",
          color: "blue",
          time: 25,
          notes: "You can never get the tutorial again",
          strand: 5
        },
        {
          name: "Click me to edit",
          color: "red",
          time: 30,
          notes:
            "You can use <strong>bold</strong> <i>italic</i> <ins>underline</ins> and <del>strikethrough</del> on the notes (these will show up when printed)",
          strand: 2
        },
        {
          name: "Use the up and down arrows to move me around (1)",
          color: "red",
          time: 30,
          notes: "the order is kept when printing",
          strand: 3
        },
        {
          name: "Use the up and down arrows to move me around (2)",
          color: "orange",
          time: 30,
          notes: "the order is kept when printing",
          strand: 3
        },
        {
          name: "Use the up and down arrows to move me around (3)",
          color: "green",
          time: 30,
          notes: "the order is kept when printing",
          strand: 3
        },
        {
          name: "Use the up and down arrows to move me around (4)",
          color: "light-blue",
          time: 30,
          notes: "the order is kept when printing",
          strand: 3
        },
        {
          name:
            "Move me to the next or previous strand using the left and right arrows",
          color: "indigo",
          time: 30,
          notes: "",
          strand: 2
        },
        {
          name: "Click on the sidebar in the top left to change some settings",
          color: "purple",
          time: 30,
          notes: "",
          strand: 1
        },
        {
          name: "Click on the checkbox to mark a item as completed",
          color: "lime",
          time: 30,
          notes: "",
          strand: 1
        }
      ];
      this.$dayHandler.addStrands(await this.$db.getStrands(this.week));

      for (let x = 0; x < tutorialItems.length; x++) {
        let item = tutorialItems[x];
        item.strand = this.$dayHandler.shownStrands[item.strand].strand.id;
        await this.$db.putItem(item);
      }

      this.$bus.$emit("dbItemUpdate");
      this.$bus.$emit("dbStrandUpdate");
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
