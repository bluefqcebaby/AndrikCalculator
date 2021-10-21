$(function () {
    const Numb = $('.numbers')
    const Actions = $('.actions')
    const arrOfActions = ['+', '&#8211;', '&times;', '=']

    for (let i = 1; i <= 9; i++) {
        Numb.append(`<div class="number">${i}</div>`)
        if (i == 9) {
            Numb.append(`<div class='number'>.</div>`)
            Numb.append(`<div class='number'>0</div>`)
            Numb.append(`<div class='number'>&divide;</div>`)
        }
    }
    for (let i = 0; i <= 3; i++) {
        if (i == 3) {
            Actions.append(`<div class='number Eq'>${arrOfActions[i]}</div>`)
        } else [
            Actions.append(`<div class='number'>${arrOfActions[i]}</div>`)
        ]


    }

    const numbElem = $('.number')

    let res = $('.ce__text')

    let str = ''

    let j = 0;
    numbElem.click(function () {
        if ($(this).text() == '=') {
            equal()
        } else {
            if (/[–+÷×]/.test($(this).text()) && j!=1) {
                j++
                str += $(this).text()
                res.text(str)
            } else if (!/[–+÷×]/.test($(this).text())) {
                str += $(this).text()
                res.text(str)
            }
        }
        if (str.length == 10){
            $('.result').css('width','300px')
            $('.result').addClass('red')
            numbElem.css('width','80px')
            $('.calc__grid-wrapper').css({
                'padding-right': '13px'
            })
        }
        if (str.length == 16){
            reset1()
        }
    })

    function calculate(arr) {
        let a = Number(arr[0])
        let b = Number(arr[1])
        let result;
        switch (arr[2]) {
            case '–':
                console.log(1)
                result = a - b
                break;
            case '+':
                result = a + b
                break;
            case '÷':
                result = a / b
                break;
            case '×':
                result = a * b
                break;
        }
        if (isInt(result)){
            return result
        } else {
            return parseFloat(result).toFixed(2);
        }
    }
    $('.ce').click(function(){
        res.text(0)
        str = ''
    })
    function reset1(){
        res.text(0)
        str = ''
    }
    function equal() {
        let arr1 = str.match(/[–+÷×]/)
        let i = arr1.index
        let arr = str.split(str[i])
        arr.push(str[i])
        str = calculate(arr)
        res.text(str)
        str = ''
        j = 0;
    }
    function isInt(n) {
        return n % 1 === 0;
     }
})