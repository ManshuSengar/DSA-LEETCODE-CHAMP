/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x==0) return 0;
    if(x<2) return 1;
    let l=2;
    let r=Math.floor(x/2);
    console.log("r",r);
    while(l<=r){
        let m=Math.floor(l+(r-l)/2);
        if(m*m==x) return m;
        else if(m*m>x) r=m-1;
        else l=m+1;
        console.log("l",l,r,m);
    }
    return r;
};