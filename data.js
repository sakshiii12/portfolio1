const jobs ={
    "Google":[
         "Software Engineer",
         "July 2018-Present",
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, minima nobis,Ducimus numquam tempore possimus consequatur minima animi, culpa exercitationem iste laboriosam, alias accusamus ratione!"
],
"Microsoft":[
    "Software Engineer Intern",
    "July 2017-January 2018",
    "Lorem ipsum dolor sjeknit alnejndunemet consectetur, adipisicing elit. Quidem, minima nobis,Ducimus numquam tempore possimus consequatur minima animi, culpa exercitationem iste laboriosam, alias accusamus ratione!"
]
,
"Apple":[
    "UI Engineer",
    "July 2016-July 2017",
    "Lorem ipsuhskookw]m dolor sjeknit alneunemet cokwnsectetur, adipisicing elit. Quidem, minima nobis,Ducimus numquam tempore possimus consequatur minima animi, culpa exercitationem iste laboriosam, alias accusamus ratione!"
]
,
"Facebook":[
    "Software Developer",
    "July 2015-July 2016",
    "Lorem ipsum dolhjjjjjjjjor sjeknit alnejndunemet consectetur, adipisicing elit. Quidem, minima nobis,Ducimus numquam tempore possimus consequatur minima animi, culpa exercitationem iste laboriosam, alias accusamus ratione!"
]
}

function updateWork(id){
    document.getElementById("role").innerHTML=jobs[id][0];
    document.getElementById("timeline").innerHTML=jobs[id][1];
    document.getElementById("desc").innerHTML=jobs[id][2];
}