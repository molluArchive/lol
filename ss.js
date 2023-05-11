const item = {
    head:[
        {name:"없음", stat:[0,0,0,0]},
        {name:"aaa", stat:[10,10,0,0]},
        {name:"bbb", stat:[0,20,5,0]},
        {name:"ccc", stat:[0,0,10,10]},
    ],
    hand:[
        {name:"없음", stat:[0,0,0,0]},
        {name:"mmm", stat:[0,10,0,10]},
        {name:"nnn", stat:[15,0,5,0]},
    ],
}

const make_option = (item) => {
    let select_item = document.getElementById('select_item')
    console.log(select_item)
    for(let key in item){
        let select = document.createElement('select')
        select.onchange = "test(this)"
        select_item.appendChild(select)
        item[key].map((item,idx)=>{
            let option = document.createElement('option')
            option.value = String(idx)
            option.text = item.name
            select.appendChild(option)
        })
    }
}

let obj ={
    head:0,
    hand:0
}

const test = (e) => {
    obj[e.name] = Number(e.value)

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
    let sum = arr.reduce((acc,cur,idx)=>{
        acc.map((item,index)=>{
            acc[index] += cur.stat[index]
        })
        return acc
    }, [0,0,0,0])
    console.log(sum)
}

make_option(item)