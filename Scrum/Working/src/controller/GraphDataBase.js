import neo4j from 'neo4j-driver';
import 'dotenv/config';

// Las credenciales vienen solo del entorno (docker-compose.yml o .env); nunca hardcodeadas.
const URI = process.env.NEO4J_URI;
const user = process.env.NEO4J_USER;
const password = process.env.NEO4J_PASSWORD;

if (!URI || !user || !password) {
    throw new Error('Faltan NEO4J_URI, NEO4J_USER o NEO4J_PASSWORD en el entorno');
}

function createSession() {
    const driver = neo4j.driver(URI, neo4j.auth.basic(user, password));
    return driver.session();
}

export { createSession };
