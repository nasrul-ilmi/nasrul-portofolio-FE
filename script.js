const logContent = document.getElementById('log-content');

function addLogEntry(message) {
    const timestamp = new Date().toLocaleTimeString();
    const entry = document.createElement('p');
    entry.className = 'log-entry';
    entry.innerText = `[${timestamp}] > ${message}`;
    logContent.appendChild(entry);
    
    // Auto-scroll to the bottom of the log
    document.querySelector('.system-log').scrollTop = logContent.scrollHeight;
}

document.querySelector('.terminal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = e.target;
    const btn = document.querySelector('.transmit-btn');
    
    // Log the start of the transmission
    addLogEntry("INITIATING HANDSHAKE...");
    addLogEntry("UPLOADING PACKETS TO SECTOR 7...");
    
    btn.innerText = "UPLOADING...";

    setTimeout(() => {
        addLogEntry("TRANSMISSION SUCCESSFUL.");
        addLogEntry("TERMINAL BUFFER CLEARED.");
        
        form.reset();
        btn.innerText = "SUCCESS";
        
        setTimeout(() => {
            btn.innerText = "EXECUTE_TRANSMISSION";
        }, 3000);
    }, 2000);
});