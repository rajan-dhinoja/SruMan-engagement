
const { Client } = require('pg');
const fs = require('fs');

async function setupDatabase() {
  const connectionString = process.env.POSTGRES_URL_NON_POOLING || process.env.POSTGRES_URL;
  if (!connectionString) {
    console.error("Missing POSTGRES_URL in environment");
    process.exit(1);
  }

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log("Connected to PostgreSQL");

    // Create table
    await client.query(`
      CREATE TABLE IF NOT EXISTS wishes (
        id text PRIMARY KEY,
        name text NOT NULL,
        message text NOT NULL,
        date text,
        theme text,
        created_at timestamp with time zone default timezone('utc'::text, now()) not null
      );
    `);
    console.log("Created table 'wishes'");

    // Load data from data/wishes.json
    let wishes = [];
    try {
      const data = fs.readFileSync('data/wishes.json', 'utf8');
      wishes = JSON.parse(data);
    } catch (err) {
      console.log("Could not read data/wishes.json or it's empty:", err.message);
    }

    if (wishes.length > 0) {
      console.log(`Migrating ${wishes.length} wishes...`);
      for (const wish of wishes) {
        // Insert into table, ignoring on conflict
        await client.query(
          `INSERT INTO wishes (id, name, message, date, theme)
           VALUES ($1, $2, $3, $4, $5)
           ON CONFLICT (id) DO NOTHING`,
          [wish.id, wish.name, wish.message, wish.date, wish.theme]
        );
      }
      console.log("Migration complete.");
    }

  } catch (error) {
    console.error("Error setting up database:", error);
  } finally {
    await client.end();
  }
}

setupDatabase();
