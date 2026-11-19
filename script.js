// The Royal Plate — menu data transcribed from the supplied menu card.
const dishes = [
  // STARTERS — VEGETARIAN
  ["Paneer Tikka","Starters",249,"Veg","photo-1567188040759-fb8a883dc6d8","Smoky paneer cubes marinated with royal spices."],
  ["Hara Bhara Kebab","Starters",199,"Veg","photo-1601050690597-df0568f70950","A crisp spinach and green-pea kebab."],
  ["Veg Manchurian","Starters",189,"Veg","photo-1626132647523-66f5bf380027","Indo-Chinese vegetable dumplings in savoury sauce."],
  ["Crispy Corn","Starters",179,"Veg","photo-1630384060421-cb20d0e0649d","Crunchy golden corn tossed in house seasoning."],
  ["Stuffed Mushrooms","Starters",229,"Veg","photo-1504545102780-26774c1bb073","Mushrooms filled with a delicious savoury mix."],
  ["Veg Spring Rolls","Starters",199,"Veg","photo-1544025162-d76694265947","Crispy rolls with a fresh vegetable filling."],
  ["Masala Fries","Starters",149,"Veg","photo-1573080496219-bb080dd4f877","Golden fries dusted with our signature masala."],
  ["Chilli Paneer","Starters",229,"Veg","photo-1567188040759-fb8a883dc6d8","Paneer tossed with peppers and spicy chilli sauce."],
  // STARTERS — NON-VEGETARIAN
  ["Chicken Tikka","Starters",299,"Non-Veg","photo-1599487488170-d11ec9c172f0","Tender chicken grilled in a tandoori marinade."],
  ["Chicken Lollipop","Starters",279,"Non-Veg","photo-1626082927389-6cd097cdc6ec","Crispy chicken lollipops with bold spices."],
  ["Tandoori Chicken","Starters",349,"Non-Veg","photo-1599487488170-d11ec9c172f0","Classic tandoori chicken, charred to perfection."],
  ["Fish Fingers","Starters",329,"Non-Veg","photo-1544943910-4c1e9f1f3b2a","Golden crumb-coated fish fingers."],
  ["Reshmi Kebab","Starters",349,"Non-Veg","photo-1603894584373-5ac82b2ae398","Soft, creamy kebabs with delicate spices."],
  ["Mutton Seekh Kebab","Starters",399,"Non-Veg","photo-1603894584373-5ac82b2ae398","Spiced minced mutton skewers from the tandoor."],
  // SOUPS
  ["Tomato Soup","Soups",99,"Veg","photo-1547592180-85f173990554","Warm tomato soup finished with fresh herbs."],
  ["Hot & Sour Soup","Soups",109,"Veg","photo-1547592180-85f173990554","A lively, tangy soup with vegetables."],
  ["Sweet Corn Soup","Soups",109,"Veg","photo-1547592180-85f173990554","Comforting sweet-corn soup, served hot."],
  ["Cream of Mushroom","Soups",129,"Veg","photo-1547592180-85f173990554","Silky mushroom soup with a creamy finish."],
  // MAIN COURSE — VEGETARIAN
  ["Paneer Butter Masala","Main Course",279,"Veg","photo-1631452180519-c014fe946bc7","Paneer in a rich buttery tomato gravy."],
  ["Dal Makhani","Main Course",229,"Veg","photo-1546833999-b9f581a1996d","Slow-cooked black lentils finished with cream."],
  ["Veg Kolhapuri","Main Course",249,"Veg","photo-1631452180519-c014fe946bc7","Mixed vegetables in a bold Kolhapuri masala."],
  ["Kaju Curry","Main Course",299,"Veg","photo-1631452180519-c014fe946bc7","Cashews in a rich, mildly spiced gravy."],
  ["Mix Veg","Main Course",229,"Veg","photo-1631452180519-c014fe946bc7","Seasonal vegetables cooked with house spices."],
  ["Palak Paneer","Main Course",249,"Veg","photo-1567188040759-fb8a883dc6d8","Paneer cubes in smooth spinach gravy."],
  ["Malai Kofta","Main Course",279,"Veg","photo-1631452180519-c014fe946bc7","Soft kofta in a creamy royal sauce."],
  ["Chana Masala","Main Course",199,"Veg","photo-1585937421612-70a008356fbe","Chickpeas simmered in a classic masala."],
  // MAIN COURSE — NON-VEGETARIAN
  ["Butter Chicken","Main Course",349,"Non-Veg","photo-1603894584373-5ac82b2ae398","Tandoori chicken in a buttery tomato gravy."],
  ["Chicken Handi","Main Course",329,"Non-Veg","photo-1603894584373-5ac82b2ae398","Traditional handi-style chicken curry."],
  ["Chicken Kadai","Main Course",329,"Non-Veg","photo-1603894584373-5ac82b2ae398","Chicken cooked with peppers and kadai spices."],
  ["Chicken Tikka Masala","Main Course",349,"Non-Veg","photo-1603894584373-5ac82b2ae398","Grilled chicken in a spiced creamy sauce."],
  ["Mutton Masala","Main Course",429,"Non-Veg","photo-1603894584373-5ac82b2ae398","Tender mutton in a robust masala gravy."],
  ["Egg Curry","Main Course",259,"Non-Veg","photo-1603894584373-5ac82b2ae398","Boiled eggs in a comforting Indian curry."],
  // RICE
  ["Veg Biryani","Rice & Breads",229,"Veg","photo-1563379091339-03246963d96c","Fragrant basmati rice layered with vegetables."],
  ["Chicken Biryani","Rice & Breads",299,"Non-Veg","photo-1563379091339-03246963d96c","Aromatic chicken biryani with traditional spices."],
  ["Mutton Biryani","Rice & Breads",399,"Non-Veg","photo-1563379091339-03246963d96c","Rich mutton biryani with long-grain basmati."],
  ["Jeera Rice","Rice & Breads",149,"Veg","photo-1516684732162-798a0062be99","Basmati rice tempered with cumin."],
  ["Veg Pulao","Rice & Breads",199,"Veg","photo-1516684732162-798a0062be99","Lightly spiced rice with garden vegetables."],
  ["Steam Rice","Rice & Breads",129,"Veg","photo-1516684732162-798a0062be99","Fluffy steamed rice, a perfect curry companion."],
  // BREADS
  ["Butter Naan","Rice & Breads",55,"Veg","photo-1626082927389-6cd097cdc6ec","Soft tandoor-baked naan brushed with butter."],
  ["Garlic Naan","Rice & Breads",75,"Veg","photo-1626082927389-6cd097cdc6ec","Naan topped with garlic and fresh herbs."],
  ["Stuffed Naan","Rice & Breads",95,"Veg","photo-1626082927389-6cd097cdc6ec","Tandoor-baked naan with a savoury filling."],
  ["Lachha Paratha","Rice & Breads",85,"Veg","photo-1626082927389-6cd097cdc6ec","Flaky layered paratha, cooked golden."],
  ["Tandoori Roti","Rice & Breads",45,"Veg","photo-1626082927389-6cd097cdc6ec","Traditional whole-wheat tandoori roti."],
  ["Roomali Roti","Rice & Breads",35,"Veg","photo-1626082927389-6cd097cdc6ec","Delicate, thin roomali roti."],
  // DESSERTS
  ["Gulab Jamun","Desserts",99,"Veg","photo-1542124948-dc391252a940","Soft milk dumplings soaked in fragrant syrup."],
  ["Rasmalai","Desserts",119,"Veg","photo-1488477181946-6428a0291777","Delicate chenna patties in saffron milk."],
  ["Brownie with Ice Cream","Desserts",179,"Veg","photo-1606313564200-e75d5e30476c","Warm chocolate brownie with a scoop of ice cream."],
  ["Vanilla Ice Cream","Desserts",89,"Veg","photo-1563805042-7684c019e1cb","Classic creamy vanilla ice cream."],
  ["Chocolate Lava Cake","Desserts",199,"Veg","photo-1578985545062-69928b1d9587","Warm chocolate cake with a molten centre."],
  ["Kulfi Falooda","Desserts",149,"Veg","photo-1488477181946-6428a0291777","Traditional kulfi with falooda and sweet milk."],
  // BEVERAGES
  ["Fresh Lime Soda","Beverages",79,"Veg","photo-1513558161293-cdacff7206e5","Refreshing lime soda, sweet or salted."],
  ["Masala Chaass","Beverages",69,"Veg","photo-1544145945-f90425340c7e","Chilled spiced buttermilk."],
  ["Cold Coffee","Beverages",129,"Veg","photo-1461023058943-07fcbe16d735","Chilled coffee blended until smooth and creamy."],
  ["Mango Lassi","Beverages",99,"Veg","photo-1626200419199-391ae4be7a41","Thick mango yoghurt drink."],
  ["Milkshake (Chocolate/Vanilla)","Beverages",129,"Veg","photo-1572490122747-3968b75cc699","Choose chocolate or vanilla, chilled and creamy."],
  ["Masala Chai","Beverages",49,"Veg","photo-1571934811356-5cc061b6821f","Indian tea brewed with warming spices."],
  ["Mineral Water","Beverages",30,"Veg","photo-1564419320461-6870880221ad","Packaged drinking water."],
  // EXTRAS
  ["Masala Papad","Extras",99,"Veg","photo-1626082927389-6cd097cdc6ec","Crispy papad topped with onion and masala."],
  ["Masala Fries","Extras",129,"Veg","photo-1573080496219-bb080dd4f877","A side of fries tossed in house masala."],
  ["Green Salad","Extras",89,"Veg","photo-1512621776951-a57141f2eefe","Fresh seasonal greens and vegetables."],
  ["Raita","Extras",69,"Veg","photo-1482045608941-1e2b8b0e9a0f","Cooling yoghurt accompaniment."],
  ["Extra Naan","Extras",45,"Veg","photo-1626082927389-6cd097cdc6ec","An extra serving of fresh naan."]
];

// Some image IDs in the supplied menu are category illustrations, not guaranteed exact dish matches.
// Replace any image URL with your restaurant's own food photograph when available.
const categories = ["All","Starters","Soups","Main Course","Rice & Breads","Desserts","Beverages","Extras"];
const grid = document.getElementById("menu-grid");
const tabs = document.getElementById("category-tabs");
const search = document.getElementById("menu-search");
const cart = [];
let activeCategory = "All";

function imageUrl(id) {
  // Fallback for items where an image identifier is intentionally unavailable.
  const safeId = id.startsWith("photo-") && !/[^\w-]/.test(id) ? id : "photo-1547592180-85f173990554";
  return `https://images.unsplash.com/${safeId}?auto=format&fit=crop&w=800&q=82`;
}

function renderTabs() {
  tabs.innerHTML = categories.map(c => `<button class="category-tab ${c===activeCategory?"active":""}" data-category="${c}">${c==="All"?"✦ All":c}</button>`).join("");
  tabs.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
    activeCategory = btn.dataset.category; renderTabs(); renderMenu();
  }));
}

function renderMenu() {
  const term = search.value.trim().toLowerCase();
  const shown = dishes.map((d,i)=>({...{name:d[0],category:d[1],price:d[2],diet:d[3],photo:d[4],description:d[5]},id:i}))
    .filter(d => (activeCategory==="All" || d.category===activeCategory) &&
      (d.name.toLowerCase().includes(term) || d.category.toLowerCase().includes(term)));
  document.getElementById("results-label").textContent = `${shown.length} DISHES · ${activeCategory.toUpperCase()}`;
  if (!shown.length) { grid.innerHTML = `<div class="empty-state">No dishes found. Try another search.</div>`; return; }
  grid.innerHTML = shown.map(d => `
    <article class="dish-card" data-id="${d.id}">
      <div class="dish-photo"><span class="dish-tag">${d.category}</span>
        <img src="${imageUrl(d.photo)}" alt="${d.name}" loading="lazy"
          onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=82'">
      </div>
      <div class="dish-info">
        <div class="dish-type">THE ROYAL PLATE · ${d.diet.toUpperCase()}</div>
        <div class="dish-title-row"><h3 class="dish-title">${d.name}</h3><span class="dish-price">₹${d.price}</span></div>
        <p class="dish-desc">${d.description}</p>
        <div class="dish-actions"><span class="diet ${d.diet==="Non-Veg"?"nonveg":""}">${d.diet}</span>
          <button class="add-dish" data-add="${d.id}">ADD TO ORDER +</button></div>
      </div>
    </article>`).join("");
  grid.querySelectorAll(".dish-card").forEach(card => {
    card.addEventListener("pointermove", e => {
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const r=card.getBoundingClientRect(), x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
      card.style.setProperty("--ry",`${(x-.5)*10}deg`); card.style.setProperty("--rx",`${(.5-y)*8}deg`);
    });
    card.addEventListener("pointerleave",()=>{card.style.setProperty("--rx","0deg");card.style.setProperty("--ry","0deg");});
  });
  grid.querySelectorAll("[data-add]").forEach(btn => btn.addEventListener("click",()=>addToCart(Number(btn.dataset.add))));
}

function addToCart(id) {
  const d=dishes[id], existing=cart.find(x=>x.id===id);
  if(existing) existing.qty++; else cart.push({id,name:d[0],price:d[2],qty:1});
  updateCart();
}
function changeQty(id,delta) {
  const item=cart.find(x=>x.id===id); if(!item)return;
  item.qty+=delta; if(item.qty<=0)cart.splice(cart.indexOf(item),1); updateCart();
}
function updateCart() {
  document.getElementById("cart-count").textContent=cart.reduce((s,x)=>s+x.qty,0);
  const total=cart.reduce((s,x)=>s+x.price*x.qty,0);
  document.getElementById("cart-total").textContent=`₹${total}`;
  const box=document.getElementById("cart-items");
  box.innerHTML=cart.length?cart.map(x=>`<div class="cart-line"><div><strong>${x.name}</strong><small>₹${x.price} each</small></div><div class="qty-controls"><button data-qty="${x.id}" data-delta="-1">−</button>${x.qty}<button data-qty="${x.id}" data-delta="1">+</button></div></div>`).join(""):`<p style="color:#b8ad9c;font-size:13px;padding:20px 0">Your order is empty. Add a dish from the menu.</p>`;
  box.querySelectorAll("[data-qty]").forEach(b=>b.addEventListener("click",()=>changeQty(Number(b.dataset.qty),Number(b.dataset.delta))));
}
function openCart(){document.getElementById("cart-overlay").classList.add("open");document.getElementById("cart-overlay").setAttribute("aria-hidden","false");}
function closeCart(){document.getElementById("cart-overlay").classList.remove("open");document.getElementById("cart-overlay").setAttribute("aria-hidden","true");}
document.getElementById("open-cart").addEventListener("click",openCart);
document.getElementById("close-cart").addEventListener("click",closeCart);
document.getElementById("cart-overlay").addEventListener("click",e=>{if(e.target.id==="cart-overlay")closeCart();});
document.getElementById("whatsapp-order").addEventListener("click",()=>{
  if(!cart.length){alert("Please add at least one dish first.");return;}
  // IMPORTANT: Replace this sample with the restaurant's WhatsApp number, country code included.
  const phone="917385620021";
  const lines=cart.map(x=>`${x.name} x ${x.qty} = ₹${x.price*x.qty}`).join("\n");
  const total=cart.reduce((s,x)=>s+x.price*x.qty,0);
  const message=`Hello The Royal Plate! I would like to place an order:\n\n${lines}\n\nTotal: ₹${total}`;
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,"_blank","noopener");
});
search.addEventListener("input",renderMenu);

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);}}),{threshold:.15});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
renderTabs();renderMenu();updateCart();
