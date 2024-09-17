function findThePeekNumber(arr){
    let n = arr.length;

    if(n>2){
        for (let i = 1; i < n-1; i++) {
         if(arr[i] >=arr[i-1] && arr[i]>=arr[i+1]){
            console.log(arr[i]);
         }            
        }
    }else{
        console.log("There is no Peak Number");
    }
}


//Recursion>>>>>>>>>>>>>>>>>>>>>>