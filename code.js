// const app = Vue.createApp({
//     template: `
//         <div v-if='isVisible1' id='box1'>
//             <p>Box 1</p>
//         </div>
//         <div v-else-if='isVisible2' id='box2'>
//             <p>Box 2</p>
//         </div>
//         <div v-else='isVisible3' id='box3'>
//             <p>Box 3</p>
//         </div>
//     `,
//     data: function() {
//         return {
//             isVisible1: false,
//             isVisible2: true,
//             isVisible3: true
//         }
//     },
//     methods: {
//     }
// });
// app.mount('#app');



// var character = 'A';

// if (character == character.toUpperCase()) {
//  alert ('upper case true');
// }
// if (character == character.toLowerCase()){
//  alert ('lower case true');
// }


const app = Vue.createApp({
    template: `
  <label id='output'></label> <br>
  <input id='a' type='text' v-model='a'>
  <button @click="display()">Test</button>
  `,
    data() {
      return {
        a: "",
      };
    },
    methods: {
      display() {
        if ((this.a.includes("a"))) {
          document.getElementById("output").innerText = "You clicked a";
        } else if ((this.a.includes("A"))) {
          document.getElementById("output").innerText = " you clicked A";
        } else {
          document.getElementById("output").innerText = "";
        }
      }
    },
  });
  
  app.mount("#app");