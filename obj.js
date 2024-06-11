let obj = {
  name: "Sachin Waghmode",
  roll: "Software Developer",
  company: "ANG Software, Pune",
  projects: {
    first: "E-commerce website (Dynamic)",
    second: "Lead Management System",
    third: "E-commerce website",
  }
};

let x = Object.entries(obj);
console.log('Entries', x);

x = Object.keys(obj);
console.log('Keys', x);

x = Object.values(obj);
console.log('Values', x);
