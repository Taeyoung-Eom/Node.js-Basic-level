var members = ['Taeyoung', 'xodud2972', 'Taeng'];
console.log(members[1]);  //xodud2972
var i = 0;
while(i < members.length){
    console.log('array loop', members[i]);
    i = i + 1;
}


var roles = {
    'programmer':'Teayoung',
    'designer':'xodud2972',
    'manager':'Taeng'
};
console.log(roles.designer);
console.log(roles['designer']);

for(var gimozzi in roles){
    console.log('object =>', gimozzi, 'value =>' , roles[gimozzi]);
}