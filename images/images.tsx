/**
 * -------------assets
 */
import logo from "./logo.png"


import dummy from "./desmond.jpg"
import dummy2 from "./Customer-Churn-min.jpg"
import ublock from "./class (1).webp"
import crblk1 from "./class (2).webp"
import crblk2 from "./class (3).webp"
import uk1 from "./class (4).webp"
import a200 from "./class (5).webp"
import a750 from "./class (6).webp"
import a600 from "./class (7).webp"
import amphitheater from "./class (8).webp"
import a150a from "./class (9).webp"
import a150b from "./class (10).webp"
import a150d1 from "./class (11).webp"
import a150c from "./class (12).webp"
import a150d from "./class (13).webp"
import a150e from "./class (14).webp"
import restau from "./class (15).webp"
import gblk from "./class (16).webp"
import map from "./map.webp"

 
/**------------ offices--------------------- */
import central from "./offices (1).webp"
import arts from "./offices (2).webp"
import sms from "./offices (3).webp"
import educ from "./offices (4).webp"
import science from "./offices (5).webp"
import political from "./offices (7).webp"
import unesco from "./offices (8).webp"
import trans2 from "./offices (9).webp"
import asti from "./offices (10).webp"
import IT from "./offices (11).webp"
import infect from "./offices (12).webp"
import lib from "./offices (13).webp"
import healthunit from "./healthunit.jpg"

/**-------- sports --------------- */

import volley from "./sports (1).webp"
import office from "./sports (2).webp"
import tennis from "./sports (3).webp"
import foot from "./sports (4).webp"
import lawn from "./sports (5).webp"
import judo from "./sports (6).webp"
import basket from "./sports (7).webp"
import hand from "./sports (8).webp"

/**------- Restaurants ---------*/
import staffCanteen from "./restaurants (4).jpg"
import demaker from "./restaurants (3).jpg"
import icon from "./restaurants (2).jpg"
import ublockrest from "./restaurants (1).jpg"
import loading from "./loading.jpg"


/**----- Documentation ------- */

import docsCrblk from "./docs (1).webp"
import docsCrblk2 from "./docs (2).webp"
import docsamphi from "./docs (3).webp"
import docsubmarket from "./docs (4).webp"
import docsublock from "./docs (5).webp"

import hostel from "./others (1).webp"
import firstgate from "./others (2).jpg"
import secGate from "./others (3).jpg"
import backgate from "./others (5).jpg"

const Assets={
    "logo":logo,
    "loading":loading
}
const Pictures={
    "dummy":dummy,
    "dummy2":dummy2,
    map:map
};

export const PeoplePics=[ublock,crblk1,crblk2,uk1,gblk,a200,a750,a600,amphitheater,a150a,a150b,a150c,a150d,a150d1,a150e,restau ]
export const placePics =[ublock,crblk1,crblk2,uk1,gblk,]

export const Docs=[
    { type:`docs`, name:"classroom block I", maxCoords:{x:795,y:631}, about:`Documentaion at Classroom block 1, sells pens, books, erasers, photocopy, print...`,  describtion:"classroom blockI", mainpic:docsCrblk}, 
    { type:`docs`, name:"classroom block II", maxCoords:{x:795,y:653}, about:`Documentaion at Classroom block 2, sells pens, books, erasers, photocopy, print...`,  describtion:"classroom block II", mainpic:docsCrblk2}, 
    { type:`docs`, name:"amphi", maxCoords:{x:750,y:348},   about:`Documentaion at  Amphi, close to Amphi 150 A and B, sells books, erasers, photocopy, print, pens`, describtion:"amphi", mainpic:docsamphi}, 
    { type:`docs`, name:"ub market", maxCoords:{x:627,y:322}, about:`Documentaions at Ub Market, the faculty of Arts, sells books, erasers, photocopy, print, pens`,   describtion:"ub market", mainpic:docsubmarket}, 
    { type:`docs`, name:"ublock and gblock", maxCoords:{x:530,y:157},  about:`Documentaion at  Ublock, also close to Ublock. Directly adjacent Ublock D, sells books, erasers, photocopy, print, pens`, describtion:"ublock and gblock", mainpic:docsublock}, 
    ]
export const sports=[
    {  type:`sports`, name:"sports office", maxCoords:{x:1081,y:437}, about:`Sports office shares a building with restau. people register for sports here`,  describtion:"sports office", mainpic:office},  
    {  type:`sports`, name:"table tennis", maxCoords:{x:1081,y:437}, about:`Table tennis court shares a building with restau, at the South East direction of the school. people who wish to play the sport train here on this court` , describtion:"table tennis", mainpic:tennis},  
    {  type:`sports`, name:"football", maxCoords:{x:1055,y:214}, about:`Football pitch is located close to the central administration and girl\`s Hostel, at the East direction of the school. people who wish to play the sport train on the football pitch` ,  describtion:"football", mainpic:foot},
    {  type:`sports`, name:"basket", maxCoords:{x:807,y:45}, about:`The Basketball court is located close to health unit, volley ball court and second gate, at the North direction of the school. people who wish to play the sport train here on this court` , describtion:"basket", mainpic:basket},  
    {  type:`sports`, name:"lawn tennis", maxCoords:{x:1051,y:493}, about:`The Lawn tennis court is located close to Restau, at the South East direction of the school. people who wish to play the sport train here on this court` ,  describtion:"lawn tennis", mainpic:lawn},     
    {  type:`sports`, name:"judo", maxCoords:{x:1081,y:437}, about:`Judo court is located behind restau and is close to the table tennis and lawn tennis courts, at the South East direction of the school. people who wish to play the sport train here on this court` ,   describtion:"judo", mainpic:judo},
    {  type:`sports`, name:"volley ball", maxCoords:{x:734,y:52}, about:`The Volley court is located the basket ball court, at the North direction of the school. people who wish to play the sport train here on this court` ,   describtion:"volley ball", mainpic:volley}, 
     {  type:`sports`, name:"hand ball", maxCoords:{x:922,y:118}, about:`The handball court is located very close to the second gate, people who wish to play the sport train here on this court` ,    describtion:"hand ball", mainpic:hand},  
       
]
export const offices=[
    {  type:`offices`, name:"central Admin", maxCoords:{x:899,y:280}, about:`The central administration is a building containing many offices and is located at the center of the school. it is a few meters from the second gate. it is also close to the handball court and football pitch`,  describtion:"central administration", mainpic:central},
    {  type:`offices`, name:"Faculty arts", maxCoords:{x:722,y:251},   about:`The Faculty of Arts is a story building containing alot of offices and is located almost toward center of the school. it is beside amphi 250 and the UB market`, describtion:"Faculty arts", mainpic:arts},
    { type:`offices`,  name:"social and managment Sciences", maxCoords:{x:807,y:580},  about:`S.M.S as it is usually called is located toward the south of the school. it is found a few meters from the faulty of Political sciences, amphi 600, and classroom block`,  describtion:"social and managment Sciences sms s.m.s", mainpic:sms},
    { type:`offices`,  name:"Faculty Education", maxCoords:{x:634,y:393},  about:`Education as it is usually called is located toward the Western part of the school. it is found a few meters from the UB market and UNESCO. It shares the same buiding with the faculty of Engineering`,   describtion:"Faculty Education", mainpic:educ},
    { type:`offices`,  name:"Faculty Science", maxCoords:{x:622,y:102}, about:`it is located east ward just behind the library and a few meters from UBlock`,   describtion:"Faculty Science", mainpic:science},
    { type:`offices`,  name:"Faculty of Engineering", maxCoords:{x:634,y:393}, about:`F.E.T as it is usually called is located toward the Western part of the school. it is found a few meters from the UB market and UNESCO. It shares the same buiding with the faculty of Education`,    describtion:"FET faculty of engineering and technology", mainpic:educ},
    { type:`offices`,  name:"Faculty Political sciences", maxCoords:{x:780,y:471}, about:`It is found just opposite the Amphi Teather and shares the same building with Amphi 750`,   describtion:"Faculty Political sciences", mainpic:political},
    { type:`offices`,  name:"Faculty of vertinary Medicine", maxCoords:{x:478,y:288}, about:`F.A.V.M has an office and a practicals area. the office is found around amphi 150 C, while the practical area is found behind U block, opposite the UNESCO building`,  describtion:"favm f.a.v.m faculty of vertinary medicine", mainpic:`https://ubuea.cm/wp-content/uploads/2016/06/FAVM-PIC-1-768x576.jpg`},
    {  type:`offices`, name:"Unesco", maxCoords:{x:603,y:311},  about:`UNESCO is found backing the U.B market and is a 2 story building containing many offices`,  describtion:"Unesco unicef", mainpic:unesco},
    { type:`offices`,  name:"Transcript office", maxCoords:{x:753,y:360},  about:`people who process transcripts work here, you usual collect them here after you must have applied. it is found in the same building as Pastor, just surounded by Amphi 150 A, c and Amphi 750`,  describtion:"transcript office", mainpic:trans2},
    { type:`offices`,  name:"A.S.T.I", maxCoords:{x:684,y:427}, about:`ASTI is one of the largest building on campus and has the same shape as the library. it is located next to the faculty of Engineering, the faculty of Education and the cultural village` , describtion:"A.S.T.I asti", mainpic:asti},
    { type:`offices`,  name:"I.T center", maxCoords:{x:967,y:394}, about:`The I.T center is the go to when it comes to technological aid for students. it is located a few meters from Restau, the girl\`s hostel and the Amphi Teatre`,  describtion:"I.T center it center", mainpic:IT},
    {  type:`offices`, name:"biotechnology unit", maxCoords:{x:501,y:69}, about:`it is a lab found close to U block and G block towards the road that leads to Malingo. it is used for research purposes` , describtion:"biotechnology unit", mainpic:infect},
    { type:`offices`,  name:"Laboratory Infectious Diseases", maxCoords:{x:501,y:69}, about:`it is a lab found close to U block and G block towards the road that leads to Malingo. it is used for research purposes`,  describtion:"Laboratory Infectious Diseases medicals", mainpic:infect},
    { type:`offices`,  name:"Library", maxCoords:{x:647,y:191}, about:`The Library is a resourcefull site in the university and contains various books on a wide range of topics. it has strict rules too. it is located adjacent to the faculty of arts and Ublock` ,  describtion:"Library", mainpic:lib},
    { type:`offices`,  name:"health unit", maxCoords:{x:852,y:104}, about:`The health unit is where students go to when injured or sick aswell as for medicals. it is located just close to the second gate and the handball court` ,  describtion:"health unit sick illness sick bay", mainpic:healthunit},
]
export const Classes=[
   { type:`classes`,  name:"ublock", maxCoords:{x:540,y:180},about:`it contains classes UBLOCK A - G. it is shaped as a U hence the name U block. it is found close G block and the library and F.A.V.M`,   describtion:"ublock a ublock b ublock c ublock d ublock e ublock f ublock g     u-block ublk ", mainpic:ublock},
   { type:`classes`,  name:"gblock", maxCoords:{x:455,y:140}, about:`it contains classes Gblock 1 - 123. it is shaped as a G hence the name G block. it is found close U block and the library`,  describtion:"gblock g-block gblk", mainpic:gblk},
   {  type:`classes`, name:"amphi 150 a", maxCoords:{x:712,y:360}, about:`found with the other amphis in a cluster. it can contain up to 150 students and has a perculiar down descending architecture`,  describtion:"amphi 150 a", mainpic:a150a},
   { type:`classes`,  name:"amphi 150 b", maxCoords:{x:712,y:360}, about:`found with the other amphis in a cluster. it can contain up to 150 students and has a perculiar down descending architecture`,  describtion:"amphi 150 b", mainpic:a150b},
   {type:`classes`, name:"amphi 150 c", maxCoords:{x:765,y:391},  about:`found with the other amphis in a cluster. it can contain up to 150 students and has a perculiar down descending architecture`,  describtion:"amphi 150 c", mainpic:a150c},
   {type:`classes`, name:"amphi 150 d", maxCoords:{x:778,y:441},  about:`found with the other amphis in a cluster. it can contain up to 150 students and has a perculiar down descending architecture`,  describtion:"amphi 150 d", mainpic:a150d},
   {type:`classes`, name:"amphi 150 e", maxCoords:{x:778,y:441},  about:`found with the other amphis in a cluster. it can contain up to 150 students and has a perculiar down descending architecture`,  describtion:"amphi 150 e", mainpic:a150e},
   {type:`classes`, name:"amphi 250", maxCoords:{x:753,y:300},  about:`found with the other amphis 150 and is also a nieghbor to the faculty of Arts. it can contain up to 250 students and has a perculiar down descending architecture`,   describtion:"amphi 250", mainpic:a200},
   {type:`classes`, name:"amphi 600", maxCoords:{x:735,y:572},  about:`it is close to Classroom block and a few meters from amphi 750. it can contain up to 600 students and has a perculiar down descending architecture`,  describtion:"amphi 600", mainpic:a600},
   {type:`classes`, name:"amphi 750", maxCoords:{x:773,y:489}, about:`it is close to Classroom block and a few meters from amphi 600. It also shares a building with the faculty of Poilytical Science. it can contain up to 750 students and has a perculiar down descending architecture` ,   describtion:"amphi 750", mainpic:a750},
   {type:`classes`, name:"classroom block I", maxCoords:{x:750,y:648}, about:`it is found to the extreem south of the school campus it contains classrooms whose names range from classroom block 1 50A to G and classroom block 1 150 A to G` ,  describtion:" classroom block I cblock I classroom block 1 50 classroom block 1 150", mainpic:crblk1},
   {type:`classes`, name:"classroom block II",maxCoords:{x:782,y:711},   describtion:"classroom block II cblock 2 cblock II classroom block 2",about:`it is found to the extreem south of the school campus it contains classrooms whose names range from classroom block 2 50A to G and classroom block 2 150 A to G`, mainpic:crblk2},
   {type:`classes`, name:"amphi theater", maxCoords:{x:855,y:399}, about:`Could also be refered to as open amphi. it is used to accomodate lectures and carry out occasional activities such as Matriculation. it is found oposite faculty of Political science and close Amphi 150 D` , describtion:"open amphi teather amphi theater amphi theater grandstand", mainpic:amphitheater},
   {type:`classes`, name:"restau",maxCoords:{x:1081,y:437}, about:`Restau is a large but flat one floor building used for multiple purposes. It has classes where lectures are being carried out, it contains the sports office, judo, and table tennis court. It also has a student restaurant section where students can eat at 100FCFA`,   describtion:"restau student restaurant ", mainpic:restau},
   
]
export const Restaurants=[
    { type:`restaurants`,name:"ub market",  maxCoords:{x:627,y:322}, about:`this is the most economic section of the school campus. it has cafeteries, restaurants, icecream stands and much more. you can basically get almost anything you want to eat` , describtion:"ub market icon", mainpic:icon},
    { type:`restaurants`,name:"ublock and Gblock",maxCoords:{x:530,y:157},  about:`well, there are not very many exciting places here you can eat from. but there are a few icecream stands and snack bars `,  describtion:"ublock", mainpic:ublockrest},
    { type:`restaurants`,name:"Amphi", maxCoords:{x:443,y:149}, about:``,  describtion:"Amphi demaker", mainpic:demaker},
    { type:`restaurants`,name:"restau",maxCoords:{x:1081,y:437}, about:`the student restaurant found in the Restau building is a place where you can find very affordable quality food, usually sold at 100FCFA. most people enjoy eating from here`,  describtion:"restau student restaurant ", mainpic:restau},
    { type:`restaurants`,name:"Staff Canteen", maxCoords:{x:778,y:441}, about:`its a small elegant restaurant specifically made for staffs as from the name. it is found surounded by open commons, amphi 150 C and D` , describtion:"Staff Canteen teachers ", mainpic:staffCanteen},
]
export const Others=[
    { type:`others`, name:"Girls Hostel", maxCoords:{x:1082 ,y:333}, about:`it is found beside Restau and a few meters from the football field and I.T center toward the eastern part of the school. here female students are being accomodated as they study in the university`,   describtion:"girls hostels girl  ", mainpic:hostel}
    ,{ type:`others`, name:"first gate", maxCoords:{x:1005,y:-2}, about:`it is the main entry into the school campus and is found at the UB junction. there is long path that extends to the second gate`,   describtion:"first gate entry main entrance", mainpic:firstgate},
    { type:`others`, name:"second gate", maxCoords:{x:895,y:89}, about:`it is the actual entry into the school campus. it usual has a security and moral checkup crew who do their best in ensuring that students are decently dressed` , describtion:"second gate sick illness sick bay", mainpic:secGate},
    { type:`others`, name:"malingo gate",maxCoords:{x:484,y:20}, about:`it is another entry into the school through the malingo entrance`,   describtion:"untarred malingo gate back gate", mainpic:backgate},
]
export const All=[ ...Classes,...offices, ...sports ,...Others, ...Restaurants,...Docs, ]

export const selectedPlaces=[ ...Classes,...offices, ...sports ,...Others]
 

export default Pictures;
export {Assets}