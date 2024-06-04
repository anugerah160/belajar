
function samplePromise(){
    return Promise.resolve("Anugerah");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();