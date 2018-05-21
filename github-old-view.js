var sidebar = document.getElementsByClassName('dashboard-sidebar')[0];
var news = document.getElementsByClassName('news')[0];


document.getElementsByClassName('dashboard')[0].insertBefore(news, sidebar);
