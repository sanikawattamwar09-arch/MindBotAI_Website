const { getAllRows } = require('./database/init');

async function checkRegistration() {
  try {
    const users = await getAllRows('SELECT id, username, email, first_name, last_name, created_at FROM users');
    console.log('Current users in database:');
    users.forEach(user => {
      console.log(`ID: ${user.id}, Username: ${user.username}, Email: ${user.email}, Name: ${user.first_name} ${user.last_name}, Created: ${user.created_at}`);
    });

    const testUser = users.find(user => user.username === 'testuser');
    if (testUser) {
      console.log('\n✅ Registration test PASSED: User "testuser" was successfully stored in the database');
    } else {
      console.log('\n❌ Registration test FAILED: User "testuser" was not found in the database');
    }
  } catch (error) {
    console.error('Error checking registration:', error);
  }
}

checkRegistration();
