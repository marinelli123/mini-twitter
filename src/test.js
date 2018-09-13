const re = /@\w+/gi;
const str = 'jhdfsgjk @fsd jhds @dssef @ddasdasd hjsdbaj @dsf';
let myArray = str.match(re);
let newArray =[];
myArray.forEach(element => {
    const e = `<a href="/${element.substring(1)}">${element}</a>`;
    newArray.push(e);
});

console.log(newArray);