const item = {
    무기:[
        {name:"없음", stat:{}},
        {name:"ㅅㄹㅁㄷㄹ", stat:{att:920}},
        {name:"ㅁㅁㅁ", stat:{att:800}},
    ],
    목걸이:[
        {name:"없음", stat:{}},
        {name:"목 마른 이의 구원", stat:{}},
        {name:"투귀의 눈", stat:{}},
        {name:"벼락 수집가", stat:{}},
        {name:"마나 강탈기", stat:{}},
    ],
    팔찌:[
        {name:"없음", stat:{}},
        {name:"다합의 팔찌", stat:{}},
        {name:"사이버 코어", stat:{}},
        {name:"불새 고리", stat:{}},
        {name:"살아있는 혈액", stat:{}},
        {name:"브레이브 블루", stat:{}},
        {name:"능력 증폭 장치", stat:{}},
    ],
    반지:[
        {name:"없음", stat:{}},
        {name:"초토화 머신", stat:{}},
        {name:"속죄자의 긴고아", stat:{}},
        {name:"얼굴없는 집행인", stat:{}},
        {name:"썬더볼트", stat:{}},
        {name:"얼어붙은 전사", stat:{}},
        {name:"스컬 페이스", stat:{}},
    ],
    머리:[
        {name:"없음", stat:{}},
        {name:"크리스탈 베인", stat:{}},
        {name:"자혜로운 바다", stat:{}},
        {name:"피를 삼킨 가시나무", stat:{}},
        {name:"영광의 상징", stat:{}},
        {name:"잊힌 전설", stat:{}},
        {name:"에일리언 오파츠", stat:{}},
        {name:"궤뚫어보는 자", stat:{}},
    ],
    상의:[
        {name:"없음", stat:{}},
        {name:"외계의 선물", stat:{}},
        {name:"넘실거리는 물결 상의", stat:{}},
        {name:"식지 않는 열기", stat:{}},
        {name:"희생된 자의 유품", stat:{}},
        {name:"지치지 않는 정신", stat:{}},
        {name:"트릭 머신", stat:{}},
        {name:"퍼펙트 케어", stat:{}},
    ],
    벨트:[
        {name:"없음", stat:{}},
        {name:"mmm", stat:{b:5,c:15}},
        {name:"nnn", stat:{a:20}},
    ],
    하의:[
        {name:"없음", stat:{}},
        {name:"리미트리스", stat:{}},
        {name:"해일 드레스", stat:{}},
        {name:"넷다이버", stat:{}},
        {name:"툰드라 스커트", stat:{}},
        {name:"케미컬 포스", stat:{}},
        {name:"사이버네틱 링크", stat:{}},
        {name:"와이번 레더 팬츠", stat:{}},
    ],
    신발:[
        {name:"없음", stat:{}},
        {name:"최정예 전투 군화", stat:{}},
        {name:"모독의 부츠", stat:{}},
        {name:"넷러너", stat:{}},
        {name:"아이언 야크", stat:{}},
    ],
    어깨:[
        {name:"없음", stat:{}},
        {name:"mmm", stat:{b:5,c:15}},
        {name:"nnn", stat:{a:20}},
    ],
    장갑:[
        {name:"없음", stat:{}},
        {name:"심해의 보물", stat:{}},
        {name:"폭발물 전문가", stat:{}},
        {name:"생명 강화 시술", stat:{}},
        {name:"섬광 방출기", stat:{}},
        {name:"바이올런스 펀치", stat:{}},
        {name:"검붉게 얼룩진 손톱", stat:{}},
    ],
    시계:[
        {name:"없음", stat:{}},
        {name:"mmm", stat:{b:5,c:15}},
        {name:"nnn", stat:{a:20}},
        {name:"벼락 수집가", stat:{}},

        {name:"벼락 수집가", stat:{}},

        {name:"벼락 수집가", stat:{}},{name:"벼락 수집가", stat:{}},
    ],
    탈것:[
        {name:"없음", stat:{}},
        {name:"mmm", stat:{b:5,c:15}},
        {name:"nnn", stat:{a:20}},
    ],
}

const make_option = (item) => {
    let select_item = document.getElementById('select_item')
    for(let key in item){
        let div = document.createElement('div')
        let label = document.createElement('label')
        let select = document.createElement('select')

        label.textContent = key
        select.addEventListener('change',()=>{
            test(key,select)
        })
        select_item.appendChild(div)
        div.appendChild(label)
        div.appendChild(select)

        item[key].map((item,idx)=>{
            let option = document.createElement('option')
            option.value = String(idx)
            option.text = item.name
            select.appendChild(option)
        })
    }
}

const obj = {}
for(let key in item){
    obj[key] = 0
}

const test = (name,select) => {
    obj[name] = Number(select.value)
    test2(obj)
}

const test2 = (obj) => {
    let arr = []
    for(let key in obj){
        arr.push(item[key][obj[key]])
    }
    // console.log(arr)
    test3(arr)
}

const test3 = (arr) => {
    let stat = {}

    let sum = arr.reduce((acc,cur,idx)=>{
        for(let key in cur.stat){
            console.log('aa')
            if(acc[key]){
                acc[key] += cur.stat[key]
            } else {
                acc[key] = cur.stat[key]
            }
        }
        return acc
    }, stat)
    console.log(sum)
}

make_option(item)
