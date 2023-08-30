module.exports = {
    apps: [
        {
            name: 'Admin_Bootstrap5',
            port: '3310',
            exec_mode: 'cluster', // ini modenya membuat beberapa aplikasi (load balancer)
            // exec_mode: 'node_cluster',
            instances: 'max',
            script: './.output/server/index.mjs', // ini biarin aja (hasil build nuxtnya diexec)
        }
    ]
}    
   