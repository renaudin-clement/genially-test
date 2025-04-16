import { ENDPOINT } from "../configs.js";

const Utils = {
    parseRequestURL: () => {
        // Enlève la partie après "?" pour un routage propre
        let url = location.hash.slice(1).split("?")[0].toLowerCase() || '/';
        let r = url.split("/");
        let request = {
            resource: null,
            id: null,
            verb: null
        };
        request.resource = r[1];
        request.id = r[2];
        request.verb = r[3];
        return request;
    },

    AutoFetch: async (url) => {
        const options = {
            methode: "GET",
            header: {
                "Content-Type": "application/json"
            }
        };

        try {
            const rep = await fetch(ENDPOINT + url, options);
            return await rep.json();
        } catch (error) {
            console.error(error);
            return {};
        }
    }
};

export default Utils;
