import * as ACTIONTYPE from "../../constants/action-type";
import * as STATUSTYPE from "../../constants/status-type";
import * as AccountManager from "../../actions-api/account-manager"

const tempData = {
    data: {
    status: "success",
    data: {
        email : "chloe",
        password: "chloe",
        name : "Chloe",
        birthday : "januray 3, 2010",
        avatar: "",
        contactNo: "09100000001",

        savings: 125.00,
        coins: 24,
        transaction: [
            {
                date: "january 4, 2020",
                type: "cash-in",
                donor: "Ninong",
                name: "Robert",
                amount: 50,
                remark: "first honor"
            },
            {
                date: "january 4, 2020",
                type: "cash-in",
                donor: "Ninong",
                name: "Robert",
                amount: 50,
                remark: "Birthday"
            },
            {
                date: "january 4, 2020",
                type: "cash-in",
                donor: "Ninong",
                name: "Robert",
                amount: 25,
                remark: "Plato"
            }
        ],
        benefactor: [
            {
                name: "Kai",
                relationship: "sister",
                contactNo: "09101111111",
                email: "kai@gmail.com"
            },
            {
                name: "Robert",
                relationship: "Ninong",
                contactNo: "09101111111",
                email: "robert@gmail.com"
            }
        ],
        plans: [
            {
                name: "save for disney land",
                amount: 100,
                targetAmount: 100000,
                duedate: "january 4, 2021"
            },
            {
                name: "save for mickey mouse",
                amount: 200,
                targetAmount: 100000,
                duedate: "january 4, 2021"
            }
        ],
        notifications: [
            {
                description: "Sister Kai gave you 50php rewards for Birthday",
                title: "Suprise Ni Ate",
                from: "Sister Kai",
                avatar: ""
            },
            {
                description: "Ninong Robert gave you 50php reward for being the first honor in your class ",
                title: "Gift Ni Ninong",
                from: "Ninong Robert",
                avatar: ""
            }
        ]
    }
}
}

export const GetUserAccount = (action, dispatch)=>{
    action.initializeState = true
    action.page_loading = true

    new Promise((resolve, reject)=>{
        try{
            // const result = AccountManager.getAccountDetails(action.authorization);
            // resolve(result);

            // temporary will not use rest api for the mean time
            resolve(tempData)
        }catch(err){
            reject(err);
        }

    }).then(response=>{
        let value = null;
        if(response.data.status === STATUSTYPE.RESPOND_SUCCESS){
            value = response.data.data
        }
        
        action = {
            type : ACTIONTYPE.USER_INITIALIZE_ACCOUNT_DETAILS_RESOLVED,
            initializeState: false,
            page_loading : false,
            data: value
        }

        dispatch(action);
    })
    .catch(error=>{
        action = {
            type : ACTIONTYPE.USER_INITIALIZE_ACCOUNT_DETAILS_RESOLVED,
            initializeState: false,
            page_loading: false
        }
        dispatch(action);
    })
}