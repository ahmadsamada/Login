const btns = document.getElementsByClassName('btn').length;
for (let i = 0; i < btns; i++) {
    let thisBtn = document.getElementsByClassName('btn')[i]
    
    thisBtn.onclick = function () {
        this.getElementsByTagName('img')[0].style.display = 'inline-block';
        window.setTimeout(function () {
            thisBtn.getElementsByTagName('img')[0].style.display = 'none';
        }, 80);
    };
};

//window.open('admin.html','Enter Password','width=600,height=400,left=100,top=100');

document.getElementById('enter').onclick = function () {
    if (document.getElementById('psw').value === String.fromCharCode(98,105,114,100)) {
        location.href = `${location.href.split('').slice(0,location.href.length - 11).join('')}/history.html`;
    }else{
        document.getElementsByClassName('window')[0].innerHTML = '<img src="here.jpg" height=100%>';
        document.getElementsByClassName('window')[0].style.height = '500px';
        document.getElementsByClassName('window')[0].style.margin = 'calc(33%/4) 30%';

        setTimeout(() => {
            location.reload();
        }, 1000);
    };
};

document.getElementById('leaver').onclick = function () {
    document.getElementsByClassName('window')[0].style.display = 'none';
    document.getElementById('form').style.display = 'flex';
};
document.getElementById('hist').onclick = function () {
    document.getElementsByClassName('window')[0].style.display = 'flex';
    document.getElementById('form').style.display = 'none';
    document.getElementById('psw').focus();
};



document.getElementsByClassName('toggle')[0].onclick = function () {
    if (this.getElementsByTagName('span')[0].innerHTML == 'ON') {
        this.getElementsByTagName('span')[0].innerHTML = 'OFF';
        document.getElementById('pla').pause();
    }else{
        this.getElementsByTagName('span')[0].innerHTML = 'ON';
        document.getElementById('pla').play();
    };
};