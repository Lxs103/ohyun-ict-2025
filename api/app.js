// https://crudcrud.com/api/500ee1272f844fc3b4406fc66e45ebab

// fetch("https://crudcrud.com/api/500ee1272f844fc3b4406fc66e45ebab/post").then((res)=>{
// return res.json() 
// }).then((json)=>{
//    console.log(json)
// })

// async funstion init(){}
const post_url = "https://crudcrud.com/api/4d505ae1124d4315b6cae4c925162b26/post"

const init = async ()=>{
    const res = await fetch(post_url);
    const json = await res.json();
    console.log(json);
    json.forEach(post => {
        const postLi = document.createElement("li");
        postLi.innerText = post.title;
        document.querySelector("#board").appendChild(postLi);
        const contentDiv = document.createElement("div")
        contentDiv.innerText = post.content;
        postLi.appendChild(contentDiv);
        contentDiv.style.display = 'none';
        postLi.addEventListener('click',()=>{
            if (contentDiv.style.display == 'block') {
                contentDiv.style.display = 'none';
            }else(
                contentDiv.style.display = 'block'
            )
        })
    });
}

const write = async (data)=>{
    const res = await fetch(post_url,{
        method:"POST",
        headers:{
            "Content-type": "application/json",
        },
        body:JSON.stringify(data)
    })
}

const submit = ()=>{
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    const data = {
        title:title,
        content:content
    }
    write(data);
}

document.querySelector("#post-form").addEventListener("submit",(e)=>{
    e.preventDefault()
    submit();
})

document.querySelector("#toggle-write").addEventListener("click",()=>{
        if(document.querySelector("#post-form").style.display == 'block'){
            document.querySelector("#post-form").style.display = 'none'
        }else{
            document.querySelector("#post-form").style.display = 'block'
        }
});


init()