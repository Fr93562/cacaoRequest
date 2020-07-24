[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e2767efbf27a4c4b97dbc1e38feac16b)](https://www.codacy.com/manual/Fr93562/cacaoRequest?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Fr93562/cacaoRequest&amp;utm_campaign=Badge_Grade)
![coverage](https://img.shields.io/badge/coverage-100-green)
![dependance](https://img.shields.io/badge/dependance-0-green)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)



# CacaoRequest

![image](./assets/CacaoRequest.jpg)


* Equipe projet: Fr93562
* Date: 22/07/2020
* Version: 0.1
* Etat du projet: En cours


-----------------

## Contexte et utilité

Cette librairie appartient au framework CacaoJs. Il s'agit d'une librairie front-end basé sur du javascript natif.


![logoCacaoJs](./assets/CacaoLogo.png)


CacaoRequest est la librairie qui gère les requêtes Ajax. Comme les autres librairies du framework, elle se veut simple et va droit à l'essentiel.

## Envoyer vos requêtes

Pour utiliser la librairie, il suffit d'importer le fichier CacaoDom.js comme ci-dessous:

```javascript
import CacaoRequest from '../libary/CacaoRequest';
```

Dans les cas suivants, on suppose qu'on souhaite accéder à l'api de gitHub en méthode get.


### Envoi

Il faut faire appel à la méthode send().

```javascript
CacaoRequest.send("https://api.github.com/", "GET");
```

Il est possible d'ajouter des éléments au header et le body de la requête:
```javascript
CacaoRequest.send("https://api.github.com/", "GET", "Content-Type: application/json", "vos valeurs");
```

ou encore:

```javascript
CacaoRequest.send("https://api.github.com/", "GET", ["Content-Type: application/json", "token: 1234567890"], "vos valeurs");
```



Cette méthode requiert 4 paramètres dont deux optionnelles:

```
paramètre 1 : string - l'url du serveur distant
paramètre 2 : string - méthode http (POST, GET..)
paramètre 3 : string / array - élément à ajouter au header
paramètre 4 : string - body de la requête 
```

*Note: La méthode accepte indifféremment un string ou array pour le header. La méthode se base sur un array pour fonctionner. Si un string passe en paramètre, il est transformé en array lors de l'opération.*

### Réponse

Le fonctionnement de cette classe se base sur une promise. C'est à sa résolution qu'on récupère les données.


Donc si on envoie cette requête:
```javascript
CacaoRequest.send("https://api.github.com/", "GET");
```

On peut aisément récupérer la réponse via un wait dans une méthode asynchrone:

```javascript
    async getData() {

        this.data = await CacaoRequest.send("https://api.github.com/", "GET");
        this.view();
    }
```

*On peut également chainer les méthodes à la suite: dans le cas présent, la méthode this.view() possèdera forcément les valeurs stockées dans data*.

Forme de la réponse:

```json
{
    content : "Votre contenu",
    status : 200
}
```


## Tests

/

## Features à venir

* Messages d'erreurs à inclure

* Ajout de plusieurs éléments dans le header HTTP (actuellement gestion d'un seul header)


