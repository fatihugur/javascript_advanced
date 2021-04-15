// Callback Hell

$.get("/ders-37-1.json", function (response) {
  $.get("/ders-37-2.json", function (response2) {
    console.log(response.result + response2.result);
  });
});

// Promise
var result1 = $.get("/ders-37-1.json");
var result2 = $.get("/ders-37-2.json");

Promise.all([result1, result2]).then(function ([x, y]) {
  console.log(x.result + y.result);
});

function asyncFunction() {
  return new Promise((resolve, reject) => {
    resolve("fatih");
  });
}

(async function () {
  console.log(await asyncFunction());
})();

// Async Await
(async () => {
  var aresult1 = await $.get("/ders-37-1.json");
  var aresult2 = await $.get("/ders-37-2.json");

  console.log(aresult1.result + aresult2.result);
})();
