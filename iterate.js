let DevaResume=[{
    
    "profile":[{

        "summary":"iam devendhran, To succeed in an environment of growth and excellence and earn a job whichprovides me job satisfaction and self-development achieve personal as well as organisational goals",


        "for2":"🤓....for of.....🤓",

    },],
    "skils": 
        [{
        "skils1":"Design thinking ",
        "skils2":"Editing",
        "skils3":"Front end Developer ",
        "skils4":"Creative thinking" ,
    

        "for":"🤓....for loop.....🤓",
    },],

    "Education":[{
        "SSLC":"2014-2016,[72%]",
        "HSCC":"2016-2018,[61%]",
        "UG":"2018-2021,[68%]",
        "GUVI":"2023- (MERN STACK DEVELOPER)Ongoing",


        "for3":"🤓....for each.....🤓",
        
        },],

        "Personal Info":
        [{
            "Date of birth": "07-03-2001",
            "Father name": "Sivakumar",
            "Languages":" Tamil and English,Telugu",
            "Marital status": "No",
            "Gender" : "Male",
            "Nationality": "Indian ",



            "for1":"🤓....for in....🤓",


        },],
        "Hobbies":
        [{
            "hobbie1":"chess",
            "hobbie2":"football",
            "hobbie3":"cricket"
        },],

        "Experience":[{
            "exp1":"2 years of system knowledge and trading data analyst (self trade analyst )",
            "exp2":"Samsung service centre (customer care officer)",

        },],
    },];
//console.log(DevaResume);


//..........for loop........//
for (var i=0; i<DevaResume.length; i++){
    var bb=DevaResume[i];
    console.log(bb.skils);
}

//...............for in..........//
for(var me in DevaResume){
    console.log(DevaResume[me]["Personal Info"]);
}
//..............for of.........//
for(var a of DevaResume){

    console.log(a.profile);
}
//..........for each.........//
DevaResume.forEach (function(cc) {
    console.log(cc.Education);
});
