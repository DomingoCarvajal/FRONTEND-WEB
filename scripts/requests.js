// USER

async function createUser(){
    dataSignUp = {
        email: "nombre3@email.com",
        password: "123456",
        firstName: "nombre",
        lastName: "apellido"
    }

    const userCreated = await fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataSignUp)
        }).then(respuesta => {
            console.log(respuesta.statusText)
            
            return respuesta.json()
        });  
}

async function getToken(){
    dataLogIn = {
        email: "nombre3@email.com",
        password: "123456"
    }

    const tokenCreated = await fetch("http://localhost:3000/api/sessions", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(dataLogIn)
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });
    console.log(tokenCreated);

    return tokenCreated
}

async function getUser(){
    const id = document.getElementById("user-id").value;
    const responseAll = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "GET"
    }).then(respuesta => {
        return respuesta.json()
    }).then(respuestaJSON => {
        console.log(respuestaJSON);
    })
}

async function getPirates(){
    const pirateId = document.getElementById("pirate-id").value;
    const token = await getToken();
    const gameId = document.getElementById("game-pirate-id").value;
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/pirates/`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    }).then(respuesta => {
        return respuesta.json()
    }).then(respuestaJSON => {
        console.log(respuestaJSON);
    })
}

// GAME

async function getGames(){
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    }).then(respuesta => {
        return respuesta.text()
    });

    console.log(responseAll);
}

async function newGame(){
    const token = await getToken();
    const responseAll = await fetch("http://localhost:3000/api/games/new", {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`}
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function getGame(){
    const id = document.getElementById("game-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${id}`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    }).then(respuesta => {
        return respuesta.text()
    });

    console.log(responseAll);
}

async function getGameState(){
    const id = document.getElementById("game-gamestate-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${id}/state`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    }).then(respuesta => {
        return respuesta.text()
    });

    console.log(responseAll);
}

async function getGameLogs(){
    const id = document.getElementById("game-gamelogs-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${id}/logs`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    }).then(respuesta => {
        return respuesta.text()
    });

    console.log(responseAll);
}

async function joinGame(){
    const gameId = document.getElementById("game-join-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/join`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`}
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function startGame(){
    const gameId = document.getElementById("game-start-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/start`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`}
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function rollDice(){
    const gameId = document.getElementById("game-rolldice-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/roll_dice`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`}
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function endTurn(){
    const gameId = document.getElementById("game-endturn-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/end_turn`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`}
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function currentTurn(){
    const id = document.getElementById("game-currenturn-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${id}/current_turn`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    }).then(respuesta => {
        return respuesta.text()
    });

    console.log(responseAll);
}

// Fruits and consumables

async function getFruits(){
    const gameId = document.getElementById("game-getfruit-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/fruits`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    }).then(respuesta => {
        return respuesta.text()
    });

    console.log(responseAll);
}

async function buyFruit(){
    const gameId = document.getElementById("game-buyfruit-id").value;
    const name = document.getElementById("fruit-buyfruit-name").value;
    data = {
        name,
    }
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/fruits/buy`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function sellFruit(){
    const gameId = document.getElementById("game-sellfruit-id").value;
    const fruitId = document.getElementById("fruit-sellfruit-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/fruits/${fruitId}/sell`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`},
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function consumeFruit(){
    const gameId = document.getElementById("game-consumefruit-id").value;
    const fruitId = document.getElementById("fruit-consumefruit-id").value;
    const pirateId = document.getElementById("pirate-consumefruit-id").value;
    data = {
        pirateId,
    }
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/fruits/${fruitId}/consume`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function getConsumables(){
    const gameId = document.getElementById("game-getconsumable-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/consumables`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${token}`}
    }).then(respuesta => {
        return respuesta.text()
    });

    console.log(responseAll);
}

async function buyConsumable(){
    const gameId = document.getElementById("game-buyconsumable-id").value;
    const name = document.getElementById("consumable-buyconsumable-name").value;
    data = {
        name,
    }
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/consumables/buy`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`, "Content-Type": "application/json"},
            body: JSON.stringify(data)
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function sellConsumable(){
    const gameId = document.getElementById("game-sellconsumable-id").value;
    const consumableId = document.getElementById("consumable-sellconsumable-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/consumables/${consumableId}/sell`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`},
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}

async function consumeConsumable(){
    const gameId = document.getElementById("game-consumeconsumable-id").value;
    const consumableId = document.getElementById("consumable-consumeconsumable-id").value;
    const token = await getToken();
    const responseAll = await fetch(`http://localhost:3000/api/games/${gameId}/consumables/${consumableId}/consume`, {
            method: "POST",
            headers: {"Authorization": `Bearer ${token}`},
        }).then(respuesta => {
            console.log(respuesta.statusText)
            return respuesta.text()
        });

    console.log(responseAll);

    return responseAll
}
