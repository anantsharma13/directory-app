const dirStructure = {
    type: "folder",
    name: "parent",
    active: false,
    data: [
        {
            type: "folder",
            name: "root",
            active: false,
            data: [
                {
                    type: "folder",
                    name: "src",
                    active: false,
                    data: [
                        {
                            type: "file",
                            meta: 'js',
                            name: "index.js",
                            active: false,
                        }
                    ]
                },
                {
                    type: "folder",
                    name: "public",
                    active: false,
                    data: [
                        {
                            type: "file",
                            meta: 'ts',
                            name: "index.ts",
                            active: false,
                        }
                    ]
                },
                {
                    type: "file",
                    meta: 'html',
                    name: "index.html",
                    active: false,
                },
                {
                    type: "folder",
                    name: "data",
                    active: false,
                    data: [
                        {
                            type: "folder",
                            name: "images",
                            active: false,
                            data: [
                                {
                                    type: "file",
                                    meta: 'img',
                                    name: "image.png",
                                    active: false,
                                },
                                {
                                    type: "file",
                                    meta: 'img',
                                    name: "image2.webp",
                                    active: false,
                                }
                            ]
                        },
                        {
                            type: "file",
                            meta: 'svg',
                            name: "logo.svg",
                            active: false,
                        }
                    ]
                },
            ]
        }
    ]
};

module.exports = {
    dirStructure
}