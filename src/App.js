
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   let data = [ 
//     {
//       flags: {
//         png: "https://flagcdn.com/w320/bb.png",
//         svg: "https://flagcdn.com/bb.svg",
//         alt: "The flag of Barbados is composed of three equal vertical bands of ultramarine, gold and ultramarine. The head of a black trident is centered in the gold band.",
//       },
//       name: {
//         common: "Barbados",
//         official: "Barbados",
//         nativeName: { eng: { official: "Barbados", common: "Barbados" } },
//       },
//     },
//     {
//       flags: {
//         png: "https://flagcdn.com/w320/re.png",
//         svg: "https://flagcdn.com/re.svg",
//         alt: "",
//       },
//       name: {
//         common: "Réunion",
//         official: "Réunion Island",
//         nativeName: {
//           fra: { official: "Ile de la Réunion", common: "La Réunion" },
//         },
//       },
//     },
//     {
//       flags: {
//         png: "https://flagcdn.com/w320/sr.png",
//         svg: "https://flagcdn.com/sr.svg",
//         alt: "The flag of Suriname is composed of five horizontal bands of green, white, red, white and green in the ratio of 2:1:4:1:2. A large five-pointed yellow star is centered in the red band.",
//       },
//       name: {
//         common: "Suriname",
//         official: "Republic of Suriname",
//         nativeName: {
//           nld: { official: "Republiek Suriname", common: "Suriname" },
//         },
//       },
//     },
//     {
//       flags: {
//         png: "https://flagcdn.com/w320/na.png",
//         svg: "https://flagcdn.com/na.svg",
//         alt: "The flag of Namibia features a white-edged red diagonal band that extends from the lower hoist-side corner to the upper fly-side corner of the field. Above and beneath this band are a blue and green triangle respectively. A gold sun with twelve triangular rays is situated on the hoist side of the upper triangle.",
//       },
//       name: {
//         common: "Namibia",
//         official: "Republic of Namibia",
//         nativeName: {
//           afr: { official: "Republiek van Namibië", common: "Namibië" },
//           deu: { official: "Republik Namibia", common: "Namibia" },
//           eng: { official: "Republic of Namibia", common: "Namibia" },
//           her: { official: "Republic of Namibia", common: "Namibia" },
//           hgm: { official: "Republic of Namibia", common: "Namibia" },
//           kwn: { official: "Republic of Namibia", common: "Namibia" },
//           loz: { official: "Republic of Namibia", common: "Namibia" },
//           ndo: { official: "Republic of Namibia", common: "Namibia" },
//           tsn: { official: "Lefatshe la Namibia", common: "Namibia" },
//         },
//       },
//     },
//     {
//       flags: {
//         png: "https://flagcdn.com/w320/gn.png",
//         svg: "https://flagcdn.com/gn.svg",
//         alt: "The flag of Guinea is composed of three equal vertical bands of red, yellow and green.",
//       },
//       name: {
//         common: "Guinea",
//         official: "Republic of Guinea",
//         nativeName: {
//           fra: { official: "République de Guinée", common: "Guinée" },
//         },
//       },
//     },
//   ];
//   return (
//     <div className="App">
//       <div className="row">
//         {data.map((res) => {
//           return (
//             <div className="col-4">
//               <div className="card" style={{ width: "18rem" }}>
//                 <img
//                   className="card-img-top"
//                   src={res.flags.png}
//                   alt="Card image cap"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{res.name.common}</h5>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;



import { useState } from "react";
import "./App.css";

function App() {
  const [test, setTest] = useState("test");

  return (
    <div className="App">
      <h1>{test}</h1>
      <input
        type="text"
        onChange={(e) => {
          setTest(e.target.value);
        }}
      />
    </div>
  );
}

export default App;

//react router dom concept of 6.3.0
//npm i axios 
//protfolio
//props drilling 
//hackerrank
//test