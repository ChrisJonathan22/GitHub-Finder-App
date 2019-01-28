$(document).ready(function(){
        $('#searchUser').on('keyup', function(e){
                let username = e.target.value;


                // Make request to Github
                $.ajax({
                        url: 'https://api.github.com/users/' + username,
                        data: {
                                client_id: 'd4e5565df611a4fc8bb2' ,
                                client_secret: '398f82509532a5bfc666f64dcfc522656cde13e4'
                        }
                })
                .done((user) => {
                        $("#profile").html(() => {
                                return "<div class='panel panel-default'>" + 
                                        "<div class='panel-heading'>" +
                                        `<h3 class='panel-title'>${user.name}</h3></div>` +
                                        "<div class='panel-body'>Panel content</div></div>"
                        }
                        );
                });
        });

        $('#searchUser').on('blur', function(e){

                if($('#searchUser').val() == "" ){
                        console.log("The search input is empty.");
                        $("#profile").html("");
                }

                else {
                        console.log("The search input is not empty.");
                }

        });
});
