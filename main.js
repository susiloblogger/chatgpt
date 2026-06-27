const { app, BrowserWindow, Menu, shell } = require('electron');
const path = require('path');

function isInternalUrl(urlString) {
  try {
    const url = new URL(urlString);
    const host = url.hostname;
    return (
      host === 'chatgpt.com' ||
      host.endsWith('.chatgpt.com') ||
      host === 'openai.com' ||
      host.endsWith('.openai.com') ||
      host === 'auth0.com' ||
      host.endsWith('.auth0.com') ||
      host === 'accounts.google.com' ||
      host === 'appleid.apple.com' ||
      host === 'login.microsoftonline.com'
    );
  } catch (e) {
    return false;
  }
}

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'ChatGPT',
    icon: path.join(__dirname, 'build/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Hide the default menu bar
  Menu.setApplicationMenu(null);

  // Load the ChatGPT URL
  mainWindow.loadURL('https://chatgpt.com');

  // Intercept window.open or target="_blank" links and open in default browser
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (!isInternalUrl(url)) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  // Intercept links navigating in the main window and open in default browser
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!isInternalUrl(url)) {
      event.preventDefault();
      shell.openExternal(url);
    }
  });

  // Handle right-click context menu
  mainWindow.webContents.on('context-menu', (e, props) => {
    const { x, y } = props;
    const template = [];

    if (props.isEditable) {
      template.push({ label: 'Undo', role: 'undo' });
      template.push({ label: 'Redo', role: 'redo' });
      template.push({ type: 'separator' });
      template.push({ label: 'Cut', role: 'cut' });
      template.push({ label: 'Copy', role: 'copy' });
      template.push({ label: 'Paste', role: 'paste' });
      template.push({ type: 'separator' });
      template.push({ label: 'Select All', role: 'selectAll' });
    } else {
      if (props.selectionText) {
        template.push({ label: 'Copy', role: 'copy' });
        template.push({ type: 'separator' });
      }
      template.push({ label: 'Select All', role: 'selectAll' });
    }

    // Add option to inspect element
    template.push({ type: 'separator' });
    template.push({
      label: 'Inspect Element',
      click: () => {
        mainWindow.webContents.inspectElement(x, y);
      }
    });

    const menu = Menu.buildFromTemplate(template);
    menu.popup(mainWindow);
  });

  // Open the DevTools (optional, for debugging)
  // mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
