let o = {
  userName: "Masyud",
  "job role": "Backend Developer",
  salary: "50000",
  is_Satisfied: "false",
};

// console.log(o);
// let a = 1;

// for (let i = 0; i < 100; i++) {
//   // basic for loop
//   console.log(a + i);
// }

let obj = {
  name: "Masyud",
  role: "Backend Developer",
  company: "Martian Corporation",
};

for (const key in obj) {
  if (!Object.hasOwn(obj, key)) continue;

  const element = obj[key];

  console.log(key, ":", element);
}

let i = 2;
while (i < 5) {
  console.log(i);
  i++;
}
