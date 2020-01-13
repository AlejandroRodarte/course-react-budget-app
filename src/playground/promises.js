const promise = new Promise((resolve, reject) => {

    setTimeout(() => {

        const num = Math.random();

        if (num >= 0.5) {
            resolve('This is my resolved data');
        } else {
            reject('Something went wrong');
        }

    }, 1500);

});

promise
    .then(data => console.log(data))
    .catch(error => console.log(error));
