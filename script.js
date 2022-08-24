// أنشئ المصفوفة تحت هذا الكومنت

let Orders = [];

function addOrder() {
  
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let phone = document.getElementById("phone").value;
  let order = document.getElementById("order").value;
  
  // أنشئ كائن newOrder
let newOrder = {
name: name,
id: id,
phone: phone,
order: order,
};
Orders.push(newOrder);
load()
}

  // أدرج الكائن إلى المصفوفة

  // طبق الخطوة 7 تحت هذا الكومنت
  


function load() {
  let container = document.getElementById("container");
   
  // طبّق الخطوة 6 تحت هذا الكومنت
Orders.forEach((item) => {
  container.innerHTML+=   `<div><h1>${item.name} - ${item.id}</h1><h3>${item.order}</h3></div>`
});

  
}
