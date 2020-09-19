import * as IMAGES from './../pictures/PiggyClass'
//alert
//recommendation
//notification

const inboxTemplate = [
    {
        status : "Notification", //Notification or Rewards
        date_send: "2012-04-23T00:00:00.000Z",
        title : "Sale Alert! - Julie’s Jewels",
        message : "John, don’t miss out on this 80% off all regular priced accessories promo. \n\nThe deal ends tonight at 8pm, so come in before someone nabs that bracelet you’ve been eyeing.",
        open : false
    },
    {
        status : "Rewards", //Notification or Rewards
        date_send: "2012-05-23T00:00:00.000Z",
        title : "Rewards",
        message : "You have earned 2 Reward point/s. Your points balance as of today is 2. Visit home site to know the list of items you can redeem",
        open : false
    },
    {
        status : "Notification", //Notification or Rewards
        date_send: "2012-06-23T00:00:00.000Z",
        title : "Looking for a deal? - Cheeky Prints",
        message : "Perfect, get 20% off all printing services, and free shipping on any web order. The sale ends tomorrow at 2pm: bit.ly.get-the-goods",
        open : false
    }
]


const walletTemplate = [
    {
        name: "Budget Friendly",
        allocations: [
            {
                description: "Savings",
                percentage: 10,
                frequency: "Monthly", // Monthly, Semi-monthly
                details: {
                    content: "Description of the Budget Friendly "
                }
            }
        ]
    },
    {
        name: "Saving funds",
        allocations: [
            {
                description: "Savings",
                percentage: 20,
            },
            {
                description: "Utilities",
                percentage: 20,
            },
            {
                description: "Travel",
                percentage: 5,
            }
        ]
    },
    {
        name: "Long term",
        allocations: [
            {
                description: "Savings",
                percentage: 40,
            },
            {
                description: "Utilities",
                percentage: 20,
            },
            {
                description: "Travel",
                percentage: 5,
            }
        ]
    }     
]

export const initialState = {
    countvisit : 0,
    app_name: "PiggyBank",
    useractive : false,
    authorization: "",

    //error statement
    action_status: {
        loading: false,
        purse: {
            status: "",
            transaction: "",
            message: ""
        }
    },

    login_status : "",
    login_message: "",
    initializeState: true,
    page_loading  : false,
    response_status: "",
    
    wallet_template: walletTemplate,
    current_inbox : null,
    current_accountdetails : null,
    action_type: null,
    gif: [],
    current_avatar : "",
    learnings: [
        {
            id: "VVWDXihmGlQ",
            title: "CashVille Kidz Episode 17: Roles of a Bank",
            description: "In this episode, students learn a little more about our financial institution...",
            link: "https://www.youtube.com/watch?v=VVWDXihmGlQ"
        },
        {
            id: "SedDd73UD0o",
            title: "CashVille Kidz Ep 18: Types of Bank Accounts",
            description: "In this episode, theStudents will discover the many ways and methods they...",
            link: "https://www.youtube.com/watch?v=SedDd73UD0o"
        }
        
    ],
    stores:[
        "data:image/jpeg;base64,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",
        "https://pbs.twimg.com/profile_images/683840702296363008/6zGFzezE_400x400.jpg"
    ]
}

