const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "e@e.com",
        "password": "123",
        "taskCounts": {
            "active": 4,
            "newTask": 2,
            "completed": 2,
            "failed": 2
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Update website",
                "taskDescription": "Revamp the homepage design",
                "taskDate": "2024-10-12",
                "category": "Design"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Client meeting",
                "taskDescription": "Discuss project requirements",
                "taskDate": "2024-10-10",
                "category": "Meeting"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Fix bugs",
                "taskDescription": "Resolve bugs reported in issue tracker",
                "taskDate": "2024-10-14",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Optimize homepage",
                "taskDescription": "Improve performance and load speed of homepage",
                "taskDate": "2024-10-15",
                "category": "Performance"
            },
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskTitle": "Conduct A/B testing",
                "taskDescription": "Test different homepage layouts",
                "taskDate": "2024-10-16",
                "category": "Testing"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Prepare performance report",
                "taskDescription": "Analyze website performance metrics",
                "taskDate": "2024-10-17",
                "category": "Reporting"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Implement SEO strategy",
                "taskDescription": "SEO strategy implementation failed due to lack of resources.",
                "taskDate": "2024-10-18",
                "category": "SEO"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 3,
            "newTask": 1,
            "completed": 2,
            "failed": 2
        },
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Database optimization",
                "taskDescription": "Optimize queries for better performance",
                "taskDate": "2024-10-11",
                "category": "Database"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Design new feature",
                "taskDescription": "Create mockups for the new feature",
                "taskDate": "2024-10-09",
                "category": "Design"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Data migration",
                "taskDescription": "Migrate old data to the new system",
                "taskDate": "2024-10-16",
                "category": "Database"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Backup database",
                "taskDescription": "Perform a backup of the existing database, failed due to permission issues.",
                "taskDate": "2024-10-18",
                "category": "Database"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Review data integrity",
                "taskDescription": "Check for data consistency and integrity",
                "taskDate": "2024-10-19",
                "category": "Quality Assurance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Perform system upgrade",
                "taskDescription": "System upgrade failed due to compatibility issues.",
                "taskDate": "2024-10-20",
                "category": "Upgrade"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ravi",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 4,
            "newTask": 2,
            "completed": 1,
            "failed": 2
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare presentation",
                "taskDescription": "Prepare slides for upcoming client presentation",
                "taskDate": "2024-10-13",
                "category": "Presentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Code review",
                "taskDescription": "Review the codebase for optimization",
                "taskDate": "2024-10-12",
                "category": "Development"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Testing",
                "taskDescription": "Test the latest build for bugs",
                "taskDate": "2024-10-08",
                "category": "QA"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskTitle": "Research new tools",
                "taskDescription": "Investigate tools for better code management, research failed due to lack of funding.",
                "taskDate": "2024-10-17",
                "category": "Research"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Implement new features",
                "taskDescription": "Add new features based on client feedback",
                "taskDate": "2024-10-18",
                "category": "Development"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": true,
                "taskTitle": "Prepare deployment scripts",
                "taskDescription": "Scripts preparation failed due to errors in configuration.",
                "taskDate": "2024-10-19",
                "category": "DevOps"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 3,
            "newTask": 2,
            "completed": 1,
            "failed": 2
        },
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Write documentation",
                "taskDescription": "Update the project documentation",
                "taskDate": "2024-10-13",
                "category": "Documentation"
            },
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Set up CI/CD",
                "taskDescription": "CI/CD setup failed due to network issues.",
                "taskDate": "2024-10-14",
                "category": "DevOps"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Conduct training session",
                "taskDescription": "Train team on new software tools.",
                "taskDate": "2024-10-15",
                "category": "Training"
            },
            {
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update project plan",
                "taskDescription": "Revise the project timeline based on feedback.",
                "taskDate": "2024-10-16",
                "category": "Planning"
            },
            {
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true,
                "taskTitle": "Implement feedback system",
                "taskDescription": "Feedback system implementation failed due to technical challenges.",
                "taskDate": "2024-10-17",
                "category": "Feedback"
            },
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare year-end report",
                "taskDescription": "Compile data for the year-end performance review.",
                "taskDate": "2024-10-18",
                "category": "Reporting"
            }
        ]
    }
];




const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}
