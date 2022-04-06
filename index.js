let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(){
    cats.push('Ralph');
}

function destructivelyPrependCat(){
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat(){
    cats.pop('Garfield');
}

function destructivelyRemoveFirstCat(){
    cats.shift('Milo');
}

function appendCat(name){
    const newCats = [...cats, name];
    return newCats;
   }

function prependCat(name){
    const newCats2 = [name,...cats];
    return newCats2;
}

function removeLastCat(){
    const newCats3 = cats.slice(0, cats.length - 1)
    return newCats3;
}

function removeFirstCat(){
    return cats.slice(1);
}