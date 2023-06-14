const urlParameter = window.location.href;
const url = new URL(urlParameter);
const urlParams = url.searchParams;
const url_class = urlParams.get("class");
// console.log(url_class);

const weapon = {
  적면귀: [{ name: "만인경", stat: {} }],
  팬블: [
    { name: "공절검", stat: {} },
    { name: "알칸타라", stat: {} },
  ],
  테슬라: [{ name: "니케", stat: {} }],
  매그: [
    { name: "포트리스", stat: {} },
    { name: "배섀르크", stat: {} },
  ],
  아발: [
    { name: "탈라리아", stat: {} },
    { name: "폴리스라인", stat: {} },
    { name: "임팩트 스매셔", stat: {} },
    { name: "플레임 드라이브", stat: {} },
  ],
  아피: [
    { name: "철권통치", stat: {} },
    { name: "도피오", stat: {} },
    { name: "인퀴지터", stat: {} },
  ],
  바이퍼센트: [
    { name: "익큐", stat: {} },
    { name: "헤븐", stat: {} },
    { name: "히트맨", stat: {} },
  ],
  트슈: [
    { name: "글램", stat: {} },
    { name: "크로스로드", stat: {} },
    { name: "익스", stat: {} },
  ],
  헤비암즈: [
    { name: "가십걸", stat: {} },
    { name: "미저리", stat: {} },
  ],
  센티넬: [
    {
      name: "살라만드라",
      stat: {
        공격력: [811, 944],
        공격력퍼센트: [12, 25],
        모든타격피해: [6, 12],
      },
    },
  ],
  파랑매: [
    { name: "쯔바이", stat: {} },
    { name: "나이트록스", stat: {} },
  ],
  네레이스: [
    { name: "스피어", stat: {} },
    { name: "볼프", stat: {} },
  ],
  인형사: [
    { name: "디엔드라", stat: {} },
    { name: "탐식의 고리", stat: {} },
  ],
  그왕: [{ name: "안테노라", stat: {} }],
};

const item = {
  무기: [{ name: "없음", stat: {} }],
  목걸이: [
    { name: "없음", stat: {} },
    {
      name: "목 마른 이의 구원",
      stat: { 공격력퍼센트: [7, 15], 치명타확률: [6, 6] },
    },
    { name: "투귀의 눈", stat: { 치명타피해: [8, 18], 명속성강화: [10, 20] } },
    {
      name: "벼락 수집가",
      stat: { 치명타피해: [14, 30], 스킬재사용속도: [6, 12] },
    },
    {
      name: "마나 강탈기",
      stat: {
        공격력퍼센트: [10, 20],
        공격속도: [6, 12],
        캐스팅차지속도: [6, 12],
      },
    },
  ],
  팔찌: [
    { name: "없음", stat: {} },
    {
      name: "다합의 팔찌",
      stat: { 방어력: [7, 15], 피해증가: [10, 20], 버프효과: [10, 20] },
    },
    { name: "사이버 코어", stat: { 지능: [10, 20], 버프효과: [17, 35] } },
    { name: "불새 고리", stat: { 피해감소: [5, 5], 몬스터추가피해: [10, 20] } },
    {
      name: "살아있는 혈액",
      stat: { 체력퍼센트: [9, 18], 마나: [400, 800], 모든속성강화: [12, 25] },
    },
    {
      name: "브레이브 블루",
      stat: {
        치명타피해: [20, 40],
        체력퍼센트: [6, 12],
        초당마나재생: [5, 10],
      },
    },
    {
      name: "능력 증폭 장치",
      stat: { 피해증가: [15, 30], 마나: [400, 800], 활력퍼센트: [6, 12] },
    },
  ],
  반지: [
    { name: "없음", stat: {} },
    {
      name: "크리스탈 베인",
      stat: {
        스킬재사용속도: [12, 25],
        마나소모감소: [5, 10],
        버프효과: [12, 25],
      },
    },
    {
      name: "자혜로운 바다",
      stat: { 공격속도: [4, 8], 캐스팅차지속도: [4, 8], 수속성강화: [10, 20] },
    },
    {
      name: "피를 삼킨 가시나무",
      stat: { 모든타격피해: [6, 12], 스킬재사용속도: [5, 10] },
    },
    {
      name: "영광의 상징",
      stat: {
        치명타확률: [6, 12],
        암속성강화: [12, 25],
        초당마나재생: [6, 12],
      },
    },
    {
      name: "잊힌 전설",
      stat: {
        명속성강화: [12, 25],
        마나: [200, 400],
        스킬재사용속도: [10, 20],
      },
    },
    {
      name: "에일리언 오파츠",
      stat: { 치명타피해: [22, 44], 모든속성강화: [6, 12] },
    },
    {
      name: "궤뚫어보는 자",
      stat: {
        치명타피해: [6, 12],
        모든타격피해: [7, 15],
        스킬재사용속도: [7, 7],
      },
    },
  ],
  머리: [
    { name: "없음", stat: {} },
    {
      name: "초토화 머신",
      stat: {
        피해증가: [5, 10],
        일반몬스터추가피해: [10, 20],
        모든타격피해: [10, 20],
      },
    },
    {
      name: "속죄자의 긴고아",
      stat: { 모든속성강화: [10, 20], 모든타격피해: [10, 20] },
    },
    {
      name: "얼굴없는 집행인",
      stat: { 치명타피해: [14, 30], 피해증가: [10, 20] },
    },
    {
      name: "썬더볼트",
      stat: {
        공격속도: [7, 15],
        캐스팅차지속도: [7, 15],
        명속성강화: [17, 35],
      },
    },
    {
      name: "얼어붙은 전사",
      stat: { 치명타피해: [22, 44], 스킬재사용속도: [7, 15] },
    },
    {
      name: "스컬 페이스",
      stat: { 치명타확률: [6, 12], 모든속성강화: [15, 30] },
    },
  ],
  상의: [
    { name: "없음", stat: {} },
    {
      name: "외계의 선물",
      stat: {
        공격력퍼센트: [15, 30],
        활력퍼센트: [15, 30],
        버프효과: [25, 50],
      },
    },
    {
      name: "넘실거리는 물결 상의",
      stat: {
        체력퍼센트: [10, 20],
        화속성저항: [165, 165],
        스킬재사용속도: [6, 6],
      },
    },
    {
      name: "식지 않는 열기",
      stat: {
        치명타피해: [8, 8],
        수속성저항: [165, 165],
        활력퍼센트: [10, 20],
      },
    },
    {
      name: "희생된 자의 유품",
      stat: {
        치명타피해: [8, 8],
        체력퍼센트: [10, 20],
        명속성저항: [165, 165],
      },
    },
    {
      name: "지치지 않는 정신",
      stat: { 방어력: [15, 30], 암속성저항: [165, 165], 이동속도: [4, 4] },
    },
    { name: "트릭 머신", stat: { 피해증가: [3, 7], 체력퍼센트: [12, 25] } },
    {
      name: "퍼센트펙트 케어",
      stat: { 치명타확률: [10, 20], 활력퍼센트: [12, 25] },
    },
  ],
  벨트: [
    { name: "없음", stat: {} },
    {
      name: "비프로스트 벨트",
      stat: {
        우두머리추가피해: [7, 10],
        캐스팅차지속도: [5, 10],
        체력퍼센트: [10, 20],
      },
    },
    {
      name: "잘려나간 바람",
      stat: { 치명타피해: [6, 12], 카운터추피: [7, 15], 체력퍼센트: [10, 20] },
    },
    {
      name: "플레티넘 고스트",
      stat: { 피해감소: [7, 15], 수속성강화: [7, 15], 스킬재사용속도: [7, 15] },
    },
    {
      name: "불도마뱀",
      stat: { 피해감소: [9, 18], 화속성강화: [10, 20], 마나소모감소: [12, 12] },
    },
    {
      name: "밤사냥꾼",
      stat: { 방어력: [6, 12], 피해감소: [6, 6], 암속성강화: [7, 15] },
    },
    {
      name: "어둠속의 번뜩임",
      stat: { 명속성강화: [12, 25], 활력퍼센트: [10, 20], 이동속도: [5, 5] },
    },
    { name: "파고드는 악마", stat: { 피해증가: [9, 18], 활력퍼센트: [9, 18] } },
  ],
  하의: [
    { name: "없음", stat: {} },
    {
      name: "리미트리스",
      stat: {
        백어택피해증가: [6, 12],
        체력퍼센트: [10, 20],
        몬스터추가피해: [10, 20],
      },
    },
    {
      name: "해일 드레스",
      stat: { 공중피해: [6, 12], 수속성강화: [12, 25], 활력퍼센트: [10, 20] },
    },
    {
      name: "넷다이버",
      stat: { 피해증가: [15, 30], 체력퍼센트: [10, 20], 마나: [250, 500] },
    },
    {
      name: "툰드라 스커트",
      stat: {
        초당체력재생: [15, 30],
        공격력퍼센트: [12, 25],
        활력퍼센트: [10, 20],
      },
    },
    {
      name: "케미컬 포스",
      stat: { 피해증가: [12, 25], 체력퍼센트: [10, 20], 회피확률: [5, 5] },
    },
    {
      name: "사이버네틱 링크",
      stat: {
        피해감소: [4, 4],
        활력퍼센트: [10, 20],
        스킬재사용속도: [15, 30],
      },
    },
    {
      name: "와이번 레더 팬츠",
      stat: { 방어력: [7, 15], 치명타확률: [12, 25], 체력퍼센트: [7, 15] },
    },
  ],
  신발: [
    { name: "없음", stat: {} },
    {
      name: "최정예 전투 군화",
      stat: { 방어력: [6, 12], 피해증가: [9, 18], 몬스터추가피해: [10, 20] },
    },
    {
      name: "모독의 부츠",
      stat: { 치명타확률: [12, 25], 회피확률: [4, 4], 모든타격피해: [9, 18] },
    },
    {
      name: "넷러너",
      stat: { 방어력: [6, 12], 치명타피해: [20, 40], 스킬재사용속도: [7, 15] },
    },
    {
      name: "아이언 야크",
      stat: { 치명타확률: [7, 15], 회피확률: [4, 8], 몬스터추가피해: [10, 20] },
    },
  ],
  어깨: [
    { name: "없음", stat: {} },
    {
      name: "투신의 숨결",
      stat: {
        우두머리추가피해: [5, 10],
        활력퍼센트: [9, 18],
        모든타격피해: [9, 18],
      },
    },
    {
      name: "비스무트 견장",
      stat: { 체력퍼센트: [9, 18], 모든속성강화: [10, 20], 버프효과: [10, 20] },
    },
    {
      name: "깨달은 자",
      stat: { 피해증가: [9, 18], 회피확률: [5, 5], 활력퍼센트: [6, 12] },
    },
    {
      name: "영원한 순수",
      stat: { 체력퍼센트: [9, 18], 마나: [400, 800], 모든타격피해: [12, 25] },
    },
    {
      name: "크림슨 랩터",
      stat: {
        초당체력재생: [13, 25],
        피해감소: [6, 12],
        몬스터추가피해: [12, 25],
      },
    },
    {
      name: "세컨드 부스터",
      stat: { 피해감소: [5, 10], 모든타격피해: [10, 20] },
    },
    { name: "녹아드는 달", stat: { 퍼센트: [9, 18], 모든속성강화: [12, 25] } },
  ],
  장갑: [
    { name: "없음", stat: {} },
    { name: "심해의 보물", stat: { 공격력퍼센트: [10, 20] } },
    { name: "폭발물 전문가", stat: { 피해증가: [15, 30] } },
    { name: "생명 강화 시술", stat: { 모든타격피해: [17, 35] } },
    { name: "섬광 방출기", stat: { 몬스터추가피해: [17, 35] } },
    { name: "바이올런스 펀치", stat: {} },
    { name: "검붉게 얼룩진 손톱", stat: { 치명타피해: [22, 44] } },
  ],
  시계: [
    { name: "없음", stat: {} },
    { name: "mmm", stat: {} },
    { name: "nnn", stat: {} },
  ],
  탈것: [
    { name: "없음", stat: {} },
    { name: "mmm", stat: {} },
    { name: "nnn", stat: {} },
  ],
};

const juckup = (className) => {
  if (className) {
    item.무기.push(...weapon[className]);
  }
};

const make_option = (item) => {
  let select_item = document.getElementById("select_item");
  for (let key in item) {
    let div = document.createElement("div");
    let label = document.createElement("label");
    let select = document.createElement("select");

    label.textContent = key;
    select.addEventListener("change", () => {
      test(key, select);
    });
    select_item.appendChild(div);
    div.appendChild(label);
    div.appendChild(select);

    item[key].map((item, idx) => {
      let option = document.createElement("option");
      option.value = String(idx);
      option.text = item.name;
      select.appendChild(option);
    });
  }
};

const obj = {};
for (let key in item) {
  obj[key] = 0;
}

let value_switch = 0;
const change_value_swith = (e) => {
  value_switch = Number(e.value);
  test2(obj);
};

const test = (name, select) => {
  obj[name] = Number(select.value);
  test2(obj);
};

const test2 = (obj) => {
  let arr = [];
  for (let key in obj) {
    arr.push(item[key][obj[key]]);
  }
  // console.log(arr)
  test3(arr);
};

const test3 = (arr) => {
  let sum = arr.reduce((acc, cur, idx) => {
    for (let key in cur.stat) {
      let value = 0;
      if (value_switch === 0) {
        value = cur.stat[key][0];
      } else if (value_switch === 1) {
        value = cur.stat[key][1];
      } else if (value_switch === 2) {
        value = (cur.stat[key][0] + cur.stat[key][1]) / 2;
      }
      if (acc[key]) {
        acc[key] += value;
      } else {
        acc[key] = value;
      }
    }
    return acc;
  }, {});
  test4(sum);
  let obj = 스탯정리(sum);
  console.log(obj);
};

let att_key = [
  "공격력",
  "공격력퍼센트",
  "피해증가",
  "모든속성강화",
  "모든타격피해",
  "공중피해",
  "화속성강화",
  "수속성강화",
  "암속성강화",
  "명속성강화",
  "무속성강화",
  "치명타확률",
  "치명타피해",
  "우두머리추가피해",
  "일반몬스터추가피해",
  "몬스터추가피해",
  "지능",
  "카운터추피",
  "백어택피해증가",
];
let def_key = [
  "방어력",
  "활력퍼센트",
  "체력퍼센트",
  "화속성저항",
  "수속성저항",
  "암속성저항",
  "명속성저항",
  "피해감소",
];
let util_key = [
  "버프효과",
  "스킬재사용속도",
  "공격속도",
  "이동속도",
  "캐스팅차지속도",
  "초당체력재생",
  "초당마나재생",
  "마나",
  "마나소모감소",
  "회피확률",
];

const 스탯정리 = (obj) => {
  let stat = {
    att: {},
    def: {},
    util: {},
  };
  // console.log(obj);

  for (let key in obj) {
    if (att_key.includes(key)) {
      stat.att[key] = obj[key];
    } else if (def_key.includes(key)) {
      stat.def[key] = obj[key];
    } else if (util_key.includes(key)) {
      stat.util[key] = obj[key];
    } else {
      console.log(key);
    }
  }

  return stat;
};

const test4 = (obj) => {
  const detail = document.getElementById("detail");
  detail.textContent = "";
  for (let key in obj) {
    let div = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    p1.textContent = key;
    p2.textContent = obj[key];
    div.appendChild(p1);
    div.appendChild(p2);
    detail.appendChild(div);
  }
};

juckup(url_class);
make_option(item);
