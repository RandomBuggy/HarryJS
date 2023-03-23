const id1 = window.document.getElementById("id1");
console.log(id1.contains(".class"));
console.log(id1.contains(".box"));

const sp1 = window.document.getElementById("sp1");
console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));

console.log(sp1.contains(id1));
console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(id1.contains(id1));

