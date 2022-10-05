function match(input, search) {
    const result = [];
    for(let i =0; i<input.length; i++) {
        if(search.includes(input[i])){
            result.push(input[i]);
        }
    }
    return result;
}
console.log(match([ 'bann', 'kiwi', 'graf'], [ 'bann', 'straw', 'graf', 'straw' ]));