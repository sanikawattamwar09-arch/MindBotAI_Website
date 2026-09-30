const fetch = require('node-fetch');

async function demoAuth() {
  console.log('🚀 MindBot AI Authentication Demo\n');

  try {
    // 1. User Registration
    console.log('📝 Step 1: User Registration');
    console.log('Sending registration request...');

    const registerResponse = await fetch('http://localhost:3001/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'akshta31',
        email: 'akshta31@example.com',
        password: 'SecurePass123',
        firstName: 'John',
        lastName: 'Doe'
      })
    });

    const registerData = await registerResponse.json();

    if (registerResponse.ok) {
      console.log('✅ Registration successful!');
      console.log('Response:', JSON.stringify(registerData, null, 2));
      console.log('User data stored in database with hashed password\n');
    } else {
      console.log('❌ Registration failed:', registerData.message);
      return;
    }

    // 2. User Login
    console.log('🔐 Step 2: User Login');
    console.log('Sending login request...');

    const loginResponse = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'akshta31',
        password: 'SecurePass123'
      })
    });

    const loginData = await loginResponse.json();

    if (loginResponse.ok) {
      console.log('✅ Login successful!');
      console.log('Response:', JSON.stringify(loginData, null, 2));
      console.log('JWT token generated for authenticated user\n');

      const token = loginData.token;

      // 3. Access Protected Route
      console.log('🛡️  Step 3: Access Protected Dashboard Route');
      console.log('Sending authenticated request to dashboard...');

      const dashboardResponse = await fetch('http://localhost:3001/api/dashboard/stats', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });

      const dashboardData = await dashboardResponse.json();

      if (dashboardResponse.ok) {
        console.log('✅ Dashboard access successful!');
        console.log('User dashboard data:', JSON.stringify(dashboardData, null, 2));
      } else {
        console.log('❌ Dashboard access failed:', dashboardData.message);
      }

    } else {
      console.log('❌ Login failed:', loginData.message);
    }

  } catch (error) {
    console.error('❌ Demo failed:', error.message);
  }
}

// Run the demo
demoAuth();
