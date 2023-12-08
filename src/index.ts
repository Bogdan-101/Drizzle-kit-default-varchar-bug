import { eq } from 'drizzle-orm/expressions';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { cities, users } from './schema';
import { Client } from 'pg';
import 'dotenv/config';

async function main() {
	const dbConnection = new Client({ connectionString: process.env['DB_URL'] })
	await dbConnection.connect();
	const db = drizzle(dbConnection);

	await migrate(db, { migrationsFolder: 'drizzle' });

	const insertedCity = await db.insert(cities).values({ id: 1, name: 'name' }).returning();
	console.log('insertedCity:', insertedCity);

	const insertedUser = await db.insert(users).values({ id: 1, name: 'name', email: 'email', cityId: 1 });
	console.log('insertedUser:', insertedUser);

	const usersToCityResponse = await db.select().from(users).leftJoin(cities, eq(users.cityId, cities.id));
	console.log('usersToCityResponse:', usersToCityResponse);
}

main();
