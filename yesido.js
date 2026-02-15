const text = "Damn right... Kidding aside, I made this just for you Dani:D I know you're not big fan of messages like this or maybe it depends on who made you it but let me start off by saying sorry I am for my shortcomings and that I still needed you to tell me what was the real reason on why you became a little dry to me. I shouldn't be surprised if you lost interest in what he had, as it's totally in my actions how I made you feel that way towards me. And I'll respect it; I don't want to be disturbing your peace as you value it so much that you don't let anyone get close to it. Alsooo, Happy Valentines Day! I'm sorry I couldn't buy you any flowers when I was in your hometown with you. I guess really am not a man of my words? Hahahaha. Even when I came to Batangas and we barely talked I still had that big ole smile on my face going back home. It was stupid of me to only realize what and which part did i go wrong, when it ended. And it feels like I'm doing the same old shit I did last time. I can't afford to lose you again, Dani; I don't want us to end just like last time. I've been thinking about the things you said that I lacked. I wanna thank you for telling me which part of me did I fall short on to you. I just can't imagine seeing you with somebody else rather than me. Even if they say that nobody is perfect, I consider you as perfect with imperfections. I know, It sounds stupid but listen. Learning every part of you and still accepting you for who you really are is part of loving you. If you can't love nor appreciate yourself (which i know is impossible). I can proudly say that I'll be here to do it for you. When I came back to Batangas for the second time, I was so happy that I saw more of you and that I got really close to you. Seeing that grumpy lil' face when hungry or annoyed when I'm really close to you felt like I was a babysitter trying to learn what type of behavior does the child give off HAHAHAHAH. Those unexpected punches you gave me will forever be memorable for me. I'm really thankful that you showed me how you act when you're with someone you feel comfortable with. Meeting mame and dade was also really funnn:) I got a chance to know more about you from dadee. My whole point of coming home to you was to learn more about you— And I pray that I'll be able to learn every part of you so whenever you give off a specific energy that I already know, I'm aware on what to do. That's really all of what I have to say right now. I could tell you more about it but It'll be better if we talked next to each other. Hehe XOXO. Don't forget to eat when you feel hungryy, I'm always here to buy what you're craving.";

let index = 0;
const speed = 66;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewrite").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
    else if (char === '\n') {
            demoElement.innerHTML += '<br>';
    }
}

window.onload = typeWriter;