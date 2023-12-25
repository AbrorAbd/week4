function searchIndex(arr, index){
    for(let i = 0; i < arr.length; i++){
        if(index.includes(arr[i])){
            return arr.indexOf(arr[i])
        }
    }
}