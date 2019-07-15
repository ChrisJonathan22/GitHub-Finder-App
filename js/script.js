let listOfColors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

function getRandomNumber (maxNumber) {
        let randomNumber = Math.floor(Math.random() * maxNumber.length) - 1;
        return randomNumber;
}

function getRandomColor (colors, randomNumber) {
        return colors[randomNumber];
}

$(document).ready(function(){
        $('#searchUser').on('keyup', e => {
                let username = e.target.value;
                let randomColor = getRandomColor(listOfColors, getRandomNumber(listOfColors));

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
                                        `<h3 class='panel-title'>${user.name ? user.name : 'Username not found...'}</h3></div>` +
                                        `<img src=${user.avatar_url} style="border-color: ${randomColor};">` +
                                        `<p id='bio-title' style="color: ${randomColor};"><span>Bio</span></p>` +
                                        `<p id="bio-content">${user.bio ? user.bio : 'No info available'}</p>` +
                                        `<p id="location"><span style="color: ${randomColor};">Location</span>: ${user.location ? user.location : 'Location unknown'}</p>` +
                                        `<p id="website"><span style="color: ${randomColor};">Website</span>:</p> <a href="${user.blog}" id="website-link" target="_blank">${user.blog ? user.blog : 'Website field empty'}</a>` +
                                        `<p id="repos"><span style="color: ${randomColor};">Public repos</span>: <span id="repos-count" style="text-decoration-color: ${randomColor};">${user.public_repos ? user.public_repos : 'Public repos empty'}</span></p>`
                        }
                        );
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
