/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 100) {
      $('#back2Top').fadeIn();
  } else {
      $('#back2Top').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
  });

});
/*Scroll to top when arrow up clicked END*/


// Clock
function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
  
  setTimeout(showTime, 1000);
  
}

showTime();

//Random quote generator
const generateQuote = function() {
  const quotes = [
  {
      quote: "Technology is best when it brings people together.",
      author: "-Matt Mullenweg, Social Media Entrepreneur-"
  },
  {
      quote: "Technology is anything that wasn’t around when you were born.",
      author: "-Alan Kay, Computer Scientist-"
  },
  {
      quote: "Any sufficiently advanced technology is equivalent to magic.",
      author: "-Arthur C. Clarke, Author-"
  },
  {
      quote: "Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.",
      author: "-Thomas Edison, Inventor-"
  },
  {
      quote: "I think that novels that leave out technology misrepresent life as badly as Victorians misrepresented life by leaving out sex.",
      author: "-Kurt Vonnegut, Author-"
  },
  {
      quote: "The art challenges the technology, and the technology inspires the art.",
      author: "-John Lasseter, Director-"
  },
  {
      quote: "Technology like art is a soaring exercise of the human imagination.",
      author: "-Daniel Bell, Founder Bell Tech-"
  },
  {
      quote: "Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them.",
      author: "-Steve Jobs, Co-Founder Apple-"
  },
  {
      quote: "We are the children of a technological age. We have found streamlined ways of doing much of our routine work. Printing is no longer the only way of reproducing books. Reading them, however, has not changed.",
      author: "-Lawrence Clark Powell, Librarian-"
  },
  {
      quote: "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.",
      author: "-Buckminster Fuller, Author-"
  },
  {
      quote: "Before you become too entranced with gorgeous gadgets and mesmerizing video displays, let me remind you that information is not knowledge, knowledge is not wisdom, and wisdom is not foresight. Each grows out of the other, and we need them all.",
      author: "-Arthur C. Clarke, Author-"
  },
  {
      quote: "The test of the machine is the satisfaction it gives you. There isn't any other test. If the machine produces tranquility it's right. If it disturbs you it's wrong until either the machine or your mind is changed.",
      author: "-Robert Pirsig, Author-"
  },
  {
      quote: "It’s fine to celebrate success but it is more important to heed the lessons of failure.",
      author: "-Bill Gates, Co-founder of Microsoft-"
  },
  {
      quote: "The best way to predict the future is to invent it.",
      author: "-Alan Kay, Computer Scientist-"
  },
  {
      quote: "Keep going forward because success will come.",
      author: "-Cassandra Sanford, CEO Kelly Mitchell Group-"
  },
  {
      quote: "It's not that we use Technology, we live Technology.",
      author: "-Godfrey Reggio, American Director-"
  },
  {
      quote: "Nothing is impossible. The word itself says 'I'm possible'",
      author: "-Audrey Hepburn, Actress and Humanitarian-"
  },
  {
      quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "-Winston Churchill, Prime Minister England-"
  },
  {
      quote: "You are never too old to set another goal or to dream a new dream.",
      author: "-Malala Yousafzai, Education Activist-"
  },
  {
      quote: "For me, becoming isn’t about arriving somewhere or achieving a certain aim. I see it instead as forward motion, a means of evolving, a way to reach continuously toward a better self. The journey doesn't end.",
      author: "-Michelle Obama, Former First Lady-"
  },
  {
      quote: "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
      author: "-Lady Gaga, Entertainer and Icon-"
  },
  {
      quote: "I am experienced enough to do this. I am knowledgeable enough to do this. I am prepared enough to do this. I am mature enough to do this. I am brave enough to do this.",
      author: "-Alexandria Ocasio-Cortex , New York State Representative-"
  },
  {
      quote: "No matter what people tell you, words and ideas can change the world..",
      author: "-Robin Williams, Entertainer and Icon-"
  },
  {
      quote: "I'm not going to continue knocking that old door that doesn't open for me. I'm going to create my own door and walk through that.",
      author: "-Ava DuVernay, Filmmaker-"
  },
  {
      quote: "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
      author: "-Ella Fitzgerald, Entertainer and Icon-"
  },
  {
      quote: "Everyone has inside of him a piece of good news. The good news is that you don't know how great you can be! How much you can love! What you can accomplish! And what your potential is!",
      author: "-Anne Frank, Author-"
  },
  {
      quote: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face. You are able to say to yourself, 'I lived through this horror. I can take the next thing that comes along.' You must do the thing you think you cannot do.",
      author: "-Elenor Roosevelt, Former First Lady-"
  },
  {
      quote: "I tell myself, 'You've been through so much, you've endured so much, time will allow me to heal, and soon this will be just another memory that made me the strong woman, athlete, and mother I am today.",
      author: "-Sernea Williams, Greatest Tennis Player of All-Time-"
  },
  {
      quote: "I have learned over the years that when one's mind is made up, this diminishes fear; knowing what must be done does away with fear.",
      author: "-Rosa Parks, Civil Rights Activist-"
  },
  {
      quote: "There are days where I get discouraged, there are moments where I am deeply, deeply disappointed. And, yes, there have been moments where I have stopped and said, 'Is this worth it anymore?' And every time I do that, I lick my wounds for a while, sometimes I cry. And then I say, 'Ok, let's fight.'",
      author: "-Sonia Sotomayor , Assoiciate Justice of the Supreme Court-"
  }

];

  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
  document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
  generateQuote();
  document.getElementById("generate").addEventListener('click', generateQuote);
}

// date counter



// opens up my resume in a modal box

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
});


