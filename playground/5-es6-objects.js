//Obj property shorthand->> ne permite sa adaugam valori intr un ob cu o syntaxa mai scurta(in anumite conditii)

const name ='Vlad'
const userAge=27

const user={
    name,
    age: userAge,
    location: 'Ploiesti'
}
console.log(user)

//Obj destructuring->> folositor cand cand vrem sa accesam prop din obiect

const product={
    label:'Red notebook',
    price:3,
    stock:201,
    salePrice:undefined
}

// const label = product.label 
// const stock = product.stock

const {label:productLabel, stock} = product
console.log(productLabel)

const transaction = (type ,{label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)