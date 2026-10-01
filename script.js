
const cars = [
{id:1,brand:"Tata",model:"Nexon",price:899000,fuel:"Petrol",transmission:"Manual",mileage:"17.4 km/l",body:"SUV",seats:5,engine:"1.2L Turbo",power:"118 bhp",torque:"170 Nm",boot:"382 L",image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Tata_Nexon_XM.jpg",features:["6 airbags","10.25-inch touchscreen","360° camera","Cruise control"]},
{id:2,brand:"Tata",model:"Punch",price:649000,fuel:"Petrol",transmission:"Manual",mileage:"18.9 km/l",body:"SUV",seats:5,engine:"1.2L Revotron",power:"87 bhp",torque:"115 Nm",boot:"366 L",image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/2021_Tata_Punch_Creative_(India)_front_view_01.png",features:["5-star safety","Touchscreen infotainment","Rear camera","Projector headlamps"]},
{id:3,brand:"Tata",model:"Harrier",price:1599000,fuel:"Diesel",transmission:"Automatic",mileage:"16.8 km/l",body:"SUV",seats:5,engine:"2.0L Kryotec",power:"168 bhp",torque:"350 Nm",boot:"445 L",image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Gajab.jpg",features:["ADAS","Panoramic sunroof","JBL audio","360° camera"]},
{id:4,brand:"Mahindra",model:"Thar",price:1125000,fuel:"Petrol",transmission:"Automatic",mileage:"15.2 km/l",body:"SUV",seats:4,engine:"2.0L mStallion",power:"150 bhp",torque:"320 Nm",boot:"226 L",image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mahindra_Thar.jpg",features:["4x4 drivetrain","Terrain modes","Convertible roof","Hill hold"]},
{id:5,brand:"Mahindra",model:"Scorpio-N",price:1373000,fuel:"Diesel",transmission:"Automatic",mileage:"15.4 km/l",body:"SUV",seats:7,engine:"2.2L mHawk",power:"172 bhp",torque:"400 Nm",boot:"460 L",image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mahindra_Scorpio_S11_.jpg",features:["4WD","AdrenoX cockpit","6 airbags","Sony audio"]},
{id:6,brand:"Mahindra",model:"XUV700",price:1399000,fuel:"Petrol",transmission:"Automatic",mileage:"15.0 km/l",body:"SUV",seats:7,engine:"2.0L mStallion",power:"197 bhp",torque:"380 Nm",boot:"425 L",image:"https://upload.wikimedia.org/wikipedia/commons/e/ec/A_black_Mahindra_XUV700_SUV_in_Ashiana_Brahmananda%2C_Jamshedpur%2C_India_%28Ank_Kumar%2C_Infosys_Limited%29_01.jpg",features:["ADAS Level 2","Panoramic roof","Dual HD screens","Smart door handles"]},
{id:7,brand:"Hyundai",model:"Creta",price:1100000,fuel:"Petrol",transmission:"Automatic",mileage:"17.7 km/l",body:"SUV",seats:5,engine:"1.5L MPi",power:"113 bhp",torque:"144 Nm",boot:"433 L",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Hyundai_Creta_India.jpg/960px-Hyundai_Creta_India.jpg",features:["ADAS","Ventilated seats","Bose audio","Connected car tech"]},
{id:8,brand:"Hyundai",model:"Venue",price:790000,fuel:"Petrol",transmission:"Manual",mileage:"18.0 km/l",body:"SUV",seats:5,engine:"1.2L MPi",power:"82 bhp",torque:"114 Nm",boot:"343 L",image:"https://upload.wikimedia.org/wikipedia/commons/f/fd/Hyundai_Venue.jpg",features:["Wireless charging","Rear camera","Cruise control","Connected features"]},
{id:9,brand:"Kia",model:"Seltos",price:1090000,fuel:"Petrol",transmission:"Automatic",mileage:"17.7 km/l",body:"SUV",seats:5,engine:"1.5L Turbo",power:"158 bhp",torque:"253 Nm",boot:"433 L",image:"https://upload.wikimedia.org/wikipedia/commons/1/16/Kia_Seltos.jpg",features:["ADAS","Panoramic sunroof","Bose audio","360° camera"]},
{id:10,brand:"Toyota",model:"Fortuner",price:3358000,fuel:"Diesel",transmission:"Automatic",mileage:"14.4 km/l",body:"SUV",seats:7,engine:"2.8L Diesel",power:"201 bhp",torque:"500 Nm",boot:"296 L",image:"https://upload.wikimedia.org/wikipedia/commons/d/d0/Toyota_Fortuner_India.jpg",features:["4x4","7 airbags","Ventilated seats","Downhill assist"]},
{id:11,brand:"BMW",model:"3 Series",price:6040000,fuel:"Petrol",transmission:"Automatic",mileage:"16.1 km/l",body:"Sedan",seats:5,engine:"2.0L TwinPower Turbo",power:"255 bhp",torque:"400 Nm",boot:"480 L",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/BMW3Series2025.jpg/960px-BMW3Series2025.jpg",features:["Digital cockpit","Harman Kardon","Parking assistant","Ambient lighting"]},
{id:12,brand:"Mercedes-Benz",model:"C-Class",price:5860000,fuel:"Petrol",transmission:"Automatic",mileage:"16.9 km/l",body:"Sedan",seats:5,engine:"1.5L Turbo",power:"201 bhp",torque:"300 Nm",boot:"455 L",image:"https://upload.wikimedia.org/wikipedia/commons/8/8a/Mercedes_C_Class.jpg",features:["MBUX","Burmester audio","Digital LED","Panoramic roof"]}
];

const money=n=>"₹"+Number(n).toLocaleString("en-IN");
const getCar=id=>cars.find(c=>c.id==id);
const qs=s=>document.querySelector(s);
function toast(msg,type="success"){const x=document.createElement("div");x.className="notice "+type;x.textContent=msg;document.body.appendChild(x);setTimeout(()=>x.remove(),2800)}
function setupNav(){
 const btn=qs(".menu-btn"), links=qs(".nav-links"); if(btn)btn.onclick=()=>links.classList.toggle("open");
 const path=location.pathname.split("/").pop()||"index.html"; document.querySelectorAll(".nav-links a").forEach(a=>{if(a.getAttribute("href")===path)a.classList.add("active")});
}
function carCard(c){
 const fav=(JSON.parse(localStorage.getItem("favorites")||"[]")).includes(c.id);
 return `<article class="card"><img class="car-img" src="${c.image}" alt="${c.brand} ${c.model}" loading="lazy"><div class="card-body"><div><span class="tag">${c.body}</span> <span class="tag">${c.fuel}</span></div><h3 style="margin-top:9px">${c.brand} ${c.model}</h3><div class="price">${money(c.price)}</div><div class="car-meta"><span>${c.transmission}</span><span>${c.mileage}</span><span>${c.seats} seats</span></div><div class="card-actions"><a class="btn btn-small" href="car-details.html?id=${c.id}">View Details</a><button class="btn btn-small btn-outline" onclick="toggleCompare(${c.id})">Compare</button><button class="btn btn-small btn-outline" onclick="toggleFavorite(${c.id})">${fav?"♥ Saved":"♡ Save"}</button><a class="btn btn-small btn-outline" href="booking.html?car=${c.id}">Test Drive</a></div></div></article>`;
}
function renderFeatured(){const el=qs("#featuredCars");if(el)el.innerHTML=cars.slice(0,6).map(carCard).join("")}
function toggleFavorite(id){let f=JSON.parse(localStorage.getItem("favorites")||"[]");f=f.includes(id)?f.filter(x=>x!==id):[...f,id];localStorage.setItem("favorites",JSON.stringify(f));toast(f.includes(id)?"Car saved to favorites":"Removed from favorites");renderFeatured();renderCars?.();renderFavorites?.()}
function toggleCompare(id){let x=JSON.parse(localStorage.getItem("compare")||"[]");if(!x.includes(id)&&x.length>=3)return toast("You can compare up to 3 cars","error");x=x.includes(id)?x.filter(v=>v!==id):[...x,id];localStorage.setItem("compare",JSON.stringify(x));toast(x.includes(id)?"Added to comparison":"Removed from comparison")}
function renderCars(){
 const grid=qs("#carsGrid"); if(!grid)return;
 const brand=qs("#brandFilter")?.value||"",fuel=qs("#fuelFilter")?.value||"",trans=qs("#transFilter")?.value||"",body=qs("#bodyFilter")?.value||"",seats=qs("#seatFilter")?.value||"",price=Number(qs("#priceFilter")?.value||99999999),q=(qs("#carSearch")?.value||"").toLowerCase();
 const data=cars.filter(c=>(!brand||c.brand===brand)&&(!fuel||c.fuel===fuel)&&(!trans||c.transmission===trans)&&(!body||c.body===body)&&(!seats||c.seats==seats)&&c.price<=price&&(`${c.brand} ${c.model}`.toLowerCase().includes(q)));
 grid.innerHTML=data.length?data.map(carCard).join(""):`<div class="empty" style="grid-column:1/-1">No cars match your selected filters.</div>`;
}
function initCars(){if(!qs("#carsGrid"))return;renderCars();["brandFilter","fuelFilter","transFilter","bodyFilter","seatFilter","priceFilter","carSearch"].forEach(id=>qs("#"+id)?.addEventListener("input",renderCars))}
function populateSelects(){
 const brand=qs("#brandFilter"); if(brand)[...new Set(cars.map(c=>c.brand))].forEach(v=>brand.insertAdjacentHTML("beforeend",`<option>${v}</option>`));
 const sel=qs("#bookingCar");if(sel)cars.forEach(c=>sel.insertAdjacentHTML("beforeend",`<option value="${c.id}">${c.brand} ${c.model}</option>`));
}
function initHome(){renderFeatured();const s=qs("#homeSearch");if(s)s.addEventListener("keydown",e=>{if(e.key==="Enter")location.href="cars.html?q="+encodeURIComponent(s.value)})}
function initDetails(){
 const id=new URLSearchParams(location.search).get("id")||1,c=getCar(id);if(!c)return;
 qs("#detailName").textContent=c.brand+" "+c.model;qs("#detailPrice").textContent=money(c.price);qs("#detailMain").src=c.image;
 qs("#detailMeta").innerHTML=[["Engine",c.engine],["Power",c.power],["Torque",c.torque],["Mileage",c.mileage],["Fuel",c.fuel],["Transmission",c.transmission],["Seats",c.seats],["Boot Space",c.boot]].map(x=>`<div class="spec-item"><small class="muted">${x[0]}</small><b>${x[1]}</b></div>`).join("");
 qs("#featureList").innerHTML=c.features.map(x=>`<li>${x}</li>`).join("");
 qs("#detailBook").href="booking.html?car="+c.id;qs("#detailCompare").onclick=()=>{toggleCompare(c.id);location.href="compare.html"};
 const thumbs=qs("#thumbs"); if(thumbs){[c.image].forEach((u,i)=>thumbs.insertAdjacentHTML("beforeend",`<img class="${i===0?"active":""}" src="${u}" onclick="qs('#detailMain').src=this.src;document.querySelectorAll('#thumbs img').forEach(x=>x.classList.remove('active'));this.classList.add('active')">`))}
}
function calcEMI(){
 const p=Number(qs("#carPrice")?.value||0),d=Number(qs("#downPayment")?.value||0),r=Number(qs("#interest")?.value||0),y=Number(qs("#duration")?.value||5),loan=Math.max(0,p-d),mRate=r/1200,n=y*12;
 const emi=mRate?loan*mRate*Math.pow(1+mRate,n)/(Math.pow(1+mRate,n)-1):loan/n,total=emi*n;
 if(qs("#loanAmount"))qs("#loanAmount").textContent=money(loan);if(qs("#monthlyEMI"))qs("#monthlyEMI").textContent=money(Math.round(emi));if(qs("#totalInterest"))qs("#totalInterest").textContent=money(Math.round(total-loan));if(qs("#totalPayment"))qs("#totalPayment").textContent=money(Math.round(total));
}
function initEMI(){
 const c=getCar(new URLSearchParams(location.search).get("id")||1);if(qs("#carPrice")){qs("#carPrice").value=c?.price||1200000;qs("#downPayment").value=Math.round((c?.price||1200000)*.2)}
 document.querySelectorAll("#carPrice,#downPayment,#interest,#duration").forEach(x=>x.addEventListener("input",calcEMI));calcEMI();
}
function initBooking(){
 const params=new URLSearchParams(location.search),sel=qs("#bookingCar");if(sel&&params.get("car"))sel.value=params.get("car");
 const form=qs("#bookingForm");if(!form)return;
 form.addEventListener("submit",e=>{e.preventDefault();const id="ADM"+Date.now().toString().slice(-8);const car=getCar(sel.value);const data={id,name:qs("#name").value,car:car?car.brand+" "+car.model:"",date:qs("#date").value,time:qs("#time").value,showroom:qs("#showroom").value,status:"Confirmed"};localStorage.setItem("lastBooking",JSON.stringify(data));location.href="confirmation.html"});
}
function initConfirmation(){const d=JSON.parse(localStorage.getItem("lastBooking")||"null");if(!d)return;Object.entries(d).forEach(([k,v])=>{const el=qs("#"+k);if(el)el.textContent=v});}
function initCompare(){
 const ids=JSON.parse(localStorage.getItem("compare")||"[]"),box=qs("#compareContent");if(!box)return;
 if(!ids.length){box.innerHTML='<div class="empty">Add cars from the Cars page using Compare.</div>';return}
 const chosen=ids.map(getCar).filter(Boolean);const rows=[["Price","price",c=>money(c.price)],["Engine","engine",c=>c.engine],["Power","power",c=>c.power],["Torque","torque",c=>c.torque],["Mileage","mileage",c=>c.mileage],["Fuel","fuel",c=>c.fuel],["Transmission","transmission",c=>c.transmission],["Seats","seats",c=>c.seats],["Boot Space","boot",c=>c.boot],["Safety & Features","features",c=>c.features.join(", ")]];
 box.innerHTML=`<div class="compare-wrap"><table class="compare-table"><thead><tr><th>Specification</th>${chosen.map(c=>`<th>${c.brand} ${c.model}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr><th>${r[0]}</th>${chosen.map(c=>`<td>${r[2](c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div><div style="margin-top:16px"><button class="btn btn-outline" onclick="localStorage.removeItem('compare');location.reload()">Clear Comparison</button></div>`;
}
function initAuth(){
 const login=qs("#loginForm"),reg=qs("#registerForm");if(login)login.onsubmit=e=>{e.preventDefault();localStorage.setItem("user",JSON.stringify({email:qs("#loginEmail").value}));toast("Login successful");setTimeout(()=>location.href="profile.html",500)};
 if(reg)reg.onsubmit=e=>{e.preventDefault();localStorage.setItem("user",JSON.stringify({name:qs("#regName").value,email:qs("#regEmail").value}));toast("Account created");setTimeout(()=>location.href="profile.html",500)};
}
function initProfile(){const u=JSON.parse(localStorage.getItem("user")||"null");if(qs("#profileEmail"))qs("#profileEmail").textContent=u?.email||"Guest user";const fav=JSON.parse(localStorage.getItem("favorites")||"[]");if(qs("#savedCars"))qs("#savedCars").innerHTML=fav.length?fav.map(id=>carCard(getCar(id))).join(""):`<div class="empty">No saved cars yet.</div>`}
function initAdmin(){
 const tb=qs("#adminCars");if(tb)tb.innerHTML=cars.map(c=>`<tr><td>${c.brand} ${c.model}</td><td>${money(c.price)}</td><td>${c.fuel}</td><td><button class="btn btn-small btn-outline" onclick="toast('Edit panel opened for ${c.model}')">Edit</button> <button class="btn btn-small btn-outline" onclick="toast('Delete action confirmed for ${c.model}')">Delete</button></td></tr>`).join("");
}
document.addEventListener("DOMContentLoaded",()=>{setupNav();populateSelects();initHome();initCars();initDetails();initEMI();initBooking();initConfirmation();initCompare();initAuth();initProfile();initAdmin()});
