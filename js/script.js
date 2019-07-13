$(document).ready(function(){
        $('#searchUser').on('keyup', e => {
                let username = e.target.value;

                // Make request to Github
                $.ajax({
                        url: `https://api.github.com/users/${username}`,
                        data: {
                                client_id: 'd4e5565df611a4fc8bb2',
                                client_secret: '398f82509532a5bfc666f64dcfc522656cde13e4'
                        }
                })
                .done((user) => {
                        $("#profile").html(() => {
                                return "<div class='panel panel-default'>" + 
                                        "<div class='panel-heading'>" +
                                        `<h3 class='panel-title'>${user.name ? user.name : 'User not found...'}</h3></div>` +
                                        `<img src=${user.avatar_url}>` +
                                        "<p id='bio-title'><span>Bio</span></p>" +
                                        `<p id="bio-content">${user.bio ? user.bio : 'No info available'}</p>` +
                                        `<p id="location"><span>Location</span>: ${user.location ? user.location : 'Location unknown'}</p>` +
                                        `<p id="website"><span>Website</span>:</p> <a href="${user.blog}" target="_blank">${user.blog ? user.blog : 'Website field empty'}</a>` +
                                        `<p><span>Public repos:</span> ${user.public_repos ? user.public_repos : 'Public repos empty'}</p>`
                        }
                        );
                        console.log(user);
                });
        });

        $('#searchUser').on('blur', function(e){
                if($('#searchUser').val() == "" ){
                        console.log("The search input is empty.");
                        alert("The search input is empty.");
                        $("#profile").html("");
                }
        });
});
