function falarDepoisDe(segundos, fase) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(fase)
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'que legal!')
    .then((frase, abc) => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))
