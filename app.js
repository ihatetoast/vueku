console.log("app js loads, ya toads");
const app = Vue.createApp({
  data() {
    return { line1: "", line2: "", line3: "" };
  },
});

app.mount("#app")

// v1
// button to generate entire haiku
// buttons at end (start?) of lines to change lines. 
// v2
// if you like it make it cheesy. play with ugly scripty fonts