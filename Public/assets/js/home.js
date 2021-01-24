
const btnSave= document.getElementById("btnSavePost");
btnSave.addEventListener("click", savePost);

function savePost() {
    const formData = new FormData(document.querySelector('form'))
    let dataToSubmit = {};
    for (var pair of formData.entries()) {
    dataToSubmit[pair[0]] = pair[1];
    }
    axios.post('http://localhost:3000/post', dataToSubmit)
    .then(result => {
    console.log(result);
    // render new post
    let parentPost = document.getElementById("parent-post");
    let childPost = document.createElement("div");
    childPost.innerHTML = `
    <div class="card is-post is-simple">
                <!-- Main wrap -->
                <div class="content-wrap">
                    <!-- Header -->
                    <div class="card-heading">
                        <!-- User image -->
                        <div class="user-block">
                            <div class="image">
                                <img src="assets/img/avatars/bobby.jpg" data-demo-src="assets/img/avatars/bobby.jpg" data-user-popover="8" alt="">
                            </div>
                            <div class="user-info">
                                <a href="#">Bobby Brown</a>
                                <span class="time">July 26 2018, 11:14am</span>
                            </div>
                        </div>
                        <!-- /partials/pages/feed/dropdowns/feed-post-dropdown.html -->
                        <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                            <div>
                                <div class="button">
                                <span style="padding-right:5px" id="${result.data.data._id}" onclick="getOnePost(this.id)">Edit</span>
                                </div>
                            </div>
                            <div>
                                <div class="button">
                                <span id="${result.data.data._id}" onclick="deletePost(this.id)">Delete</span>
                                </div>
                            </div>
                            <div class="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                            <div class="media-content">
                                                <h3>Bookmark</h3>
                                                <small>Add this post to your bookmarks.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <a class="dropdown-item">
                                        <div class="media">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                            <div class="media-content">
                                                <h3>Notify me</h3>
                                                <small>Send me the updates.</small>
                                            </div>
                                        </div>
                                    </a>
                                    <hr class="dropdown-divider">
                                    <a href="#" class="dropdown-item">
                                        <div class="media">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                                            <div class="media-content">
                                                <h3>Flag</h3>
                                                <small>In case of inappropriate content.</small>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Header -->
            
                    <!-- Post body -->
                    <div class="card-body">
                        <!-- Post body text -->
                        <div class="post-text">
                            <p>${result.data.data.text}</p>
                        </div>
                        <!-- Post actions -->
                        <div class="post-actions">
                            <!-- /partials/pages/feed/buttons/feed-post-actions.html -->
                            <div class="like-wrapper">
                                <a href="javascript:void(0);" class="like-button">
                                    <i class="mdi mdi-heart not-liked bouncy"></i>
                                    <i class="mdi mdi-heart is-liked bouncy"></i>
                                    <span class="like-overlay"></span>
                                </a>
                            </div>
            
                            <div class="fab-wrapper is-share">
                                <a href="javascript:void(0);" class="small-fab share-fab modal-trigger" data-modal="share-modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link-2"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </a>
                            </div>
            
                            <div class="fab-wrapper is-comment">
                                <a href="javascript:void(0);" class="small-fab">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- /Post body -->
            
                    <!-- Post footer -->
                    <div class="card-footer">
                        <!-- Followers -->
                        <div class="likers-group">
                            <img src="assets/img/avatars/daniel.jpg" data-demo-src="assets/img/avatars/daniel.jpg" data-user-popover="3" alt="">
                            <img src="assets/img/avatars/elise.jpg" data-demo-src="assets/img/avatars/elise.jpg" data-user-popover="6" alt="">
                        </div>
                        <div class="likers-text">
                            <p>
                                <a href="#">Daniel</a> and
                                <a href="#">Elise</a>
                            </p>
                            <p>liked this</p>
                        </div>
                        <!-- Post statistics -->
                        <div class="social-count">
                            <div class="likes-count">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                <span>2</span>
                            </div>
                            <div class="shares-count">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link-2"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                <span>0</span>
                            </div>
                            <div class="comments-count">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                    <!-- /Post footer -->
                </div>
                <!-- /Main wrap -->
            
                <!-- Post #6 comments -->
                <div class="comments-wrap is-hidden">
                    <!-- Header -->
                    <div class="comments-heading">
                        <h4>
                            Comments
                            <small>(0)</small>
                        </h4>
                        <div class="close-comments">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </div>
                    </div>
                    <!-- /Header -->
            
                    <!-- Comments body -->
                    <div class="comments-body has-slimscroll">
                        <div class="comments-placeholder">
                            <img src="assets/img/icons/feed/bubble.svg" alt="">
                            <h3>Nothing in here yet</h3>
                            <p>Be the first to post a comment.</p>
                        </div>
                    </div>
                    <!-- /Comments body -->
            
                    <!-- Comments footer -->
                    <div class="card-footer">
                        <div class="media post-comment has-emojis">
                            <!-- Textarea -->
                            <div class="media-content">
                                <div class="field">
                                    <p class="control">
                                        <textarea class="textarea comment-textarea" rows="5" placeholder="Write a comment..." id="post-comment-textarea-6"></textarea>
                                    </p>
                                </div>
                                <!-- Additional actions -->
                                <div class="actions">
                                    <div class="image is-32x32">
                                        <img class="is-rounded" src="assets/img/avatars/jenna.png" data-demo-src="assets/img/avatars/jenna.png" data-user-popover="0" alt="">
                                    </div>
                                    <div class="toolbar">
                                        <div class="action is-auto">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                                        </div>
                                        <div class="action is-emoji" id="post-comment-button-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                        </div>
                                        <div class="action is-upload">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                            <input type="file">
                                        </div>
                                        <a class="button is-solid primary-button raised">Post Comment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /Comments footer -->
                </div>
                <!-- /Post #6 comments -->
            </div>
    `;
    parentPost.appendChild(childPost);
    }).catch(err => {
    console.log(err);
    });
}
function deletePost(ID){
    axios.delete('http://localhost:3000/post/'+ID)
    .then(()=>{
        location.reload();
    })
    .catch(err=>{
        console.log(err);
    })
}

function getOnePost(ID){
    axios.get('http://localhost:3000/post/'+ID)
    .then(result=>{
        console.log(result)
        const editPost=`
        <!-- Top tabs -->
        <div class="tabs-wrapper">
            <div class="tabs is-boxed is-fullwidth">
                <ul>
                    <li class="is-active">
                        <a>
                            <span class="icon is-small"><i data-feather="edit-3"></i></span>
                            <span>Publish</span>
                        </a>
                    </li>
                    <li>
                        <a class="modal-trigger" data-modal="albums-help-modal">
                            <span class="icon is-small"><i data-feather="image"></i></span>
                            <span>Albums</span>
                        </a>
                    </li>
                    <li>
                        <a class="modal-trigger" data-modal="videos-help-modal">
                            <span class="icon is-small"><i data-feather="video"></i></span>
                            <span>Video</span>
                        </a>
                    </li>
                    <!-- Close X button -->
                    <li class="close-wrap">
                        <span class="close-publish">
                                <i data-feather="x"></i>
                            </span>
                    </li>
                </ul>
            </div>

            <!-- Tab content -->
            <div class="tab-content" >
                <!-- Compose form -->
                <div class="compose">
                    <div class="compose-form">
                        <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="">
                        <div class="control">
                            <textarea name="text" id="publish" class="textarea" rows="3" placeholder="Write something about you..."></textarea>
                        </div>
                        <input name="status" style="display: none;" type="checkbox" checked value="published" />
                    </div>

                    <div id="feed-upload" class="feed-upload">

                    </div>

                    <div id="options-summary" class="options-summary"></div>

                    <div id="tag-suboption" class="is-autocomplete is-suboption is-hidden">
                        <!-- Tag friends suboption -->
                        <div id="tag-list" class="tag-list"></div>
                        <div class="control">
                            <input id="users-autocpl" type="text" class="input" placeholder="Who are you with?">
                            <div class="icon">
                                <i data-feather="search"></i>
                            </div>
                            <div class="close-icon is-main">
                                <i data-feather="x"></i>
                            </div>
                        </div>
                    </div>
                    <!-- /Tag friends suboption -->

                    <!-- Activities suboption -->
                    <div id="activities-suboption" class="is-autocomplete is-suboption is-hidden">
                        <div id="activities-autocpl-wrapper" class="control has-margin">
                            <input id="activities-autocpl" type="text" class="input" placeholder="What are you doing right now?">
                            <div class="icon">
                                <i data-feather="search"></i>
                            </div>
                            <div class="close-icon is-main">
                                <i data-feather="x"></i>
                            </div>
                        </div>

                        <!-- Mood suboption -->
                        <div id="mood-autocpl-wrapper" class="is-autocomplete is-activity is-hidden">
                            <div class="control has-margin">
                                <input id="mood-autocpl" type="text" class="input is-subactivity" placeholder="How do you feel?">
                                <div class="input-block">
                                    Feels
                                </div>
                                <div class="close-icon is-subactivity">
                                    <i data-feather="x"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Drinking suboption child -->
                        <div id="drinking-autocpl-wrapper" class="is-autocomplete is-activity is-hidden">
                            <div class="control has-margin">
                                <input id="drinking-autocpl" type="text" class="input is-subactivity" placeholder="What are you drinking?">
                                <div class="input-block">
                                    Drinks
                                </div>
                                <div class="close-icon is-subactivity">
                                    <i data-feather="x"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Eating suboption child -->
                        <div id="eating-autocpl-wrapper" class="is-autocomplete is-activity is-hidden">
                            <div class="control has-margin">
                                <input id="eating-autocpl" type="text" class="input is-subactivity" placeholder="What are you eating?">
                                <div class="input-block">
                                    Eats
                                </div>
                                <div class="close-icon is-subactivity">
                                    <i data-feather="x"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Reading suboption child -->
                        <div id="reading-autocpl-wrapper" class="is-autocomplete is-activity is-hidden">
                            <div class="control has-margin">
                                <input id="reading-autocpl" type="text" class="input is-subactivity" placeholder="What are you reading?">
                                <div class="input-block">
                                    Reads
                                </div>
                                <div class="close-icon is-subactivity">
                                    <i data-feather="x"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Watching suboption child -->
                        <div id="watching-autocpl-wrapper" class="is-autocomplete is-activity is-hidden">
                            <div class="control has-margin">
                                <input id="watching-autocpl" type="text" class="input is-subactivity" placeholder="What are you watching?">
                                <div class="input-block">
                                    Watches
                                </div>
                                <div class="close-icon is-subactivity">
                                    <i data-feather="x"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Travel suboption child -->
                        <div id="travel-autocpl-wrapper" class="is-autocomplete is-activity is-hidden">
                            <div class="control has-margin">
                                <input id="travel-autocpl" type="text" class="input is-subactivity" placeholder="Where are you going?">
                                <div class="input-block">
                                    Travels
                                </div>
                                <div class="close-icon is-subactivity">
                                    <i data-feather="x"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- /Activities suboption -->

                    <!-- Location suboption -->
                    <div id="location-suboption" class="is-autocomplete is-suboption is-hidden">
                        <div id="location-autocpl-wrapper" class="control is-location-wrapper has-margin">
                            <input id="location-autocpl" type="text" class="input" placeholder="Where are you now?">
                            <div class="icon">
                                <i data-feather="map-pin"></i>
                            </div>
                            <div class="close-icon is-main">
                                <i data-feather="x"></i>
                            </div>
                        </div>
                    </div>

                    <!-- Link suboption -->
                    <div id="link-suboption" class="is-autocomplete is-suboption is-hidden">
                        <div id="link-autocpl-wrapper" class="control is-location-wrapper has-margin">
                            <input id="link-autocpl" type="text" class="input" placeholder="Enter the link URL">
                            <div class="icon">
                                <i data-feather="link-2"></i>
                            </div>
                            <div class="close-icon is-main">
                                <i data-feather="x"></i>
                            </div>
                        </div>
                    </div>

                    <!-- GIF suboption -->
                    <div id="gif-suboption" class="is-autocomplete is-suboption is-hidden">
                        <div id="gif-autocpl-wrapper" class="control is-gif-wrapper has-margin">
                            <input id="gif-autocpl" type="text" class="input" placeholder="Search a GIF to add" autofocus>
                            <div class="icon">
                                <i data-feather="search"></i>
                            </div>
                            <div class="close-icon is-main">
                                <i data-feather="x"></i>
                            </div>
                            <div class="gif-dropdown">
                                <div class="inner">
                                    <div class="gif-block">
                                        <img src="https://via.placeholder.com/478x344" data-demo-src="assets/img/demo/gif/1.gif" alt="">
                                        <img src="https://via.placeholder.com/478x344" data-demo-src="assets/img/demo/gif/2.gif" alt="">
                                        <img src="https://via.placeholder.com/478x344" data-demo-src="assets/img/demo/gif/3.gif" alt="">
                                        <img src="https://via.placeholder.com/478x344" data-demo-src="assets/img/demo/gif/4.gif" alt="">
                                    </div>
                                    <div class="gif-block">
                                        <img src="https://via.placeholder.com/478x344" data-demo-src="assets/img/demo/gif/5.gif" alt="">
                                        <img src="https://via.placeholder.com/478x344" data-demo-src="assets/img/demo/gif/6.gif" alt="">
                                        <img src="https://via.placeholder.com/478x344" data-demo-src="assets/img/demo/gif/7.gif" alt="">
                                        <img src="https://via.placeholder.com/478x344" data-demo-src="assets/img/demo/gif/8.gif" alt="">
                                    </div>
                                    <div class="gif-block">
                                        <img src="https://via.placeholder.com/478x344" data-demo-src="assets/img/demo/gif/9.gif" alt="">
                                        <img src="https://via.placeholder.com/478x344" data-demo-src="assets/img/demo/gif/10.gif" alt="">
                                        <img src="https://via.placeholder.com/478x344" data-demo-src="assets/img/demo/gif/11.gif" alt="">
                                        <img src="https://via.placeholder.com/478x344" data-demo-src="assets/img/demo/gif/12.gif" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Compose form -->

                <!-- General extended options -->
                <div id="extended-options" class="compose-options is-hidden">
                    <div class="columns is-multiline is-full">
                        <!-- Upload action -->
                        <div class="column is-6 is-narrower">
                            <div class="compose-option is-centered">
                                <i data-feather="camera"></i>
                                <span>Photo/Video</span>
                                <input id="feed-upload-input-1" type="file" accept=".png, .jpg, .jpeg" onchange="readURL(this)">
                            </div>
                        </div>
                        <!-- Mood action -->
                        <div class="column is-6 is-narrower">
                            <div id="extended-show-activities" class="compose-option is-centered">
                                <img src="assets/img/icons/emoji/emoji-1.svg" alt="">
                                <span>Mood/Activity</span>
                            </div>
                        </div>
                        <!-- Tag friends action -->
                        <div class="column is-6 is-narrower">
                            <div id="open-tag-suboption" class="compose-option is-centered">
                                <i data-feather="tag"></i>
                                <span>Tag friends</span>
                            </div>
                        </div>
                        <!-- Post location action -->
                        <div class="column is-6 is-narrower">
                            <div id="open-location-suboption" class="compose-option is-centered">
                                <i data-feather="map-pin"></i>
                                <span>Post location</span>
                            </div>
                        </div>
                        <!-- Share link action -->
                        <div class="column is-6 is-narrower">
                            <div id="open-link-suboption" class="compose-option is-centered">
                                <i data-feather="link-2"></i>
                                <span>Share link</span>
                            </div>
                        </div>
                        <!-- Post GIF action -->
                        <div class="column is-6 is-narrower">
                            <div id="open-gif-suboption" class="compose-option is-centered">
                                <i data-feather="image"></i>
                                <span>Post GIF</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /General extended options -->

                <!-- General basic options -->
                <div id="basic-options" class="compose-options">
                    <!-- Upload action -->
                    <div class="compose-option">
                        <i data-feather="camera"></i>
                        <span>Media</span>
                        <input id="feed-upload-input-2" type="file" type="file" accept=".png, .jpg, .jpeg" onchange="readURL(this)">
                    </div>
                    <!-- Mood action -->
                    <div id="show-activities" class="compose-option">
                        <img src="assets/img/icons/emoji/emoji-1.svg" alt="">
                        <span>Activity</span>
                    </div>
                    <!-- Expand action -->
                    <div id="open-extended-options" class="compose-option">
                        <span id="${result.data._id}" type="button" onclick="updatePost(this.id)">Post</span>
                    </div>
                    
                </div>
                <!-- /General basic options -->

                <!-- Hidden Options -->
                <div class="hidden-options">
                    <div class="target-channels">
                        <!-- Publication Channel -->
                        <div class="channel">
                            <div class="round-checkbox is-small">
                                <div>
                                    <input type="checkbox" id="checkbox-1" checked>
                                    <label for="checkbox-1"></label>
                                </div>
                            </div>
                            <div class="channel-icon">
                                <i data-feather="bell"></i>
                            </div>
                            <div class="channel-name">Activity Feed</div>
                            <!-- Dropdown menu -->
                            <div class="dropdown is-spaced is-modern is-right is-neutral dropdown-trigger">
                                <div>
                                    <button class="button" aria-haspopup="true">
                                        <i class="main-icon" data-feather="smile"></i>
                                        <span>Friends</span>
                                        <i class="caret" data-feather="chevron-down"></i>
                                    </button>
                                </div>
                                <div class="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                        <a href="#" class="dropdown-item">
                                            <div class="media">
                                                <i data-feather="globe"></i>
                                                <div class="media-content">
                                                    <h3>Public</h3>
                                                    <small>Anyone can see this publication.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item">
                                            <div class="media">
                                                <i data-feather="users"></i>
                                                <div class="media-content">
                                                    <h3>Friends</h3>
                                                    <small>only friends can see this publication.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item">
                                            <div class="media">
                                                <i data-feather="user"></i>
                                                <div class="media-content">
                                                    <h3>Specific friends</h3>
                                                    <small>Don't show it to some friends.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <hr class="dropdown-divider">
                                        <a class="dropdown-item">
                                            <div class="media">
                                                <i data-feather="lock"></i>
                                                <div class="media-content">
                                                    <h3>Only me</h3>
                                                    <small>Only me can see this publication.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Publication Channel -->
                        <div class="channel">
                            <div class="round-checkbox is-small">
                                <div>
                                    <input type="checkbox" id="checkbox-2">
                                    <label for="checkbox-2"></label>
                                </div>
                            </div>
                            <div class="story-icon">
                                <div class="plus-icon">
                                    <i data-feather="plus"></i>
                                </div>
                            </div>

                            <div class="channel-name">My Story</div>
                            <!-- Dropdown menu -->
                            <div class="dropdown is-spaced is-modern is-right is-neutral dropdown-trigger">
                                <div>
                                    <button class="button" aria-haspopup="true">
                                        <i class="main-icon" data-feather="smile"></i>
                                        <span>Friends</span>
                                        <i class="caret" data-feather="chevron-down"></i>
                                    </button>
                                </div>
                                <div class="dropdown-menu" role="menu">
                                    <div class="dropdown-content">
                                        <a href="#" class="dropdown-item">
                                            <div class="media">
                                                <i data-feather="globe"></i>
                                                <div class="media-content">
                                                    <h3>Public</h3>
                                                    <small>Anyone can see this publication.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item">
                                            <div class="media">
                                                <i data-feather="users"></i>
                                                <div class="media-content">
                                                    <h3>Friends</h3>
                                                    <small>only friends can see this publication.</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a class="dropdown-item">
                                            <div class="media">
                                                <i data-feather="users"></i>
                                                <div class="media-content">
                                                    <h3>Friends and contacts</h3>
                                                    <small>Your friends and contacts.</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Friends list -->
                    <div class="friends-list is-hidden">
                        <!-- Header -->
                        <div class="list-header">
                            <span>Send in a message</span>
                            <div class="actions">
                                <a id="open-compose-search" href="javascript:void(0);" class="search-trigger">
                                    <i data-feather="search"></i>
                                </a>
                                <!-- Hidden filter input -->
                                <div id="compose-search" class="control is-hidden">
                                    <input type="text" class="input" placeholder="Search People">
                                    <span>
                                            <i data-feather="search"></i>
                                        </span>
                                </div>
                                <a href="javascript:void(0);" class="is-inverted modal-trigger" data-modal="create-group-modal">Create group</a>
                            </div>
                        </div>
                        <!-- List body -->
                        <div class="list-body">

                            <!-- Friend -->
                            <div class="friend-block">
                                <div class="round-checkbox is-small">
                                    <div>
                                        <input type="checkbox" id="checkbox-3">
                                        <label for="checkbox-3"></label>
                                    </div>
                                </div>
                                <img class="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="">
                                <div class="friend-name">Dan Walker</div>
                            </div>
                            <!-- Friend -->
                            <div class="friend-block">
                                <div class="round-checkbox is-small">
                                    <div>
                                        <input type="checkbox" id="checkbox-4">
                                        <label for="checkbox-4"></label>
                                    </div>
                                </div>
                                <img class="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/daniel.jpg" alt="">
                                <div class="friend-name">Daniel Wellington</div>
                            </div>
                            <!-- Friend -->
                            <div class="friend-block">
                                <div class="round-checkbox is-small">
                                    <div>
                                        <input type="checkbox" id="checkbox-5">
                                        <label for="checkbox-5"></label>
                                    </div>
                                </div>
                                <img class="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/stella.jpg" alt="">
                                <div class="friend-name">Stella Bergmann</div>
                            </div>
                            <!-- Friend -->
                            <div class="friend-block">
                                <div class="round-checkbox is-small">
                                    <div>
                                        <input type="checkbox" id="checkbox-6">
                                        <label for="checkbox-6"></label>
                                    </div>
                                </div>
                                <img class="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/david.jpg" alt="">
                                <div class="friend-name">David Kim</div>
                            </div>
                            <!-- Friend -->
                            <div class="friend-block">
                                <div class="round-checkbox is-small">
                                    <div>
                                        <input type="checkbox" id="checkbox-7">
                                        <label for="checkbox-7"></label>
                                    </div>
                                </div>
                                <img class="friend-avatar" src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/nelly.png" alt="">
                                <div class="friend-name">Nelly Schwartz</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Footer buttons -->
                <div class="more-wrap">
                    <!-- View more button -->
                    <button id="show-compose-friends" type="button" class="button is-more" aria-haspopup="true">
                        <i data-feather="more-vertical"></i>
                        <span>View More</span>
                    </button>
                    <!-- Publish button -->
                    <button id="publish-button" type="button" class="button is-solid accent-button is-fullwidth is-disabled">
                        Publish
                    </button>
                </div>
            </div>
        </div>`
        document.getElementById('formPost').innerHTML=editPost;
        document.getElementById('publish').value=result.data.text;
        // document.getElementById('formPost')
        // document.getElementById("btnSavePost").onclick()=updatePost(this.id)
        // console.log(document.getElementById(result.data._id).onclick)
        console.log(result);
    
    })
    .catch(err=>{
        console.log(err);
    })
}
function updatePost(ID){
    console.log(ID);
    const formData = new FormData(document.querySelector('form'))
    let dataToSubmit = {};
    for (var pair of formData.entries()) {
    dataToSubmit[pair[0]] = pair[1];
    }
    axios.patch('http://localhost:3000/post/'+ID,dataToSubmit)
    location.reload();
}



function getPosts(){
    axios.get('http://localhost:3000/posts').then (posts=>{
    console.log(posts);
    let parentPost=document.getElementById('parent-post');
        posts.data.forEach(post => {
            let childPost=document.createElement("div");
            childPost.innerHTML = `
            <div class="card is-post is-simple">
                        <!-- Main wrap -->
                        <div class="content-wrap">
                            <!-- Header -->
                            <div class="card-heading">
                                <!-- User image -->
                                <div class="user-block">
                                    <div class="image">
                                        <img src="assets/img/avatars/bobby.jpg" data-demo-src="assets/img/avatars/bobby.jpg" data-user-popover="8" alt="">
                                    </div>
                                    <div class="user-info">
                                        <a href="#">Bobby Brown</a>
                                        <span class="time">July 26 2018, 11:14am</span>
                                    </div>
                                </div>
                                <!-- /partials/pages/feed/dropdowns/feed-post-dropdown.html -->
                                <div class="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                <div>
                                    <div class="button">
                                    <span style="padding-right:5px" id="${post._id}" onclick="getOnePost(this.id)">Edit</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="button">
                                    <span id="${post._id}" onclick="deletePost(this.id)">Delete</span>
                                    </div>
                                </div>
                                    <div class="dropdown-menu" role="menu">
                                        <div class="dropdown-content">
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                                    <div class="media-content">
                                                        <h3>Bookmark</h3>
                                                        <small>Add this post to your bookmarks.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a class="dropdown-item">
                                                <div class="media">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                                    <div class="media-content">
                                                        <h3>Notify me</h3>
                                                        <small>Send me the updates.</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <hr class="dropdown-divider">
                                            <a href="#" class="dropdown-item">
                                                <div class="media">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-flag"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                                                    <div class="media-content">
                                                        <h3>Flag</h3>
                                                        <small>In case of inappropriate content.</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Header -->
                    
                            <!-- Post body -->
                            <div class="card-body">
                                <!-- Post body text -->
                                <div class="post-text">
                                    <p>${post.text}</p>
                                </div>
                                <!-- Post actions -->
                                <div class="post-actions">
                                    <!-- /partials/pages/feed/buttons/feed-post-actions.html -->
                                    <div class="like-wrapper">
                                        <a href="javascript:void(0);" class="like-button">
                                            <i class="mdi mdi-heart not-liked bouncy"></i>
                                            <i class="mdi mdi-heart is-liked bouncy"></i>
                                            <span class="like-overlay"></span>
                                        </a>
                                    </div>
                    
                                    <div class="fab-wrapper is-share">
                                        <a href="javascript:void(0);" class="small-fab share-fab modal-trigger" data-modal="share-modal">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link-2"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                        </a>
                                    </div>
                    
                                    <div class="fab-wrapper is-comment">
                                        <a href="javascript:void(0);" class="small-fab">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <!-- /Post body -->
                    
                            <!-- Post footer -->
                            <div class="card-footer">
                                <!-- Followers -->
                                <div class="likers-group">
                                    <img src="assets/img/avatars/daniel.jpg" data-demo-src="assets/img/avatars/daniel.jpg" data-user-popover="3" alt="">
                                    <img src="assets/img/avatars/elise.jpg" data-demo-src="assets/img/avatars/elise.jpg" data-user-popover="6" alt="">
                                </div>
                                <div class="likers-text">
                                    <p>
                                        <a href="#">Daniel</a> and
                                        <a href="#">Elise</a>
                                    </p>
                                    <p>liked this</p>
                                </div>
                                <!-- Post statistics -->
                                <div class="social-count">
                                    <div class="likes-count">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                        <span>2</span>
                                    </div>
                                    <div class="shares-count">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link-2"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                        <span>0</span>
                                    </div>
                                    <div class="comments-count">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                        <span>0</span>
                                    </div>
                                </div>
                            </div>
                            <!-- /Post footer -->
                        </div>
                        <!-- /Main wrap -->
                    
                        <!-- Post #6 comments -->
                        <div class="comments-wrap is-hidden">
                            <!-- Header -->
                            <div class="comments-heading">
                                <h4>
                                    Comments
                                    <small>(0)</small>
                                </h4>
                                <div class="close-comments">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </div>
                            </div>
                            <!-- /Header -->
                    
                            <!-- Comments body -->
                            <div class="comments-body has-slimscroll">
                                <div class="comments-placeholder">
                                    <img src="assets/img/icons/feed/bubble.svg" alt="">
                                    <h3>Nothing in here yet</h3>
                                    <p>Be the first to post a comment.</p>
                                </div>
                            </div>
                            <!-- /Comments body -->
                    
                            <!-- Comments footer -->
                            <div class="card-footer">
                                <div class="media post-comment has-emojis">
                                    <!-- Textarea -->
                                    <div class="media-content">
                                        <div class="field">
                                            <p class="control">
                                                <textarea class="textarea comment-textarea" rows="5" placeholder="Write a comment..." id="post-comment-textarea-6"></textarea>
                                            </p>
                                        </div>
                                        <!-- Additional actions -->
                                        <div class="actions">
                                            <div class="image is-32x32">
                                                <img class="is-rounded" src="assets/img/avatars/jenna.png" data-demo-src="assets/img/avatars/jenna.png" data-user-popover="0" alt="">
                                            </div>
                                            <div class="toolbar">
                                                <div class="action is-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                                                </div>
                                                <div class="action is-emoji" id="post-comment-button-6">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                                                </div>
                                                <div class="action is-upload">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                                                    <input type="file">
                                                </div>
                                                <a class="button is-solid primary-button raised">Post Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /Comments footer -->
                        </div>
                        <!-- /Post #6 comments -->
                    </div>
            `;
            parentPost.appendChild(childPost);
        });
        
    })
    .catch(err=>{
        console.log(err)
    })
}
getPosts();