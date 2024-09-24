// Function to copy text to clipboard
function copyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Kod nusxalandi!');
}

// Function to download content as a text file
function downloadTextFile() {
    const text = `
    VS Code terminalida Vite yordamida Vue loyihasini yaratish uchun quyidagi amallarni bajaring:
    
    1. Node.js va npm o'rnatilganligini tekshirish:
    node -v
    npm -v

    2. Vite bilan yangi Vue loyihasini yaratish:
    npm create vite@latest my-vue-project

    3. Loyiha katalogiga kirish:
    cd my-vue-project

    4. Loyihani ishga tushirish:
    npm install
    npm run dev

    5. VS Code'ni ochish:
    code .
    `;

    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Vue_qollanma.txt';
    link.click();
}
