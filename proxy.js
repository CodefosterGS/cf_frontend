const PROXY_CONFIG = [
    {
        context: [
            "/api"
        ],
        target: "http://codefoster.club",
        secure: false
    }
]

module.exports = PROXY_CONFIG;
