const ipc = window.require('electron').ipcRenderer;

function goToFirstWindow() {
    console.log("closed");
    ipc.send('closed', 'closed');
}