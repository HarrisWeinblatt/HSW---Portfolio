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
      quote: "Technology is anything that wasn’t around when you were born",
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
      quote: "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete",
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


// opens up my resume in a modal box

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
});


