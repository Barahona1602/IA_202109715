// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state) {
    if (state == "DIRTY") {
        return 'CLEAN';
    } else if (location == 'A') {
        return 'RIGHT';
    } else if (location == 'B') {
        return 'LEFT';
    }
}

function reflex_agent_D(location, state) {
    if (state == "CLEAN") {
        return 'DIRTY';
    } else if (location == 'A') {
        return 'RIGHT';
    } else if (location == 'B') {
        return 'LEFT';
    }
}

function test(states) {
    var ensuciar = false;
    
    function iterate() {
        var location = states[0];
        var state = location == 'A' ? states[1] : states[2];
        
        if (ensuciar) {
            var action = reflex_agent_D(location, state);
            console.log("Location: " + location + " | Action: " + action);
            document.getElementById("log").innerHTML += "<br>Location: " + location + " | Action: " + action;
            
            if (action == "DIRTY") {
                if (location == 'A') {
                    states[1] = "DIRTY";
                } else if (location == 'B') {
                    states[2] = "DIRTY";
                }
            } else if (action == "RIGHT") {
                states[0] = 'B';
            } else if (action == "LEFT") {
                states[0] = 'A';
                console.log("Nos iremos a Limpiar");
                ensuciar = false;
            }
        } else {
            var action = reflex_agent(location, state);
            console.log("Location: " + location + " | Action: " + action);
            document.getElementById("log").innerHTML += "<br>Location: " + location + " | Action: " + action;
            
            if (action == "CLEAN") {
                if (location == 'A') {
                    states[1] = "CLEAN";
                } else if (location == 'B') {
                    states[2] = "CLEAN";
                }
            } else if (action == "RIGHT") {
                states[0] = 'B';
            } else if (action == "LEFT") {
                states[0] = 'A';
                console.log("Nos iremos a ensuciar");
                ensuciar = true;
            }
        }
        
        setTimeout(iterate, 3000);
    }
    
    iterate();
}

var states = ['A', 'DIRTY', 'DIRTY'];
test(states);
