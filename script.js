paragraph = document.getElementById('paragraph');
image = document.getElementById('image');
/*img1 = document.getElementById("img1");
img2 = document.getElementById("img2");
img3 = document.getElementById("img3");
img4 = document.getElementById("img4");*/

function hide(col1,col2,col3,col4,col5,col6,col7,col8,col9){
    document.getElementById(col1).style.display = "none";
    document.getElementById(col2).style.display = "none";
    document.getElementById(col3).style.display = "none";
    document.getElementById(col4).style.display = "none";
    document.getElementById(col5).style.display = "none";
    document.getElementById(col6).style.display = "none";
    document.getElementById(col7).style.display = "none";
    document.getElementById(col8).style.display = "none";
    document.getElementById(col9).style.display = "none";
}

function show(col1,col2,col3){
    document.getElementById(col1).style.display = "block";
    document.getElementById(col2).style.display = "block";
    document.getElmenetById(col3).style.display = "block";
}
function showAll(col1,col2,col3,col4,col5,col6,col7,col8,col9,col10,col11,col12){
    document.getElementById(col1).style.display = "block";
    document.getElementById(col2).style.display = "block";
    document.getElementById(col3).style.display = "block";
    document.getElementById(col4).style.display = "block";
    document.getElementById(col5).style.display = "block";
    document.getElementById(col6).style.display = "block";
    document.getElementById(col7).style.display = "block";
    document.getElementById(col8).style.display = "block";
    document.getElementById(col9).style.display = "block";
    document.getElementById(col10).style.display = "block";
    document.getElementById(col11).style.display = "block";
    document.getElementById(col12).style.display = "block";
}



function red(){
    paragraph.style.color = "red";
}

function blue(){
    paragraph.style.color = "blue";
}

function green(){
    paragraph.style.color = "green";
}



function size100(){
    image.style.width = "100%";
    image.style.height= "100%";
}

function size15(){
    image.style.width = "15%";
    image.style.height= "15%";
}

function size40(){
    image.style.width = "40%";
    image.style.height= "40%";
}

function bgreen(){
    document.body.style.backgroundColor = "green";
}

function bred(){
    document.body.style.backgroundColor = "red";
}

function bblue(){
    document.body.style.backgroundColor = "blue";
}

function col1(){
    red();
    size100();
    bgreen();
}

function col2(){
    blue();
    size15();
    bred();
}

function col3(){
    green();
    size40();
    bblue();
}
