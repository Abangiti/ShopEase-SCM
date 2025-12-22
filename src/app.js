// ShopEase - Main Application JavaScript (Bypass Auth Version)

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
         
            const usernameInput = document.getElementById('username').value;
            const displayName = usernameInput || 'Guest';
            
           
            const mockUser = {
                id: Date.now(), 
                username: displayName.toLowerCase(),
                name: displayName
            };
            
            sessionStorage.setItem('currentUser', JSON.stringify(mockUser));
            
         
            window.location.href = 'products.html';
        });
    }
});


function logout() {
    sessionStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}