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
                    priority: 'height',
                    done:false
                },
                {
                    id:2,
                    title: "Drink coffee",
                    description: "Create app use react, html, js Create app use react, html, js Create app use react, html, js",
                    priority: 'low',
                    done:false
                },
                {
                    id:3,
                    title: "Learn Js",
                    description: "Create app use react, html, js Create app use react, html, js Create app use react, html, js",
                    priority: 'normal',
                    done:false
                },
            ]
        },
        createItem: {
            title: "",
            description: '',
            priority: "high"
        },
        itemMenu:{
            value: ''
        }
    }

 }

export {
    initialState
}


