
// creating the json data to be rendered
const data = 
    {
        name: "root",
        isFolder: true,
        items: [
            {
                name: "public",
                isFolder: true,
                items: [
                    {
                        name: "index.js",
                        isFolder: false
                    },
                    {
                        name: "index.html",
                        isFolder: false
                    }
                ]
            },
            {
                name: "public2",
                isFolder: false,
            },
            {
                name: "root2",
                isFolder: true,
                items: [
                    
                            {
                                name: "app.js",
                                isFolder: false
                            },
                            {
                                name: "app.html",
                                isFolder: false
                            },
                            {
                        name: "package.json",
                        isFolder: false,
    
                    },
                    
                ]
            }
        ]
    }
    


export default data