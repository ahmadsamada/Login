window.onload = function () {
    let i = 0;
    while (i < 1) {
        let ran = Math.random() * 10;
        if (ran.toFixed(0) <= 7 && ran.toFixed(0) != 0) {
            document.getElementById('ele').src = `elements/${ran.toFixed(0)}.png`;
            i = 2;
        };
    };
};
var intr;
if (location.search.length == 0) {
    document.body.innerHTML += '<section class="load window"><div class="d1"><img src="paimon.png" width=110px></div><div class="d2"><h2>Loading...</h2><p>This May Take A Few Moments</p></div><div class="d3"><span></span><div class="loader"><span class="hide"><img src="elements/1.png" width=80px id="ele"></span></div><span></span></div></section>';
    setTimeout(function () {
        document.body.innerHTML = '<section class="history"><h1 class="loading">Loading</h1><div class="tools"><h1>History</h1><span class="btns"><button class="btn" id="del"><img src="delbtn.png" height=40px id="cli"><img src="delbtn.png" height=40px></button><button class="btn" id="clr"><img src="clrbtncl.png" height=40px id="cli"><img src="clrbtn.png" height=40px></button></span></div><div class="listcon"><ul id="list"><li class="heading"><ul><li>Date & Time</li><li>User ID</li><li>Password</li></ul></li></ul></div></section>'/*+ '<script src="main.js"></script>'*/;
        var i = 0;
        intr = setInterval(function() {
            i++;
            document.getElementsByClassName('loading')[0].innerHTML += '.';
            if (i = 3) {
                clearInterval()
            };
        }, 200);
    }, 1500)
    setTimeout(function () {
        for (const i in localStorage) {
            if (i.indexOf('ahmad') == -1) {
                document.getElementsByClassName('loading')[0].innerHTML = 'No Data Found';
                document.getElementsByClassName('loading')[0].style.margin = '20% 23%';
                document.getElementsByClassName('loading')[0].style.color = 'white';
                document.getElementsByClassName('loading')[0].style.fontsize = '48px';
            }else{
                document.getElementsByClassName('loading')[0].style.display = 'none';
            };
        };
        var datas = getData().sort().reverse();
        for (let i = 0; i < datas.length; i++) {
            document.getElementById('list').innerHTML += `<li class="itm"><ul><li>${datas[i][0]}</li><li>${datas[i][1]}</li><li>${datas[i][2]}</li></ul></li>`;
        };
        for (const i in localStorage) {
            if (i.indexOf('ahmad') == -1) {
                clearInterval(intr);
            };
        };
    },2200)

}else{
    if (location.search.indexOf('?userID=') > -1 && location.search.indexOf('&password=') > -1) {
        var data = location.search;
        var userId = data.split('').slice('?userID='.length,data.indexOf('&password=')).join('');
        if (document.URL.indexOf('#') > -1) {
            var pass = data.split('').slice('?userID='.length + userId.length,document.URL.indexOf('#')).join('');
        }else{
            var pass = data.split('').slice('?userID=&password='.length + userId.length,data.length).join('');
        };
    }else{
        returnMe();
    };
    if (userId.search(/[^0-9]/gi) == -1 && pass.search(',') == -1) {
        let order = 0;
        var N = ahmads();
        var empty = new Array();
        for (let i = 1; i < +N[N.length - 1] + 1; i++) {
            if (window.localStorage.hasOwnProperty(`ahmad${i}`) === false) {
                empty[empty.length] = i;
            };
        };
        if (N.length == 0) {
            N[0] = 0;
        }
        if (empty.length === 0) {
            empty[0] = +N[N.length - 1] + 1;
        };
        const today = new Date();
        var thisday = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()} ${today.getHours()}:${(today.getMinutes().length == 1? ('0'+ today.getMinutes()): today.getMinutes())}:${(today.getSeconds().length == 1? ('0'+ today.getSeconds()): today.getSeconds())}`;
        localStorage.setItem(`ahmad${empty[0]}`, [thisday,userId,pass]);
        document.body.innerHTML = '<section class="window error"><span><h1>Done</h1><p>Your Data Has Been Succesfully Saved</p></span><button class="btn return"><img src="okcl.png" width=190px id="cli"><img src="ok.png" width=190px></button></section>' /*+ '<script src="main.js"></script>'*/;
        //++order;
    }else{
        document.body.innerHTML = '<section class="window error"><span><h1>Error</h1><p>Make Sure To Enter A Valid ID and Not Using "," on Your Password</p></span><button class="btn return"><img src="okcl.png" width=190px id="cli"><img src="ok.png" width=190px></button></section>' /*+ '<script src="main.js"></script>'*/;
    };
};

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

const secBtns = document.getElementsByClassName('return').length;
for (let i = 0; i < secBtns; i++) {
    let thisBtn = document.getElementsByClassName('return')[i];
    thisBtn.onclick = function () {
        returnMe();
    };
};

function returnMe() {
    location.href = `${location.href.split('').slice(0,location.href.indexOf('?') - 12).join('')}index.html`;
};

function getData() {
    var results = new Array();
    var N = new Array();
    var n = 0;
    for (const item in localStorage) {
        if (item.indexOf('ahmad') > -1) {
            n++;
            N[N.length] = item.slice(5,item.length);
        };
    };
    for (let i = 0; i < n; i++) {
        if (localStorage.hasOwnProperty(`ahmad${N[i]}`)) {
            results[results.length] = localStorage[`ahmad${N[i]}`].split(',');
        };
    };
    return results;
};
var selectedItem;
setTimeout(() => {
    setActions();
}, 2400);

function restart() {
    document.body.innerHTML = '<section class="history"><h1 class="loading">Loading</h1><div class="tools"><h1>History</h1><span class="btns"><button class="btn" id="del"><img src="delbtn.png" height=40px id="cli"><img src="delbtn.png" height=40px></button><button class="btn" id="clr"><img src="clrbtncl.png" height=40px id="cli"><img src="clrbtn.png" height=40px></button></span></div><div class="listcon"><ul id="list"><li class="heading"><ul><li>Date & Time</li><li>User ID</li><li>Password</li></ul></li></ul></div></section>'+ '<script src="main.js"></script>';
    for (const i in localStorage) {
        if (i.indexOf('ahmad') == -1) {
            document.getElementsByClassName('loading')[0].innerHTML = 'No Data Found';
            document.getElementsByClassName('loading')[0].style.margin = '20% 23%';
            document.getElementsByClassName('loading')[0].style.color = 'white';
            document.getElementsByClassName('loading')[0].style.fontsize = '48px';
        }else{
            document.getElementsByClassName('loading')[0].style.display = 'none';
        };
    };
    
    var datas = getData().reverse();
    for (let i = 0; i < datas.length; i++) {
        document.getElementById('list').innerHTML += `<li class="itm"><ul><li>${datas[i][0]}</li><li>${datas[i][1]}</li><li>${datas[i][2]}</li></ul></li>`;
    };
    setActions();
};

function setActions() {
    for (let li = 0; li < document.getElementsByClassName('itm').length; li++) {
        thisItm = document.getElementsByClassName('itm')[li];
        thisItm.onclick = function () {
            for (let i = 0; i < document.getElementsByClassName('itm').length; i++) {
                if (document.getElementsByClassName('itm')[i].classList.contains('selecteds')) {
                    document.getElementsByClassName('itm')[i].classList.remove('selecteds');
                };
            };
            document.getElementsByClassName('itm')[li].classList.add('selecteds');
        };
    };
    document.getElementById('del').onclick = function () {
        for (let i = 0; i < document.getElementsByClassName('itm').length; i++) {
            if (document.getElementsByClassName('itm')[i].classList.contains('selecteds') === true) {
                selectedItem = document.getElementsByClassName('itm')[i].getElementsByTagName('li')[0].innerHTML;
                var N = ahmads();
                for (let vala = 0; vala < document.getElementsByClassName('itm').length; vala++) {
                    if (localStorage.hasOwnProperty(`ahmad${N[vala]}`)) {
                        let local = localStorage[`ahmad${N[vala]}`];
                        if (local.split(',')[0] == selectedItem) {
                            localStorage.removeItem(`ahmad${N[vala]}`);
                        };
                    };
                };
            };
        };
        restart();
    };
    document.getElementById('clr').onclick = function () {
        if(confirm('Are You Sure That You Want To Delete Everything?')){
            for (const items in localStorage) {
                if (items.indexOf('ahmad') > -1) {
                    localStorage.removeItem(items);
                };
            };
            restart();
        };
    };
};

function ahmads() {
    var N = new Array();
    for (const i in localStorage) {
        if (i.indexOf('ahmad') > -1) {
            N[N.length] = i.slice(5,i.length);
        };
    };
    N.sort();
    return N;
};