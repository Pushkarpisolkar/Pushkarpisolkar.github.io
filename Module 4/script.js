var names=new Array();
names[0]="Pushkar";
names[1]="Bhavik";
names[2]="Shruti";
names[3]="Anup";
names[4]="Rishi";
names[5]="Rishant";
names[6]="Yogesh";
names[7]="Arya";
names[8]="Komal";
names[9]="Radhika";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}