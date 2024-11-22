//TASK2//
// class html {
//   constructor(nameTag, clos = false, textContent = "") {
//     this.nameTag = nameTag;
//     this.clos = clos;
//     this.textContent = textContent;
//     this.atributs = {};
//     this.styles = {};
//     this.nastedTag = [];
//   }

//   setAtribute(name, value) {
//     this.atributs[name] = value;
//   }
//   setStyle(pr, value) {
//     this.styles[pr] = value;
//   }
//   addNastedTag(element) {
//     this.nastedTag.push(element);
//   }
//   addNastedTagToEnd(elemt) {
//     this.nastedTag.unshift(element);
//   }

//   getInfoHtml() {
//     let atributStr = "";
//     let stylesStr = "";
//     for (let elem in this.atributs) {
//       if (this.atributs.hasOwnProperty(elem)) {
//         atributStr += `${elem}="${this.atributs[elem]}"`;
//       }
//     }
//     atributStr = atributStr.trim();

//     for (let elem in this.styles) {
//       if (this.styles.hasOwnProperty(elem)) {
//         stylesStr += `${elem}: ${this.styles[elem]};`;
//       }
//     }
//     if (stylesStr) {
//       atributStr += ` style="${stylesStr.trim()}"`;
//     }
//     if (this.clos) {
//       return `<${this.nameTag} ${atributStr}/>`;
//     }
//     let nastedElem = this.nastedTag.map((el) => el.getInfoHtml()).join("");
//     return `<${this.nameTag} ${atributStr}>${this.textContent}${nastedElem}</${this.nameTag}>`;
//   }
// }

// const ob = new html("div");
// ob.setStyle("display", "flex");
// ob.setAtribute("id", "wrapper");
// const addblock = () => {
//   const block = new html("div");
//   block.setStyle("width", "300px");
//   block.setAtribute("margin", "10px");

//   const head = new html("h3", false, "What is Lorem Ipsum?");
//   const image = new html("img", true);
//   image.setStyle("width", "100%");
//   image.setAtribute("src", "lipsum.jpg");
//   image.setAtribute("alt", "Lorem Ipsum");

//   const item = new html(
//     "p",
//     false,
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//   );
//   item.setStyle("text-align", "justify");

//   const https = new html("a", false, "More...");
//   https.setAtribute("href", "https://ww.lipsum.com");
//   https.setAtribute("target", "_blank");

//   item.addNastedTag(https);
//   block.addNastedTag(head);
//   block.addNastedTag(image);
//   block.addNastedTag(item);
//   return block;
// };

// ob.addNastedTag(addblock());
// ob.addNastedTag(addblock());

// //document.write(ob.getInfoHtml());

// //console.log(ob.getInfoHtml());

//////TASK1//////
// class Okrujnost {
//   constructor(radius) {
//     this.r = radius;
//   }

//   get radius() {
//     return this.r;
//   }
//   set radius(col) {
//     this.r = col;
//   }
//   get diameter() {
//     return this.r * 2;
//   }
//   plosad() {
//     return Math.PI * this.r * this.r;
//   }
//   lengthOkrj() {
//     return 2 * Math.PI * this.r;
//   }
// }

// let okrj = new Okrujnost(5);
// console.log(`Radius okrujnosti: ${okrj.radius}`);
// console.log(`Diameter okrujnosti: ${okrj.diameter}`);
// console.log(`Plosad okrujnosti: ${okrj.plosad()}`);
// console.log(`Dlina okrujnosti: ${okrj.lengthOkrj()}`);

//////////TASK3////////////
// class cssClas {
//   constructor(className) {
//     this.className = className;
//     this.styles = {};
//   }

//   setStyle(pr, col) {
//     this.styles[pr] = col;
//   }
//   removeStyle(pr) {
//     delete this.styles[pr];
//   }
//   getCssInfo() {
//     let cssStr = `${this.className}`;
//     for (let pr in this.styles) {
//       cssStr += ` ${pr}:${this.styles[pr]};`;
//     }

//     return cssStr;
//   }
// }

// const Class = new cssClas("Class");
// Class.setStyle("color", "green");
// Class.setStyle("font-size", "10px");
// console.log(Class.getCssInfo());
