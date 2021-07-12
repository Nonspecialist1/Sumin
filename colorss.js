var Links = {
  setColor:function(color){
  // var alist = document.querySelectorAll('a');
  // var i = 0;
  // while(i < alist.length){
  //   alist[i].style.color = color;
  //   i = i + 1;
  $('a').css("color", color);
  }
}

var Body = {
  setBackgroundColor:function(color) {
  // document.querySelector('body').style.setbackgroundColor = color;
  $('body').css("backgroundColor", color);
  },
  setColor:function(color){
  // document.querySelector('body').style.color = color;
  $('body').css("color", color);
  }
}

function NDmode(self){
  if(self.value === '야간모드★'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = '일반모드☆';
    Links.setColor('gold');

  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = '야간모드★';
    Links.setColor('green');
    }
  }
