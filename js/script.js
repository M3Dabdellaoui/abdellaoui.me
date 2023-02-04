
var new_speed=100;
var delay = 500000;
var animation = false;
$('#demo_4').t({
speed:100,
typing:
  function(e){
   new_speed-=2;
   e.s(new_speed);
   $('#speed').text(Math.max(new_speed,10));
   }
});

var term = $('body').terminal({
    whoami: function() {
        var output = $( '<pre id="demo_4">'+
                        '<ins>speed:  <span id="speed">100</span></ins>'+
                        '<div class="text-typing"><p>Yo yo yo, what\'s up world?! It\'s your boy, the cyber security guru in the making. I\'m currently rockin\' it at the National School'+
                        ' of Applied Sciences of Marrakech, majoring in the most exciting thing since sliced bread - you guessed it, CYBER SECURITY! I\'m only 21, but I already know more about'+
                        ' hacking than most people will ever know about anything. I\'m like a superhero, but instead of saving the world from evil, I\'m saving the internet from malicious hackers.'+
                        ' It\'s a tough job, but someone\'s gotta do it. Plus, it\'s way more fun than saving the world from evil. I mean, have you seen those movies? Boring. Anyways, I\'m ready to '+
                        'take on the world of cyber security with all my passion and knowledge, so watch out hackers, here I come!;</p></div>'+
                        '</pre>')
        term.echo(output);
       

    },
    man: function() {
        var output = $('<p>Hello <strong>World</strong></p>')
        term.echo(output);
    },
    help: function() {
        var output = $('<br/>'+
                        '<span class="cmd"><b>whois<b><span/>         : Who is Forrest?<br/>'+
                        '<span class="cmd"><b>whoami<b><span/>        : Who are you?<br/>'+
                        '<span class="cmd"><b>video<b><span/>         : View YouTube videos<br/>'+
                        '<span class="cmd"><b>social<b><span/>        : Display social networks<br/>'+
                        '<span class="cmd"><b>secret<b><span/>        : Find the password<br/>'+
                        '<span class="cmd"><b>projects <b><span/>     : View coding projects<br/>'+
                        '<span class="cmd"><b>history<b><span/>       : View command history<br/>'+
                        '<span class="cmd"><b>help<b> <span/>         : You obviously already know what this does<br/>'+
                        '<span class="cmd"><b>email <b><span/>        : Do not email me<br/>'+
                        '<span class="cmd"><b>clear<b><span/>         : Clear terminal<br/>'+
                        '<span class="cmd"><b>banner<b><span/>        : Display the header<br/>');
         term.echo(output);
    },
    education: function() {
        this.echo("cat,"+ "<br />" +"Wellcome to this terminal.");
    },
    chihab: function() {
        term.echo('hello chihab');
        var index = term.last_index();
        var timer = setInterval(() => {
            if (shoultStop) {
                clearInterval(timer);
            } else {
                term.update(index, 'hi');
            }
        }, delay);
    },
    socials: function() {
        var output = $('<br/>'+
                        '<span class="cmd"><b><a href="">LinkedIn<a/><b><span/>         : https://link.com</br>'+
                        '<span class="cmd"><b><a href="">Instagram<a/><b><span/>        : https://link.com</br>'+
                        '<span class="cmd"><b><a href="">facebook<a/><b><span/>         : https://link.com</br>'+
                        '<span class="cmd"><b><a href="">github<a/><b><span/>           : https://link.com</br>'+
                        '<span class="cmd"><b><a href="">TryHackMe<a/><b><span/>        : https://link.com</br>'+
                        '<span class="cmd"><b><a href="">HackTheBox<a/><b><span/>       : https://link.com</br>'+
                        '<br />'
                        );
         term.echo(output);
    }
}, {
    greetings: title.innerHTML
});            


term.set_prompt(function(set_prompt) {
        set_prompt('guest@abdellaoui.m3d$ ');
});


