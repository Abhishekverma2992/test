angular.module('clickMe',[])
.controller('myController',function( ){
var showList= this;
showList.toggle=false;

showList.list=[
	{Name:'Abhishek verma', Age:23, img:"Tom-Cruise1.jpg"},
	{Name:'Harry potter', Age:22, img:"hugh_jackman_xmen.jpg"},
	{Name:'Akshay kumar', Age:45, img:"Hollywood8.jpg"},
	{Name:'Khushagra gupta', Age:65, img:"128.jpg"}
];

showList.addPerson=function(){
	alert("adding new user");
	showList.list.push({Name:showList.name, Age:showList.age});
	showList.name=" ";
	showList.age=0;
};
	showList.remove= function(list){
		var index= showList.list.indexof(list);
		alert("Deleting index"+ index);
		showList.list.slice(index,1);
	

};
	showList.edit=function(list){
		showList.current=item;
	};
showList.current={};
});

