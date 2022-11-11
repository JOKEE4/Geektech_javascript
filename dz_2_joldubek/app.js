const interval = setInterval(() => {
    console.log("interval");
},1000);

setTimeout(() => {
    clearInterval(interval);
},60000);