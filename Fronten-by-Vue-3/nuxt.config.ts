// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        // ...
        '@pinia/nuxt',
      ],
    css:[
        
    ],
    app:{
        head:{
            title:'E-Shop',
            meta:[
                { name: 'description', content: "A mini Project" },
                { name:"viewport", content:"width=device-width, initial-scale=1" }
            ],
            link:[
                { rel:'stylesheet', href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css", integrity:"sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp",crossorigin:"anonymous" }
            ]
        },
        body:{
            script:[
                { src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js", integrity:"sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N", crossorigin:"anonymous"}
            ]
        }
    }
})
