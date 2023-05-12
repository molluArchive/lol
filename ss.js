const item = {
    moogi:[
        {name:"없음", stat:{}},
        {name:"ㅅㄹㅁㄷㄹ", stat:{att:920}},
        {name:"ㅁㅁㅁ", stat:{att:800}},
    ],
    mocgulyee:[
        {name:"없음", stat:{}},
        {name:"ㄱㄱㄱ", stat:{cri:10,cridmg:5}},
        {name:"ㄴㄴㄴ", stat:{att_per:6,cool:10}},
        {name:"ㄷㄷㄷ", stat:{cridmg:20,cool:6}},
    ],
    palzzi:[
        {name:"없음", stat:{}},
        {name:"ㅅㅇㅂ", stat:{int_per:10,buff:25}},
        {name:"ㄷㅎ", stat:{dmg:10,buff:15}},
        {name:"ㄵㅈ", stat:{dmg:25}},
    ],
    banG:[
        {name:"없음", stat:{}},
        {name:"aaa", stat:{a:10,b:5}},
        {name:"bbb", stat:{a:10,c:5}},
        {name:"ccc", stat:{c:15}},
    ],
    muri:[
        {name:"없음", stat:{}},
        {name:"aaa", stat:{a:10,b:5}},
        {name:"bbb", stat:{a:10,c:5}},
        {name:"ccc", stat:{c:15}},
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