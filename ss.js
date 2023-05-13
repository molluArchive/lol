const item = {
    moogi:[
        {name:"없음", stat:{}},
        {name:"ㅅㄹㅁㄷㄹ", stat:{att:920}},
        {name:"ㅁㅁㅁ", stat:{att:800}},
    ],
    mocgulyee:[
        {name:"없음", stat:{}},
        {name:"목 마른 이의 구원", stat:{}},
        {name:"투귀의 눈", stat:{}},
        {name:"벼락 수집가", stat:{}},
        {name:"마나 강탈기", stat:{}},
    ],
    palzzi:[
        {name:"없음", stat:{}},
        {name:"다합의 팔찌", stat:{}},
        {name:"사이버 코어", stat:{}},
        {name:"불새 고리", stat:{}},
        {name:"살아있는 혈액", stat:{}},
        {name:"브레이브 블루", stat:{}},
        {name:"능력 증폭 장치", stat:{}},
    ],
    banG:[
        {name:"없음", stat:{}},
        {name:"초토화 머신", stat:{a:10,b:5}},
        {name:"속죄자의 긴고아", stat:{a:10,c:5}},
        {name:"얼굴없는 집행인", stat:{c:15}},
        {name:"썬더볼트", stat:{}},
        {name:"얼어붙은 전사", stat:{}},
        {name:"스컬 페이스", stat:{}},
    ],
    muri:[
        {name:"없음", stat:{}},
        {name:"크리스탈 베인", stat:{a:10,b:5}},
        {name:"자혜로운 바다", stat:{a:10,c:5}},
        {name:"피를 삼킨 가시나무", stat:{c:15}},
        {name:"영광의 상징", stat:{}},
        {name:"잊힌 전설", stat:{}},
        {name:"에일리언 오파츠", stat:{}},
        {name:"궤뚫어보는 자", stat:{}},
    ],
    sang2:[
        {name:"없음", stat:{}},
        {name:"mmm", stat:{b:5,c:15}},
        {name:"nnn", stat:{a:20}},
    ],
    belt:[
        {name:"없음", stat:{}},
        {name:"mmm", stat:{b:5,c:15}},
        {name:"nnn", stat:{a:20}},
    ],
    hi:[
        {name:"없음", stat:{}},
        {name:"mmm", stat:{b:5,c:15}},
        {name:"nnn", stat:{a:20}},
    ],
    sinbal:[
        {name:"없음", stat:{}},
        {name:"mmm", stat:{b:5,c:15}},
        {name:"nnn", stat:{a:20}},
    ],
    aggae:[
        {name:"없음", stat:{}},
        {name:"mmm", stat:{b:5,c:15}},
        {name:"nnn", stat:{a:20}},
    ],
    janggab:[
        {name:"없음", stat:{}},
        {name:"mmm", stat:{b:5,c:15}},
        {name:"nnn", stat:{a:20}},
    ],
    sige:[
        {name:"없음", stat:{}},
        {name:"mmm", stat:{b:5,c:15}},
        {name:"nnn", stat:{a:20}},
    ],
    talgo:[
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
