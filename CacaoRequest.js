"use strict";

/**
 * Gère les requêtes HTML
 * 
 * @author : Fr93562
 * @version : 0?1
 * @status : en développement
 */
class CacaoRequest {

    constructor() { }

    /**
     * Envoie une requête au serveur distant
     * Utilise l'objet xmlHttprequest et fonctionne sur un mode asynchrone
     * 
     * @param {*} url string - url à appeler
     * @param {*} method string - type de méthode à employer (POST..)
     * @param {*} header string / array - permet d'ajouter des informations au header - optionnel
     * @param {*} content string - contenu de la requête - optionnel
     */
    async send(url, method, header, content) {

        let myRequest = new Promise(function (resoluve, reject) {

            let request = new XMLHttpRequest();
            let response = {};

            request.open(method, url);

            if (header) {

                if(typeof header === "string") {

                    header = [header];
                }

                header.forEach(element => {
                    request.setRequestHeader(element);

                });
            }
            request.send(content);

            request.onload = function () {

                response.status = request.status;
                response.content = JSON.parse(request.response);

                resoluve(response);
            };
        });

        return myRequest.then(function (response) {

            return response;

        }, function(reject) {

            throw reject;
        });
    }
}

export default new CacaoRequest();
