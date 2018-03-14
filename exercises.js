var arg = process.argv[2];

(function getRGB(color){

    var newArray = color.split('');
    newArray.splice(0,1);

    var R = newArray.slice(0).splice(0,2).join("");
    var G = newArray.slice(0).splice(2,2).join("");
    var B = newArray.slice(0).splice(4,2).join("");

    console.log(`rgb(${parseInt(R, 16)}, ${parseInt(G, 16)}, ${parseInt(B, 16)})`);                 
})(arg);


(function getRGB2(hex){

    console.log("rgb("+
        parseInt(hex[1]+hex[2], 16) + ", "+
        parseInt(hex[3]+hex[4], 16) + ", "+
        parseInt(hex[5]+hex[6], 16) + ")");

})(arg);


(function getRGB3(hex){
    var result = [];
    result.push(parseInt(hex.slice(1, 3), 16));
    result.push(parseInt(hex.slice(3, 5), 16));
    result.push(parseInt(hex.slice(5), 16));
    console.log("rgb("+ result.join(", ")+")");
})(arg);

(function getRGB4(hex){
    result= "rgb(";
    for(var i = 1; i < hex.length; i += 2){
        result += parseInt(hex[i]+ hex[i+1], 16);
        if(i<5){
            result += ", "
        }
    }
    result += ")";
    console.log(result);
})(arg);