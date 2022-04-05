const result = document.querySelector('.result-value');
const acBnt = document.querySelector('.ac-btn');
const delBtn = document.querySelector('.del-btn');
const eqlBnt = document.querySelector('.eql-btn');
const inputBnts = document.querySelectorAll('.operator-btn');
init()
function init() {
    result.innerHTML = ''
}

inputBnts.forEach((button)=>{
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        result.innerHTML += value;
    })
})

eqlBnt.addEventListener('click', function(){
    if(result.innerHTML === '') {
        result.innerHTML = '';
    }else {
        let answer = eval(result.innerHTML)
        result.innerHTML = answer;
    }
})
acBnt.addEventListener('click', init);
delBtn.addEventListener('click', function(){
    let output = result.innerHTML.substring(0, result.innerHTML.length-1);
    result.innerHTML = output;
})