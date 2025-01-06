const employees=[
    {
        "id":1,
        "email":"emp1@gmail.com",
        "password":123,
        "tasks":[
            {
                "title":"Prepare monthly report",
                "description":"Compile and prepare the monthly financial report.",
                "date":"2025-01-05",
                "category":"Finance",
                "active":true,
                "newTask":true,
                "completed":false,
                "failed":false
            },
            {
                "title":"Team meeting",
                "description":"Attend the team meeting and present updates.",
                "date":"2025-01-06",
                "category":"Meetings",
                "active":true,
                "newTask":false,
                "completed":false,
                "failed":false
            }
        ]
    },
    {
        "id":2,
        "email":"emp2@gmail.com",
        "password":123,
        "tasks":[
            {
                "title":"Client follow-up",
                "description":"Follow up with clients regarding project status.",
                "date":"2025-01-05",
                "category":"Client Relations",
                "active":true,
                "newTask":true,
                "completed":false,
                "failed":false
            },
            {
                "title":"Update project documentation",
                "description":"Update the project documentation with recent changes.",
                "date":"2025-01-06",
                "category":"Documentation",
                "active":true,
                "newTask":false,
                "completed":true,
                "failed":false
            }
        ]
    },
    {
        "id":3,
        "email":"emp3@gmail.com",
        "password":123,
        "tasks":[
            {
                "title":"Code review",
                "description":"Review code submitted by team members.",
                "date":"2025-01-05",
                "category":"Development",
                "active":true,
                "newTask":false,
                "completed":false,
                "failed":false
            },
            {
                "title":"Fix bugs",
                "description":"Identify and fix bugs in the system.",
                "date":"2025-01-06",
                "category":"Development",
                "active":true,
                "newTask":true,
                "completed":false,
                "failed":false
            }
        ]
    },
    {
        "id":4,
        "email":"emp4@gmail.com",
        "password":123,
        "tasks":[
            {
                "title":"Design new feature",
                "description":"Design the layout for the new feature.",
                "date":"2025-01-05",
                "category":"Design",
                "active":true,
                "newTask":false,
                "completed":true,
                "failed":false
            },
            {
                "title":"Create mockups",
                "description":"Create mockups for the new feature.",
                "date":"2025-01-06",
                "category":"Design",
                "active":true,
                "newTask":true,
                "completed":false,
                "failed":false
            }
        ]
    },
    {
        "id":5,
        "email":"emp5@gmail.com",
        "password":123,
        "tasks":[
            {
                "title":"Conduct interviews",
                "description":"Interview candidates for the open position.",
                "date":"2025-01-05",
                "category":"HR",
                "active":true,
                "newTask":true,
                "completed":false,
                "failed":false
            },
            {
                "title":"Review resumes",
                "description":"Review resumes of applicants.",
                "date":"2025-01-06",
                "category":"HR",
                "active":true,
                "newTask":false,
                "completed":true,
                "failed":false
            }
        ]
    },
    {
        "id":6,
        "email":"emp6@gmail.com",
        "password":123,
        "tasks":[
            {
                "title":"Inventory check",
                "description":"Check inventory levels and reorder supplies.",
                "date":"2025-01-05",
                "category":"Operations",
                "active":true,
                "newTask":true,
                "completed":false,
                "failed":false
            },
            {
                "title":"Organize files",
                "description":"Organize files in the storage room.",
                "date":"2025-01-06",
                "category":"Operations",
                "active":true,
                "newTask":false,
                "completed":true,
                "failed":false
            }
        ]
    }
];


const admins=[
    {
        "id":7,
        "email":"sauravsultane@gmail.com",
        "password":123
    },
    {
        "id":8,
        "email":"admin1@gmail.com",
        "password":123
    }
]

export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admins",JSON.stringify(admins))
}

export const getLocalStorage =()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admins = JSON.parse(localStorage.getItem('admins'))

    return {employees,admins}
}