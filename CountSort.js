function CountSort(){
    let min=Math.min(...a);
    let max=Math.max(...a);

    let range=max-min+1;
    let frq=new Array(range).fill(0);

    for(let i=0;i<a.length;i++){
        let index=a[i]-min;
        frq[index]++;
    }
    
    for(let i=1;i<frq.length;i++){
        frq[i]=frq[i]+frq[i-1];
    }

    let ans=new Array(a.length).fill(0);
    for(let i=(a.length-1);i>=0;i--){
        let val=a[i];
        let pos=frq[(val-min)];
        let idx=pos-1;
        ans[idx]=val;
        frq[(val-min)]--;
    }
    for(let i=0;i<ans.length;i++){
        a[i]=ans[i];
    }
}

let a=new Array();
a=[9,6,3,5,3,4,3,9,6,4,6,5,8,9,9];
console.log("Array is:"+a);
CountSort();
console.log("Sorted array is:"+a);
