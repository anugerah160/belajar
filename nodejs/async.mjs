function samplePromise(){
    return Promise.resolve("Anugerah");
}

const name = await samplePromise();
console.info(name);
