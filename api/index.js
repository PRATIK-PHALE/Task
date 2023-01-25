const apiUrl = 'https://xdc.blocksscan.io';
async function fetchPost(){
    try{

    const response= await fetch(`${apiUrl}/api/accounts`);
if(response.ok){
    throw new Error (`Failed to fetch posts: ${response.status}`)
}

    return await response.json();
    console.log('posts:',posts);
}catch(e){
    console.log(e);
}
}

function listpost(postContainerElementId){
    const postContainerElement =document.getElementById(postContainerElementId);

    if(!postContainerElement){
        return;
    }
  fetchPost().then (posts =>{
if(!posts){
    postContainerElement.innerHTML = 'No posts fetched.';

    return;
}
for(const  post of posts){
    postContainerElement.appendChild(postElement(post));
}
  }).catch(e =>{
    console.log(e);
  })
}
function postContainerElement(post){
    const anchorElement = document.createElement('a');
    anchorElement.setAttribute('href',`${apiUrl}/api/accounts/${post.id}`);
    anchorElement.setAttribute('target','_blank');
    anchorElement.innerText = captitalizeFistletter(post.title);



    const postTitleElement = document.createElement('h3');
    postTitleElement.appendChild(anchorElement);
    
return postTitleElement;
    
    

}
function captitalizeFistletter(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}