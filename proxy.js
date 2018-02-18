const PROXY_CONFIG = [
    {
        context: [
            "/members",
            "/events",
            "/participants",
        ],
        target: "http://localhost:3000",
        secure: false
    }
]

module.exports = PROXY_CONFIG;
