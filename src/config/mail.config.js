"use strict";
exports.__esModule = true;
function getMailConfig() {
    return {
        mail: {
            // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
            // or
            transport: {
                host: process.env.MAIL_HOST,
                secure: false,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASSWORD
                }
            },
            defaults: {
                from: "\"C\u1EECA H\u00C0NG B\u00C1N \u0110\u1ED2NG H\u1ED2 MTALOCK\" <".concat(process.env.MAIL_FROM, ">")
            }
        }
    };
}
exports["default"] = (function () {
    return getMailConfig();
});
