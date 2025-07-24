// 더미 데이터: 과일 이름 리스트
const data = [
  "사과", "바나나", "오렌지", "포도", "수박", "딸기", "키위", "복숭아", "자두", "파인애플",
  "망고", "레몬", "체리", "블루베리", "라임", "멜론", "감", "귤", "토마토", "배"
];

const searchInput = document.getElementById("searchInput");
const resultList = document.getElementById("resultList");
const noResult = document.getElementById("noResult");

const fruitImages = {
  "바나나": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg",
  "사과": "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
  "수박": "https://upload.wikimedia.org/wikipedia/commons/0/04/Watermelon.jpg",
  "오렌지": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
  "포도": "https://upload.wikimedia.org/wikipedia/commons/1/13/201508_Grapes.jpg",
  "딸기": "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg",
  "키위": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg",
  "복숭아": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peach.jpg",
  "자두": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Plums.jpg",
  "파인애플": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Pineapple_and_cross_section.jpg",
  "망고": "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
  "레몬": "https://upload.wikimedia.org/wikipedia/commons/3/36/Lemon.jpg",
  "체리": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Cherry_Stella444.jpg",
  "블루베리": "https://upload.wikimedia.org/wikipedia/commons/1/15/Blueberries.jpg",
  "라임": "https://upload.wikimedia.org/wikipedia/commons/6/6b/Limes.jpg",
  "멜론": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Cucumis_melo_1.jpg",
  "감": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Kaki_fruit.jpg",
  "귤": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Mandarin_Oranges.jpg",
  "토마토": "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
  "배": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Korean_pear.jpg"
};

function renderList(items, query) {
  resultList.innerHTML = "";
  const fruitImg = document.getElementById("fruitImg");
  let showImg = false;
  let imgUrl = "";
  // 검색어와 결과에 해당 과일이 있으면 이미지 표시 (여러 과일 중 첫 번째)
  for (const fruit of items) {
    if (fruitImages[fruit] && query && query.includes(fruit)) {
      showImg = true;
      imgUrl = fruitImages[fruit];
      fruitImg.alt = fruit + " 이미지";
      break;
    }
  }
  if (showImg) {
    fruitImg.src = imgUrl;
    fruitImg.style.display = "block";
  } else {
    fruitImg.style.display = "none";
  }
  if (items.length === 0) {
    noResult.style.display = "block";
    return;
  }
  noResult.style.display = "none";
  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    resultList.appendChild(li);
  });
}


searchInput.addEventListener("input", function() {
  const query = this.value.trim();
  const filtered = data.filter(item => item.includes(query));
  renderList(filtered, query);
});

// 초기 전체 리스트 표시
renderList(data, "");
