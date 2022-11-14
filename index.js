document.getElementById("hamburger-icon").addEventListener("click", displayNavbar);

function displayNavbar(){
    document.getElementById("navbar").classList.toggle("flex");
}

document.getElementById("view-btn").addEventListener("click", displayMorePosts)

function displayMorePosts(){
    document.getElementById("view-btn").style.display = "none"
    const hidePosts = Array.from(document.getElementsByClassName("hide"));
    hidePosts.forEach(post=>{
        post.classList.remove("hide");
        post.classList.add("flex");
    })
}