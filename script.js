document.addEventListener("DOMContentLoaded", function () {
    const addTopicButton = document.getElementById("add-topic");
    const forumContainer = document.getElementById("forum-container");

    addTopicButton.addEventListener("click", function () {
        const titleInput = document.getElementById("topic-title");
        const contentInput = document.getElementById("topic-content");
        
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();

        if (title === "" || content === "") {
            alert("Vă rugăm să completați toate câmpurile!");
            return;
        }

        const postDiv = document.createElement("div");
        postDiv.classList.add("post");

        const postTitle = document.createElement("h3");
        postTitle.textContent = title;

        const postContent = document.createElement("p");
        postContent.textContent = content;

        const replyButton = document.createElement("button");
        replyButton.classList.add("reply-btn");
        replyButton.textContent = "Răspunde";

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);
        postDiv.appendChild(replyButton);

        forumContainer.appendChild(postDiv);

        titleInput.value = "";
        contentInput.value = "";
    });
});
