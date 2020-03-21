var portfolioItems = [
    {
    img: '<img class="w-100" alt="screen shot of marketing website, that has a large banner picture of a marketing team" src="./Assets/Images/hw1.png">',
    title: 'Code_Refactor',
    repo: 'https://github.com/ccrum292/Code_Refactor',
    deployed: 'https://ccrum292.github.io/Code_Refactor/',
    },
    {
    img: '<img class="w-100" alt="screen shot of a portfolio web page" src="./Assets/Images/hw2.png">',
    title: 'Responsive_Design',
    repo: 'https://github.com/ccrum292/Responsive_Design',
    deployed: 'https://ccrum292.github.io/Responsive_Design/',
    },
    {
    img: '<img class="w-100" alt="screen shot password generator interface window" src="./Assets/Images/hw3.png">',
    title: 'Password_Generator',
    repo: 'https://github.com/ccrum292/Password_Generator',
    deployed: 'https://ccrum292.github.io/Password_Generator/',
    },
    {
    img: '<img class="w-100" alt="screen shot of quiz web page" src="./Assets/Images/wk4-1.png">',
    title: 'Code_Quiz',
    repo: 'https://github.com/ccrum292/Code_Quiz',
    deployed: 'https://ccrum292.github.io/Code_Quiz/',
    },
    {
    img: '<img class="w-100" alt="screen shot of a work day scheduler" src="./Assets/Images/workdayscheduler1.png">',
    title: 'Work_Day_Scheduler',
    repo: 'https://github.com/ccrum292/Work_Day_Scheduler',
    deployed: 'https://ccrum292.github.io/Work_Day_Scheduler/',
    },
    {
    img: '<img class="w-100" alt="screen shot of a weather dashboard" src="./Assets/Images/homework6.png">',
    title: 'Weather_Dashboard',
    repo: 'https://github.com/ccrum292/Weather_Dashboard',
    deployed: 'https://ccrum292.github.io/Weather_Dashboard/',
    },
    {
    img: '<img class="w-100" alt="screen shot of the title page for a matchmaker website" src="./Assets/Images/MATCHMAKER1.png">',
    title: 'MATCHMAKER',
    repo: 'https://github.com/ccrum292/MATCHMAKER',
    deployed: 'https://ccrum292.github.io/MATCHMAKER/',
    },
    {
      img: '<img class="w-100" alt="screen shot of the title page for a matchmaker website" src="./Assets/Images/express-note-taker.png">',
      title: 'Express Notetaker',
      repo: 'https://github.com/ccrum292/Express_Note_Taker',
      deployed: 'https://ancient-eyrie-04813.herokuapp.com/',
    },
    {
      img: '<img class="w-100" alt="screen shot of the title page for a matchmaker website" src="./Assets/Images/burger.png">',
      title: 'Burger',
      repo: 'https://github.com/ccrum292/Burger',
      deployed: 'https://cryptic-tundra-47803.herokuapp.com/',
    },
    {
      img: '<img class="w-100" alt="screen shot of the title page for a matchmaker website" src="./Assets/Images/exquisite-art-homepage.gif">',
      title: 'Exquisite Corpse',
      repo: 'https://github.com/ccrum292/exquisite-corpse',
      deployed: 'http://play-exquisite-corpse.herokuapp.com/',
    },
  ];
  
  function produceContactDisplay(){
    for (var i=0; i<portfolioItems.length; i++){
    var itemEl = $('<div class="col mt-3 mb-3 lineRight" align="center">' +portfolioItems[i].img + '<h4 class="text-center portfolio-subheadings">'+ portfolioItems[i].title+'</h4><form target="_blank" style="display: inline" action="'+portfolioItems[i].repo +'" method="GET"><button class="mr-2">GitHub</button></form><form target="_blank" style="display: inline" action="'+portfolioItems[i].deployed +'" method="GET"><button>Deployed Application</button></form></div>')
    $("#main-div").append(itemEl);
    }
  }
  produceContactDisplay();