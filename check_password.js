const { getRow } = require('./database/init');

async function checkPasswordHash() {
  try {
    const user = await getRow('SELECT password_hash FROM users WHERE username = ?', ['testuser']);
    if (user) {
      console.log('Password hash stored (first 50 chars):', user.password_hash.substring(0, 50) + '...');
      console.log('Hash length:', user.password_hash.length);

      // Check if it's a bcrypt hash (starts with $2a$, $2b$, or $2y$)
      if (user.password_hash.startsWith('$2')) {
        console.log('✅ Password hashing test PASSED: Password is properly hashed with bcrypt');
      } else {
        console.log('❌ Password hashing test FAILED: Password is not properly hashed');
      }
    } else {
      console.log('❌ User not found');
    }
  } catch (error) {
    console.error('Error checking password hash:', error);
  }
}

checkPasswordHash();
