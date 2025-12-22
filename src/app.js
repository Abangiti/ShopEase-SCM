// ShopEase - Main Application JavaScript

// Handle Login
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const errorMsg = document.getElementById('errorMsg');
            
            try {
                const response = await fetch('users.json');
                const data = await response.json();
                
                const user = data.users.find(u => 
                    u.username === username && u.password === password
                );
                
                if (user) {
                    // Store user session
                    sessionStorage.setItem('currentUser', JSON.stringify({
                        id: user.id,
                        username: user.username,
                        name: user.name
                    }));
                    
                    // Redirect to products page
                    window.location.href = 'products.html';
                } else {
                    errorMsg.textContent = 'Invalid username or password';
                    errorMsg.classList.remove('hidden');
                }
            } catch (error) {
                errorMsg.textContent = 'Error connecting to server';
                errorMsg.classList.remove('hidden');
            }
        });
    }
});

// Logout function
function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

