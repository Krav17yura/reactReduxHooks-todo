const initialState = {
    modal:{
        createTask: {
            show: false,
        },

        changeTask: {
            show: false,
        }
    },

    item:{
        itemsList:{
            cart:[
                {
                    id:1,
                    title: "Create React App",
                    description: "Create app use react, html, js Create app use react, html, js Create app use react, html, js",
                    priority: 'Hight',
                    done:false
                },
                {
                    id:2,
                    title: "Drink coffee",
                    description: "Create app use react, html, js Create app use react, html, js Create app use react, html, js",
                    priority: 'Low',
                    done:false
                },
                {
                    id:3,
                    title: "Learn Js",
                    description: "Create app use react, html, js Create app use react, html, js Create app use react, html, js",
                    priority: 'Normal',
                    done:false
                },
            ]
        },
        createItem: {
            title: "",
            description: '',
            priority: "high"
        },
        editItem: {
            title: "",
            description: '',
            priority: "high",
            id: 1

        },
        itemMenu:{
            value: ''
        },
        sort: {
            search: '',
            filterPriority: 'all',
            filterStatus: 'all'
        }
    },



 }

export {
    initialState
}


