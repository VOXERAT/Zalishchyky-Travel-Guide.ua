let header = null;

function initHeader() {
  header = document.querySelector(".header");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHeader);
} else {
  initHeader();
}

function first() {
  if (!header) {
    console.warn("header not found");
    return;
  }
  document
    .querySelectorAll(
      ".azur, .be, .qr, .noc, .zara, .banana, .dad, .item-2, .jey, .box, .bigbob, .img-z, .gg1, .gg2, .gg3, .gg4, .gg5, .gg6, .gg7, .gg8, .gg9, .retot",
    )
    .forEach((el) => el.remove());
  const logoEl = document.getElementsByClassName("logo")[0];
  if (logoEl) logoEl.innerHTML = "Чим доїхати?";

  const azur = document.createElement("div");
  azur.classList.add("azur");
  header.appendChild(azur);
  const ras = document.createElement("img");
  ras.classList.add("ras");
  ras.src = "Images/car.png";
  azur.appendChild(ras);
  const be = document.createElement("div");
  be.classList.add("be");
  azur.appendChild(be);

  const sonik = document.createElement("p");
  sonik.classList.add("sonik");
  sonik.textContent =
    "До Заліщиків можна доїхати потягом, автобусом, автомобілем або таксі. Місто має залізничне та автобусне сполучення з багатьма містами України, зокрема Чернівцями, Тернополем, Львовом, Хмельницьким та Кам’янцем-Подільським.";
  be.append(sonik);

  const qr = document.createElement("div");
  qr.classList.add("qr");
  header.appendChild(qr);

  const noni1 = document.createElement("div");
  noni1.classList.add("noni1");
  qr.appendChild(noni1);
  const face = document.createElement("a");
  face.classList.add("face");
  face.href =
    "https://www.uz.gov.ua/passengers/timetable/?station=23220&by_station=1&ordrul=1";
  face.textContent = "Купити квитки на потяг до Заліщиків";
  noni1.appendChild(face);
  const led1 = document.createElement("img");
  led1.classList.add("led");
  led1.src = "Images/train station.jpg";
  noni1.appendChild(led1);

  const noni2 = document.createElement("div");
  noni2.classList.add("noni2");
  qr.appendChild(noni2);
  const face2 = document.createElement("a");
  face2.classList.add("face");
  face2.href = "https://busfor.ua/uk/bus-to/zalishhyky";
  face2.textContent = "Купити квитки на автобус до Заліщиків";
  noni2.appendChild(face2);
  const led2 = document.createElement("img");
  led2.classList.add("led2");
  led2.src = "Images/bus.webp";
  noni2.appendChild(led2);

  const noni3 = document.createElement("div");
  noni3.classList.add("noni3");
  qr.appendChild(noni3);
  const face3 = document.createElement("a");
  face3.classList.add("face");
  face3.href =
    "https://thebesttaxi.net.ua/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAxMjE3OTgxNjQ0ODc5NjI4AAGnMoGQAiEoUerFldyd77MhGeoV4zUyP7YIU9W3K522twpvyz4Lvfr3SLLrOL4_aem_F8UfrHcwz-KKpxT6x9S_Og";
  face3.textContent = "Купити квитки на таксі до Заліщиків";
  noni3.appendChild(face3);
  const led3 = document.createElement("img");
  led3.classList.add("led");
  led3.src = "Images/taksi.jpg";
  noni3.appendChild(led3);
}

function second() {
  if (!header) {
    console.warn("header not found");
    return;
  }
  document
    .querySelectorAll(
      ".azur, .be, .qr, .noc, .zara, .banana, .dad, .item-2, .jey, .box, .bigbob, .img-z, .gg1, .gg2, .gg3, .gg4, .gg5, .gg6, .gg7, .gg8, .gg9, .retot",
    )
    .forEach((el) => el.remove());
  const logoEl2 = document.getElementsByClassName("logo")[0];
  if (logoEl2) logoEl2.innerHTML = "Де зупинитися?";

  const div1 = document.createElement("div");
  div1.classList.add("noc");
  header.appendChild(div1);
  const ul = document.createElement("ul");
  ul.classList.add("zara");
  div1.appendChild(ul);
  const hotel = document.createElement("img");
  hotel.classList.add("hotel");
  hotel.src = "Images/hotel emoji.webp";
  div1.appendChild(hotel);

  const li1 = document.createElement("li");
  li1.classList.add("toptext");
  li1.textContent = "У Заліщиках є кілька варіантів, де можна переночувати:";
  ul.appendChild(li1);
  const li2 = document.createElement("li");
  li2.classList.add("toptext");
  li2.textContent = "1. Оазис — готель у Заліщиках, вул. Зеленогайська, 5а.";
  ul.appendChild(li2);
  const li3 = document.createElement("li");
  li3.classList.add("toptext");
  li3.textContent =
    "2. Старі Заліщики — готель у центрі міста, вул. Степана Бандери.";
  ul.appendChild(li3);
  const li4 = document.createElement("li");
  li4.classList.add("toptext");
  li4.textContent =
    "3. МішиН-СіТі — туристичний комплекс та готель у Добрівлянах, неподалік Заліщиків, вул. Національного відродження, 202.";
  ul.appendChild(li4);

  const dad = document.createElement("div");
  dad.classList.add("dad");
  header.appendChild(dad);

  const bmw1 = document.createElement("div");
  bmw1.classList.add("bmw1");
  dad.appendChild(bmw1);
  const cara1 = document.createElement("a");
  cara1.classList.add("a");
  cara1.href = "https://www.booking.com/hotel/ua/oazis-zalishchyky.uk.html";
  cara1.textContent = "Забронювати номер в готелі Оазис";
  bmw1.appendChild(cara1);
  const cara2 = document.createElement("img");
  cara2.classList.add("picture");
  cara2.src = "Images/oasis.jpg";
  bmw1.appendChild(cara2);

  const bmw2 = document.createElement("div");
  bmw2.classList.add("bmw2");
  dad.appendChild(bmw2);
  const tat1 = document.createElement("a");
  tat1.classList.add("a");
  tat1.href =
    "https://hotels24.ua/uk/Zalishchyky/Hotel-Roksolanochka-7976.html";
  tat1.textContent = "Забронювати номер у готелі Старі заліщики";
  bmw2.appendChild(tat1);
  const tat2 = document.createElement("img");
  tat2.classList.add("picture2");
  tat2.src = "Images/hotel old zalishchyky.jpg";
  bmw2.appendChild(tat2);

  const bmw3 = document.createElement("div");
  bmw3.classList.add("bmw3");
  dad.appendChild(bmw3);
  const lof1 = document.createElement("a");
  lof1.classList.add("a");
  lof1.href =
    "https://www.booking.com/searchresults.uk.html?aid=331505&label=hotel-mishyn-city-BPp5otfGE6GzH8zDDX89GwS744536801920%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-392307358517%3Alp9227687%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ya9nxjGDNbW5EYtiD4vOFos&gclid=Cj0KCQjwnIDUBhDrARIsAJDGwStg70MANKmKDUaZVcI3iKV0UC4sw7T9s52mu-zJ_1msPlikJ0nTttUaAqVuEALw_wcB&redirected=1&city=-1037910&highlighted_hotels=2147429&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=a741a88170348fdec11c206156f8f86a";
  lof1.textContent = "Забронювати номер у готелі МішиН-СіТі";
  bmw3.appendChild(lof1);
  const lof2 = document.createElement("img");
  lof2.classList.add("picture");
  lof2.src = "Images/Mishyn City 2.jpg";
  bmw3.appendChild(lof2);
}

function third() {
  if (!header) {
    console.warn("header not found");
    return;
  }
  document
    .querySelectorAll(
      ".azur, .be, .qr, .noc, .zara, .banana, .dad, .item-2, .jey, .box, .bigbob, .img-z, .gg1, .gg2, .gg3, .gg4, .gg5, .gg6, .gg7, .gg8, .gg9, .retot",
    )
    .forEach((el) => el.remove());
  const logoEl3 = document.getElementsByClassName("logo")[0];
  if (logoEl3) logoEl3.innerHTML = "Де поїсти?";

  const banana = document.createElement("div");
  banana.classList.add("banana");
  header.appendChild(banana);
  const food = document.createElement("img");
  food.classList.add("food");
  food.src = "Images/food.png";
  banana.appendChild(food);
  const zak = document.createElement("div");
  zak.classList.add("zak");
  banana.appendChild(zak);
  const p = document.createElement("p");
  p.classList.add("p");
  p.textContent =
    "У Заліщиках є ресторани, кафе, піцерії та кав’ярні на будь-який смак. Можна пообідати в ресторані, замовити піцу чи суші або просто випити кави з десертом. Серед популярних закладів — Старе Місто, Food House, Mango sushi&pizza, Cakes kafe, У Парку та Роксоланочка.";
  zak.appendChild(p);

  const gg1 = document.createElement("div");
  gg1.classList.add("gg1");
  header.appendChild(gg1);
  const mem = document.createElement("h2");
  mem.classList.add("memori");
  mem.textContent = "Ресторан «Роксоланочка»";
  gg1.appendChild(mem);

  const gg2 = document.createElement("div");
  gg2.classList.add("gg2");
  gg2.id = "gg2";
  header.appendChild(gg2);
  const bed = document.createElement("img");
  bed.classList.add("bed");
  bed.classList.add("bed1");
  bed.src = "Images/rocsolanochka.jpg";
  gg2.appendChild(bed);

  const gg3 = document.createElement("div");
  gg3.classList.add("gg3");
  gg3.id = "gg3";
  header.appendChild(gg3);
  const jax1 = document.createElement("img");
  jax1.classList.add("jax1");
  jax1.src = "Images/soup.png";
  gg3.appendChild(jax1);
  const key = document.createElement("div");
  key.classList.add("key");
  gg3.appendChild(key);
  const baobab = document.createElement("p");
  baobab.classList.add("baobab");
  baobab.classList.add("baobab2");
  baobab.textContent =
    "Ресторан «Роксоланочка» пропонує страви української та європейської кухні. Тут можна скуштувати борщ, вареники, салати, м’ясні та рибні страви, а також десерти та напої. Ресторан має затишну атмосферу та обслуговування на хорошому рівні.";
  key.appendChild(baobab);

  const gg4 = document.createElement("div");
  gg4.classList.add("gg1");
  header.appendChild(gg4);
  const mem2 = document.createElement("h2");
  mem2.classList.add("memori");
  mem2.classList.add("memori2");
  mem2.textContent = "Ресторан «Старе місто»";
  gg4.appendChild(mem2);

  const gg5 = document.createElement("div");
  gg5.classList.add("gg2");
  gg5.id = "gg5";
  header.appendChild(gg5);
  const bed2 = document.createElement("img");
  bed2.classList.add("bed");
  bed2.classList.add("bed2");
  bed2.src = "Images/stare-misto.jpg";
  gg5.appendChild(bed2);

  const gg6 = document.createElement("div");
  gg6.classList.add("gg3");
  gg6.id = "gg6";
  header.appendChild(gg6);
  const key2 = document.createElement("div");
  key2.classList.add("key");
  gg6.appendChild(key2);
  const baobab2 = document.createElement("p");
  baobab2.classList.add("baobab1");
  baobab2.textContent =
    "У меню ви знайдете різноманітні страви, свіжі салати, гарніри та інші смаколики. А особлива любов наших гостей — ароматна піца з хрусткою скоринкою, соковитою начинкою та великою кількістю сиру. Затишна атмосфера, смачна кухня та приємний відпочинок — усе це чекає на вас у «Старому місті».";
  key2.appendChild(baobab2);
  const jax2 = document.createElement("img");
  jax2.classList.add("jax2");
  jax2.src = "Images/pizza.png";
  gg6.appendChild(jax2);

  const gg7 = document.createElement("div");
  gg7.classList.add("gg1");
  header.appendChild(gg7);
  const mem3 = document.createElement("h2");
  mem3.classList.add("memori");
  mem3.classList.add("memori3");
  mem3.textContent = "Ресторан «Food House»";
  gg7.appendChild(mem3);

  const gg8 = document.createElement("div");
  gg8.classList.add("gg2");
  gg8.id = "gg8";
  header.appendChild(gg8);
  const bed3 = document.createElement("img");
  bed3.classList.add("bed");
  bed3.classList.add("bed3");
  bed3.src = "Images/food house.jpg";
  gg8.appendChild(bed3);

  const gg9 = document.createElement("div");
  gg9.classList.add("gg3");
  gg9.id = "gg9";
  header.appendChild(gg9);
  const jax3 = document.createElement("img");
  jax3.classList.add("jax3");
  jax3.src = "Images/burger.png";
  gg9.appendChild(jax3);
  const key3 = document.createElement("div");
  key3.classList.add("key");
  gg9.appendChild(key3);
  const baobab3 = document.createElement("p");
  baobab3.classList.add("baobab");
  baobab3.classList.add("baobab3");
  baobab3.textContent =
    "Food House у Заліщиках — місце для тих, хто любить смачно поїсти! Тут можна знайти страви на будь-який смак — соковиті бургери, ароматну піца, хрусткі закуски та інші смаколики, які чудово підійдуть як для швидкого перекусу, так і для зустрічі з друзями.";
  key3.appendChild(baobab3);

  const sto1 = document.createElement("button");
  sto1.classList.add("sto");
  sto1.textContent = "Переглянути наступні заклади";

  sto1.addEventListener("click", () => {
    document.getElementsByClassName("memori")[0].innerHTML =
      "Кафе «МішиН-СіТі»";
    document.getElementsByClassName("memori2")[0].innerHTML =
      "Ресторан Mango sushi&pizza";
    document.getElementsByClassName("memori3")[0].innerHTML =
      "Кафе Cakes kafe";
    document.getElementsByClassName("baobab3")[0].innerHTML =
      "Cakes Kafe — затишне місце у Заліщиках. Завітайте до нас за смачними десертами, ароматною кавою та приємною атмосферою і подарувати собі трішки гарного настрою. Cakes Kafe — смак, який хочеться повторити!";
    document.getElementsByClassName("baobab2")[0].innerHTML =
      "Кафе «МішиН-СіТі». Смачна кухня, затишна атмосфера та приємні моменти неподалік міста Заліщиків (Готельний комплекс). У меню — різноманітні страви для кожного смаку, приготовані з якісних продуктів. Від закусок і салатів до гарячих страв та десертів.";
    document.getElementsByClassName("baobab1")[0].innerHTML =
      "Mango sushi&pizza — ресторан у Заліщиках, де можна скуштувати смачні суші, піцу та інші страви японської та інших кухонь. Тут ви знайдете великий вибір ролів, сетів, гарячих страв та десертів. Затишна атмосфера та приємне обслуговування зроблять ваш візит незабутнім.";
    document.getElementsByClassName("bed2")[0].remove();
    const newBed2 = document.createElement("img");
    newBed2.classList.add("bed");
    newBed2.src = "Images/mango.jpg";
    document.getElementById("gg5").appendChild(newBed2);
    document.getElementsByClassName("bed1")[0].remove();
    const newBed1 = document.createElement("img");
    newBed1.classList.add("bed");
    newBed1.src = "Images/mishyn city.jpg";
    document.getElementById("gg2").appendChild(newBed1);
    document.getElementsByClassName("bed3")[0].remove();
    const newBed3 = document.createElement("img");
    newBed3.classList.add("bed");
    newBed3.src = "Images/cakes cafe.jpg";
    document.getElementById("gg8").appendChild(newBed3);
    document.getElementsByClassName("jax1")[0].remove();
    const newJax1 = document.createElement("img");
    newJax1.classList.add("jax1");
    newJax1.src = "Images/boild emoji.png";
    newJax1.style.width = "200px";
    newJax1.style.height = "200px";
    document.getElementById("gg3").appendChild(newJax1);
    document.getElementsByClassName("jax2")[0].remove();
    const newJax2 = document.createElement("img");
    newJax2.classList.add("jax2");
    newJax2.src = "Images/sushi emoji.png";
    newJax2.style.width = "220px";
    newJax2.style.height = "220px";
    document.getElementById("gg6").appendChild(newJax2);
    document.getElementsByClassName("jax3")[0].remove();
    const newJax3 = document.createElement("img");
    newJax3.classList.add("jax3");
    newJax3.src = "Images/cakes emoji.png";
    newJax3.style.width = "185px";
    newJax3.style.height = "185px";
    newJax3.style.top = "2510px";
    document.getElementById("gg9").appendChild(newJax3);
  });

  document.getElementById("gg9").appendChild(sto1);
}

function fourth() {
  if (!header) {
    console.warn("header not found");
    return;
  }
  document
    .querySelectorAll(
      ".azur, .be, .qr, .noc, .zara, .banana, .dad, .item-2, .jey, .box, .bigbob, .img-z, .gg1, .gg2, .gg3, .gg4, .gg5, .gg6, .gg7, .gg8, .gg9, .retot",
    )
    .forEach((el) => el.remove());
  const logoEl4 = document.getElementsByClassName("logo")[0];
  if (logoEl4) logoEl4.innerHTML = "Що відвідати?";

  const retot = document.createElement("div");
  retot.classList.add("retot");
  header.appendChild(retot);
  const retotin = document.createElement("div");
  retotin.classList.add("retotin");
  retot.appendChild(retotin);
  const retotp = document.createElement("p");
  retotp.classList.add("retotp");
  retotp.textContent =
    "Що подивитися в Заліщиках: Центральну Площу, Костел Святого Станіслава, Палац Бруницьких і Нижній парк, Пляж «Сонячний», Дністровський каньон та оглядові точки на меандр Дністра (у місті та біля с. Хрещатик).";
  retotin.appendChild(retotp);
  const retotimg = document.createElement("img");
  retotimg.classList.add("retotimg");
  retotimg.src = "Images/camera emoji.png";
  retot.appendChild(retotimg);

  const ff1 = document.createElement("div");
  ff1.classList.add("gg1");
  header.appendChild(ff1);
  const qup1 = document.createElement("h2");
  qup1.classList.add("memori");
  qup1.id = "qup1";
  qup1.textContent =
    "Площа"
  ff1.appendChild(qup1);
  
  const ff2 = document.createElement("div");
  ff2.classList.add("gg2");
  header.appendChild(ff2);
  const qup2 = document.createElement("img");
  qup2.classList.add("bed");
  qup2.id = "qup2";
  qup2.src = "Images/area.png";
  ff2.appendChild(qup2);

  const ff3 = document.createElement("div");
  ff3.classList.add("gg3");
  header.appendChild(ff3);
  const qup3em = document.createElement("img");
  qup3em.classList.add("jax1");
  qup3em.id = "qup3em";
  qup3em.src = "Images/fountan emoji.png";
  ff3.appendChild(qup3em);
  const qup3d = document.createElement("div");
  qup3d.classList.add("key");
  ff3.appendChild(qup3d);
  const qup3 = document.createElement("p");
  qup3.classList.add("baobab");
  qup3.id = "qup3";
  qup3.style.fontSize = "30px";
  qup3.textContent =
    "Центральна площа міста, де розташовані адміністративні будівлі, магазини та кафе. Тут можна відпочити, прогулятися та насолодитися атмосферою міста.";
  qup3d.appendChild(qup3);

  const ff4 = document.createElement("div");
  ff4.classList.add("gg1");
  header.appendChild(ff4);
  const qup4 = document.createElement("h2");
  qup4.classList.add("memori");
  qup4.id = "qup4";
  qup4.textContent =
    "Костел Святого Станіслава";
  ff4.appendChild(qup4);

  const ff5 = document.createElement("div");
  ff5.classList.add("gg2");
  header.appendChild(ff5);
  const qup5 = document.createElement("img");
  qup5.classList.add("bed");
  qup5.id = "qup5";
  qup5.src = "Images/kostel.jpg";
  ff5.appendChild(qup5);

  const ff6 = document.createElement("div");
  ff6.classList.add("gg3");
  header.appendChild(ff6);
  const qup6em = document.createElement("img");
  qup6em.classList.add("jax2");
  qup6em.id = "qup6em";
  qup6em.src = "Images/tample emoji.png";
  ff6.appendChild(qup6em);
  const qup6d = document.createElement("div");
  qup6d.classList.add("key");
  ff6.appendChild(qup6d);
  const qup6 = document.createElement("p");
  qup6.classList.add("baobab");
  qup6.id = "qup6";
  qup6.style.fontSize = "27px";
  qup6.textContent =
    "Костел Святого Станіслава — католицький храм у Заліщиках, побудований у XVIII столітті. Він є пам’яткою архітектури та культури, а також місцем проведення релігійних обрядів та свят.";
  qup6d.appendChild(qup6);

  const ff7 = document.createElement("div");
  ff7.classList.add("gg1");
  header.appendChild(ff7);
  const qup7 = document.createElement("h2");
  qup7.classList.add("memori");
  qup7.id = "qup7";
  qup7.textContent =
    "Палац Бруницьких і Нижній парк";
  ff7.appendChild(qup7);

  const ff8 = document.createElement("div");
  ff8.classList.add("gg2")
  ff8.style.justifyContent = "space-evenly";
  header.appendChild(ff8);
  const qup8 = document.createElement("img");
  qup8.classList.add("bed");
  qup8.id = "qup8";
  qup8.src = "Images/Palace.webp";
  ff8.appendChild(qup8);
  const qup82 = document.createElement("img");
  qup82.classList.add("bed");
  qup82.id = "qup82";
  qup82.src = "Images/park.jpg";
  ff8.appendChild(qup82);

  const ff9 = document.createElement("div");
  ff9.classList.add("gg3");
  header.appendChild(ff9);
  const qup9em = document.createElement("img");
  qup9em.classList.add("jax3");
  qup9em.id = "qup9em";
  qup9em.style.width = "300px";
  qup9em.style.height = "300px";
  qup9em.style.top = "2445px";
  qup9em.src = "Images/park emoji.png";
  ff9.appendChild(qup9em);
  const qup9d = document.createElement("div");
  qup9d.classList.add("key");
  qup9d.style.width = "770px";
  ff9.appendChild(qup9d);
  const qup9 = document.createElement("p");
  qup9.classList.add("baobab");
  qup9.id = "qup9";
  qup9.style.fontSize = "25px";
  qup9.textContent =
    "Палац Бруницьких — історична будівля у Заліщиках, побудована у XIX столітті. Вона є пам’яткою архітектури та культури. Нижній парк — це зелена зона з алеями, лавками та дитячими майданчиками, де можна відпочити та насолодитися природою.";
  qup9d.appendChild(qup9);
  
  const sto2 = document.createElement("button");
  sto2.classList.add("sto");
  sto2.textContent = "Переглянути наступні місця";

  sto2.addEventListener("click", () => {
    document.getElementById("qup1").innerHTML = 
      "Пляж «Сонячний»";
    document.getElementById("qup4").innerHTML =
      "Дністровський каньон";
    document.getElementById("qup7").innerHTML =
      "Оглядові точки на меандр Дністра";
    document.getElementById("qup3").innerHTML =
      "Пляж «Сонячний» — популярне місце відпочинку у Заліщиках, де можна купатися, засмагати та насолоджуватися природою. Пляж розташований на березі річки Дністер і має гарний вид на околиці міста.";
      qup3.style.fontSize = "27px";
    document.getElementById("qup6").innerHTML =
      "Дністровський каньон — природна пам’ятка України, розташована на річці Дністер. Це мальовниче місце з крутими схилами та скелями, де можна займатися туризмом, риболовлею та фотографуванням.";
    qup6.style.fontSize = "27px";
    document.getElementById("qup9").innerHTML =
      "Оглядові точки на меандр Дністра — це місця, з яких відкривається чудовий вид на річку Дністер та її меандри. Вони розташовані у місті Заліщики та біля села Хрещатик, де можна насолоджуватися красою природи та робити фотографії.";
    qup9.style.fontSize = "25px";
    document.getElementById("qup2").src = "Images/beach.jpg";
    document.getElementById("qup5").src = "Images/canyon.jpg";
    document.getElementById("qup8").src = "Images/viewpoint.jpg";
    document.getElementById("qup82").src = "Images/viewpoint-2.jpg";
    qup82.style.width = "650px";
    document.getElementById("qup3em").src = "Images/beach emoji.png";
    document.getElementById("qup6em").src = "Images/mountain emoji.png";
  });

  ff9.appendChild(sto2);
}
