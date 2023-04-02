// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        // ...
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
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
                { rel:'stylesheet', href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css", integrity:"sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp",crossorigin:"anonymous" },
                { rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" }
            ],
            script:[
                { src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js", integrity:"sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N", crossorigin:"anonymous"},
                { src:"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js", integrity:"sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3", crossorigin:"anonymous"},
                { src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.min.js", integrity:"sha384-heAjqF+bCxXpCWLa6Zhcp4fu20XoNIA98ecBC1YkdXhszjoejr5y9Q77hIrv8R9i", crossorigin:"anonymous"}
            ]
        }
    }
})
