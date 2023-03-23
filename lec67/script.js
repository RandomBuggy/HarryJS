const createTodo = async (todo) => {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let options = {
        method: "POST",
        Headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(todo)
    };
    let p = await fetch(url, options);
    let responce = await p.json();
    return responce;
};

const f = async () => {
    let todo = {
        title: 'Bhai',
        body: 'Harry',
        userId: 1100
    };
    let todo_resp = await createTodo(todo);
    console.log(todo_resp);
};
/* to make a POST request just pass the `options` object as object-field required and this key-value `{method: "POST"}`
*/

/* the .then() approach
let p = fetch(url, options);
p.then((responce) => {
return responce.json()
}).then((json) => {
    console.log(json);
});
*/

/* the async/await approach */
f();
