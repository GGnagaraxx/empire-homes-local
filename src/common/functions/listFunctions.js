import _, { orderBy } from "lodash"

function filterList(list, filter){
    const filteredList = _.filter(list, filter);

    return filteredList;
}

function sortList(list, sortDetails){
    let orderByArr = [];
    let orderDirection = [];

    for(const key in sortDetails){
        if(sortDetails[key]){
            orderByArr.push(key);
            orderDirection.push(sortDetails[key]);
        }
    }

    const sortedList = _.orderBy(list, orderByArr, orderDirection);

    return sortedList;
}

function sortListByDate(list, sortDetails){
    let sortedList = list
    let orderByArr = [];
    let orderDirection = [];

    for(const key in sortDetails){
        orderByArr.push(key);
        orderDirection.push(sortDetails[key]);
    }


    orderByArr.forEach((props, index) => {
        sortedList.sort((a, b) => {
            if(orderDirection[index] == 'asc'){
                return new Date(a[props]) - new Date(b[props])
            } else {
                return new Date(b[props]) - new Date(a[props])
            }
        })
    });

    return sortedList;
}

function getTopList(list, topSize, sortDetails, filter){

    let newList = filter ? filterList(list, filter) : list;
    newList = sortDetails ? sortList(newList, sortDetails) : newList;
    newList = partitionList(newList, topSize);
    return newList[0];
}

function partitionList(list, partitionSize){
    const partitionedList = _.chunk(list, partitionSize);
    return partitionedList;
}



export {
    filterList,
    sortList,
    partitionList,
    getTopList,
    sortListByDate,
}