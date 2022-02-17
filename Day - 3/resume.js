const resume =[
    {
        Personalinformation:{
            Name:{
                FirstName:"Infant",
                LastName:"Y",
                Age:25,
                Fullname:this.FirstName+" "+this.LastName
            },
            ContactDetails:{
                DoorNo:123,
                StreetName:"xyz",
                District:"Thiruvannamalai",
                State:"TamilNadu",
                Address:this.DoorNo+" "+this.StreetName+" "+this.District+" "+this.State,
                MobileNo:"xxxxxxx80",
                email:"abc@gmail.com", 
            },
            Education:{
                Degree:"BE-MECH",
                College:"ABC College",
                CGPA:7.34,

            },
            Languagesknown:{
                Lang1:"Tamil",
                Lang2:"English",
            },
            Experience:{
                Company1:{
                    Name:"TVS",
                    Exp:"oneyear",},
                Company2:{
                    Name:"ICICI Prudential",
                    Exp:"tenmonth",}

            },
            JobApplication:{
                rolr:"Full-Stack Developer",
            },
         

            


        }

    }
]
console.log(resume);