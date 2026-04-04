
import NewCardStyle from "./NewCardStyle"
import TeamCard from "./TeamCard"

const fic = [
    {
        name: "Dr. Mahendra Prasad Agasty",
        about: "FIC ED Cell | President IIC",
        image: "/team/agasty.JPG"
    }
]

const teamfaculty=[
    {
        name:"Dr. Sanghamitra Das",
        about:"",
        image:""
    },
    {
        name:"Dr. Joy Choudhary",
        about:"",
        image:""
    },
    {
        name:"Dr. Arnab Pal",
        about:"",
        image:""
    },
    {
        name:"Mr. Satish Kumar Das",
        about:"",
        image:""
    },
    {
        name:"Dr. Annapurna Mishra",
        about:"",
        image:""
    },
    {
        name:"Dr. Sudhansu Mohan Biswal",
        about:"",
        image:""
    },
    {
        name:"Mrs. Sweta Mohanty",
        about:"",
        image:""
    },
    {
        name:"Dr. Pratap Ranjan Mohanty",
        about:"",
        image:""
    },
    
    {
        name:"Dr. Priyanka Kar",
        about:"",
        image:""
    },
    
]

const teamstudent = [
    {
        name: "Shaswat Tripathi",
        about: "Secretary",
        image: "/team/saswatcrop.JPG"
    },
    {
        name: "Anubhav Poddar",
        about: "NR",
        image: "/team/anubhav.jpg"
    },
    {
        name: "Aryan Singh",
        about: "Joint Secretary",
    },
    {
        name: "Shubham Kumar",
        about: "4th Year",
        image: "/team/shubham.jpg"
    },
    {
        name: "Anmol Singh",
        about: "4th Year",
        image: "/team/anmol.JPG"
    },
    {
        name: "Gomesh Agarwall",
        about: "4th Year",
        image: "/team/gomesh.jpg"
    },
    {
        name: "Piush Praharaj",
        about: "4th Year",
        image: "/sparkupsummit/images/members/piush2.jpg"
    },
    {
        name: "Puja Mahato",
        about: "4th Year",
        image: "/team/puja2.jpg"
    },
    {
        name: "Priyanshi Dubey",
        about: "4th Year",
        image: "/team/priyanshi2.JPG"
    },
    {
        name: "Satyam Sinha",
        about: "3rd Year",
        // image: "/team/satyam.jpg"
    },
    {
        name: "Bhimesh Kumar Mehra",
        about: "3rd Year",
    },
    {
        name: "Jaydeep Dash",
        about: "3rd Year",
    },
    {
        name: "Samikshya Samadarshini",
        about: "3rd Year",
    },
    {
        name: "Jasdeep Singh",
        about: "2nd Year",
    },
    {
        name: "Suryanshu Panigrahy",
        about: "2nd Year",
    }
]


export default function Members() {
    window.scrollTo(0,0)
    return (
        <div className="overflow-hidden bg-gradient-to-b from-sky-950 to-black">
            <div className="flex flex-col items-center gap-2 m-10">
                <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-5xl">Our Team</h1>
                <div className="bg-white h-[4px] w-44 md:w-60 rounded-md"></div>
            </div>
            <div className="pl-10 mt-5">
                <h1 className="text-white text-2xl font-bold">FACULTY IN CHARGE</h1>
            </div>
            <div className="flex flex-wrap gap-5 w-dvw h-auto justify-center sm:justify-start md:pl-10 p-5 items-center">
                {
                    fic.map((item) => (<TeamCard image={item.image} name={item.name} about={item.about} />))
                }
            </div>
            <div className="pl-10 mt-5">
                <h1 className="text-white text-2xl font-bold">IIC FACULTIES</h1>
            </div>
            <div className="flex flex-wrap gap-5 w-dvw h-auto justify-center sm:justify-start md:pl-10 p-5 items-center">
                {
                    teamfaculty.map((item) => (<TeamCard image={item.image} name={item.name} about={item.about} />))
                }
            </div>
            <div className="pl-10 mt-5">
                <h1 className="text-white text-2xl font-bold">CORE MEMBERS</h1>
            </div>
            <div className="flex flex-wrap gap-5 w-dvw h-auto justify-center sm:justify-start md:pl-10 p-5 items-center">
                {
                    teamstudent.map((item) => (<TeamCard image={item.image} name={item.name} about={item.about} />))
                }
            </div>
        </div>
    )
}
