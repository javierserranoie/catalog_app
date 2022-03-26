const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        height: 994,
        width: 960,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        icon: 'assets/img/icon.png',
        title: 'My App',
    });

    win.setTitle('My App');
    win.loadFile('index.html');
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});