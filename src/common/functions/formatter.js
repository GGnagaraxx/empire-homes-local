import _ from "lodash"

function moneyFormat(num, symbol){
    if(num == null || !symbol) return;
    let newNum = num.toFixed(2).toString();
    newNum = symbol + newNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return newNum;
}

function dateFormat(date, format){
    if(!date || !format) return;
    let formattedDate = ''
    if (format == 'words'){
        formattedDate = date.toDateString().substring(4);
    } else {
        let formatArr = format.split('-');
        let temp = []
        format.forEach(f => {
            if(f == 'dd'){
                temp.push(date.getDate());
            } else if(f == 'mm'){
                temp.push(date.getMonth());
            } else if( f == 'yyyy'){
                temp.push(date.getFullYear());
            }
        });

        formattedDate = _.join(temp, '-');
    }

    return formattedDate;
}

export {
    moneyFormat,
    dateFormat
}